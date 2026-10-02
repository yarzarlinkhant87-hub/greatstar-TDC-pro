export interface CarBrand {
  id: string;
  name: string;
  region: 'Asia' | 'Europe' | 'America';
  country: string;
  popularModels: string[];
  commonEngines: string[];
  commonGearboxes: string[];
  driveTypes: string[];
  recommendedFluids: {
    engineOil: string;
    gearOil: string;
  };
  diagnosticProtocol: string;
  obdLocationMm: string;
}

export const CAR_BRANDS: CarBrand[] = [
  // ==================== ASIA (အာရှ) ====================
  {
    id: 'toyota',
    name: 'Toyota',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['Probox (NCP51/160)', 'Fielder (NZE141/161)', 'Axio', 'Wish (ZGE20)', 'Premio / Allion', 'Vitz / Yaris', 'Belta', 'Crown (GRS180/200)', 'Alphard / Vellfire', 'Harrier', 'Prado / Land Cruiser', 'HiAce', 'Passo'],
    commonEngines: ['1NZ-FE (1.5L)', '2NZ-FE (1.3L)', '2ZR-FAE (1.8L Valvematic)', '1KR-FE (1.0L 3-Cyl)', '2GR-FE (3.5L V6)', '1GD-FTV (2.8L Diesel Turbo)', '2TR-FE (2.7L Gasoline)'],
    commonGearboxes: ['U340E / U440E (4-Speed AT)', 'K310 / K311 / K312 / K313 (Super CVT-i)', 'U140E / U241E / U660E (5/6-Speed AT)', 'A750E / A760E (Super ECT)'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'RWD (နောက်ဆွဲ)', '4WD / AWD (အချိန်ပြည့် လေးဘီးယက်)'],
    recommendedFluids: {
      engineOil: '0W-20 / 5W-30 API SP / ILSAC GF-6A',
      gearOil: 'Toyota Genuine ATF-WS (6AT) / Super CVT Fluid TC သို့မဟုတ် FE (CVT)'
    },
    diagnosticProtocol: 'ISO 15765-4 (CAN 500kbps) & ISO 14230-4 (KWP2000)',
    obdLocationMm: 'ယာဉ်မောင်းဘက် စတီယာရင်တံ အောက်ခြေ ဘယ်ဘက် (Fuse Box အနီး)'
  },
  {
    id: 'honda',
    name: 'Honda',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['Fit / Jazz (GD1, GE6, GK3)', 'Insight (ZE2 Hybrid)', 'Freed (GB3)', 'Vezel / HR-V (RU3 Hybrid/Gas)', 'Civic (FD1/FB/FC)', 'CR-V (RD/RE/RM)', 'Stepwgn'],
    commonEngines: ['L13A / L15A (i-DSI / i-VTEC)', 'L15B (Earth Dreams)', 'LDA-MF6 (IMA Hybrid)', 'LEB-H1 (i-DCD Sport Hybrid)', 'R18A / R20A (1.8/2.0L)', 'K24A (2.4L DOHC i-VTEC)'],
    commonGearboxes: ['Multi-Matic CVT (HMMF)', 'Earth Dreams CVT (HCF-2)', '7-Speed Dual Clutch i-DCD (Honda Ultra ATF DW-1 / MTF-III)'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'Real-Time AWD (အလိုအလျောက် လေးဘီးယက်)'],
    recommendedFluids: {
      engineOil: '0W-20 / 5W-30 Honda Ultra LEO API SP',
      gearOil: 'Honda Genuine HMMF (CVT အဟောင်း) / HCF-2 (Earth Dreams CVT) / DW-1 (Automatic)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & Honda Proprietary Protocol',
    obdLocationMm: 'စတီယာရင်တိုင် ညာဘက်အောက်ခြေ ဒူးခေါင်းနေရာအနီး'
  },
  {
    id: 'nissan',
    name: 'Nissan',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['Note (E12 / E11 / e-POWER)', 'Tiida / Latio', 'Sylphy', 'Serena (C26/C27)', 'X-Trail (T31/T32)', 'March / Micra', 'Juke', 'Navara (D40/NP300)', 'Caravan (NV350)'],
    commonEngines: ['HR12DE (1.2L 3-Cyl)', 'HR12DDR (1.2L Supercharged)', 'HR15DE (1.5L)', 'MR20DE / MR20DD (2.0L)', 'YD25DDTi (2.5L Diesel)', 'YS23DDT (2.3L Twin Turbo)'],
    commonGearboxes: ['Jatco JF015E (CVT7 / RE0F11A)', 'Jatco JF011E (RE0F10A)', '4/5-Speed Automatic', '7-Speed Jatco AT (Navara)'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'All-Mode 4x4-i', 'RWD / Part-Time 4WD (Navara)'],
    recommendedFluids: {
      engineOil: '0W-20 / 5W-30 Nissan Strong Save X API SP',
      gearOil: 'Nissan Genuine NS-2 / NS-3 CVT Fluid (JF015E/JF011E) သို့မဟုတ် Matic-S (AT)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN (Consult-III / Generic OBD)',
    obdLocationMm: 'Fuse Box အဖုံးနောက် သို့မဟုတ် စတီယာရင်အောက် ဘယ်ဘက်'
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['Wagon R (MH23S, MH34S, MH44S, MH55S)', 'Spacia (MK32S/42S)', 'Hustler (MR31S/41S)', 'Swift (ZC71S, ZC72S, ZC33S)', 'Alto / Alto Eco', 'Every Van (DA64V/DA17V)', 'Jimny (JB23/JB64/JB74)', 'Ertiga'],
    commonEngines: ['K6A (660cc)', 'R06A (660cc VVT)', 'K12B / K12C (1.2L DualJet)', 'K14B / K15B (1.4/1.5L Ertiga/Jimny)'],
    commonGearboxes: ['Jatco CVT7 (Sub-planetary Gearbox)', '4-Speed Automatic (Aisin)', 'AGS (Auto Gear Shift / Automated Manual)'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'Part-time 4WD (Low/High Transfer - Jimny)', 'Full-time 4WD (Kei Cars)'],
    recommendedFluids: {
      engineOil: '0W-16 / 0W-20 Suzuki Ecstar API SP',
      gearOil: 'Suzuki Green-1 / Green-2 CVT Fluid သို့မဟုတ် Ecstar ATF 3317'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN',
    obdLocationMm: 'စတီယာရင်တိုင် အောက်ခြေ တည့်တည့် (အဖြူ သို့မဟုတ် အနက်ရောင် 16-Pin)'
  },
  {
    id: 'mazda',
    name: 'Mazda',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['Demio / Mazda 2 (DE3FS, DJ5FS Skyactiv)', 'Axela / Mazda 3 (BL5FW, BM5FS)', 'Atenza / Mazda 6', 'CX-3', 'CX-5', 'Bongo Van / Truck', 'BT-50'],
    commonEngines: ['ZJ-VE (1.3L)', 'ZY-VE (1.5L)', 'SkyActiv-G 1.3/1.5/2.0L', 'SkyActiv-D 1.5/2.2L Clean Diesel', 'F8 / FE (Bongo)'],
    commonGearboxes: ['SkyActiv-Drive 6-Speed AT', '4-Speed FN4A-EL (Demio/Bongo)', 'Jatco CVT'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'i-ACTIV AWD', 'RWD / 4WD (Bongo/BT-50)'],
    recommendedFluids: {
      engineOil: '0W-20 Mazda Golden Eco / Skyactiv-D 0W-30 (DPF-safe)',
      gearOil: 'Mazda Original Oil ATF FZ (Skyactiv Blue) သို့မဟုတ် M-V (ATF-M5)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN',
    obdLocationMm: 'စတီယာရင်ဘယ်ဘက် Bonet ဆွဲခလုတ်အပေါ်နား'
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['Pajero / Montero (V73/V93/V98)', 'Pajero Sport (KG4W/KR1W)', 'Triton / L200 (KB4T/KL3T)', 'Outlander', 'Delica D:5', 'Mirage / Attrage', 'RVR', 'Xpander'],
    commonEngines: ['4D56 (2.5L DI-D Common Rail)', '4N15 (2.4L MIVEC Clean Diesel)', '6G72 / 6G74 (3.0/3.5L V6)', '4A91 / 4A92 (1.5/1.6L)', '3A92 (1.2L 3-Cyl Mirage)'],
    commonGearboxes: ['INVECS-II 4/5-Speed AT', 'INVECS-III CVT', 'Aisin 6/8-Speed AT (Pajero Sport)'],
    driveTypes: ['Super Select 4WD-II (2H, 4H, 4HLc, 4LLc)', 'FWD (ရှေ့ဆွဲ - Mirage/Xpander)', 'AWC / S-AWC'],
    recommendedFluids: {
      engineOil: '5W-30 / 10W-30 API CK-4 / SP',
      gearOil: 'Mitsubishi Diamond ATF SP-III သို့မဟုတ် DiaQueen ATF-PA (8-Speed) / CVT Fluid J4'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & MUT-III',
    obdLocationMm: 'ယာဉ်မောင်းဘက် Fuse cover ဘေး'
  },
  {
    id: 'isuzu',
    name: 'Isuzu',
    region: 'Asia',
    country: 'Japan (ဂျပန်)',
    popularModels: ['D-Max (RT50 / RG01)', 'MU-X (RF20 / RJ01)', 'Elf Truck (NKR/NPR)', 'Forward Truck'],
    commonEngines: ['4JJ1-TCX (3.0L Ddi VGS Turbo)', '4JK1-TCX (2.5L Ddi VGS Turbo)', 'RZ4E-TC (1.9L Blue Power Ddi)', '4HK1 (5.2L Truck)'],
    commonGearboxes: ['Aisin 5/6-Speed Automatic', '6-Speed Manual Transmission', 'Smoother-Ex (Amt AMT)'],
    driveTypes: ['Terrain Command 4WD (4L/4H Shift-on-the-fly)', 'RWD (နောက်ဆွဲ 2WD)'],
    recommendedFluids: {
      engineOil: '5W-30 / 10W-30 Isuzu Besco Clean Super API CK-4 / DH-2',
      gearOil: 'Isuzu Besco ATF-III သို့မဟုတ် Besco Transoil 5W-30 (Manual)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & KWP2000',
    obdLocationMm: 'စတီယာရင်အောက်ခြေ ဘယ်ဘက်'
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    region: 'Asia',
    country: 'Korea (ကိုရီးယား)',
    popularModels: ['Grand Starex / H-1', 'Tucson (LM/TL/NX4)', 'Santa Fe (DM/TM)', 'Elantra / Avante (MD/AD)', 'Accent', 'Porter II'],
    commonEngines: ['D4CB (2.5L CRDi VGT)', 'Nu 2.0L MPI / GDI', 'Gamma 1.6L MPI', 'Smartstream G1.6/D2.0'],
    commonGearboxes: ['Hyundai/Kia 4/5/6-Speed AT', '8-Speed Automatic (A8F36)', '7-Speed Dual Clutch (7DCT)'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'HTRAC AWD (အီလက်ထရွန်းနစ် လေးဘီးယက်)', 'RWD (နောက်ဆွဲ Starex)'],
    recommendedFluids: {
      engineOil: '5W-30 ACEA C3 / API SP Synthetic',
      gearOil: 'Hyundai Genuine ATF SP-IV / SP-IV-RR သို့မဟုတ် DCT Fluid'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN',
    obdLocationMm: 'ယာဉ်မောင်းဘက် Fuse Box အဖုံးအတွင်း'
  },
  {
    id: 'kia',
    name: 'Kia',
    region: 'Asia',
    country: 'Korea (ကိုရီးယား)',
    popularModels: ['Sportage (SL/QL/NQ5)', 'Sorento (XM/UM/MQ4)', 'Carnival / Sedona (YP/KA4)', 'Bongo III Truck', 'Morning / Picanto', 'K5 / Optima'],
    commonEngines: ['D4HA (2.0L CRDi)', 'D4CB (2.5L Diesel Bongo)', 'Theta II 2.4L', 'Kappa 1.0/1.25L'],
    commonGearboxes: ['6-Speed Automatic', '8-Speed Automatic', 'CVT / IVT', '7-Speed DCT'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'AWD with Lock Mode', 'RWD / 4WD (Bongo III)'],
    recommendedFluids: {
      engineOil: '5W-30 ACEA C2/C3 / API SP',
      gearOil: 'Kia Genuine ATF SP-IV သို့မဟုတ် SP-IV M'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN',
    obdLocationMm: 'အတွင်းပိုင်း Fuse Box အဖုံးကို ဖွင့်ပါက တွေ့ရမည်'
  },
  {
    id: 'byd',
    name: 'BYD & Chinese EV/ICE',
    region: 'Asia',
    country: 'China (တရုတ်)',
    popularModels: ['Atto 3 (Yuan Plus)', 'Dolphin', 'Seal', 'Haval H6 (Great Wall)', 'Changan CS75 Plus', 'MG ZS / MG 5'],
    commonEngines: ['Permanent Magnet Synchronous Motor (EV)', '1.5L Turbo DM-i Hybrid', '1.5T / 2.0T Direct Injection (Haval/MG)'],
    commonGearboxes: ['Single-Speed Reduction Gear (EV)', 'E-CVT (DM-i Hybrid)', '7-Speed Wet DCT (Haval 7DCT300)'],
    driveTypes: ['FWD (ရှေ့ဆွဲ)', 'Dual-Motor AWD (လျှပ်စစ်လေးဘီးယက်)'],
    recommendedFluids: {
      engineOil: '0W-20 API SP / SN Plus (Hybrid/ICE) သို့မဟုတ် EV Coolant',
      gearOil: 'EV Reducer Gear Oil / Shell Spirax S6 DCTF (Dual Clutch)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & DoIP (Diagnostics over IP)',
    obdLocationMm: 'စတီယာရင်တိုင် အောက်ခြေ ဘယ်ဘက် အပေါက်'
  },

  // ==================== EUROPE (ဥရောပ) ====================
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    region: 'Europe',
    country: 'Germany (ဂျာမနီ)',
    popularModels: ['C-Class (W204 / W205 / W206)', 'E-Class (W212 / W213)', 'S-Class (W221 / W222)', 'GLC / GLE / GLS', 'A-Class / CLA'],
    commonEngines: ['M271 (1.8L Supercharged/CGI)', 'M274 (2.0L Turbo)', 'M276 (3.5L V6)', 'OM651 / OM654 (2.1L / 2.0L Diesel)', 'M256 (3.0L Inline-6 Turbo with EQ Boost)'],
    commonGearboxes: ['7G-Tronic Plus (722.9)', '9G-Tronic (725.0)', '7G-DCT Dual Clutch (CLA/A-Class)'],
    driveTypes: ['RWD (နောက်ဆွဲ)', '4MATIC (All-Wheel Drive အချိန်ပြည့် လေးဘီးယက်)', 'FWD (A-Class)'],
    recommendedFluids: {
      engineOil: '5W-30 / 5W-40 MB-Approval 229.5 (Gasoline) / MB 229.51 / 229.52 (Diesel DPF)',
      gearOil: 'MB 236.15 (Blue ATF - 7G Plus) သို့မဟုတ် MB 236.17 (Gold ATF - 9G-Tronic)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN / UDS Protocol (DoIP)',
    obdLocationMm: 'ယာဉ်မောင်းဘက် အောက်ခြေ အဖုံးခတ်ထားသော အပေါက်'
  },
  {
    id: 'bmw',
    name: 'BMW',
    region: 'Europe',
    country: 'Germany (ဂျာမနီ)',
    popularModels: ['3 Series (E90 / F30 / G20)', '5 Series (E60 / F10 / G30)', '7 Series (F01/G11)', 'X3 (E83/F25/G01)', 'X5 (E70/F15/G05)'],
    commonEngines: ['N52 / N53 (3.0L Inline-6 N/A)', 'N20 / B48 (2.0L TwinPower Turbo)', 'N55 / B58 (3.0L Turbo)', 'N47 / B47 (2.0L Turbo Diesel)'],
    commonGearboxes: ['ZF 6HP (6HP19/6HP26)', 'ZF 8HP (8HP45/8HP50/8HP70 8-Speed)', '7-Speed M-DCT'],
    driveTypes: ['RWD (နောက်ဆွဲ sDrive)', 'xDrive (Intelligent AWD လေးဘီးယက်)'],
    recommendedFluids: {
      engineOil: '0W-30 / 5W-30 BMW Longlife-01 / Longlife-04 (Diesel)',
      gearOil: 'ZF Lifeguard Fluid 8 (8HP) သို့မဟုတ် ZF Lifeguard Fluid 6 (6HP)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN / UDS / BMW-FAST (ENET / D-CAN)',
    obdLocationMm: 'ယာဉ်မောင်းဘက် ကစ်ပန်နယ် (Kick panel) အဖုံးအတွင်း'
  },
  {
    id: 'audi-vw',
    name: 'Audi & Volkswagen',
    region: 'Europe',
    country: 'Germany (ဂျာမနီ)',
    popularModels: ['Audi A4 (B8/B9)', 'Audi A6 (C7/C8)', 'Audi Q5 / Q7', 'VW Golf (MK6/MK7)', 'VW Passat', 'VW Tiguan', 'VW Touareg'],
    commonEngines: ['EA888 Gen 1/2/3 (1.8T / 2.0T TSI/TFSI)', 'EA211 (1.4T TSI)', '3.0L V6 Supercharged / TDI', 'EA189 / EA288 (2.0 TDI)'],
    commonGearboxes: ['DSG / S-Tronic 6-Speed Wet (DQ250)', 'DSG 7-Speed Dry (DQ200)', 'DSG 7-Speed Wet (DQ381/DQ500)', 'ZF 8-Speed Tiptronic'],
    driveTypes: ['FWD (ရှေ့ဆွဲ Front-Wheel Drive)', 'Quattro / 4Motion (Permanent AWD / Haldex AWD)'],
    recommendedFluids: {
      engineOil: '5W-30 / 5W-40 VW 502 00 / 505 00 သို့မဟုတ် VW 504 00 / 507 00 (LongLife III)',
      gearOil: 'VW Genuine G 052 182 A2 (Wet DSG) သို့မဟုတ် G 052 171 A2 (Dry DSG Gear section)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & UDS (VAG VCDS / ODIS Protocol)',
    obdLocationMm: 'ဒက်ရှ်ဘုတ်အောက် ဘယ်ဘက် အခေါင်းအတွင်း (ခရမ်းရောင်/အနက်ရောင် OBD Socket)'
  },
  {
    id: 'volvo',
    name: 'Volvo',
    region: 'Europe',
    country: 'Sweden (ဆွီဒင်)',
    popularModels: ['XC90', 'XC60', 'S60 / V60', 'S90 / V90', 'XC40'],
    commonEngines: ['Drive-E 2.0L Turbo / Supercharged (T5/T6)', 'T8 Twin Engine Plug-in Hybrid', 'D4 / D5 2.0L Twin Turbo Diesel', 'B5 Mild Hybrid'],
    commonGearboxes: ['Aisin 8-Speed Automatic (TG-81SC)', 'Aisin 6-Speed (TF-80SC)'],
    driveTypes: ['AWD (BorgWarner / Haldex AWD)', 'FWD (ရှေ့ဆွဲ)'],
    recommendedFluids: {
      engineOil: '0W-20 Castrol Edge Professional V (Volvo VCC RBS0-2AE standard)',
      gearOil: 'Volvo Genuine ATF AW-1 (Aisin 8-Speed)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & Volvo VIDA protocol',
    obdLocationMm: 'စတီယာရင်ဘေး အောက်ခြေ ဘယ်ဘက်'
  },
  {
    id: 'land-rover',
    name: 'Land Rover / Range Rover',
    region: 'Europe',
    country: 'United Kingdom (ဗြိတိန်)',
    popularModels: ['Range Rover Sport', 'Range Rover Evoque', 'Range Rover Vogue', 'Discovery 4 / 5', 'Defender (L663)'],
    commonEngines: ['Ingenium 2.0L Turbo (Gasoline / Diesel)', '3.0L TDV6 / SDV6 Turbo Diesel', '5.0L Supercharged V8'],
    commonGearboxes: ['ZF 8HP70 / 8HP76 8-Speed Automatic', 'ZF 9HP48 9-Speed (Evoque)'],
    driveTypes: ['Terrain Response 4WD / AWD (Full-Time with Low Range)', 'AWD with Active Driveline'],
    recommendedFluids: {
      engineOil: '5W-30 / 0W-30 STJLR.03.5003 / STJLR.03.5007',
      gearOil: 'ZF Lifeguard 8 သို့မဟုတ် ZF Lifeguard 9 (9HP)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & UDS (JLR Pathfinder / SDD)',
    obdLocationMm: 'စတီယာရင်တိုင် ဘယ်ဘက်အောက်နား'
  },

  // ==================== AMERICA (အမေရိက) ====================
  {
    id: 'ford',
    name: 'Ford',
    region: 'America',
    country: 'USA (အမေရိကန်)',
    popularModels: ['Ranger (T6 2.2 / 3.2 / 2.0 Bi-Turbo)', 'Everest (U375)', 'EcoSport', 'Explorer', 'F-150', 'Mustang', 'Escape'],
    commonEngines: ['Duratorq TDCi 2.2L (PUMA)', 'Duratorq TDCi 3.2L (5-Cyl)', '2.0L EcoBlue Bi-Turbo (Panther)', '2.3L EcoBoost', '5.0L Coyote V8'],
    commonGearboxes: ['6R80 6-Speed Automatic', '10R80 10-Speed SelectShift AT', '6F35 6-Speed AT', 'PowerShift 6-Speed Dual Clutch (DPS6)'],
    driveTypes: ['Part-Time 4WD (2H, 4H, 4L Shift-on-Fly)', 'Full-Time 4WD with Terrain Management', 'RWD / FWD'],
    recommendedFluids: {
      engineOil: '5W-30 Ford WSS-M2C913-D / WSS-M2C950-A (0W-30 EcoBlue)',
      gearOil: 'Motorcraft MERCON LV (6R80) သို့မဟုတ် Motorcraft MERCON ULV (10R80 10-Speed)'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN (MS-CAN / HS-CAN Dual Bus - Ford IDS/FORScan)',
    obdLocationMm: 'ဒက်ရှ်ဘုတ် ဘယ်ဘက်အစွန်း ကာဗာအတွင်း'
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet & GMC',
    region: 'America',
    country: 'USA (အမေရိကန်)',
    popularModels: ['Colorado (2.5 / 2.8 Duramax)', 'Trailblazer', 'Silverado 1500', 'Tahoe / Suburban', 'Cruze', 'Captiva'],
    commonEngines: ['2.8L Duramax Turbo Diesel (XLD28 / LWN)', '5.3L EcoTec3 V8 (L83)', '1.4L / 1.5L Turbo Ecotec', '6.2L EcoTec3 V8'],
    commonGearboxes: ['6L50 / 6L80 6-Speed Automatic', 'Hydra-Matic 8L90 8-Speed AT', 'Allison 10-Speed AT (Heavy Duty)'],
    driveTypes: ['Autotrac 4WD (2WD, Auto, 4WD High, 4WD Low)', 'RWD (နောက်ဆွဲ)', 'FWD (Captiva/Cruze)'],
    recommendedFluids: {
      engineOil: '5W-30 dexos1 Gen 2/3 (Gasoline) သို့မဟုတ် dexos2 (Diesel Duramax)',
      gearOil: 'Mobil 1 Synthetic LV ATF HP သို့မဟုတ် GM DEXRON-VI ATF'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN & GM LAN (GDS2 / Tech2)',
    obdLocationMm: 'စတီယာရင်တိုင် အောက်ခြေ တည့်တည့် (ယာဉ်မောင်းခြေထောက်နေရာ)'
  },
  {
    id: 'jeep-dodge',
    name: 'Jeep & Dodge / RAM',
    region: 'America',
    country: 'USA (အမေရိကန်)',
    popularModels: ['Jeep Wrangler (JK / JL)', 'Jeep Grand Cherokee (WK2 / WL)', 'Jeep Renegade / Compass', 'RAM 1500', 'Dodge Challenger / Charger'],
    commonEngines: ['3.6L Pentastar V6', '2.0L GME Hurricane Turbo', '5.7L HEMI V8 with MDS', '3.0L EcoDiesel V6'],
    commonGearboxes: ['TorqueFlite 8-Speed Automatic (850RE / 8HP75)', 'Chrysler 545RFE 5-Speed AT'],
    driveTypes: ['Command-Trac / Rock-Trac 4x4 (Heavy Duty Transfer Case with 4:1 Low Range)', 'Selec-Terrain 4WD', 'RWD'],
    recommendedFluids: {
      engineOil: '0W-20 / 5W-20 Pennzoil Ultra Platinum MS-6395 (Mopar approved)',
      gearOil: 'Mopar 8&9 Speed ATF (Part # 68218057AB) သို့မဟုတ် ZF Lifeguard 8'
    },
    diagnosticProtocol: 'ISO 15765-4 CAN with Security Gateway Module (SGW bypass for 2018+)',
    obdLocationMm: 'စတီယာရင် အောက်ခြေ ဘယ်ဘက် (2018+ မော်ဒယ်များတွင် SGW Connector ပါရှိ)'
  }
];
