export type Language = "vi" | "en" | "zh" | "ar" | "tr" | "de" | "ja" | "fr";

export interface CountryData {
  id: string;
  nameKey: string; // key or direct translations
  names: Record<Language, string>;
  coordinates: { x: number; y: number }; // Percentage coordinate for visual SVG/canvas positioning
  exportVolume: number; // Tons/year
  mainProducts: Record<Language, string>;
  customsRegs: Record<Language, string>;
  sourceHub: Record<Language, string>;
}

export interface PartnerProposal {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  marketInterest: string;
  proposedValue: string;
  submittedAt: string;
  status: string; // "under_review" | "approved" etc.
}

export interface SensorData {
  locationKey: string;
  locationName: Record<Language, string>;
  temperature: number;
  humidity: number;
  o2Level: number;
  status: "active" | "warning";
}
