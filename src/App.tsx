import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ScannerSimulator } from './components/ScannerSimulator';
import { DtcLookupTool } from './components/DtcLookupTool';
import { NameplateScannerTool } from './components/NameplateScannerTool';
import { GearboxWiringExplorer } from './components/GearboxWiringExplorer';
import { SolenoidOhmTester } from './components/SolenoidOhmTester';
import { AiMechanicConsultant } from './components/AiMechanicConsultant';
import { FluidGuideModal } from './components/FluidGuideModal';
import { DtcDetailModal } from './components/DtcDetailModal';
import { CameraScannerModal } from './components/CameraScannerModal';
import { InstallAppModal } from './components/InstallAppModal';
import { DatabaseUpdateModal } from './components/DatabaseUpdateModal';
import { BrandTrademarkCard } from './components/BrandTrademarkCard';
import { DtcItem, SolenoidPin, DtcCategory, SeverityLevel } from './types/diagnostic';
import { DTC_DATABASE } from './data/dtcDatabase';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'scanner' | 'dtc-list' | 'nameplate' | 'gear-wiring' | 'multimeter' | 'ai-consult' | 'fluids'
  >('scanner');

  const [zoomScale, setZoomScale] = useState<number>(100);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [selectedDtc, setSelectedDtc] = useState<DtcItem | null>(null);
  const [selectedPinForMultimeter, setSelectedPinForMultimeter] = useState<SolenoidPin | null>(null);
  const [multimeterGearboxName, setMultimeterGearboxName] = useState<string>('');
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string>('');
  const [aiInitialVehicle, setAiInitialVehicle] = useState<string>('');
  const [targetWiringGearbox, setTargetWiringGearbox] = useState<string>('toyota-u340e');
  const [isCameraScannerOpen, setIsCameraScannerOpen] = useState<boolean>(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState<any>(null);

  // Capture PWA install event if supported
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  // Steady reliable battery voltage (14.1V alternator charge)
  const batteryVoltage = 14.1;

  // Handler: Jump to multimeter from a specific pin
  const handleOpenMultimeterForPin = (pin: SolenoidPin, gearboxName: string) => {
    setSelectedPinForMultimeter(pin);
    setMultimeterGearboxName(gearboxName);
    setActiveTab('multimeter');
  };

  // Handler: Jump to wiring guide
  const handleNavigateToWiring = (brandOrCode?: string) => {
    if (brandOrCode) {
      if (brandOrCode.toLowerCase().includes('k310') || brandOrCode.toLowerCase().includes('fielder')) {
        setTargetWiringGearbox('toyota-k310-cvt');
      } else if (brandOrCode.toLowerCase().includes('honda') || brandOrCode.toLowerCase().includes('fit')) {
        setTargetWiringGearbox('honda-fit-cvt');
      } else if (brandOrCode.toLowerCase().includes('nissan') || brandOrCode.toLowerCase().includes('note')) {
        setTargetWiringGearbox('nissan-xtronic-cvt');
      } else if (brandOrCode.toLowerCase().includes('wagon') || brandOrCode.toLowerCase().includes('suzuki')) {
        setTargetWiringGearbox('suzuki-wagonr-cvt');
      } else {
        setTargetWiringGearbox('toyota-u340e');
      }
    }
    setActiveTab('gear-wiring');
  };

  // Handler: Jump to AI Mechanic with codes
  const handleAskAiWithCodes = (codes: string[], carInfo: string) => {
    const questionText = `ကားတွင် Error Codes: [${codes.join(', ')}] ပေါ်နေပါသည်။ ဤကုတ်များ၏ ဂီယာဝိုင်ယာ၊ ဆင်ဆာနှင့် လက်တွေ့ ပြုပြင်စစ်ဆေးနည်းများကို မြန်မာလို အသေးစိတ် ရှင်းပြပေးပါခင်ဗျာ။`;
    setAiInitialPrompt(questionText);
    setAiInitialVehicle(carInfo);
    setActiveTab('ai-consult');
  };

  const handleAskAiForCode = (code: string) => {
    const matchedDtc = DTC_DATABASE.find(d => d.code === code);
    const questionText = `${code} (${matchedDtc?.titleMm || ''}) ကုတ်ပေါ်နေပါသည်၊ ဝိုင်ယာကြိုးနှင့် Solenoid စစ်ဆေးနည်း အကြံပြုပေးပါခင်ဗျာ။`;
    setAiInitialPrompt(questionText);
    setActiveTab('ai-consult');
  };

  // Handler: When a code is detected via Camera Scanner
  const handleCodeDetectedFromCamera = (code: string) => {
    const match = DTC_DATABASE.find(d => d.code.toUpperCase() === code.toUpperCase());
    if (match) {
      setSelectedDtc(match);
    } else {
      setSelectedDtc({
        code: code.toUpperCase(),
        titleMm: `${code.toUpperCase()} အထူးစစ်ဆေးရမည့် Error Code`,
        titleEn: `Diagnostic Code ${code.toUpperCase()}`,
        category: (code.startsWith('P07') || code.startsWith('P08') ? 'Transmission' : 'Engine') as DtcCategory,
        severity: 'high' as SeverityLevel,
        descriptionMm: `ကင်မရာမှ ဖတ်ရှုရရှိသော ကုတ် (${code.toUpperCase()}) ဖြစ်ပါသည်။ အသေးစိတ်ကို ဆရာကြီး AI ဖြင့် ဆက်လက်စစ်ဆေးနိုင်ပါသည်။`,
        symptomsMm: ['Check Engine မီးလင်းခြင်း', 'ကားစွမ်းဆောင်ရည် ကျဆင်းခြင်း'],
        causesMm: ['ဝိုင်ယာကြိုး ချွတ်ယွင်းခြင်း', 'ဆင်ဆာ သို့မဟုတ် Solenoid ပျက်စီးခြင်း'],
        diagnosisStepsMm: ['ဝိုင်ယာလိုင်း စစ်ဆေးပါ', 'Multimeter ဖြင့် ဗို့အားနှင့် အွမ်တိုင်းပါ'],
        emergencyAdviceMm: 'အနီးဆုံး ဝပ်ရှော့သို့ ဖြည်းညင်းစွာ မောင်းနှင်၍ စစ်ဆေးပါ။',
        milStatus: true
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* App Header & Top Navigation HUD */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        scannerConnected={true}
        batteryVoltage={batteryVoltage}
        zoomScale={zoomScale}
        setZoomScale={setZoomScale}
        isOnline={isOnline}
        setIsOnline={setIsOnline}
        onOpenOcrCamera={() => setIsCameraScannerOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        onOpenUpdateModal={() => setIsUpdateModalOpen(true)}
      />

      {/* Official Trademark Banner Card & Quick Install Notification */}
      <div className="max-w-7xl mx-auto w-full px-4 pt-4">
        <BrandTrademarkCard onOpenInstallModal={() => setIsInstallModalOpen(true)} />
      </div>

      {/* Main Container with Dynamic Zoom Support */}
      <main 
        className="flex-1 max-w-7xl w-full mx-auto px-4 py-5 pb-12"
        style={{ zoom: zoomScale !== 100 ? `${zoomScale}%` : undefined }}
      >
        {activeTab === 'scanner' && (
          <ScannerSimulator
            onSelectDtc={(dtc) => setSelectedDtc(dtc)}
            onNavigateToWiring={handleNavigateToWiring}
            onAskAiWithCodes={handleAskAiWithCodes}
          />
        )}

        {activeTab === 'dtc-list' && (
          <DtcLookupTool
            onSelectDtc={(dtc) => setSelectedDtc(dtc)}
            onNavigateToWiring={() => setActiveTab('gear-wiring')}
            onOpenOcrCamera={() => setIsCameraScannerOpen(true)}
          />
        )}

        {activeTab === 'nameplate' && (
          <NameplateScannerTool
            onOpenLiveCamera={() => setIsCameraScannerOpen(true)}
            isOnlineMode={isOnline}
          />
        )}

        {activeTab === 'gear-wiring' && (
          <GearboxWiringExplorer
            initialGearboxId={targetWiringGearbox}
            onOpenMultimeterForPin={handleOpenMultimeterForPin}
          />
        )}

        {activeTab === 'multimeter' && (
          <SolenoidOhmTester
            preselectedPin={selectedPinForMultimeter}
            gearboxName={multimeterGearboxName}
          />
        )}

        {activeTab === 'ai-consult' && (
          <AiMechanicConsultant
            initialPrompt={aiInitialPrompt}
            initialVehicle={aiInitialVehicle}
          />
        )}

        {activeTab === 'fluids' && (
          <FluidGuideModal />
        )}
      </main>

      {/* DTC Detail & Repair Modal */}
      {selectedDtc && (
        <DtcDetailModal
          dtc={selectedDtc}
          onClose={() => setSelectedDtc(null)}
          onNavigateToWiring={handleNavigateToWiring}
          onAskAiForCode={handleAskAiForCode}
        />
      )}

      {/* Camera / OCR Scanner Modal */}
      <CameraScannerModal
        isOpen={isCameraScannerOpen}
        onClose={() => setIsCameraScannerOpen(false)}
        onCodeDetected={handleCodeDetectedFromCamera}
      />

      {/* Install App / Save App Modal */}
      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredInstallPrompt}
      />

      {/* Database Live Update & Dual Mode Modal */}
      <DatabaseUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        isOnline={isOnline}
        setIsOnline={setIsOnline}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/90 px-4 pt-5 pb-8 sm:pb-5 text-xs text-slate-500 font-['Padauk',sans-serif]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-black font-['Chakra_Petch',sans-serif] text-sm bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              GREATSTAR • Z.N.W
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300">
              ပိုင်ရှင်: <strong className="text-amber-300">ဆရာ Zaw Naing Win (ဝပ်ရှော့အင်ဂျင်နီယာ)</strong>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400">
              DTC-PRO မော်တော်ယာဉ် ကုတ်ဖတ် & ဂီယာဝိုင်ယာ လမ်းညွှန်စနစ်
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsInstallModalOpen(true)}
              className="text-amber-400 hover:text-amber-300 hover:underline cursor-pointer font-semibold transition"
            >
              ဆော့ဝဲကို ဖုန်းတွင် သိမ်းရန် (Install)
            </button>
            <span className="text-slate-700">•</span>
            <span className="font-mono text-[11px] text-emerald-400/90 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
              100% OFFLINE READY
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
