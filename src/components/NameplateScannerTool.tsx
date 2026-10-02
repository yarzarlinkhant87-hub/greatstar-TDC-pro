import React, { useState } from 'react';
import { 
  Camera, 
  Scan, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  Cpu, 
  Droplets, 
  Compass, 
  Search, 
  FileText, 
  Upload, 
  RefreshCw, 
  Zap,
  ShieldCheck,
  Check,
  Globe,
  Wifi,
  WifiOff,
  Flame,
  Wrench
} from 'lucide-react';
import { SAMPLE_NAMEPLATES, NameplateSpec } from '../data/nameplateData';

interface NameplateScannerToolProps {
  onOpenLiveCamera?: () => void;
  isOnlineMode?: boolean;
}

export const NameplateScannerTool: React.FC<NameplateScannerToolProps> = ({
  onOpenLiveCamera,
  isOnlineMode = true,
}) => {
  const [selectedPlate, setSelectedPlate] = useState<NameplateSpec>(SAMPLE_NAMEPLATES[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeRegionFilter, setActiveRegionFilter] = useState<'All' | 'Asia' | 'Europe' | 'America'>('All');
  const [customPlateInput, setCustomPlateInput] = useState<string>('');
  const [isScanningSimulation, setIsScanningSimulation] = useState<boolean>(false);
  const [copiedNotice, setCopiedNotice] = useState<boolean>(false);

  // Filter plates by region and search query
  const filteredPlates = SAMPLE_NAMEPLATES.filter(p => {
    const matchesRegion = activeRegionFilter === 'All' || p.region === activeRegionFilter;
    const matchesQuery = !searchQuery || 
      p.carModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.engineCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.gearboxCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.vinOrFrame.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.samplePlateText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  const handleScanSample = (plate: NameplateSpec) => {
    setIsScanningSimulation(true);
    setTimeout(() => {
      setSelectedPlate(plate);
      setIsScanningSimulation(false);
    }, 450);
  };

  const handleCopySpec = () => {
    const text = `[GREATSTAR Z.N.W - ကားနိမ်းပလိပ်ပြား အချက်အလက်]
မော်ဒယ်: ${selectedPlate.carModel}
စက်အင်ဂျင်: ${selectedPlate.engineCode} (${selectedPlate.engineDisplacement})
ဂီယာအမျိုးအစား: ${selectedPlate.gearboxCode} (${selectedPlate.gearboxTypeMm})
မောင်းနှင်မှု: ${selectedPlate.driveSystemMm}
အင်ဂျင်ဝိုင်: ${selectedPlate.recommendedEngineOil} (${selectedPlate.oilCapacityLiters.engineOil})
ဂီယာဆီ: ${selectedPlate.recommendedGearOil} (${selectedPlate.oilCapacityLiters.gearboxFluid})
အကြံပြုချက်: ${selectedPlate.workshopNoticeMm}`;

    navigator.clipboard?.writeText(text);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  // Custom decoder logic for user input
  const handleCustomDecode = () => {
    if (!customPlateInput.trim()) return;

    setIsScanningSimulation(true);
    setTimeout(() => {
      const q = customPlateInput.toLowerCase();
      // Match from existing database or create dynamic decoded result
      const found = SAMPLE_NAMEPLATES.find(p => 
        q.includes(p.engineCode.toLowerCase()) || 
        q.includes(p.gearboxCode.toLowerCase().split(' ')[0]) ||
        q.includes(p.vinOrFrame.toLowerCase().split('-')[0]) ||
        p.samplePlateText.toLowerCase().includes(q)
      );

      if (found) {
        setSelectedPlate(found);
      } else {
        // Dynamic parsed fallback representation
        const dynamicPlate: NameplateSpec = {
          plateId: 'custom-decoded-' + Date.now(),
          brand: q.includes('toyota') ? 'Toyota' : q.includes('honda') ? 'Honda' : q.includes('ford') ? 'Ford' : q.includes('bmw') ? 'BMW' : 'Generic Automotive',
          region: q.includes('bmw') || q.includes('benz') || q.includes('audi') ? 'Europe' : q.includes('ford') || q.includes('chevy') ? 'America' : 'Asia',
          carModel: 'ဖတ်ရှုရရှိသော ယာဉ်အချက်အလက် (' + customPlateInput.slice(0, 24) + ')',
          samplePlateText: customPlateInput,
          vinOrFrame: 'CUSTOM-CHASSIS-' + Math.floor(100000 + Math.random() * 900000),
          engineCode: q.includes('1nz') ? '1NZ-FE (1.5L)' : q.includes('2zr') ? '2ZR-FE (1.8L)' : q.includes('l13') ? 'L13A (1.3L)' : 'Multi-Valve EFI Engine',
          engineDisplacement: '1,498 cc (DOHC Multi-Point Injection)',
          engineTypeMm: 'အီလက်ထရွန်းနစ် ထိန်းချုပ် အင်ဂျင်စနစ် (ECU Controlled)',
          gearboxCode: q.includes('k31') ? 'K310/K312 Super CVT-i' : q.includes('u34') ? 'U340E 4-Speed AT' : q.includes('8hp') ? 'ZF 8HP45' : 'Electronic Controlled Transmission',
          gearboxTypeMm: q.includes('cvt') ? 'Continuously Variable Transmission (CVT)' : 'Automatic Transmission (AT)',
          driveSystemMm: q.includes('4wd') ? '4WD / AWD (၄ ဘီးယက် စနစ်)' : 'FWD / RWD (၂ ဘီးဆွဲ စနစ်)',
          driveTypeCode: q.includes('4wd') ? '4WD' : 'FWD',
          recommendedEngineOil: '5W-30 / 0W-20 API SP Full Synthetic',
          recommendedGearOil: q.includes('cvt') ? 'Super CVT Fluid (TC/FE) သို့မဟုတ် HCF-2' : 'ATF-WS / Dexron VI',
          oilCapacityLiters: {
            engineOil: '3.8 Liters',
            gearboxFluid: '3.5 Liters (Service Refill)'
          },
          workshopNoticeMm: 'နိမ်းပလိပ်ပြား စာသားမှ တွေ့ရှိချက်အရ အင်ဂျင်နှင့် ဂီယာအမျိုးအစားကို လိုင်းဖွင့်ပြီး AI Cloud မှ တိုက်ဆိုင်စစ်ဆေးပေးထားပါသည်။ ဆီအမျိုးအစား မမှားစေရန် အထူးဂရုပြုပါ။'
        };
        setSelectedPlate(dynamicPlate);
      }
      setIsScanningSimulation(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Mode Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-2 border-amber-500/30 p-5 sm:p-6 shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono">
                NAMEPLATE & VIN SCANNER
              </span>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                <Wifi className="w-3 h-3 text-emerald-400" />
                <span>နှစ်မျိုးသုံး (HYBRID OFFLINE+ONLINE)</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Chakra_Petch',sans-serif]">
              ကားနိမ်းပလိပ်ပြား စကန်ဖတ် & အင်ဂျင်၊ ဂီယာ၊ ဆီ အမျိုးအစား ခွဲခြမ်းစစ်ဆေးမှု
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-['Padauk',sans-serif]">
              ဘောနပ်အောက်ရှိ နိမ်းပလိပ်ပြား (သို့မဟုတ်) တံခါးဘေး VIN Plate ကို ဖတ်လိုက်ရုံဖြင့် အင်ဂျင်ကုတ်၊ ဂီယာအမျိုးအစား (AT/CVT)၊ ရှေ့ဆွဲ/နောက်ဆွဲ/4WD နှင့် သုံးရမည့် ဆီအမျိုးအစားများကို ချက်ချင်း ပြသပေးပါသည်။
            </p>
          </div>

          {/* Shutter Camera Button */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={onOpenLiveCamera}
              className="flex-1 md:flex-initial px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/20 transition cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              <span>ကင်မရာဖြင့် နိမ်းပလိပ်ပြား ရိုက်မည်</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Decoder Detail, Right Interactive Plates / Search */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Decoded Vehicle Specification Card */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl bg-slate-900 border-2 border-slate-700/80 p-5 sm:p-6 shadow-xl relative overflow-hidden">
            {isScanningSimulation && (
              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-3">
                <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
                <span className="text-amber-300 font-bold font-mono text-sm animate-pulse">
                  နိမ်းပလိပ်ပြား အချက်အလက် ခွဲခြမ်းစိတ်ဖြာနေပါသည်...
                </span>
              </div>
            )}

            {/* Spec Card Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {selectedPlate.region} • {selectedPlate.brand}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {selectedPlate.driveTypeCode}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-['Chakra_Petch',sans-serif]">
                  {selectedPlate.carModel}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  VIN / Frame: <strong className="text-amber-400">{selectedPlate.vinOrFrame}</strong>
                </span>
              </div>

              <button
                onClick={handleCopySpec}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition cursor-pointer"
              >
                {copiedNotice ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">ကူးယူပြီး</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy မှတ်တမ်း</span>
                  </>
                )}
              </button>
            </div>

            {/* Decoded Spec Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
              {/* Engine Spec */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>စက်အင်ဂျင် (ENGINE SPEC)</span>
                </div>
                <div className="text-base font-bold text-white font-mono">
                  {selectedPlate.engineCode}
                </div>
                <div className="text-xs text-slate-300">
                  {selectedPlate.engineDisplacement}
                </div>
                <div className="text-[11px] text-slate-400 font-['Padauk',sans-serif]">
                  {selectedPlate.engineTypeMm}
                </div>
              </div>

              {/* Gearbox Spec */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>ဂီယာဘောက်စ် (TRANSMISSION)</span>
                </div>
                <div className="text-base font-bold text-cyan-300 font-mono">
                  {selectedPlate.gearboxCode}
                </div>
                <div className="text-xs text-slate-300 font-['Padauk',sans-serif]">
                  {selectedPlate.gearboxTypeMm}
                </div>
                {selectedPlate.axleCode && (
                  <div className="text-[11px] font-mono text-slate-400">
                    Axle Code: {selectedPlate.axleCode}
                  </div>
                )}
              </div>

              {/* Drive Layout */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>မောင်းနှင်မှုစနစ် (DRIVE SYSTEM)</span>
                </div>
                <div className="text-base font-bold text-emerald-300 font-mono">
                  {selectedPlate.driveTypeCode}
                </div>
                <div className="text-xs text-slate-300 font-['Padauk',sans-serif]">
                  {selectedPlate.driveSystemMm}
                </div>
              </div>

              {/* Plant / Built */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>ထုတ်လုပ်သည့်စက်ရုံ / ဆေးကုတ်</span>
                </div>
                <div className="text-xs font-mono text-slate-200">
                  {selectedPlate.plantCode || 'Official Factory Built'}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Color/Trim: {selectedPlate.colorTrim || 'Factory Code'}
                </div>
              </div>
            </div>

            {/* Recommended Oil Specs & Capacities */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-950 to-orange-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 font-mono uppercase">
                <Droplets className="w-4 h-4 text-amber-400" />
                <span>သတ်မှတ်ဆီအမျိုးအစားနှင့် ဆံ့ဝင်ဆံ့ပမာဏ (FLUID RECOMMENDATION)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px] mb-1">အင်ဂျင်ဝိုင် (Engine Oil):</div>
                  <div className="font-bold text-slate-100 font-mono">{selectedPlate.recommendedEngineOil}</div>
                  <div className="text-[11px] text-amber-400 font-mono mt-1">
                    ပမာဏ: {selectedPlate.oilCapacityLiters.engineOil}
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px] mb-1">ဂီယာဆီ (Gearbox Fluid):</div>
                  <div className="font-bold text-cyan-300 font-mono">{selectedPlate.recommendedGearOil}</div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-1">
                    ပမာဏ: {selectedPlate.oilCapacityLiters.gearboxFluid}
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop Notice / Cautions */}
            <div className="mt-4 p-3.5 rounded-2xl bg-red-950/30 border border-red-900/50 flex items-start gap-2.5">
              <Wrench className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div className="text-xs text-slate-300 font-['Padauk',sans-serif]">
                <strong className="text-amber-400 font-bold block mb-0.5">ဝပ်ရှော့ ဆရာများအတွက် အထူးသတိပြုရန်:</strong>
                {selectedPlate.workshopNoticeMm}
              </div>
            </div>

            {/* Plate Visual Representation Box */}
            <div className="mt-4 p-3 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-emerald-400/90 whitespace-pre-wrap leading-relaxed">
              <div className="text-[10px] text-slate-400 mb-1 flex items-center justify-between border-b border-slate-800 pb-1">
                <span>[စက်ရုံထုတ် အလူမီနီယံပြား စာသား]</span>
                <span className="text-slate-400">{selectedPlate.brand} JAPAN / GLOBAL</span>
              </div>
              {selectedPlate.samplePlateText}
            </div>
          </div>
        </div>

        {/* Right Side: Quick Samples & Custom Search / Plate Input */}
        <div className="lg:col-span-5 space-y-4">
          {/* Custom Search / Decoder Input */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>နိမ်းပလိပ်ပြား စာသား ရိုက်ထည့်ရှာဖွေရန်</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Live Parser</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={customPlateInput}
                onChange={(e) => setCustomPlateInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomDecode()}
                placeholder="ဥပမာ- NCP51, K312, 1NZ-FE, 6R80, WDD205..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
              />
              <button
                onClick={handleCustomDecode}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs font-mono transition cursor-pointer"
              >
                ခွဲခြမ်းမည်
              </button>
            </div>
          </div>

          {/* Region Filter Selector */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>ကားဒေသ ရွေးချယ်မှု (REGION FILTER)</span>
              </span>
              <span className="text-[10px] text-amber-400 font-mono">{filteredPlates.length} စီး တွေ့ရှိ</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
              {(['All', 'Asia', 'Europe', 'America'] as const).map(reg => (
                <button
                  key={reg}
                  onClick={() => setActiveRegionFilter(reg)}
                  className={`py-1.5 rounded-xl transition cursor-pointer text-center font-bold ${
                    activeRegionFilter === reg
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {reg === 'All' ? 'အားလုံး' : reg}
                </button>
              ))}
            </div>

            {/* List of Pre-Loaded Real Car Nameplates */}
            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {filteredPlates.map(plate => {
                const isSelected = selectedPlate.plateId === plate.plateId;
                return (
                  <div
                    key={plate.plateId}
                    onClick={() => handleScanSample(plate)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/60 shadow-md'
                        : 'bg-slate-950/80 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-['Chakra_Petch',sans-serif]">
                        {plate.carModel}
                      </span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        plate.driveTypeCode === '4WD' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {plate.driveTypeCode}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-1.5 text-[11px] font-mono text-slate-400">
                      <span>စက်: <strong className="text-slate-200">{plate.engineCode}</strong></span>
                      <span>•</span>
                      <span>ဂီယာ: <strong className="text-cyan-300">{plate.gearboxCode.split(' ')[0]}</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
