import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  X, 
  Scan, 
  Check, 
  Sparkles, 
  Image as ImageIcon,
  ArrowRight,
  RefreshCw,
  Edit3,
  BookmarkPlus,
  Compass,
  AlertTriangle,
  Info,
  Car,
  Droplet,
  Wrench,
  Settings,
  Palette,
  Layers,
  CheckCircle2,
  Zap,
  Flashlight,
  SwitchCamera
} from 'lucide-react';
import { ToyotaVehicle, UniversalPlateScanResult } from '../types/nameplate';
import { INSTANT_SAMPLE_RESULTS } from '../data/sampleNameplateResults';
import { decodePlateFromTextOrQuery } from '../data/ruleBasedNameplateDecoder';
import { RealisticNameplateVisual } from './RealisticNameplateVisual';
import { sanitizeVehicle } from '../utils/vehicleSanitizer';

interface UniversalNameplateScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVehicleSaved: (vehicle: ToyotaVehicle) => void;
}

export const UniversalNameplateScannerModal: React.FC<UniversalNameplateScannerModalProps> = ({
  isOpen,
  onClose,
  onVehicleSaved,
}) => {
  const [activeTab, setActiveTab] = useState<'camera' | 'manual-code'>('camera');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [simulatedPlateId, setSimulatedPlateId] = useState<string | null>(null);
  const [showSampleCollapsible, setShowSampleCollapsible] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanStepLabel, setScanStepLabel] = useState<string>('စကန်ကွက် အသင့်ဖြစ်နေပါသည်');
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [manualCodeInput, setManualCodeInput] = useState<string>('');
  const [resultSubTab, setResultSubTab] = useState<'summary' | 'engine' | 'trans' | 'fluids' | 'breakdown' | 'tips'>('summary');

  const fileInputCameraRef = useRef<HTMLInputElement>(null);
  const fileInputGalleryRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const [isLiveCameraActive, setIsLiveCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isAutoScanEnabled, setIsAutoScanEnabled] = useState<boolean>(true);
  const [autoScanProgress, setAutoScanProgress] = useState<number>(0);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);
  const [hasTorchSupport, setHasTorchSupport] = useState<boolean>(false);
  const [cameraFacing, setCameraFacing] = useState<'environment' | 'user'>('environment');

  // Real-world plate samples for instant zero-friction testing
  const sampleNameplates = [
    {
      id: 'sample-yunnei-490',
      title: 'Yunnei 490QB (တရုတ်ဒီဇယ်အင်ဂျင်ပြား - ပုံထဲက အစိမ်းပြား)',
      plateCode: '490QGB / 48 kW @ 3200 r/min',
      badge: 'ဒီဇယ် အင်ဂျင်ပြား (Diesel Engine)',
      brand: 'Yunnei / FAW',
      category: 'ဒီဇယ် ကုန်တင်ကားလတ် / ယန္တရား',
      desc: 'Chengdu Yunnei 48kW 3200rpm၊ 15W-40 CI-4 ဆီ၊ တိုင်မင်စက်သွားဂီယာစနစ်၊ ပုံထဲရှိ မူရင်းအစိမ်းရောင်ပြား',
      color: 'border-emerald-500/50 bg-emerald-950/40',
      sampleQuery: '490QGB 48kW 3200rpm BNK17001613 XK06-002-00105 成都云内'
    },
    {
      id: 'sample-wish-blue',
      title: 'Toyota Wish 1.8X (DBA-ZGE20G - ပုံထဲက ကားပြာ)',
      plateCode: 'DBA-ZGE20G-HPXNP / 2ZR-FAE 1797cc',
      badge: 'ဓာတ်ဆီ Valvematic 7-Seater',
      brand: 'Toyota',
      category: 'မိသားစု MPV ၇ ယောက်စီး',
      desc: '2ZR-FAE 1.8L Valvematic၊ K311 Super CVT-i (CVT FE ဆီသီးသန့်)၊ 8V9 Satin Blue ပုံထဲရှိ မူရင်းကားပြာ',
      color: 'border-blue-500/50 bg-blue-950/30',
      sampleQuery: 'DBA-ZGE20G-HPXNP 2ZR-FAE 1797cc ZGE20-0147194 8V9 FA42 A54 K311 -02A 178'
    },
    {
      id: 'sample-wish-sport',
      title: 'Toyota Wish 1.8S Sport (DBA-ZGE20W)',
      plateCode: 'DBA-ZGE20W-HPXSP / 2ZR-FAE',
      badge: 'ဓာတ်ဆီ Sport Paddle Shift',
      brand: 'Toyota',
      category: 'စပို့ မိသားစု MPV',
      desc: 'ZGE20W စပို့ဘော်ဒီ၊ Paddle Shift ပါ ၇ ချက်ထိုး K311 CVT-i၊ 8S6 Dark Blue Mica အပြာရင့်ရောင်',
      color: 'border-indigo-500/50 bg-indigo-950/30',
      sampleQuery: 'DBA-ZGE20W-HPXSP 2ZR-FAE 1797cc ZGE20-0032285 8S6 FB12 A54 K311 -02A 651'
    },
    {
      id: 'sample-revo',
      title: 'Hilux Revo 2.8D 4WD (Thai Plate)',
      plateCode: 'GUN126R-DTTHXT / MROHA3CD6J0...',
      badge: 'ဒီဇယ် Common Rail',
      brand: 'Toyota',
      category: 'Pick-up 4WD',
      desc: 'VIN ၁၀ လုံးမြောက် J အရ ၂၀၁၈ ခုနှစ်ထုတ်၊ 1GD 2.8L Common Rail 2,200 bar၊ AC60F 6-Speed Auto',
      color: 'border-amber-500/50 bg-amber-950/20',
      sampleQuery: 'GUN126R-DTTHXT 1GD-FTV 2755cc MROHA3CD6J0123456 AC60F B02A 070 LA20'
    },
    {
      id: 'sample-hino',
      title: 'Hino Profia 700 12.9L (Heavy Duty Truck)',
      plateCode: 'QKG-FR1EXEG / E13C-TL 12,913cc',
      badge: 'ကားကြီး Unit Injector EUI',
      brand: 'Hino',
      category: '၁၀ ဘီး ကုန်တင်ကားကြီး',
      desc: 'E13C-TL ကမ်ရှပ်တိုက်ရိုက် EUI စနစ်၊ 410 မြင်းကောင်ရေ၊ 7-Speed Hi-Low Splitter မန်နျူရယ်ဂီယာ',
      color: 'border-purple-500/50 bg-purple-950/20',
      sampleQuery: 'QKG-FR1EXEG E13C-TL 12913cc FR1EXE-10258 M009 058 TR01 GVW 24980kg'
    },
    {
      id: 'sample-bmw',
      title: 'BMW 320i Sedan (F30 Euro Plate)',
      plateCode: 'WBA8A12080K123456 / B48B20',
      badge: 'ဥရောပ ဓာတ်ဆီ',
      brand: 'BMW',
      category: 'ဥရောပ ဆီဒင်ကား',
      desc: 'B-Pillar တံခါးတိုင် စတစ်ကာ၊ B48 2.0L Turbo၊ ZF 8HP50 ၈ ချက်ထိုး အော်တို (ပန်ခွက်နှင့် ဆီစစ် တွဲရက်)',
      color: 'border-blue-500/50 bg-blue-950/20',
      sampleQuery: 'BMW 320i F30 WBA8A12080K123456 B48B20 1998cc ZF 8HP50 300 LCSW'
    },
    {
      id: 'sample-fielder',
      title: 'Toyota Corolla Fielder 1.5G (JDM Plate)',
      plateCode: 'DBA-NZE141G-AWXEK / 1NZ-FE',
      badge: 'ဓာတ်ဆီ VVT-i',
      brand: 'Toyota',
      category: 'ကားသေး ကွန်ပက်',
      desc: 'DBA အိတ်ဇောစံနှုန်း၊ 1NZ-FE 1.5L VVT-i သံကြိုး၊ K310 Super CVT-i (CVT FE ဆီသာ သုံးရမည်)',
      color: 'border-emerald-500/50 bg-emerald-950/20',
      sampleQuery: 'DBA-NZE141G-AWXEK 1NZ-FE 1496cc NZE141-9041234 K310 -02A 070 FA20'
    },
    {
      id: 'sample-alphard',
      title: 'Toyota Alphard 2.4 240S (ANH20W)',
      plateCode: 'DBA-ANH20W-PFXSK / 2AZ-FE',
      badge: 'ဇိမ်ခံဗန်ကြီး K112 CVT',
      brand: 'Toyota',
      category: 'ဇိမ်ခံဗန်ကားကြီး',
      desc: '2AZ-FE 2.4L VVT-i၊ K112 Super CVT-i (CVT Fluid FE သီးသန့်)၊ 070 White Pearl ပုလဲဖြူ',
      color: 'border-rose-500/50 bg-rose-950/20',
      sampleQuery: 'DBA-ANH20W-PFXSK 2AZ-FE 2362cc ANH20-8012345 K112 -01A 070 FG01'
    },
    {
      id: 'sample-crown',
      title: 'Toyota Crown Athlete 2.5 (GRS200)',
      plateCode: 'DBA-GRS200-AETXH / 4GR-FSE',
      badge: 'D-4 V6 A960E Auto',
      brand: 'Toyota',
      category: 'ဇိမ်ခံ အားကစားဆီဒင်',
      desc: '4GR-FSE 2.5L V6 Direct Injection၊ A960E 6-Speed Auto (ATF WS သီးသန့်)၊ 202 Black အနက်ပြောင်',
      color: 'border-slate-500/50 bg-slate-900/60',
      sampleQuery: 'DBA-GRS200-AETXH 4GR-FSE 2499cc GRS200-0012345 A960E B01A 202 LB20'
    },
    {
      id: 'sample-probox',
      title: 'Toyota Probox 1.5 DX (NCP51V)',
      plateCode: 'DBE-NCP51V-EXPDK / 1NZ-FE',
      badge: 'U340E 4-Speed ATF T-IV',
      brand: 'Toyota',
      category: 'လုပ်ငန်းသုံး ဗန်/တက္ကစီ',
      desc: '1NZ-FE 1.5L သံကြိုး၊ U340E ၄ ချက်ထိုးအော်တို (ATF Type T-IV ဆီသီးသန့်)၊ 058 White အဖြူ',
      color: 'border-cyan-500/50 bg-cyan-950/20',
      sampleQuery: 'DBE-NCP51V-EXPDK 1NZ-FE 1496cc NCP51-0123456 U340E -05A 058 FB10'
    },
    {
      id: 'sample-honda-fit',
      title: 'Honda Fit 1.3G (DBA-GE6)',
      plateCode: 'DBA-GE6 / L13A 1339cc',
      badge: 'Honda Multimatic HMMF',
      brand: 'Honda',
      category: 'ကွန်ပက် ဟက်ခ်ျဘက်ခ်',
      desc: 'L13A 1.3L i-VTEC၊ Honda Multimatic CVT (Honda HMMF ဆီသီးသန့်၊ Toyota ဆီ လုံးဝမထည့်ရ)',
      color: 'border-teal-500/50 bg-teal-950/20',
      sampleQuery: 'DBA-GE6 L13A 1339cc GE6-1045678 CVT NH700M'
    },
  ];

  const handleProcessImage = async (base64Image: string, mimeType: string = 'image/jpeg') => {
    setIsScanning(true);
    setErrorMessage(null);
    setNoticeMessage(null);
    setScanResult(null);
    setIsSaved(false);
    setScanProgress(15);
    setScanStepLabel('နိမ်းပလိပ်ပြား ပုံရိပ်ကို အမြန်ချုံ့ပြီး လက်ခံရရှိပါပြီ...');

    const timer1 = setTimeout(() => {
      setScanProgress(35);
      setScanStepLabel('AI Vision စနစ်ဖြင့် နိမ်းပြားစာလုံးများ (Maker, Engine Model, kW, RPM, VIN) ကို ဖတ်ရှုနေပါသည်...');
    }, 600);

    const timer2 = setTimeout(() => {
      setScanProgress(68);
      setScanStepLabel('အင်ဂျင်ဝိုင်၊ ဒီဇယ်စနစ်၊ လဲလှယ်ရမည့်ဆီနှင့် ဝပ်ရှော့သတိပေးချက်များ တွက်ချက်နေပါသည်...');
    }, 2500);

    const timer3 = setTimeout(() => {
      setScanProgress(88);
      setScanStepLabel('အချက်အလက်များကို အသေးစိတ် စစ်ဆေးအတည်ပြုနေပါသည်...');
    }, 5500);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);

      const response = await fetch('/api/decode-nameplate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64Image, mimeType }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const resJson = await response.json();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      setScanProgress(100);
      setScanStepLabel('စကန်ဖတ်မှု အောင်မြင်ပါသည်!');

      if (resJson.success && resJson.data) {
        setScanResult(resJson.data);
        if (resJson.noticeMm) {
          setNoticeMessage(resJson.noticeMm);
        }
      } else {
        setErrorMessage(resJson.error || 'ပုံရိပ်မှ နိမ်းပလိပ်ပြား စာလုံးများကို အပြည့်အစုံ မဖတ်နိုင်သေးပါ။ အလင်းရောင် ကောင်းစွာထားပြီး ပိုမိုပြတ်သားသော ဓာတ်ပုံဖြင့် ပြန်လည် စမ်းသပ်ပေးပါခင်ဗျာ။');
      }
    } catch (err: any) {
      console.warn('Image processing error:', err);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      setScanProgress(100);
      setErrorMessage(
        err.name === 'AbortError'
          ? 'အချိန်ကြာမြင့်သွားပါသဖြင့် ပြတ်တောက်သွားပါသည်။ ပိုမိုရှင်းလင်းသော ပုံဖြင့် ပြန်လည် စမ်းသပ်ပေးပါခင်ဗျာ။'
          : 'နိမ်းပလိပ်ပြား ပုံကို AI ဖြင့် ဖတ်ရှုရာတွင် ချို့ယွင်းချက် ဖြစ်ပေါ်ခဲ့ပါသည်။ ပြန်လည် ကြိုးစားပေးပါခင်ဗျာ။'
      );
    } finally {
      setIsScanning(false);
    }
  };

  const handleProcessText = async (text: string) => {
    if (!text.trim()) return;
    setIsScanning(true);
    setErrorMessage(null);
    setNoticeMessage(null);
    setScanResult(null);
    setIsSaved(false);

    try {
      const response = await fetch('/api/decode-nameplate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ textInput: text }),
      });

      const resJson = await response.json();
      if (resJson.success && resJson.data) {
        setScanResult(resJson.data);
        if (resJson.noticeMm) {
          setNoticeMessage(resJson.noticeMm);
        }
      } else {
        const fallback = decodePlateFromTextOrQuery(text);
        setScanResult(fallback);
      }
    } catch (err: any) {
      const fallback = decodePlateFromTextOrQuery(text);
      setScanResult(fallback);
      setNoticeMessage('အော့ဖ်လိုင်း စမတ်စနစ်မှ ကုဒ်အချက်အလက်ကို အပြည့်အစုံ ဖော်ထုတ်ပေးထားပါသည်ခင်ဗျာ။');
    } finally {
      setIsScanning(false);
    }
  };

  const handleSampleSelect = (sampleId: string, sampleQuery: string = '', animate: boolean = true) => {
    setPreviewImage(null);
    setSimulatedPlateId(sampleId);
    setErrorMessage(null);
    setNoticeMessage(null);

    if (animate) {
      setIsScanning(true);
      setScanProgress(18);
      setScanStepLabel('နိမ်းပလိပ်ပြားဘောင်ကို စကန်ကွက်အတွင်း ဖမ်းယူနေပါသည်...');

      setTimeout(() => {
        setScanProgress(52);
        setScanStepLabel('မော်ဒယ်ကုဒ်နှင့် အင်ဂျင်အမျိုးအစား (Engine Code) စစ်ဆေးနေပါသည်...');
      }, 280);

      setTimeout(() => {
        setScanProgress(82);
        setScanStepLabel('ဂီယာဘောက် (Trans-Axle)၊ ဆီလီတာနှင့် သတိပေးချက်များ ထုတ်ယူနေပါသည်...');
      }, 650);

      setTimeout(() => {
        setScanProgress(100);
        setScanStepLabel('ခွဲခြမ်းစိတ်ဖြာမှု အောင်မြင်ပါသည်!');
      }, 1000);

      setTimeout(() => {
        setIsScanning(false);
        if (INSTANT_SAMPLE_RESULTS[sampleId]) {
          setScanResult(INSTANT_SAMPLE_RESULTS[sampleId]);
        } else if (sampleQuery) {
          setScanResult(decodePlateFromTextOrQuery(sampleQuery));
        }
        setIsSaved(false);
        setNoticeMessage('စကန်ကွက်အတွင်း ထည့်သွင်းထားသော နိမ်းပြားမှ အချက်အလက်များ အပြည့်အစုံ ရရှိပါပြီခင်ဗျာ။');
      }, 1250);
    } else {
      setIsScanning(false);
      if (INSTANT_SAMPLE_RESULTS[sampleId]) {
        setScanResult(INSTANT_SAMPLE_RESULTS[sampleId]);
      } else if (sampleQuery) {
        setScanResult(decodePlateFromTextOrQuery(sampleQuery));
      }
      setIsSaved(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onerror = () => {
        setErrorMessage('ဖုန်းထဲရှိ ပုံကို ဖတ်ရှုရာတွင် ချို့ယွင်းချက် ဖြစ်ပေါ်ခဲ့ပါသည်။');
      };
      reader.onload = (event) => {
        try {
          const rawDataUrl = event.target?.result as string;
          if (!rawDataUrl) return;

          // Downscale immediately BEFORE putting into previewImage or state to prevent mobile RAM crashing
          const img = new Image();
          img.onload = () => {
            try {
              const MAX_SIZE = 960; // 960px resolution is ultra sharp for plate text and stays under 100KB
              let width = img.width || 800;
              let height = img.height || 600;

              if (width > height) {
                if (width > MAX_SIZE) {
                  height = Math.round((height * MAX_SIZE) / width);
                  width = MAX_SIZE;
                }
              } else {
                if (height > MAX_SIZE) {
                  width = Math.round((width * MAX_SIZE) / height);
                  height = MAX_SIZE;
                }
              }

              const canvas = document.createElement('canvas');
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(img, 0, 0, width, height);
                const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.72);
                setPreviewImage(compressedDataUrl);
                const base64Clean = compressedDataUrl.includes(',') ? compressedDataUrl.split(',')[1] : compressedDataUrl;
                handleProcessImage(base64Clean, 'image/jpeg');
              } else {
                setPreviewImage(rawDataUrl);
                const base64Clean = rawDataUrl.includes(',') ? rawDataUrl.split(',')[1] : rawDataUrl;
                handleProcessImage(base64Clean, file.type || 'image/jpeg');
              }
            } catch {
              setPreviewImage(rawDataUrl);
              const base64Clean = rawDataUrl.includes(',') ? rawDataUrl.split(',')[1] : rawDataUrl;
              handleProcessImage(base64Clean, file.type || 'image/jpeg');
            }
          };
          img.onerror = () => {
            setPreviewImage(rawDataUrl);
            const base64Clean = rawDataUrl.includes(',') ? rawDataUrl.split(',')[1] : rawDataUrl;
            handleProcessImage(base64Clean, file.type || 'image/jpeg');
          };
          img.src = rawDataUrl;
        } catch (innerErr) {
          console.error('File load error:', innerErr);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('File selection error:', err);
    } finally {
      // Delay resetting file input so mobile browsers do not interrupt file reading
      setTimeout(() => {
        if (e.target) {
          try {
            e.target.value = '';
          } catch {}
        }
      }, 1000);
    }
  };

  // Web Audio API beep for scan feedback
  const playScanBeep = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {}
  };

  const stopLiveCamera = () => {
    if (videoStreamRef.current) {
      try {
        videoStreamRef.current.getTracks().forEach((track) => track.stop());
      } catch {}
      videoStreamRef.current = null;
    }
    if (videoRef.current) {
      try {
        videoRef.current.srcObject = null;
      } catch {}
    }
    setIsLiveCameraActive(false);
    setIsTorchOn(false);
    setAutoScanProgress(0);
  };

  const startLiveCamera = async (facing: 'environment' | 'user' = cameraFacing, triggerFallbackOnFail: boolean = false) => {
    setErrorMessage(null);
    setNoticeMessage(null);
    setAutoScanProgress(0);

    try {
      if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        if (triggerFallbackOnFail) {
          fileInputCameraRef.current?.click();
        }
        return;
      }
    } catch {
      if (triggerFallbackOnFail) {
        fileInputCameraRef.current?.click();
      }
      return;
    }

    if (videoStreamRef.current) {
      try {
        videoStreamRef.current.getTracks().forEach((track) => track.stop());
      } catch {}
      videoStreamRef.current = null;
    }

    try {
      let stream: MediaStream | null = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: { ideal: facing },
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          },
          audio: false
        });
      } catch {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: facing },
            audio: false
          });
        } catch {
          stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        }
      }

      if (stream) {
        videoStreamRef.current = stream;
        setIsLiveCameraActive(true);
        setCameraFacing(facing);

        try {
          const track = stream.getVideoTracks()[0];
          const capabilities: any = track?.getCapabilities?.() || {};
          setHasTorchSupport(Boolean(capabilities.torch));
        } catch {}

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play().catch(() => {});
        }
      } else {
        stopLiveCamera();
        if (triggerFallbackOnFail) {
          fileInputCameraRef.current?.click();
        }
      }
    } catch (err: any) {
      console.warn('getUserMedia error:', err);
      stopLiveCamera();
      if (triggerFallbackOnFail) {
        fileInputCameraRef.current?.click();
      }
    }
  };

  const toggleTorch = async () => {
    try {
      const track = videoStreamRef.current?.getVideoTracks()[0];
      if (track) {
        const nextState = !isTorchOn;
        await track.applyConstraints({
          advanced: [{ torch: nextState } as any]
        });
        setIsTorchOn(nextState);
      }
    } catch (err) {
      console.warn('Torch toggle error:', err);
    }
  };

  const flipCamera = async () => {
    const nextFacing = cameraFacing === 'environment' ? 'user' : 'environment';
    setCameraFacing(nextFacing);
    await startLiveCamera(nextFacing);
  };

  const captureFromLiveCamera = () => {
    if (!videoRef.current) return;
    try {
      const video = videoRef.current;
      if (video.videoWidth === 0 || video.videoHeight === 0) return;

      playScanBeep();
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate([60, 40, 80]);
        } catch {}
      }

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setPreviewImage(dataUrl);
        stopLiveCamera();
        const base64Data = dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
        handleProcessImage(base64Data, 'image/jpeg');
      }
    } catch (err) {
      console.error('Frame capture error:', err);
    }
  };

  // Safe modal close handler that never triggers history pops
  const handleModalClose = () => {
    stopLiveCamera();
    setPreviewImage(null);
    setScanResult(null);
    setCameraError(null);
    onClose();
  };

  // Sync stream to video element whenever live camera state changes
  useEffect(() => {
    if (isLiveCameraActive && videoStreamRef.current && videoRef.current) {
      videoRef.current.srcObject = videoStreamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [isLiveCameraActive]);

  // Cleanup camera streams on unmount or when modal closes
  useEffect(() => {
    return () => {
      stopLiveCamera();
    };
  }, []);

  // Automatic Hands-Free Scanner Loop:
  // When live camera is running and Auto-Scan is enabled, it automatically counts down 2.2 seconds while aiming
  // and captures without the user having to click any button!
  useEffect(() => {
    let intervalId: any = null;
    if (isLiveCameraActive && isAutoScanEnabled && !isScanning && !scanResult && !previewImage) {
      intervalId = setInterval(() => {
        setAutoScanProgress((prev) => {
          if (prev >= 100) {
            captureFromLiveCamera();
            return 0;
          }
          return prev + 5; // 20 steps * 110ms ~ 2.2 seconds smooth progression
        });
      }, 110);
    } else {
      setAutoScanProgress(0);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isLiveCameraActive, isAutoScanEnabled, isScanning, scanResult, previewImage]);

  useEffect(() => {
    if (!isOpen) {
      stopLiveCamera();
    } else if (activeTab === 'camera' && !scanResult && !previewImage) {
      // Auto-start camera when modal opens
      startLiveCamera().catch(() => {});
    }
  }, [isOpen, activeTab]);

  // Convert parsed result to ToyotaVehicle format and save to localStorage
  const handleSaveToOffline = () => {
    if (!scanResult) return;

    const vehicleId = `scanned-${Date.now()}`;
    const newVehicle: ToyotaVehicle = {
      id: vehicleId,
      brand: scanResult.maker || 'Other',
      countryOfOrigin: scanResult.countryOfOrigin || 'Other',
      modelName: scanResult.modelName || 'Decoded Vehicle',
      burmeseName: scanResult.burmeseName || scanResult.modelName,
      chassisCode: scanResult.modelName?.split(' ')?.[0] || 'CHASSIS',
      fullModelCode: scanResult.plateBreakdown?.[0]?.stampValue || scanResult.modelName,
      generationYears: scanResult.manufactureYear || 'အသစ်တွေ့ရှိချက်',
      yearIdentificationMethodMm: scanResult.manufactureYear,
      category: 'diesel_commonrail',
      categoryLabelMm: scanResult.categoryMm || 'စကင်ဖတ်ထားသော ယာဉ်',
      fuelType: scanResult.fuelSystemMm || 'ဓာတ်ဆီ / ဒီဇယ်',
      nameplatePlate: {
        model: scanResult.plateBreakdown?.[0]?.stampValue || scanResult.modelName,
        engine: scanResult.engine?.code || 'ENGINE',
        frame: scanResult.plateBreakdown?.find((b: any) => b.stampName.includes('FRAME') || b.stampName.includes('VIN'))?.stampValue || 'VIN-STAMP',
        colorTrim: `${scanResult.paintAndTrim?.code || '070'} / ${scanResult.paintAndTrim?.trimCode || 'STD'}`,
        transAxle: `${scanResult.transmission?.transCode || 'AUTO'} ${scanResult.transmission?.axleCode || ''}`,
        plant: 'OEM Plant',
      },
      engine: scanResult.engine,
      transmission: scanResult.transmission,
      fluids: scanResult.fluids,
      paints: [
        {
          code: scanResult.paintAndTrim?.code || '070',
          nameEn: scanResult.paintAndTrim?.nameEn || 'White',
          nameMm: scanResult.paintAndTrim?.nameMm || 'မူရင်းဆေးရောင်',
          colorHex: scanResult.paintAndTrim?.hex || '#F0EFEA',
          trimCode: scanResult.paintAndTrim?.trimCode || 'STD',
          trimDescriptionMm: 'စက်ရုံထုတ် အတွင်းခန်း'
        }
      ],
      codeBreakdown: (scanResult.plateBreakdown || []).map((b: any) => ({
        codeSegment: b.stampName,
        meaning: b.stampValue,
        meaningMm: b.meaningMm
      })),
      workshopTips: scanResult.mechanicProTips || [],
      plateLocationMm: scanResult.plateLocationGuide,
      scannedAt: new Date().toLocaleDateString('my-MM'),
      isCustomScanned: true
    };

    const cleanVehicle = sanitizeVehicle(newVehicle);

    // Save to local storage
    try {
      const existingStr = localStorage.getItem('autocars_scanned_history');
      const existingList: any[] = existingStr ? JSON.parse(existingStr) : [];
      const sanitizedExisting = Array.isArray(existingList)
        ? existingList.map((item, idx) => sanitizeVehicle(item, idx))
        : [];
      const updatedList = [cleanVehicle, ...sanitizedExisting];
      localStorage.setItem('autocars_scanned_history', JSON.stringify(updatedList));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }

    setIsSaved(true);
    onVehicleSaved(cleanVehicle);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hidden File Inputs for Native Camera Shutter & Gallery */}
        <input
          type="file"
          ref={fileInputCameraRef}
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="hidden"
        />
        <input
          type="file"
          ref={fileInputGalleryRef}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Modal Top Header */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow">
              <Scan className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-['Padauk',sans-serif] flex items-center gap-2">
                <span>နိမ်းပလိပ်ပြား Scanဖတ်စက် (Universal AI Scanner)</span>
                <span className="text-[10px] bg-amber-500 text-slate-950 font-bold font-mono px-1.5 py-0.5 rounded">
                  ONLINE AI
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                ဂျပန်၊ ဥရောပ၊ အမေရိကန်၊ ဓာတ်ဆီ၊ ဒီဇယ် Common Rail၊ ကားကြီး EUI အစုံ ဖတ်ရှုနိုင်သည်
              </p>
            </div>
          </div>

          <button
            onClick={handleModalClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition cursor-pointer"
            title="ပိတ်မည်"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs - Clean 2 Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 p-2 gap-2 text-xs">
          <button
            onClick={() => {
              setActiveTab('camera');
              setScanResult(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-2 cursor-pointer font-['Padauk',sans-serif] ${
              activeTab === 'camera' && !scanResult
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Scan className="w-4 h-4" />
            <span>Scanဖတ်ရန် (Camera & Photo)</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('manual-code');
              setScanResult(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-2 cursor-pointer font-['Padauk',sans-serif] ${
              activeTab === 'manual-code' && !scanResult
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>စာရိုက်ထည့်ပြီး Scanဖတ်မည် (Manual Code)</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* TAB 1: Camera Photo Capture & Clean Spacious Viewfinder */}
          {activeTab === 'camera' && !scanResult && (
            <div className="space-y-4">
              {/* PRIMARY VIEWPORT: Spacious, Uncluttered & Wide */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-500/60 bg-slate-950 shadow-2xl flex flex-col items-center justify-center">
                {previewImage ? (
                  /* 1. WIDE HIGH-DEF PHOTO PREVIEW (မြင်ကွင်းကျယ်ကျယ် ပုံရိပ်ကြည့်ရှုကွက် - မကွယ်၊ မကျဉ်းစေရ) */
                  <div className="w-full relative flex flex-col items-center justify-center bg-slate-950 p-2 sm:p-3">
                    {/* Top Floating Badge & Action Bar */}
                    <div className="w-full flex items-center justify-between pb-2 px-1">
                      <span className="text-[11px] font-bold text-amber-400 font-['Padauk',sans-serif] flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                        <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                        <span>ရွေးချယ်ထားသော နိမ်းပလိပ်ပြား ပုံရိပ်</span>
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => fileInputCameraRef.current?.click()}
                          className="px-2.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1 shadow cursor-pointer font-['Padauk',sans-serif]"
                          title="ကင်မရာ အသစ်ရိုက်မည်"
                        >
                          <Camera className="w-3.5 h-3.5 text-slate-950" />
                          <span>အသစ်ရိုက်မည်</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => fileInputGalleryRef.current?.click()}
                          className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1 shadow cursor-pointer font-['Padauk',sans-serif] border border-slate-700"
                          title="ဖုန်းထဲရှိ အခြားပုံ ရွေးမည်"
                        >
                          <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                          <span>အခြားပုံ</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPreviewImage(null)}
                          className="p-1 rounded-xl bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 cursor-pointer transition border border-slate-700"
                          title="ပုံဖယ်မည်"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Image Viewer Frame */}
                    <div className="relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-slate-800">
                      <img 
                        src={previewImage} 
                        alt="Uploaded Plate" 
                        className="w-full h-auto max-h-[46vh] sm:max-h-[52vh] object-contain rounded-xl"
                      />

                      {/* Scanning Laser Beam */}
                      {isScanning && (
                        <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_25px_#f59e0b] z-30 pointer-events-none animate-laser" />
                      )}
                    </div>
                  </div>
                ) : isLiveCameraActive ? (
                  /* 2. LIVE STREAM VIEWFINDER */
                  <div className="w-full h-full relative flex items-center justify-center bg-black min-h-[320px]">
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-full max-h-[52vh] object-cover"
                    />

                    {/* 4 Neon Viewfinder Corners */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-amber-400 rounded-tl-xl pointer-events-none shadow-[0_0_15px_#f59e0b] z-20" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-amber-400 rounded-tr-xl pointer-events-none shadow-[0_0_15px_#f59e0b] z-20" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-amber-400 rounded-bl-xl pointer-events-none shadow-[0_0_15px_#f59e0b] z-20" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-amber-400 rounded-br-xl pointer-events-none shadow-[0_0_15px_#f59e0b] z-20" />

                    {/* Laser Sweep */}
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_#f59e0b] z-20 pointer-events-none animate-laser" />

                    {/* Top Status Bar */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-30">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-red-600/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-white" />
                          <span>LIVE</span>
                        </span>
                        {isAutoScanEnabled && (
                          <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow font-['Padauk',sans-serif]">
                            <Zap className="w-3 h-3 text-slate-950" />
                            <span>AUTO-SCAN</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-2xl border border-white/20">
                        {hasTorchSupport && (
                          <button
                            type="button"
                            onClick={toggleTorch}
                            className={`p-1.5 rounded-xl border transition cursor-pointer ${
                              isTorchOn ? 'bg-amber-500 text-slate-950 border-amber-400' : 'text-white border-transparent hover:bg-white/10'
                            }`}
                            title="မီးထိုးမည်"
                          >
                            <Flashlight className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={flipCamera}
                          className="p-1.5 rounded-xl text-white hover:bg-white/10 transition cursor-pointer"
                          title="ကင်မရာပြောင်းမည်"
                        >
                          <SwitchCamera className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={stopLiveCamera}
                          className="p-1.5 rounded-xl text-red-400 hover:bg-red-950/60 transition cursor-pointer"
                          title="ကင်မရာ ပိတ်မည်"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Auto-Scan Progress Bar */}
                    {isAutoScanEnabled && !isScanning && (
                      <div className="absolute bottom-3 inset-x-4 bg-slate-950/85 backdrop-blur-md rounded-2xl p-2.5 border border-amber-500/40 text-center space-y-1.5 z-30">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-300 font-['Padauk',sans-serif]">
                          <span className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                            <span>နိမ်းပလိပ်ပြားကို ငြိမ်ငြိမ်လေး ချိန်ထားပါ...</span>
                          </span>
                          <span className="font-mono text-xs text-amber-400 font-bold">{Math.round(autoScanProgress)}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${autoScanProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : simulatedPlateId ? (
                  /* 3. SIMULATED PLATE */
                  <div className="w-full p-4 flex items-center justify-center">
                    <RealisticNameplateVisual plateId={simulatedPlateId} className="w-full max-w-lg" />
                  </div>
                ) : (
                  /* 4. CLEAN DIRECT LAUNCH PAD (ရှင်းလင်းသော အဓိက Scan မျက်နှာပြင်) */
                  <div className="p-6 sm:p-8 text-center space-y-4 max-w-md w-full">
                    <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/20">
                      <Scan className="w-8 h-8 animate-pulse text-amber-400" />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-white font-['Padauk',sans-serif]">
                        နိမ်းပလိပ်ပြား တိုက်ရိုက် Scan စနစ်
                      </h4>
                      <p className="text-xs text-slate-300 font-['Padauk',sans-serif] leading-relaxed">
                        အင်ဂျင်ခန်းအတွင်း နိမ်းပလိပ်ပြား (သို့) ကားကိုယ်ထည်ပြားကို ချိန်၍ တိုက်ရိုက် Scanဖတ်ပါ
                      </p>
                    </div>



                    <div className="space-y-2.5 pt-1">
                      {/* BUTTON 1: Live In-App Viewfinder (In-App Camera Stream) */}
                      <button
                        type="button"
                        onClick={() => startLiveCamera(cameraFacing, true)}
                        className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-amber-500/30 transition cursor-pointer font-['Padauk',sans-serif] active:scale-95 flex items-center justify-center gap-2.5"
                      >
                        <Scan className="w-5 h-5 text-slate-950" />
                        <span>📹 Live Scanner တိုက်ရိုက်ဖွင့်မည်</span>
                      </button>

                      {/* BUTTON 2 & 3: Native Photo Shoot & Gallery */}
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => fileInputCameraRef.current?.click()}
                          className="flex-1 py-3 px-3 bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-bold rounded-xl border border-slate-700 transition cursor-pointer font-['Padauk',sans-serif] flex items-center justify-center gap-2 shadow-sm"
                        >
                          <Camera className="w-4 h-4 text-amber-400" />
                          <span>📷 ဓာတ်ပုံရိုက်မည်</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => fileInputGalleryRef.current?.click()}
                          className="flex-1 py-3 px-3 bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-bold rounded-xl border border-slate-700 transition cursor-pointer font-['Padauk',sans-serif] flex items-center justify-center gap-2 shadow-sm"
                        >
                          <ImageIcon className="w-4 h-4 text-amber-400" />
                          <span>📁 ဖုန်းထဲရှိပုံ (Gallery)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTONS UNDER VIEWPORT */}
              <div className="w-full max-w-lg mx-auto">
                {isScanning ? (
                  <div className="bg-slate-950/95 border border-amber-500/60 rounded-2xl p-4 backdrop-blur-md space-y-2.5 shadow-2xl">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300 font-['Padauk',sans-serif] flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                        <span>{scanStepLabel}</span>
                      </span>
                      <span className="font-mono font-bold text-amber-400">{scanProgress}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 transition-all duration-300 rounded-full"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                ) : isLiveCameraActive ? (
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <button
                      type="button"
                      onClick={captureFromLiveCamera}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-lg shadow-amber-500/30 flex items-center gap-2 font-['Padauk',sans-serif] active:scale-95"
                    >
                      <Scan className="w-4 h-4 text-slate-950" />
                      <span>ချက်ချင်းဖတ်မည် (Instant Scan)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsAutoScanEnabled(!isAutoScanEnabled);
                        setAutoScanProgress(0);
                      }}
                      className={`px-3.5 py-3 text-xs font-bold rounded-xl transition cursor-pointer border flex items-center gap-1.5 font-['Padauk',sans-serif] ${
                        isAutoScanEnabled
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <Zap className={`w-3.5 h-3.5 ${isAutoScanEnabled ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span>အော်တိုဖတ်: {isAutoScanEnabled ? 'ON' : 'OFF'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={stopLiveCamera}
                      className="px-3.5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer border border-slate-700 font-['Padauk',sans-serif] flex items-center gap-1.5"
                    >
                      <X className="w-4 h-4 text-red-400" />
                      <span>ကင်မရာ ပိတ်မည်</span>
                    </button>
                  </div>
                ) : previewImage ? (
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <button
                      onClick={() => {
                        const base64Data = previewImage.includes(',') ? previewImage.split(',')[1] : previewImage;
                        handleProcessImage(base64Data);
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-lg shadow-amber-500/30 flex items-center gap-2 font-['Padauk',sans-serif] active:scale-95"
                    >
                      <Scan className="w-4 h-4 text-slate-950" />
                      <span>နိမ်းပလိပ်ပြား ဖတ်မည် (Scan Now)</span>
                    </button>

                    <button
                      onClick={() => {
                        setPreviewImage(null);
                        fileInputCameraRef.current?.click();
                      }}
                      className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer border border-slate-700 font-['Padauk',sans-serif] flex items-center gap-1.5"
                    >
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span>အသစ်ရိုက်မည်</span>
                    </button>
                  </div>
                ) : null}
              </div>

              {/* Optional Discrete Collapsible for Testing Samples Without a Car */}
              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setShowSampleCollapsible(!showSampleCollapsible)}
                  className="text-[11px] text-slate-400 hover:text-amber-400 transition cursor-pointer inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-800/40 font-['Padauk',sans-serif]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>ကားမရှိသေးဘဲ စမ်းသပ်လိုပါက နမူနာပြားများ ရွေးရန်</span>
                  <span className="text-[10px]">{showSampleCollapsible ? '▲ ပိတ်မည်' : '▼ ဖွင့်မည်'}</span>
                </button>

                {showSampleCollapsible && (
                  <div className="mt-3 p-3 bg-slate-950 rounded-2xl border border-slate-800/80 grid grid-cols-2 sm:grid-cols-5 gap-2 text-left">
                    {sampleNameplates.map((sample) => (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => {
                          handleSampleSelect(sample.id, sample.sampleQuery, true);
                          setShowSampleCollapsible(false);
                        }}
                        className="p-2.5 rounded-xl border border-slate-800 hover:border-amber-400 bg-slate-900/60 hover:bg-slate-800/80 transition cursor-pointer text-left"
                      >
                        <div className="text-[10px] font-bold text-white truncate font-['Padauk',sans-serif]">
                          {sample.title.split('(')[0]}
                        </div>
                        <div className="text-[9px] font-mono text-slate-400 truncate">
                          {sample.plateCode.split('/')[0]}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: Manual Code Input */}
          {activeTab === 'manual-code' && !scanResult && (
            <div className="space-y-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <label className="text-xs font-bold text-slate-300 font-['Padauk',sans-serif] block">
                  နိမ်းပလိပ်ပြားပေါ်ရှိ Model Code သို့မဟုတ် VIN/Chassis နံပါတ် ရိုက်ထည့်ပါ:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={manualCodeInput}
                    onChange={(e) => setManualCodeInput(e.target.value)}
                    placeholder="ဥပမာ- DBA-ZGE20G-HPXNP, 2ZR-FAE, GUN126R, DBA-NZE141G, FR1EXE..."
                    className="flex-1 bg-slate-900 border-2 border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-slate-100 font-mono focus:outline-none"
                  />
                  <button
                    onClick={() => handleProcessText(manualCodeInput)}
                    disabled={!manualCodeInput.trim() || isScanning}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer font-['Padauk',sans-serif] flex items-center gap-1.5"
                  >
                    <span>ဖတ်မည်</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Auto-fill Pills */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                    စမ်းသပ်ရန် ကုဒ်အမြန်နှိပ်ပါ (Auto-fill & Instant Decode) -
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'Yunnei 490QB (တရုတ်ဒီဇယ်အင်ဂျင်)', code: '490QGB 48kW 3200rpm BNK17001613 XK06-002-00105 成都云内' },
                      { label: 'Toyota Wish 1.8X (DBA-ZGE20G)', code: 'DBA-ZGE20G-HPXNP 2ZR-FAE 1797cc ZGE20-0147194 8V9 K311 -02A' },
                      { label: 'Toyota Wish 1.8S (DBA-ZGE20W)', code: 'DBA-ZGE20W-HPXSP 2ZR-FAE 1797cc 8S6 K311 -02A' },
                      { label: 'Corolla Fielder (DBA-NZE141G)', code: 'DBA-NZE141G-AWXEK 1NZ-FE 1496cc K310 -02A' },
                      { label: 'Hilux Revo 2.8D (GUN126R)', code: 'GUN126R-DTTHXT 1GD-FTV 2755cc AC60F B02A' },
                      { label: 'Hino Profia 10-Wheel (FR1EXE)', code: 'QKG-FR1EXEG E13C-TL 12913cc M009 SH19' },
                      { label: 'BMW 320i F30 (B48B20)', code: 'WBA8A12080K123456 B48B20 ZF 8HP50' },
                      { label: 'Toyota Alphard 2.4 (ANH20W)', code: 'DBA-ANH20W-PFXSK 2AZ-FE 2362cc K112 -01A 070' },
                      { label: 'Crown Athlete 2.5 (GRS200)', code: 'DBA-GRS200-AETXH 4GR-FSE 2499cc A960E B01A 202' },
                      { label: 'Toyota Probox 1.5 (NCP51V)', code: 'DBE-NCP51V-EXPDK 1NZ-FE 1496cc U340E -05A 058' },
                      { label: 'Honda Fit 1.3 (DBA-GE6)', code: 'DBA-GE6 L13A 1339cc CVT NH700M' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setManualCodeInput(item.code);
                          handleProcessText(item.code);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-[11px] text-slate-300 hover:text-amber-300 font-mono transition cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scanning In Progress Indicator */}
          {isScanning && (
            <div className="p-8 bg-slate-950 border border-amber-500/30 rounded-3xl text-center space-y-4">
              <div className="relative w-16 h-16 mx-auto">
                <RefreshCw className="w-16 h-16 animate-spin text-amber-400" />
                <Scan className="w-8 h-8 absolute inset-0 m-auto text-amber-300 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-amber-300 font-['Padauk',sans-serif]">
                  AI Vision ဖြင့် နိမ်းပလိပ်ပြား စာလုံးများကို ခွဲခြမ်းစိတ်ဖြာနေပါသည်...
                </h4>
                <p className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                  ထုတ်လုပ်သည့်ခုနှစ်၊ အင်ဂျင်၊ ဂီယာဘောက်၊ ဆီလီတာနှင့် သတိပေးချက်များကို တွက်ချက်နေပါသည်
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsScanning(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition cursor-pointer font-['Padauk',sans-serif]"
                >
                  မစောင့်တော့ပါ (ပယ်ဖျက်မည်)
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-2xl flex items-start gap-3 text-red-300 text-xs font-['Padauk',sans-serif]">
              <AlertTriangle className="w-5 h-5 shrink-0 text-red-400" />
              <div>
                <p className="font-bold">အချက်အလက် ထုတ်ယူ၍ မရရှိပါ</p>
                <p className="text-slate-400 mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Notice Message */}
          {noticeMessage && (
            <div className="p-3 bg-blue-950/40 border border-blue-500/40 rounded-xl text-blue-300 text-xs font-['Padauk',sans-serif] flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0" />
              <span>{noticeMessage}</span>
            </div>
          )}

          {/* DECODED RESULT VIEW */}
          {scanResult && (
            <div className="space-y-4">
              {/* Quick Action Navigation Banner: Upload New Picture from Phone Gallery or Open Camera */}
              <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border-2 border-amber-500/60 p-4 rounded-3xl flex flex-wrap items-center justify-between gap-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-md shadow-amber-500/30">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-amber-300 font-['Padauk',sans-serif]">
                      ယခင်ဖတ်ထားသော ကားအချက်အလက်ကို ကြည့်ရှုနေပါသည်
                    </div>
                    <div className="text-[11px] text-slate-300 font-['Padauk',sans-serif] mt-0.5">
                      ဖုန်းထဲရှိ အခြားပုံ (သို့) YouTube Screenshot အသစ် ထည့်သွင်းဖတ်ရှုလိုပါက -
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setScanResult(null);
                      setActiveTab('camera');
                    }}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 font-['Padauk',sans-serif] shadow-md shadow-amber-500/25"
                  >
                    <Scan className="w-4 h-4" />
                    <span>စကန်ကွက်သို့ ပြန်သွားမည်</span>
                  </button>

                  <button
                    onClick={() => {
                      setScanResult(null);
                      setPreviewImage(null);
                      fileInputGalleryRef.current?.click();
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-2 font-['Padauk',sans-serif] border border-slate-700"
                  >
                    <ImageIcon className="w-4 h-4 text-amber-400" />
                    <span>ဖုန်းထဲရှိ ပုံရွေးမည်</span>
                  </button>

                  <button
                    onClick={() => {
                      setScanResult(null);
                      setPreviewImage(null);
                      fileInputCameraRef.current?.click();
                    }}
                    className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 font-['Padauk',sans-serif] border border-slate-700"
                  >
                    <Camera className="w-4 h-4 text-amber-400" />
                    <span>ကင်မရာ အသစ်</span>
                  </button>
                </div>
              </div>

              {/* Card Header & Save Button */}
              <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-950 p-5 rounded-3xl border-2 border-amber-500/40 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-lg">
                      {scanResult.maker}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                      {scanResult.countryOfOrigin}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {scanResult.categoryMm}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveToOffline}
                      disabled={isSaved}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 font-['Padauk',sans-serif] cursor-pointer ${
                        isSaved 
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md'
                      }`}
                    >
                      {isSaved ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>ဖုန်းထဲတွင် သိမ်းဆည်းပြီးပါပြီ</span>
                        </>
                      ) : (
                        <>
                          <BookmarkPlus className="w-4 h-4" />
                          <span>ဖုန်းထဲ သိမ်းမည် (Save to Phone)</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        setScanResult(null);
                        setPreviewImage(null);
                        setSimulatedPlateId(null);
                        setActiveTab('camera');
                      }}
                      className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 border border-amber-500/40 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5 font-['Padauk',sans-serif]"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>စကန်ကွက်သို့ ပြန်သွားမည်</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white font-['Padauk',sans-serif]">
                    {scanResult.burmeseName || scanResult.modelName}
                  </h3>
                  <p className="text-xs text-amber-300 font-mono mt-0.5">
                    {scanResult.modelName}
                  </p>
                </div>

                {/* Manufactured Year Banner */}
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-amber-500/30 flex items-start gap-2.5 text-xs font-['Padauk',sans-serif]">
                  <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">ထုတ်လုပ်သည့် ခုနှစ် ခွဲခြားချက်: </span>
                    <strong className="text-amber-300 font-bold">{scanResult.manufactureYear}</strong>
                    {scanResult.generationEra && (
                      <span className="text-slate-400 ml-2">({scanResult.generationEra})</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Sub-Tabs for Result Categories */}
              <div className="flex border-b border-slate-800 gap-1 overflow-x-auto text-xs font-['Padauk',sans-serif] pb-1">
                {[
                  { id: 'summary', label: 'အကျဉ်းချုပ်', icon: Layers },
                  { id: 'engine', label: 'အင်ဂျင်စနစ်', icon: Wrench },
                  { id: 'trans', label: 'ဂီယာဘောက်စ်', icon: Settings },
                  { id: 'fluids', label: 'ဆီသတ်မှတ်ချက်များ', icon: Droplet },
                  { id: 'breakdown', label: 'နိမ်းပြားဖတ်နည်း', icon: Scan },
                  { id: 'tips', label: 'ဝပ်ရှော့ သတိပြုရန်', icon: AlertTriangle },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setResultSubTab(tab.id as any)}
                      className={`px-3.5 py-2 rounded-xl font-bold shrink-0 transition flex items-center gap-1.5 cursor-pointer ${
                        resultSubTab === tab.id
                          ? 'bg-amber-500 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* TAB CONTENT: Summary */}
              {resultSubTab === 'summary' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[11px] text-slate-500 font-mono uppercase block">လောင်စာနှင့် အင်ဂျင်</span>
                    <div className="text-sm font-bold text-amber-400 font-['Padauk',sans-serif]">
                      {scanResult.engine?.code} ({scanResult.engine?.displacement})
                    </div>
                    <div className="text-slate-300 font-['Padauk',sans-serif]">
                      {scanResult.fuelSystemMm}
                    </div>
                    <div className="text-slate-400 text-[11px] font-['Padauk',sans-serif]">
                      တိုင်မင်စနစ်: <strong className="text-slate-200">{scanResult.engine?.timingType}</strong>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[11px] text-slate-500 font-mono uppercase block">ဂီယာဘောက်စ်နှင့် မောင်းနှင်မှု</span>
                    <div className="text-sm font-bold text-sky-400 font-mono">
                      {scanResult.transmission?.transCode} ({scanResult.transmission?.transType})
                    </div>
                    <div className="text-slate-300 font-['Padauk',sans-serif]">
                      {scanResult.transmission?.driveType}
                    </div>
                    <div className="text-slate-400 text-[11px] font-['Padauk',sans-serif]">
                      ဂီယာဆီ: <strong className="text-amber-300">{scanResult.fluids?.transmissionFluid?.fluidType}</strong>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[11px] text-slate-500 font-mono uppercase block">ဆေးကုဒ်နှင့် အတွင်းခန်း</span>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-5 h-5 rounded-full border border-white/30" 
                        style={{ backgroundColor: scanResult.paintAndTrim?.hex || '#94a3b8' }} 
                      />
                      <span className="font-mono font-bold text-slate-200">
                        {scanResult.paintAndTrim?.code} — {scanResult.paintAndTrim?.nameMm || scanResult.paintAndTrim?.nameEn}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px] font-['Padauk',sans-serif]">
                      Trim ကုဒ်: <strong className="text-slate-200">{scanResult.paintAndTrim?.trimCode}</strong>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[11px] text-slate-500 font-mono uppercase block">နိမ်းပြား ရှာဖွေနိုင်သည့် တည်နေရာ</span>
                    <div className="text-slate-300 font-['Padauk',sans-serif] flex items-start gap-1.5">
                      <Compass className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{scanResult.plateLocationGuide || 'ယာဉ်မောင်းတံခါးဘောင် သို့မဟုတ် အင်ဂျင်ခန်း Firewall နံရံ'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: Engine */}
              {resultSubTab === 'engine' && (
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-mono text-base font-bold text-amber-400">
                      {scanResult.engine?.code}
                    </span>
                    <span className="text-slate-400 font-mono">
                      {scanResult.engine?.displacement}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 font-['Padauk',sans-serif]">
                    <div>
                      <span className="text-slate-500 block">ဆလင်ဒါ ဖွဲ့စည်းပုံ:</span>
                      <strong>{scanResult.engine?.cylinders}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">ဗားစနစ်:</span>
                      <strong>{scanResult.engine?.valvesSystem}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">တိုင်မင်စနစ်:</span>
                      <strong className="text-amber-300">{scanResult.engine?.timingType}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">မြင်းကောင်ရေနှင့် ရုန်းအား:</span>
                      <strong>{scanResult.engine?.horsepower} / {scanResult.engine?.torque}</strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-500 block">ပလပ်ခေါင်း သို့မဟုတ် အင်ဂျက်တာ မော်ဒယ်:</span>
                      <strong className="text-slate-200">{scanResult.engine?.sparkPlugOrInjector || 'OEM Spec'}</strong>
                    </div>
                  </div>
                  {scanResult.engine?.timingNote && (
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-amber-300 font-['Padauk',sans-serif]">
                      💡 {scanResult.engine?.timingNote}
                    </div>
                  )}
                </div>
              )}

              {/* TAB CONTENT: Transmission */}
              {resultSubTab === 'trans' && (
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-mono text-base font-bold text-sky-400">
                      {scanResult.transmission?.transCode}
                    </span>
                    <span className="text-slate-300 font-mono">
                      {scanResult.transmission?.transName}
                    </span>
                  </div>
                  <div className="space-y-2 font-['Padauk',sans-serif]">
                    <div>
                      <span className="text-slate-500 block">မောင်းနှင်မှုစနစ် (Drive Type):</span>
                      <strong className="text-slate-200">{scanResult.transmission?.driveType}</strong>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      {scanResult.transmission?.driveDetailMm}
                    </p>
                    {scanResult.transmission?.axleCode && (
                      <div>
                        <span className="text-slate-500 block">အက်ဇယ်နှင့် ဒစ်ဖရန်ရှယ် အချိုး ({scanResult.transmission?.axleCode}):</span>
                        <p className="text-slate-300 text-[11px]">{scanResult.transmission?.axleExplanationMm}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB CONTENT: Fluids */}
              {resultSubTab === 'fluids' && (
                <div className="space-y-3 text-xs">
                  {/* Engine Oil */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-amber-500/30 space-y-2">
                    <div className="font-bold text-amber-400 flex items-center gap-1.5 font-['Padauk',sans-serif]">
                      <Droplet className="w-4 h-4" />
                      <span>အင်ဂျင်ဝိုင် သတ်မှတ်ချက်</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300 font-['Padauk',sans-serif]">
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">အပျစ်အကျဲ</span>
                        <strong className="text-amber-300">{scanResult.fluids?.engineOil?.viscosity}</strong>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">Filter အပါ</span>
                        <strong className="text-slate-100">{scanResult.fluids?.engineOil?.capacityWithFilter}</strong>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">Filter မပါ</span>
                        <strong className="text-slate-100">{scanResult.fluids?.engineOil?.capacityWithoutFilter}</strong>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">စံနှုန်း</span>
                        <strong className="text-slate-200">{scanResult.fluids?.engineOil?.standard}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Gearbox Fluid with Caution */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-sky-500/30 space-y-2">
                    <div className="font-bold text-sky-400 flex items-center gap-1.5 font-['Padauk',sans-serif]">
                      <Settings className="w-4 h-4" />
                      <span>ဂီယာဝိုင် သတ်မှတ်ချက်</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-sm font-bold">
                      {scanResult.fluids?.transmissionFluid?.fluidType}
                    </div>
                    {scanResult.fluids?.transmissionFluid?.cautionNote && (
                      <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-[11px] font-['Padauk',sans-serif]">
                        {scanResult.fluids?.transmissionFluid?.cautionNote}
                      </div>
                    )}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-300 font-['Padauk',sans-serif]">
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">ဆီဖောက်လဲ လီတာ</span>
                        <strong>{scanResult.fluids?.transmissionFluid?.drainRefillCapacity || '-'}</strong>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">ပန်ခွာလဲ လီတာ</span>
                        <strong>{scanResult.fluids?.transmissionFluid?.panDropFilterCapacity || '-'}</strong>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-xl">
                        <span className="text-slate-500 text-[10px] block">အခြောက်ဆံ့ဝင်ဆံ့</span>
                        <strong>{scanResult.fluids?.transmissionFluid?.totalDryCapacity || '-'}</strong>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                      စစ်ဆေးနည်း: <strong className="text-slate-200">{scanResult.fluids?.transmissionFluid?.inspectionMethod}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: Plate Breakdown */}
              {resultSubTab === 'breakdown' && (
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-['Padauk',sans-serif] mb-2">
                    နိမ်းပလိပ်ပြားပေါ်ရှိ စာကြောင်းတံဆိပ်တစ်ခုချင်းစီ၏ မြန်မာလို အဓိပ္ပာယ်:
                  </div>
                  <div className="space-y-2">
                    {(scanResult.plateBreakdown || []).map((b: any, idx: number) => (
                      <div key={idx} className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] text-amber-400 font-bold bg-slate-900 px-2 py-0.5 rounded">
                            {b.stampName}
                          </span>
                          <span className="font-mono text-xs text-slate-200 font-bold">
                            {b.stampValue}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-['Padauk',sans-serif] leading-relaxed pt-1">
                          👉 {b.meaningMm}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB CONTENT: Mechanic Pro Tips */}
              {resultSubTab === 'tips' && (
                <div className="space-y-2 text-xs font-['Padauk',sans-serif]">
                  <div className="text-slate-400 mb-1">
                    ဝပ်ရှော့ဆရာကြီးများအတွက် လက်တွေ့ သတိပြုဖွယ်ရာများနှင့် ဥရောပ/အာရှ ကား နှိုင်းယှဉ်ချက်များ:
                  </div>
                  {(scanResult.mechanicProTips || []).map((tip: string, idx: number) => (
                    <div key={idx} className="bg-slate-950 p-3.5 rounded-2xl border border-amber-500/20 text-slate-200 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <p>{tip}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Quick Return / New Upload Bar */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div className="text-xs text-slate-300 font-['Padauk',sans-serif]">
                  နောက်ထပ် နိမ်းပြားပုံ (သို့) YouTube Screenshot အသစ် ထည့်သွင်းဖတ်ရှုလိုပါသလား?
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      setScanResult(null);
                      setPreviewImage(null);
                      fileInputGalleryRef.current?.click();
                    }}
                    className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-2 font-['Padauk',sans-serif] shadow-lg shadow-amber-500/20"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>ဖုန်းထဲရှိ ပုံရွေးမည် (Gallery)</span>
                  </button>
                  <button
                    onClick={() => {
                      setScanResult(null);
                      setPreviewImage(null);
                      setActiveTab('camera');
                    }}
                    className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5 font-['Padauk',sans-serif] border border-slate-700"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                    <span>အစသို့ ပြန်သွားမည်</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-5 py-3.5 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
            GREATSTAR • Z.N.W Universal Plate AI Scanner
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition cursor-pointer font-['Padauk',sans-serif]"
          >
            ပိတ်မည် (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
