import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  AlertCircle, 
  ChevronRight, 
  Layers, 
  Wrench, 
  Zap, 
  ShieldAlert, 
  CheckCircle,
  ExternalLink,
  Loader2,
  Camera,
  Car,
  Check,
  ShieldCheck,
  Wifi
} from 'lucide-react';
import { DTC_DATABASE } from '../data/dtcDatabase';
import { CAR_BRANDS } from '../data/brandsData';
import { DtcItem, DtcCategory, SeverityLevel } from '../types/diagnostic';

interface DtcLookupToolProps {
  onSelectDtc: (dtc: DtcItem) => void;
  onNavigateToWiring: () => void;
  onOpenOcrCamera: () => void;
}

export const DtcLookupTool: React.FC<DtcLookupToolProps> = ({
  onSelectDtc,
  onNavigateToWiring,
  onOpenOcrCamera,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Active brand info
  const activeBrandData = CAR_BRANDS.find(b => b.id === selectedBrand);

  // Filtered DTC list
  const filteredList = useMemo(() => {
    return DTC_DATABASE.filter(item => {
      // Query match (code, titleMm, titleEn, descriptionMm, symptoms)
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery = !q || (
        item.code.toLowerCase().includes(q) ||
        item.titleMm.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.descriptionMm.toLowerCase().includes(q) ||
        item.symptomsMm.some(s => s.toLowerCase().includes(q)) ||
        item.causesMm.some(c => c.toLowerCase().includes(q)) ||
        (item.affectedCarsMm && item.affectedCarsMm.toLowerCase().includes(q))
      );

      // Category match
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      // Brand match (if brand selected, check if brand name is in affectedCarsMm or brandNotesMm)
      let matchesBrand = true;
      if (selectedBrand !== 'All') {
        const brandName = CAR_BRANDS.find(b => b.id === selectedBrand)?.name.toLowerCase();
        if (brandName) {
          // If code is generic or explicitly matches this brand
          matchesBrand = !item.affectedCarsMm || item.affectedCarsMm.toLowerCase().includes(brandName) || item.affectedCarsMm.includes('အားလုံး');
        }
      }

      return matchesQuery && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  // Handle AI Lookup for any rare/unlisted code
  const handleAiLookup = async () => {
    const rawCode = searchQuery.trim().toUpperCase();
    if (!rawCode) return;

    // Check if code is already in local offline database
    const localMatch = DTC_DATABASE.find(d => d.code === rawCode || d.code.includes(rawCode));
    if (localMatch && !isAiLoading) {
      // Instantly open the rich offline data for immediate user satisfaction!
      onSelectDtc(localMatch);
      return;
    }

    setIsAiLoading(true);
    setAiError(null);

    const brandName = selectedBrand !== 'All' ? CAR_BRANDS.find(b => b.id === selectedBrand)?.name : 'General Japanese Car';

    try {
      const response = await fetch('/api/diagnostic/ai-lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: rawCode,
          carModel: `${brandName} (All Models)`,
        }),
      });

      const resData = await response.json();
      if (resData.success && resData.data) {
        const d = resData.data;
        const aiDtc: DtcItem = {
          code: d.code || rawCode,
          titleMm: d.titleMm || `${rawCode} ချွတ်ယွင်းချက်`,
          titleEn: `Diagnostic Code ${rawCode}`,
          category: (d.categoryMm?.includes('ဂီယာ') ? 'Transmission' : 'Engine') as DtcCategory,
          severity: (d.severityLevel?.toLowerCase() || 'high') as SeverityLevel,
          descriptionMm: `${d.severityReasonMm ? d.severityReasonMm + ' - ' : ''}${d.titleMm || ''}`,
          symptomsMm: d.symptomsMm || ['Check Engine မီးလင်းခြင်း'],
          causesMm: d.rootCausesMm || ['စနစ်အတွင်း ချွတ်ယွင်းချက်'],
          diagnosisStepsMm: d.stepByStepFixMm || ['ဝိုင်ယာနှင့် ဆင်ဆာ စစ်ဆေးပါ'],
          emergencyAdviceMm: d.severityLevel === 'critical' ? 'ကားကို ချက်ချင်းဘေးချရပ်ပြီး ဝပ်ရှော့ပြပါ။' : 'အနီးဆုံး ဝပ်ရှော့သို့ ဖြည်းညင်းစွာ မောင်းနှင်နိုင်ပါသည်။',
          gearWiringReference: d.gearWiringTipMm,
          milStatus: true,
        };
        onSelectDtc(aiDtc);
      } else {
        // Fallback to local match if available
        if (localMatch) {
          onSelectDtc(localMatch);
        } else {
          setAiError('လိုင်းအနည်းငယ် နှေးကွေးနေသော်လည်း အော့ဖ်လိုင်း စာရင်းထဲမှ သက်ဆိုင်ရာ ကုတ်များကို တိုက်ရိုက် ကြည့်ရှုနိုင်ပါသည်ခင်ဗျာ။');
        }
      }
    } catch (err: any) {
      if (localMatch) {
        onSelectDtc(localMatch);
      } else {
        setAiError('အင်တာနက် အဆက်အသွယ် ခေတ္တမရနိုင်သော်လည်း အောက်ပါ အော့ဖ်လိုင်း ကုတ်များကို တိုက်ရိုက်နှိပ်၍ ဖတ်ရှုနိုင်ပါသည်ခင်ဗျာ။');
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  const categories: { id: string; labelMm: string; count: number }[] = [
    { id: 'All', labelMm: 'အားလုံး (All)', count: DTC_DATABASE.length },
    { id: 'Transmission', labelMm: 'ဂီယာစနစ် (P07xx/P08xx)', count: DTC_DATABASE.filter(d => d.category === 'Transmission').length },
    { id: 'Engine', labelMm: 'အင်ဂျင်စနစ် (P00xx/P01xx)', count: DTC_DATABASE.filter(d => d.category === 'Engine').length },
    { id: 'ABS/Chassis', labelMm: 'ABS / ဘရိတ် (C-Code)', count: DTC_DATABASE.filter(d => d.category === 'ABS/Chassis').length },
    { id: 'Network', labelMm: 'CAN / ကွန်ရက် (U-Code)', count: DTC_DATABASE.filter(d => d.category === 'Network').length },
  ];

  return (
    <div className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded-full font-bold border border-amber-500/30">
                  DTC-PRO MULTI-BRAND LOOKUP
                </span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <Wifi className="w-3 h-3" /> OFFLINE READY
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-1 font-['Chakra_Petch',sans-serif]">
                ကားကုမ္ပဏီမျိုးစုံ Error Code ရှာဖွေရေးနှင့် မြန်မာလို အဖြေလွှာ
              </h2>
            </div>

            <button
              onClick={onOpenOcrCamera}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow shadow-amber-500/20 self-start sm:self-auto"
            >
              <Camera className="w-4 h-4" />
              <span>ကင်မရာဖြင့် Scan ဖတ်မည်</span>
            </button>
          </div>

          {/* Step 1: Car Brand Selector */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium flex items-center gap-1.5 font-['Padauk',sans-serif]">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                ထုတ်လုပ်သည့် ကုမ္ပဏီ ရွေးချယ်ပါ (Brand):
              </span>
              {selectedBrand !== 'All' && (
                <button
                  onClick={() => setSelectedBrand('All')}
                  className="text-amber-400 hover:underline text-[11px]"
                >
                  အားလုံး ပြန်ကြည့်မည်
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              <button
                onClick={() => setSelectedBrand('All')}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition cursor-pointer font-medium ${
                  selectedBrand === 'All'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                ကားအားလုံး (All Brands)
              </button>

              {CAR_BRANDS.map(brand => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand.id)}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition cursor-pointer font-medium ${
                    selectedBrand === brand.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            {/* Popular models hint for active brand */}
            {activeBrandData && (
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-300 font-['Padauk',sans-serif] flex flex-wrap items-center gap-2">
                <span className="text-amber-400 font-bold">{activeBrandData.name} မော်ဒယ်များ:</span>
                <span>{activeBrandData.popularModels.slice(0, 7).join(', ')}</span>
                <span className="text-slate-500">•</span>
                <span className="text-cyan-400 font-mono">OBD: {activeBrandData.obdLocationMm}</span>
              </div>
            )}
          </div>

          {/* Search Input with quick clear and search button */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-amber-400" />
            </div>
            <input
              type="text"
              placeholder="Error Code (ဥပမာ- P0705, P0171, P0011, C0200) သို့မဟုတ် မြန်မာလို ပြဿနာ ရိုက်ထည့်ပါ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border-2 border-slate-700 hover:border-slate-600 focus:border-amber-500 rounded-2xl pl-11 pr-24 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition shadow-inner font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-2 px-3 my-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs transition cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* System Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition cursor-pointer font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-slate-200 text-slate-950 font-bold shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.labelMm} <span className="opacity-70 text-[10px]">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Quick Code Shortcut Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
            <span className="text-[11px] text-slate-500">အဖြစ်များသော ကုတ်များ:</span>
            {['P0011', 'P0101', 'P0171', 'P0300', 'P0335', 'P0420', 'P0500', 'P0700', 'P0705', 'P0746', 'P0750', 'P0755', 'C0200', 'U0100'].map(chip => (
              <button
                key={chip}
                onClick={() => setSearchQuery(chip)}
                className="font-mono text-[11px] bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 px-2 py-0.5 rounded text-amber-400 border border-slate-700 transition cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <div className="text-xs text-slate-400">
          တွေ့ရှိသော ကုတ်အရေအတွက်: <strong className="text-white font-mono">{filteredList.length}</strong> ခု
          {selectedBrand !== 'All' && <span className="text-amber-400 ml-1">({activeBrandData?.name})</span>}
        </div>

        {/* AI Lookup for any unlisted code */}
        {searchQuery.trim() && (
          <button
            onClick={handleAiLookup}
            disabled={isAiLoading}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
          >
            {isAiLoading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            )}
            <span>"{searchQuery.toUpperCase()}" ကို AI ဖြင့် မြန်မာလို အသေးစိတ် ရှာမည်</span>
          </button>
        )}
      </div>

      {aiError && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs text-red-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{aiError}</span>
        </div>
      )}

      {/* DTC Cards Grid */}
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredList.map((dtc) => (
            <div
              key={dtc.code}
              onClick={() => onSelectDtc(dtc)}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-3xl p-5 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Top Code Badge & Severity */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base sm:text-lg font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded-xl border border-amber-500/30 group-hover:border-amber-500 transition">
                      {dtc.code}
                    </span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      dtc.severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      dtc.severity === 'high' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      dtc.severity === 'medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-slate-700 text-slate-300'
                    }`}>
                      {dtc.severity}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded-lg border border-slate-800">
                    {dtc.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-bold text-slate-100 font-['Padauk',sans-serif] mb-2 group-hover:text-amber-300 transition line-clamp-2">
                  {dtc.titleMm}
                </h4>

                <p className="text-xs text-slate-400 font-['Padauk',sans-serif] line-clamp-2 leading-relaxed mb-3">
                  {dtc.descriptionMm}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] text-slate-300 font-['Padauk',sans-serif] flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold shrink-0">လက္ခဏာ:</span>
                  <span className="line-clamp-1">{dtc.symptomsMm[0] || 'Check Engine မီးလင်းခြင်း'}</span>
                </div>

                {dtc.emergencyAdviceMm && (
                  <div className="text-[11px] text-emerald-300/90 font-['Padauk',sans-serif] flex items-start gap-1.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{dtc.emergencyAdviceMm}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="text-[10px] text-slate-500 font-['Padauk',sans-serif] line-clamp-1 max-w-[200px]">
                    {dtc.affectedCarsMm ? `ကားများ: ${dtc.affectedCarsMm}` : 'ကားအားလုံး'}
                  </span>
                  <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>အသေးစိတ်ဖတ်ရန်</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 text-amber-400 mx-auto flex items-center justify-center">
            <Search className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-['Padauk',sans-serif]">
              "{searchQuery}" နှင့် ကိုက်ညီသော Error Code အော့ဖ်လိုင်းဒေတာဘေ့စ်တွင် မတွေ့ရှိပါ
            </h4>
            <p className="text-xs text-slate-400 font-['Padauk',sans-serif] max-w-md mx-auto">
              ဤကုတ်အတွက် မြန်မာလို အသေးစိတ် ရှင်းလင်းချက်နှင့် ပြုပြင်နည်းကို ဆရာကြီး AI မှ တိုက်ရိုက် မေးမြန်းထုတ်ယူနိုင်ပါသည်။
            </p>
          </div>
          <button
            onClick={handleAiLookup}
            disabled={isAiLoading}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer shadow inline-flex items-center gap-2"
          >
            {isAiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>ဆရာကြီး AI ဖြင့် အသေးစိတ် ရှာဖွေစစ်ဆေးမည်</span>
          </button>
        </div>
      )}
    </div>
  );
};
