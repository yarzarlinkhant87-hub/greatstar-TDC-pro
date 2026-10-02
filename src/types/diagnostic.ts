export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low';

export type DtcCategory = 'Transmission' | 'Engine' | 'ABS/Chassis' | 'Electrical/Body' | 'Network';

export interface DtcItem {
  code: string;
  titleMm: string;
  titleEn: string;
  category: DtcCategory;
  severity: SeverityLevel;
  descriptionMm: string;
  symptomsMm: string[];
  causesMm: string[];
  diagnosisStepsMm: string[];
  gearWiringReference?: string;
  solenoidSpecs?: {
    name: string;
    normalResistance: string;
    pinNumber: string;
    wireColor: string;
  }[];
  affectedCarsMm?: string;
  emergencyAdviceMm?: string; // အရေးပေါ် ဆက်မောင်းသင့်/မမောင်းသင့် အကြံပြုချက်
  brandNotesMm?: Record<string, string>; // Brand-specific quirks e.g. { toyota: "Probox တွင်...", honda: "Fit တွင်..." }
  milStatus: boolean; // Check engine light triggered?
}

export interface SolenoidPin {
  pin: number;
  label: string;
  nameMm: string;
  wireColor: string;
  normalResistance: string; // e.g. "11 - 15 Ω"
  voltageRange: string; // e.g. "11 - 14 V (PWM)"
  descriptionMm: string;
  testProcedureMm: string;
  type: 'shift' | 'pressure' | 'lockup' | 'sensor' | 'ground' | 'power';
}

export interface GearboxModel {
  id: string;
  name: string;
  transmissionType: '4-Speed AT (Super ECT)' | '5-Speed AT' | '6-Speed AT' | 'Super CVT-i' | 'Multi-Matic CVT' | 'Xtronic CVT';
  manufacturer: 'Toyota' | 'Honda' | 'Nissan' | 'Suzuki' | 'Mazda';
  popularCarsMm: string;
  tcmLocationMm: string;
  valveBodyConnectorPins: SolenoidPin[];
  fluidType: string;
  fluidCapacityMm: string;
  commonFaultCodes: string[];
  troubleshootingGuideMm: {
    symptom: string;
    possibleCause: string;
    action: string;
  }[];
}

export interface ScanScenario {
  id: string;
  carNameMm: string;
  brand: string;
  transmission: string;
  reportedProblemMm: string;
  dtcCodes: string[];
  freezeFrame: {
    engineRpm: number;
    vehicleSpeed: number;
    coolantTemp: number;
    atfTemp: number;
    selectedGear: string;
    throttlePos: number;
    batteryVoltage: number;
  };
}
