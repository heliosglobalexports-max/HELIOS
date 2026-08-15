export interface Director {
  id: string;
  code: 'A' | 'B' | 'C' | 'D' | 'E';
  name: string;
  title: string;
  imageFileName: string;
  customImageUrl?: string;
}

export type ECGrade = 'Low EC' | 'High EC';

export interface CocoPeatDifference {
  feature: string;
  lowEc: string;
  highEc: string;
}

export interface CocoPeatProduct {
  id: string;
  name: string;
  tagline: string;
  ecGrade: ECGrade;
  ecValue: string;
  phRange: string;
  origin: string;
  moisture: string;
  expansionRatio: string;
  compressionRatio: string;
  forms: string[];
  packaging: string[];
  orderQuantity: string;
  description: string;
  primaryUses: string[];
  bestSuitedFor: string;
  specTable: {
    property: string;
    value: string;
    testMethod?: string;
  }[];
  imageUrl: string;
  badge?: string;
}

export interface ExportStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyOutputs: string[];
}

export type IncotermOption = 'FOB (Free on Board)' | 'CIF (Cost, Insurance & Freight)' | 'CFR (Cost & Freight)' | 'EXW (Ex Works Factory)';
export type PaymentOption = 'Letter of Credit (LC at sight)' | '100% TT Advance' | '30% Advance + 70% DP / Against BL Copy' | 'Escrow / Trade Assurance';

export interface QuoteFormData {
  buyerName: string;
  companyName: string;
  email: string;
  phoneOrWhatsApp: string;
  productName: 'Low-EC Coco Peat (Washed)' | 'High-EC Coco Peat (Unwashed)';
  targetEc: string;
  targetPh: string;
  deliveryLocation: string;
  quantity: string;
  incoterm: IncotermOption;
  paymentOption: PaymentOption;
  additionalNotes: string;
}
