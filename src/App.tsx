import React, { useState, useEffect } from 'react';
import { BrandLogo } from './components/BrandLogo';
import { NameplatePlateCard } from './components/NameplatePlateCard';
import { DetailModal } from './components/DetailModal';
import { TransmissionDirectoryModal } from './components/TransmissionDirectoryModal';
import { ColorDirectoryModal } from './components/ColorDirectoryModal';
import { InteractiveDecoderTool } from './components/InteractiveDecoderTool';
import { UniversalNameplateScannerModal } from './components/UniversalNameplateScannerModal';
import { PlateLocationGuideModal } from './components/PlateLocationGuideModal';
import { TOYOTA_PETROL_DATABASE } from './data/toyotaDatabase';
import { ToyotaVehicle } from './types/nameplate';
import { 
  Search, 
  Settings, 
  Palette, 
  Sparkles, 
  Car, 
  Compass,
  Camera,
  X
} from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVehicle, setSelectedVehicle] = useState<ToyotaVehicle | null>(null);
  const [activeSection, setActiveSection] = useState<'fluids' | 'transmission' | 'engine' | 'paint' | 'breakdown' | null>(null);

  // Modals state
  const [isTransModalOpen, setIsTransModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isDecoderModalOpen, setIsDecoderModalOpen] = useState(false);
  const [isScannerModalOpen, setIsScannerModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  // Scanned vehicles saved to localStorage
  const [scannedVehicles, setScannedVehicles] = useState<ToyotaVehicle[]>([]);

  // Load saved scanned vehicles on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('autocars_scanned_history');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setScannedVehicles(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to load scanned vehicles from localStorage:', e);
    }
  }, []);

  const handleVehicleSavedFromScanner = (newVehicle: ToyotaVehicle) => {
    setScannedVehicles((prev) => [newVehicle, ...prev]);
  };

  // Combine database vehicles with saved scanned vehicles
  const allVehicles: ToyotaVehicle[] = [...scannedVehicles, ...TOYOTA_PETROL_DATABASE];

  // Filter vehicles
  const filteredVehicles = allVehicles.filter(v => {
    const q = searchTerm.toLowerCase();
    const matchesSearch = 
      v.modelName.toLowerCase().includes(q) ||
      v.burmeseName.toLowerCase().includes(q) ||
      v.chassisCode.toLowerCase().includes(q) ||
      v.fullModelCode.toLowerCase().includes(q) ||
      v.engine.code.toLowerCase().includes(q) ||
      v.transmission.transCode.toLowerCase().includes(q) ||
      (v.brand && v.brand.toLowerCase().includes(q)) ||
      (v.fuelType && v.fuelType.toLowerCase().includes(q));

    let matchesCat = true;
    if (selectedCategory === 'all') {
      matchesCat = true;
    } else if (selectedCategory === 'scanned') {
      matchesCat = !!v.isCustomScanned;
    } else if (selectedCategory === 'petrol') {
      matchesCat = v.fuelType.includes('ဓာတ်ဆီ') && !v.fuelType.includes('Hybrid');
    } else if (selectedCategory === 'diesel_commonrail') {
      matchesCat = v.fuelType.includes('Common Rail');
    } else if (selectedCategory === 'heavy_duty') {
      matchesCat = v.category === 'heavy_duty' || v.fuelType.includes('Unit Injector');
    } else if (selectedCategory === 'european_american') {
      matchesCat = v.category === 'european_american' || v.brand === 'BMW' || v.brand === 'Mercedes-Benz' || v.brand === 'Ford';
    } else {
      matchesCat = v.category === selectedCategory;
    }

    return matchesSearch && matchesCat;
  });

  const handleOpenSection = (vehicle: ToyotaVehicle, section: 'fluids' | 'transmission' | 'engine' | 'paint' | 'breakdown') => {
    setSelectedVehicle(vehicle);
    setActiveSection(section);
  };

  const handleSelectVehicleFromDecoder = (vehicleId: string) => {
    const target = allVehicles.find(v => v.id === vehicleId);
    if (target) {
      setSelectedVehicle(target);
      const el = document.getElementById(vehicleId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sleek, Compact Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 px-3 sm:px-6 py-2.5 shadow-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Aesthetic Logo */}
          <BrandLogo size="sm" showText={true} />

          {/* Clean Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Primary Action: Camera AI Scanner */}
            <button
              type="button"
              onClick={() => setIsScannerModalOpen(true)}
              className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/25 transition active:scale-95 font-['Padauk',sans-serif] cursor-pointer shrink-0"
            >
              <Camera className="w-4 h-4 text-slate-950 shrink-0" />
              <span className="font-bold">ဓာတ်ပုံဖတ်မည်</span>
            </button>

            {/* Quick Tools */}
            <button
              type="button"
              onClick={() => setIsDecoderModalOpen(true)}
              className="px-2.5 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 font-['Padauk',sans-serif] cursor-pointer"
              title="နိမ်းပြားဖတ်စက်"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">ဖတ်စက်</span>
            </button>

            <button
              type="button"
              onClick={() => setIsLocationModalOpen(true)}
              className="px-2.5 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 font-['Padauk',sans-serif] cursor-pointer"
              title="နိမ်းပြား ရှာဖွေနည်း"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">နိမ်းပြားရှာနည်း</span>
            </button>

            <button
              type="button"
              onClick={() => setIsTransModalOpen(true)}
              className="px-2.5 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-300 border border-sky-500/30 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 font-['Padauk',sans-serif] cursor-pointer"
              title="ဂီယာဇယား"
            >
              <Settings className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden md:inline">ဂီယာဇယား</span>
            </button>

            <button
              type="button"
              onClick={() => setIsColorModalOpen(true)}
              className="px-2.5 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 font-['Padauk',sans-serif] cursor-pointer"
              title="ဆေးကုဒ်"
            >
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden md:inline">ဆေးကုဒ်</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Body - Spacious, Clean Reading Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-4 md:px-6 md:py-6 space-y-4">
        {/* Compact, Crisp Header Introduction */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-black text-slate-100 font-['Padauk',sans-serif] flex items-center gap-2">
              <span>မော်တော်ယာဉ် နိမ်းပလိပ်ပြားနှင့် စက်ပြင်နည်းပညာ စွယ်စုံကျမ်း</span>
            </h1>
            <p className="text-xs text-slate-400 font-['Padauk',sans-serif] mt-0.5">
              ဂျပန်၊ ဥရောပ၊ အမေရိကန် • ဓာတ်ဆီ၊ ဒီဇယ် Common Rail၊ ကားကြီး EUI၊ မန်နျူရယ်/အော်တို အစုံ
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-['Padauk',sans-serif] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsLocationModalOpen(true)}
              className="text-amber-400/90 hover:text-amber-300 transition flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>နိမ်းပြား ရှာဖွေနည်း လမ်းညွှန်</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ကားအမည် သို့မဟုတ် နံပါတ် ရိုက်ရှာပါ (Premio, Fielder, Revo 1GD, Vigo 1KD, Hino E13C, BMW B48, NZE141, K310)..."
              className="w-full pl-11 pr-10 py-3 bg-slate-900/90 border border-slate-800 focus:border-amber-500/80 rounded-xl text-sm md:text-base text-slate-100 placeholder-slate-500 shadow-lg focus:outline-none transition"
            />
            {searchTerm && (
              <button 
                type="button" 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200 bg-slate-800 rounded-md cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-['Padauk',sans-serif] scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              ကားအားလုံး ({allVehicles.length})
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('petrol')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition cursor-pointer ${
                selectedCategory === 'petrol'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              🚗 ဓာတ်ဆီကားများ
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('diesel_commonrail')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition cursor-pointer ${
                selectedCategory === 'diesel_commonrail'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              🛢️ ဒီဇယ် Common Rail
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('heavy_duty')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition cursor-pointer ${
                selectedCategory === 'heavy_duty'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              🚚 ကားကြီး ကုန်တင်/ဘတ်စ်
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('european_american')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition cursor-pointer ${
                selectedCategory === 'european_american'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              🇩🇪 ဥရောပ & အမေရိကန်
            </button>

            {scannedVehicles.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedCategory('scanned')}
                className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition cursor-pointer ${
                  selectedCategory === 'scanned'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40'
                }`}
              >
                💾 ဖုန်းထဲသိမ်းထားသောကားများ ({scannedVehicles.length})
              </button>
            )}
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-0.5 font-mono pt-1">
          <span>
            မော်ဒယ်အရေအတွက်: <strong className="text-amber-400 font-mono text-sm">{filteredVehicles.length}</strong> မျိုး
          </span>
          <span className="text-[11px] text-slate-500 hidden sm:inline font-['Padauk',sans-serif]">
            (နိမ်းပလိပ်ပြား စာကြောင်းများနှင့် ဆီအမျိုးအစားများကို နှိပ်၍ အသေးစိတ် ဖတ်ရှုနိုင်သည်)
          </span>
        </div>

        {/* Vehicle Cards Grid - Spacious & Clean */}
        <div className="space-y-5">
          {filteredVehicles.length === 0 ? (
            <div className="p-8 sm:p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 space-y-4">
              <Search className="w-10 h-10 text-slate-600 mx-auto" />
              <div className="space-y-1">
                <p className="font-['Padauk',sans-serif] text-base text-slate-200">
                  ရှာဖွေမှုနှင့် ကိုက်ညီသော မော်ဒယ် အော့ဖ်လိုင်းထဲတွင် မတွေ့ရှိပါခင်ဗျာ။
                </p>
                <p className="text-xs text-slate-400 font-['Padauk',sans-serif]">
                  အင်တာနက်ဖွင့်ပြီး အထက်ပါ <strong className="text-amber-400">"ဓာတ်ပုံရိုက်ဖတ်မည်"</strong> ခလုတ်ကို နှိပ်၍ အသစ် စကင်ဖတ်နိုင်ပါသည်!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsScannerModalOpen(true)}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>နိမ်းပြား ဓာတ်ပုံရိုက်ဖတ်မည်</span>
              </button>
            </div>
          ) : (
            filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} id={vehicle.id}>
                <NameplatePlateCard
                  vehicle={vehicle}
                  onOpenSection={(section) => handleOpenSection(vehicle, section)}
                />
              </div>
            ))
          )}
        </div>
      </main>

      {/* Detail Modal */}
      <DetailModal
        vehicle={selectedVehicle}
        section={activeSection}
        onClose={() => {
          setSelectedVehicle(null);
          setActiveSection(null);
        }}
      />

      {/* Universal Camera Nameplate AI Scanner Modal */}
      <UniversalNameplateScannerModal
        isOpen={isScannerModalOpen}
        onClose={() => setIsScannerModalOpen(false)}
        onVehicleSaved={handleVehicleSavedFromScanner}
      />

      {/* Plate Location Guide Modal */}
      <PlateLocationGuideModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />

      {/* Transmission Directory Modal */}
      <TransmissionDirectoryModal
        isOpen={isTransModalOpen}
        onClose={() => setIsTransModalOpen(false)}
      />

      {/* Color Directory Modal */}
      <ColorDirectoryModal
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
      />

      {/* Interactive Decoder Modal */}
      <InteractiveDecoderTool
        isOpen={isDecoderModalOpen}
        onClose={() => setIsDecoderModalOpen(false)}
        onSelectVehicle={handleSelectVehicleFromDecoder}
      />

      {/* Clean, Professional Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-5 px-4 text-center text-xs text-slate-500 font-['Padauk',sans-serif] space-y-1">
        <div className="font-bold text-slate-400">
          GREATSTAR &copy; {new Date().getFullYear()} — မော်တော်ယာဉ် နိမ်းပလိပ်ပြား ဖတ်နည်းနှင့် စက်ပြင်နည်းပညာ စွယ်စုံကျမ်း
        </div>
        <p className="text-[11px] text-slate-600">
          Universal Vehicle Nameplate & Technical Workshop Guide
        </p>
      </footer>
    </div>
  );
}
