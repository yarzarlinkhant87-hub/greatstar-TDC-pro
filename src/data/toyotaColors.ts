export interface ToyotaColorItem {
  code: string;
  nameEn: string;
  nameMm: string;
  category: 'White' | 'Silver & Gray' | 'Black' | 'Red & Wine' | 'Blue & Green' | 'Gold & Bronze';
  hex: string;
  popularVehicles: string;
  paintType: 'Pearl (၃ ထပ်ဆေး)' | 'Metallic (မက်တဲလစ်)' | 'Mica (မိုက်ကာ)' | 'Solid (ဆေးရိုးရိုး)';
}

export const TOYOTA_POPULAR_COLORS: ToyotaColorItem[] = [
  { code: '070', nameEn: 'White Pearl Crystal Shine', nameMm: 'ပုလဲဖြူရောင် (White Pearl Crystal)', category: 'White', hex: '#F2EFEB', popularVehicles: 'Premio, Allion, Fielder, Alphard, Prado, Mark X, Crown', paintType: 'Pearl (၃ ထပ်ဆေး)' },
  { code: '040', nameEn: 'Super White II', nameMm: 'အဖြူရောင်စစ်စစ် (Super White)', category: 'White', hex: '#FFFFFF', popularVehicles: 'Wish, Probox, Vitz, Corolla, Hilux', paintType: 'Solid (ဆေးရိုးရိုး)' },
  { code: '058', nameEn: 'White (Commercial)', nameMm: 'ပရိုဘောက်စ် အဖြူ (Commercial White)', category: 'White', hex: '#F5F5F5', popularVehicles: 'Probox, Succeed, Hiace', paintType: 'Solid (ဆေးရိုးရိုး)' },
  { code: '062', nameEn: 'White Pearl Crystal Shine (Early)', nameMm: 'ပုလဲဖြူ (ခေတ်ဟောင်း မော်ဒယ်)', category: 'White', hex: '#EDEBE4', popularVehicles: 'Harrier ACU30, Mark X GRX120, Crown GRS180, Kluger', paintType: 'Pearl (၃ ထပ်ဆေး)' },
  { code: '042', nameEn: 'White Pearl Mica', nameMm: 'ပုလဲဖြူ မိုက်ကာ', category: 'White', hex: '#F0EEE9', popularVehicles: 'Alphard 10 Series, Ipsum, Windom', paintType: 'Pearl (၃ ထပ်ဆေး)' },
  { code: '1F7', nameEn: 'Silver Metallic', nameMm: 'ငွေရောင် မက်တဲလစ် (Silver Metallic)', category: 'Silver & Gray', hex: '#C5C7C8', popularVehicles: 'Premio, Fielder, Alphard 20, Wish 20, Prado 150', paintType: 'Metallic (မက်တဲလစ်)' },
  { code: '1E7', nameEn: 'Silver Mica Metallic', nameMm: 'ငွေရောင် မိုက်ကာ မက်တဲလစ်', category: 'Silver & Gray', hex: '#BFC3C7', popularVehicles: 'Probox, Prado 120, Mark II, Premio', paintType: 'Metallic (မက်တဲလစ်)' },
  { code: '1G3', nameEn: 'Gray Metallic (Dolphin)', nameMm: 'ခဲရောင် မက်တဲလစ် (Dolphin Gray)', category: 'Silver & Gray', hex: '#525456', popularVehicles: 'Premio, Alphard, Prado 150, Fielder 160', paintType: 'Metallic (မက်တဲလစ်)' },
  { code: '1D9', nameEn: 'Silver Metallic (Cool Silver)', nameMm: 'ငွေရောင် အေး', category: 'Silver & Gray', hex: '#C0C2C5', popularVehicles: 'Wish 10 Series, Caldina', paintType: 'Metallic (မက်တဲလစ်)' },
  { code: '202', nameEn: 'Black (Solid Black)', nameMm: 'အနက်ရောင်စစ်စစ် (Solid 202 Black)', category: 'Black', hex: '#080808', popularVehicles: 'Alphard 20/30, Vellfire, Prado 120/150, Mark X, Crown', paintType: 'Solid (ဆေးရိုးရိုး)' },
  { code: '209', nameEn: 'Black Mica', nameMm: 'မိုက်ကာ အနက် (Black Mica သလင်းပါ)', category: 'Black', hex: '#121214', popularVehicles: 'Premio, Fielder, Wish, Probox, Belta, Vitz', paintType: 'Mica (မိုက်ကာ)' },
  { code: '218', nameEn: 'Attitude Black Mica', nameMm: 'သလင်းနက် မိုက်ကာ (Attitude Black)', category: 'Black', hex: '#0E1012', popularVehicles: 'Prado 150 Facelift, Camry, Harrier 60', paintType: 'Mica (မိုက်ကာ)' },
  { code: '220', nameEn: 'Sparkling Black Pearl Crystal', nameMm: 'မိတ်ကပ်နက် မက်တဲလစ် (Sparkling Black)', category: 'Black', hex: '#18151E', popularVehicles: 'Alphard 30, Noah/Voxy 80', paintType: 'Pearl (၃ ထပ်ဆေး)' },
  { code: '3R3', nameEn: 'Red Mica Metallic (Barcelona Red)', nameMm: 'ကြက်သွေးနီ မိုက်ကာ (Red Mica)', category: 'Red & Wine', hex: '#7C1A22', popularVehicles: 'Belta, Vitz, Fielder, Premio', paintType: 'Metallic (မက်တဲလစ်)' },
  { code: '3P0', nameEn: 'Super Red V', nameMm: 'အနီရောင်တောက်တောက် (Super Red)', category: 'Red & Wine', hex: '#B81A1A', popularVehicles: 'Vitz RS, Yaris', paintType: 'Solid (ဆေးရိုးရိုး)' },
  { code: '8S6', nameEn: 'Dark Blue Mica (Nautical Blue)', nameMm: 'အပြာရင့်ရောင် မိုက်ကာ (Dark Blue)', category: 'Blue & Green', hex: '#1C2E4A', popularVehicles: 'Fielder, Wish, Premio', paintType: 'Mica (မိုက်ကာ)' },
  { code: '8V0', nameEn: 'Iceberg Silver Metallic', nameMm: 'ရေခဲငွေရောင် (Iceberg Silver)', category: 'Silver & Gray', hex: '#B7C3CB', popularVehicles: 'Premio 260, Allion', paintType: 'Metallic (မက်တဲလစ်)' },
  { code: '4T8', nameEn: 'Beige Metallic (Sandy Beach)', nameMm: 'ရွှေညိုရောင် / ဘေဂျ့်ရောင် (Gold Beige)', category: 'Gold & Bronze', hex: '#B9A992', popularVehicles: 'Premio, Camry ACV40', paintType: 'Metallic (မက်တဲလစ်)' }
];
