import { ToyotaVehicle } from '../types/nameplate';

export function sanitizeVehicle(raw: any, index: number = 0): ToyotaVehicle {
  if (!raw || typeof raw !== 'object') {
    return {
      id: `fallback-${Date.now()}-${index}`,
      brand: 'Toyota',
      countryOfOrigin: 'Japan',
      modelName: 'Unknown Model',
      burmeseName: 'မော်တော်ယာဉ်',
      chassisCode: 'UNKNOWN',
      fullModelCode: 'UNKNOWN',
      generationYears: 'အချက်အလက် မရှိသေးပါ',
      category: 'sedan',
      categoryLabelMm: 'ယာဉ်',
      fuelType: 'ဓာတ်ဆီ (Petrol)',
      nameplatePlate: {
        model: 'MODEL',
        engine: 'ENGINE',
        frame: 'FRAME',
        colorTrim: '070 / STD',
        transAxle: 'AUTO',
        plant: 'OEM Plant'
      },
      engine: {
        code: 'N/A',
        displacement: 'N/A',
        cylinders: 'N/A',
        valvesSystem: 'N/A',
        timingType: 'N/A',
        horsepower: 'N/A',
        torque: 'N/A'
      },
      transmission: {
        transCode: 'N/A',
        transName: 'N/A',
        transType: 'Automatic (AT)',
        driveType: 'FWD (ရှေ့ဆွဲ ၂ ဘီး)',
        driveDetailMm: 'ပုံမှန် မောင်းနှင်မှုစနစ်',
        axleCode: 'N/A',
        axleExplanationMm: 'N/A'
      },
      fluids: {
        engineOil: {
          viscosity: '5W-30',
          capacityWithFilter: '4.0 L',
          capacityWithoutFilter: '3.7 L',
          interval: '5,000 km',
          standard: 'API SP'
        },
        transmissionFluid: {
          fluidType: 'OEM Fluid',
          cautionNote: 'စက်ရုံသတ်မှတ် ဂီယာဆီကိုသာ အသုံးပြုပါ',
          drainRefillCapacity: '3.5 L',
          panDropFilterCapacity: '4.0 L',
          totalDryCapacity: '7.0 L',
          inspectionMethod: 'သတ်မှတ် အပူချိန်တွင် စစ်ဆေးပါ'
        },
        coolant: {
          type: 'Long Life Coolant',
          capacity: '5.5 L'
        },
        brakeFluid: 'DOT 3 / DOT 4',
        fuelTankCapacity: '50 L'
      },
      paints: [
        {
          code: '070',
          nameEn: 'White Pearl',
          nameMm: 'အဖြူရောင်',
          colorHex: '#F0EFEA',
          trimCode: 'STD',
          trimDescriptionMm: 'စက်ရုံထုတ် အတွင်းခန်း'
        }
      ],
      codeBreakdown: [],
      workshopTips: ['စက်ရုံသတ်မှတ် ဆီအမျိုးအစားနှင့် ပမာဏအတိုင်းသာ ထည့်သွင်းအသုံးပြုပါ']
    };
  }

  const paints = Array.isArray(raw.paints) && raw.paints.length > 0 
    ? raw.paints.map((p: any) => ({
        code: String(p?.code || '070'),
        nameEn: String(p?.nameEn || 'Standard Paint'),
        nameMm: String(p?.nameMm || 'မူရင်းဆေးရောင်'),
        colorHex: String(p?.colorHex || '#E2E8F0'),
        trimCode: String(p?.trimCode || 'STD'),
        trimDescriptionMm: String(p?.trimDescriptionMm || 'အတွင်းခန်း')
      }))
    : [
        {
          code: String(raw.nameplatePlate?.colorTrim?.split('/')?.[0]?.trim() || '070'),
          nameEn: 'Standard Paint',
          nameMm: 'မူရင်းဆေးရောင်',
          colorHex: '#F0EFEA',
          trimCode: String(raw.nameplatePlate?.colorTrim?.split('/')?.[1]?.trim() || 'STD'),
          trimDescriptionMm: 'စက်ရုံထုတ် အတွင်းခန်း'
        }
      ];

  const codeBreakdown = Array.isArray(raw.codeBreakdown)
    ? raw.codeBreakdown.map((b: any) => ({
        codeSegment: String(b?.codeSegment || ''),
        meaning: String(b?.meaning || ''),
        meaningMm: String(b?.meaningMm || '')
      }))
    : [];

  const workshopTips = Array.isArray(raw.workshopTips)
    ? raw.workshopTips.map((t: any) => String(t || ''))
    : ['စက်ရုံသတ်မှတ် ဆီအမျိုးအစားနှင့် ပမာဏအတိုင်းသာ ထည့်သွင်းအသုံးပြုပါ'];

  return {
    id: String(raw.id || `vehicle-${Date.now()}-${index}`),
    brand: String(raw.brand || 'Toyota'),
    countryOfOrigin: String(raw.countryOfOrigin || 'Japan'),
    modelName: String(raw.modelName || 'Unknown Model'),
    burmeseName: String(raw.burmeseName || raw.modelName || 'မော်တော်ယာဉ်'),
    chassisCode: String(raw.chassisCode || 'N/A'),
    fullModelCode: String(raw.fullModelCode || 'N/A'),
    generationYears: String(raw.generationYears || 'မသိရှိသေးပါ'),
    yearIdentificationMethodMm: raw.yearIdentificationMethodMm ? String(raw.yearIdentificationMethodMm) : undefined,
    category: raw.category || 'sedan',
    categoryLabelMm: raw.categoryLabelMm ? String(raw.categoryLabelMm) : 'ယာဉ်',
    fuelType: String(raw.fuelType || 'ဓာတ်ဆီ (Petrol)'),
    isCustomScanned: !!raw.isCustomScanned,
    scannedAt: raw.scannedAt ? String(raw.scannedAt) : undefined,
    plateLocationMm: raw.plateLocationMm ? String(raw.plateLocationMm) : undefined,

    nameplatePlate: {
      model: String(raw.nameplatePlate?.model || raw.fullModelCode || 'MODEL'),
      engine: String(raw.nameplatePlate?.engine || raw.engine?.code || 'ENGINE'),
      frame: String(raw.nameplatePlate?.frame || 'FRAME/VIN'),
      colorTrim: String(raw.nameplatePlate?.colorTrim || '070 / STD'),
      transAxle: String(raw.nameplatePlate?.transAxle || 'AUTO'),
      plant: String(raw.nameplatePlate?.plant || 'OEM Plant'),
      extraStamps: raw.nameplatePlate?.extraStamps ? String(raw.nameplatePlate.extraStamps) : undefined
    },

    engine: {
      code: String(raw.engine?.code || 'N/A'),
      displacement: String(raw.engine?.displacement || 'N/A'),
      cylinders: String(raw.engine?.cylinders || 'N/A'),
      valvesSystem: String(raw.engine?.valvesSystem || 'DOHC'),
      timingType: String(raw.engine?.timingType || 'Timing Chain'),
      timingNote: raw.engine?.timingNote ? String(raw.engine.timingNote) : undefined,
      horsepower: String(raw.engine?.horsepower || 'N/A'),
      torque: String(raw.engine?.torque || 'N/A'),
      sparkPlug: raw.engine?.sparkPlug ? String(raw.engine.sparkPlug) : undefined,
      sparkPlugOrInjector: raw.engine?.sparkPlugOrInjector ? String(raw.engine.sparkPlugOrInjector) : undefined
    },

    transmission: {
      transCode: String(raw.transmission?.transCode || 'N/A'),
      transName: String(raw.transmission?.transName || 'Automatic Transmission'),
      transType: raw.transmission?.transType || 'Automatic (AT)',
      driveType: String(raw.transmission?.driveType || 'FWD (ရှေ့ဆွဲ ၂ ဘီး)'),
      driveDetailMm: String(raw.transmission?.driveDetailMm || 'ပုံမှန် မောင်းနှင်မှု ဆွဲအားစနစ်'),
      axleCode: String(raw.transmission?.axleCode || 'N/A'),
      axleExplanationMm: String(raw.transmission?.axleExplanationMm || 'Diff / Final Gear Spec')
    },

    fluids: {
      engineOil: {
        viscosity: String(raw.fluids?.engineOil?.viscosity || '0W-20 / 5W-30'),
        capacityWithFilter: String(raw.fluids?.engineOil?.capacityWithFilter || '4.0 L'),
        capacityWithoutFilter: String(raw.fluids?.engineOil?.capacityWithoutFilter || '3.7 L'),
        interval: String(raw.fluids?.engineOil?.interval || '5,000 km သို့မဟုတ် ၆ လ'),
        standard: String(raw.fluids?.engineOil?.standard || 'API SP / ILSAC GF-6A')
      },
      transmissionFluid: {
        fluidType: String(raw.fluids?.transmissionFluid?.fluidType || 'OEM Transmission Fluid'),
        cautionNote: String(raw.fluids?.transmissionFluid?.cautionNote || 'သတ်မှတ် ဂီယာဆီစံနှုန်းကိုသာ ထည့်သွင်းပါ'),
        drainRefillCapacity: String(raw.fluids?.transmissionFluid?.drainRefillCapacity || '3.5 - 4.0 L'),
        panDropFilterCapacity: String(raw.fluids?.transmissionFluid?.panDropFilterCapacity || '4.0 - 4.5 L'),
        totalDryCapacity: String(raw.fluids?.transmissionFluid?.totalDryCapacity || '7.0 L'),
        inspectionMethod: String(raw.fluids?.transmissionFluid?.inspectionMethod || 'သတ်မှတ် အပူချိန်တွင် စစ်ဆေးပါ')
      },
      differentialFluid: raw.fluids?.differentialFluid ? {
        frontDiff: raw.fluids.differentialFluid.frontDiff ? String(raw.fluids.differentialFluid.frontDiff) : undefined,
        rearDiff: raw.fluids.differentialFluid.rearDiff ? String(raw.fluids.differentialFluid.rearDiff) : undefined,
        transferCase: raw.fluids.differentialFluid.transferCase ? String(raw.fluids.differentialFluid.transferCase) : undefined
      } : undefined,
      coolant: {
        type: String(raw.fluids?.coolant?.type || 'Super Long Life Coolant'),
        capacity: String(raw.fluids?.coolant?.capacity || '5.5 L')
      },
      brakeFluid: String(raw.fluids?.brakeFluid || 'DOT 3 / DOT 4'),
      fuelTankCapacity: String(raw.fluids?.fuelTankCapacity || '50 L')
    },

    paints,
    codeBreakdown,
    workshopTips
  };
}
