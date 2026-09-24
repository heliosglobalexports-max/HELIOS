import { Director, CocoPeatProduct, ExportStep, CocoPeatDifference } from '../types';
import lowEcImg from '../assets/images/low_ec_cocopeat_1786808339319.jpg';
import highEcImg from '../assets/images/high_ec_cocopeat_1786808354282.jpg';

export const COMPANY_DETAILS = {
  name: 'HELIOS GLOBAL EXPORTS',
  tagline: 'Quality Agricultural Products. Global Connections.',
  heroDescription: 'Direct manufacturer and exporter of certified Low-EC and High-EC Coco Peat 5kg blocks from Pollachi, Coimbatore, Tamil Nadu, India to international commercial growers, hydroponic farms, and distributors.',
  officialEmail: 'heliosglobalexports@gmail.com',
  primaryWhatsApp: '919876543210',
  primaryPhoneDisplay: '+91 98765 43210',
  address: {
    site: 'Site No 17, Sakthi Garden',
    piruvu: 'Vadakipalayam Piruvu',
    city: 'Pollachi',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    fullFormatted: 'Site No 17, Sakthi Garden, Vadakipalayam Piruvu, Pollachi, Coimbatore, India',
  },
  ports: [
    { 
      name: 'V.O. Chidambaranar Port (Tuticorin)', 
      code: 'INTUT', 
      type: 'Primary Container Gateway (Gulf, Europe, USA, Asia)', 
      state: 'Tamil Nadu' 
    },
    { 
      name: 'Cochin Port (Vallarpadam ICTT)', 
      code: 'INCOK', 
      type: 'Direct Transshipment Hub (Europe, Mediterranean, Americas)', 
      state: 'Kerala' 
    },
    { 
      name: 'Chennai Port / Kamarajar Port', 
      code: 'INMAA', 
      type: 'Major East Coast Hub (Far East, Southeast Asia, Oceania)', 
      state: 'Tamil Nadu' 
    },
  ],
  certifications: [
    'AQIS / National Plant Protection (NPPO) Compliant',
    'Certified Batch EC & pH Analysis Laboratory Testing',
    'Rotary Sifted Sand & Fiber Extraction (< 2% Impurity)',
    'ISPM-15 Heat Treated / Fumigated Pallet Export Standards',
    'Government Issued Certificate of Origin (COO)',
  ],
};

export const INITIAL_DIRECTORS: Director[] = [
  {
    id: 'dir-a',
    code: 'A',
    name: 'Mr. A',
    title: 'Managing Director',
    imageFileName: 'director_a.jpeg',
  },
  {
    id: 'dir-b',
    code: 'B',
    name: 'Mr./Ms. B',
    title: 'Director – International Sales & Exports',
    imageFileName: 'director_b.jpeg',
  },
  {
    id: 'dir-c',
    code: 'C',
    name: 'Mr./Ms. C',
    title: 'Director – Operations & Supply Chain',
    imageFileName: 'director_c.jpeg',
  },
  {
    id: 'dir-d',
    code: 'D',
    name: 'Mr./Ms. D',
    title: 'Director – Quality Assurance & Technical Agronomy',
    imageFileName: 'director_d.jpeg',
  },
  {
    id: 'dir-e',
    code: 'E',
    name: 'Mr./Ms. E',
    title: 'Director – Global Finance & Compliance',
    imageFileName: 'director_e.jpg',
  },
];

export const COCO_PEAT_PRODUCTS: CocoPeatProduct[] = [
  {
    id: 'low-ec-cocopeat',
    name: 'Low-EC Coco Peat (Washed)',
    tagline: 'Triple-washed with pristine freshwater for salt-sensitive root systems & precision hydroponics',
    ecGrade: 'Low EC',
    ecValue: '< 0.5 mS/cm (1:5 v/v standard extraction)',
    phRange: '5.5 – 6.5 (Ideal root zone uptake)',
    origin: 'Pollachi, Coimbatore, Tamil Nadu, India',
    moisture: '10% – 15% (Max 18%)',
    expansionRatio: '15 – 16 Liters / kg (~75 to 80+ Liters per 5kg block)',
    compressionRatio: '5 : 1 hydraulic compressed',
    forms: [
      '5kg Compressed Blocks (30 x 30 x 12 cm ± 2cm)',
      '650g Briquettes / Bricks',
      'Hydroponic Grow Bags & Slabs (UV treated)',
      'Custom buyer specifications',
    ],
    packaging: [
      'ISPM-15 Heat-Treated Wooden Pallets with stretch film (~22-24 MT/40ft HC)',
      'Floor-loaded loose blocks in 40ft HC container (~25-26 MT payload)',
      'Individual shrink wrap with private label / barcode sticker',
    ],
    orderQuantity: 'Full Container Loads (20ft FCL or 40ft High Cube Container)',
    description: 'Our Low-EC coco peat is washed thoroughly with clean freshwater from the Western Ghats to flush out naturally occurring sodium (Na+) and chloride (Cl-) ions. With electrical conductivity below 0.5 mS/cm, it prevents root burn, delivers maximum air-filled porosity (AFP 18-24%), and allows commercial greenhouse growers to administer exact nutrient dosages without ionic interference.',
    primaryUses: [
      'Commercial Hydroponic Greenhouses (Tomatoes, Bell Peppers, Cucumbers, Strawberries)',
      'High-Value Floriculture & Cut Flowers (Roses, Gerberas, Orchids, Anthuriums)',
      'Delicate Seedling Germination & Nursery Plug Trays',
      'Professional Potting Soils & Substrate Blends for Container Plants',
      'Vertical Farming & Closed-Loop Drip Fertigation Systems',
    ],
    bestSuitedFor: 'Crops and plants highly sensitive to salinity where root health, precision nutrient uptake, and maximum yield are paramount.',
    specTable: [
      { property: 'Electrical Conductivity (EC)', value: '< 0.5 mS/cm', testMethod: '1:5 volume extraction' },
      { property: 'pH Value', value: '5.5 to 6.5', testMethod: 'Calibrated digital pH meter' },
      { property: 'Washing Status', value: 'Washed with fresh mountain water', testMethod: 'Multi-stage flush process' },
      { property: 'Moisture Content', value: '10% – 15%', testMethod: 'Halogen moisture analyzer' },
      { property: 'Expanded Yield', value: '75 – 80 Liters / 5kg block', testMethod: 'Volumetric hydration' },
      { property: 'Sand & Heavy Impurities', value: '< 2.0%', testMethod: 'Rotary mechanical sieve' },
      { property: 'Air-Filled Porosity (AFP)', value: '18% – 24%', testMethod: 'Standard drainage method' },
      { property: 'Water Holding Capacity', value: '8 – 9 times dry weight', testMethod: 'Laboratory saturation' },
    ],
    imageUrl: lowEcImg,
    badge: 'Premium Hydroponic Grade',
  },
  {
    id: 'high-ec-cocopeat',
    name: 'High-EC Coco Peat (Unwashed)',
    tagline: 'Naturally rich in coconut minerals for large-scale soil conditioning, landscaping & animal bedding',
    ecGrade: 'High EC',
    ecValue: '> 1.0 mS/cm (typically 1.5 – 3.0 mS/cm)',
    phRange: '5.8 – 7.5',
    origin: 'Pollachi, Coimbatore, Tamil Nadu, India',
    moisture: '12% – 18%',
    expansionRatio: '14 – 15 Liters / kg (~70 to 75 Liters per 5kg block)',
    compressionRatio: '5 : 1 hydraulic compressed',
    forms: [
      '5kg Compressed Blocks (30 x 30 x 12 cm ± 2cm)',
      'Loose / Coarse crushed coir pith',
      'Custom bulk packaging',
    ],
    packaging: [
      'Palletized on export pallets with heavy edge protectors',
      'Bulk floor-loaded in 40ft HC containers (~26 MT)',
      'Custom labeled woven HDPE export sacks',
    ],
    orderQuantity: 'Full Container Loads (40ft High Cube Container ~ 26 Metric Tons)',
    description: 'Sourced directly from Pollachi coconut de-husking mills, High-EC coco peat retains the natural organic salts and potassium minerals found inside virgin coconut husks. It possesses tremendous liquid absorption and water retention properties at an economical cost, making it the premier choice for broad-acre soil restoration, turf management, industrial absorbents, and livestock bedding.',
    primaryUses: [
      'Agricultural Soil Conditioning & Aeration for Open Farmlands',
      'Golf Course Greens, Turf Grass Lawns & Commercial Landscaping',
      'Equestrian Horse Stables, Cattle Barns & Poultry Bedding (High liquid & odor absorption)',
      'Industrial Bio-filtration & Oil/Chemical Spill Cleanup Media',
      'Water Retention Matrix for Drought-Prone Tree Plantations & Orchards',
    ],
    bestSuitedFor: 'Large-scale agricultural acreage, soil moisture retention, animal bedding, and landscaping projects where extreme salt leaching is not required.',
    specTable: [
      { property: 'Electrical Conductivity (EC)', value: '> 1.0 mS/cm (1.5 – 3.0 mS/cm)', testMethod: '1:5 volume extraction' },
      { property: 'pH Value', value: '5.8 to 7.5', testMethod: 'Direct pH test' },
      { property: 'Washing Status', value: 'Natural unwashed raw pith', testMethod: 'Naturally sun-dried' },
      { property: 'Moisture Content', value: '12% – 18%', testMethod: 'Halogen oven test' },
      { property: 'Expanded Yield', value: '70 – 75 Liters / 5kg block', testMethod: 'Volumetric hydration' },
      { property: 'Sand & Heavy Impurities', value: '< 2.5%', testMethod: 'Sieve separation' },
      { property: 'Liquid Absorbency', value: 'Very High (Odor neutralizer)', testMethod: 'Industrial absorption index' },
      { property: 'Organic Matter Content', value: '> 90%', testMethod: 'Loss on ignition' },
    ],
    imageUrl: highEcImg,
    badge: 'Economical Bulk Choice',
  },
];

export const COCO_PEAT_DIFFERENCES: CocoPeatDifference[] = [
  {
    feature: 'Electrical Conductivity (EC)',
    lowEc: '< 0.5 mS/cm (Ultra Low Salinity)',
    highEc: '> 1.0 mS/cm (1.5 – 3.0 mS/cm Natural)',
  },
  {
    feature: 'Processing & Washing',
    lowEc: 'Thoroughly washed with freshwater to flush sodium & chloride ions',
    highEc: 'Unwashed natural coir pith direct from husk de-fibering mills',
  },
  {
    feature: 'Optimal pH Range',
    lowEc: '5.5 – 6.5 (Strictly calibrated for plant root zone)',
    highEc: '5.8 – 7.5 (Broad spectrum natural range)',
  },
  {
    feature: 'Primary Target Applications',
    lowEc: 'Hydroponics, Greenhouse Vegetables (Tomatoes, Peppers), Berries, Nursery Plugs, Floriculture',
    highEc: 'Open-field soil conditioning, Golf courses, Turf grass, Horse & Cattle animal bedding, Oil absorption',
  },
  {
    feature: 'Plant Tolerance / Sensitivity',
    lowEc: 'Safe for salt-sensitive root systems; zero risk of salt burn',
    highEc: 'Best for hardy open-ground crops, tree plantations, turf & non-plant uses',
  },
  {
    feature: 'Nutrient Management',
    lowEc: 'Allows growers complete 100% control over fertigation and fertilizer dosing',
    highEc: 'Supplies natural background potassium (K) and trace coconut elements',
  },
  {
    feature: 'Expansion Volume',
    lowEc: '75 to 80+ Liters per 5kg Block (15–16 L/kg)',
    highEc: '70 to 75 Liters per 5kg Block (14–15 L/kg)',
  },
  {
    feature: 'Commercial Cost Point',
    lowEc: 'Higher value due to multi-stage freshwater washing & lab QA',
    highEc: 'Economical bulk pricing for high-tonnage agricultural & industrial needs',
  },
];

export const EXPORT_PIPELINE: ExportStep[] = [
  {
    stepNumber: '01',
    title: 'Inquiry & Specification Confirmation',
    subtitle: 'Product grade, EC/pH, incoterms & destination port',
    description: 'Buyer specifies required grade (Low-EC Washed or High-EC Unwashed), target EC/pH, 5kg block dimensions, container volume, export terms (FOB/CIF/CFR/EXW), and payment preferences.',
    iconName: 'FileSpreadsheet',
    keyOutputs: ['Technical specification match', 'Proforma Invoice / Quotation'],
  },
  {
    stepNumber: '02',
    title: 'Batch Quality & Lab Analysis Report',
    subtitle: 'Pre-shipment verification and testing',
    description: 'We draw composite samples from our Pollachi processing yard to verify EC, pH, sand percentage, and moisture levels before container stuffing.',
    iconName: 'FlaskConical',
    keyOutputs: ['Accredited Batch Lab Certificate', 'Courier reference samples on request'],
  },
  {
    stepNumber: '03',
    title: 'Contract & Commercial Terms',
    subtitle: 'Transparent international agreements',
    description: 'Formal Export Contract executed covering agreed Incoterm (FOB Tuticorin/Cochin/Chennai, CIF destination port, CFR or EXW factory) and payment options (LC, TT, DP).',
    iconName: 'CheckCircle2',
    keyOutputs: ['Signed Export Agreement', 'Production schedule allocation'],
  },
  {
    stepNumber: '04',
    title: 'Screening, Sifting & Hydraulic Compression',
    subtitle: 'Destoned and compressed at 5:1 ratio',
    description: 'Raw coir pith is rotary sifted to extract sand (<2%) and fine impurities, then compressed into uniform 5kg export blocks (30 x 30 x 12 cm).',
    iconName: 'Cog',
    keyOutputs: ['Sand extraction < 2%', 'Uniform 5kg block weight & density'],
  },
  {
    stepNumber: '05',
    title: 'Palletizing, ISPM-15 Fumigation & Stuffing',
    subtitle: 'Secured for oceanic maritime transit',
    description: 'Blocks are stacked on heat-treated ISPM-15 wooden pallets or floor-loaded into 40ft High Cube containers. Authorized fumigation is administered.',
    iconName: 'PackageCheck',
    keyOutputs: ['ISPM-15 Fumigation Certificate', 'Container stuffing inspection photos'],
  },
  {
    stepNumber: '06',
    title: 'Seaport Dispatch & Customs Clearance',
    subtitle: 'Fast sailing via Tuticorin, Cochin, or Chennai',
    description: 'Containers are dispatched via dedicated corridors to V.O.C. Port Tuticorin, Cochin Port, or Chennai Port. Original Bill of Lading, Phytosanitary, and Certificate of Origin (COO) are expedited.',
    iconName: 'Ship',
    keyOutputs: ['Original Clean on Board Bill of Lading', 'Phytosanitary Certificate & COO'],
  },
];

export const FAQ_LIST = [
  {
    q: 'How do I choose between Low-EC and High-EC Coco Peat?',
    a: 'Choose Low-EC (<0.5 mS/cm) if you grow crops in greenhouses, hydroponics, nursery seedling trays, or high-value flowers where plants are sensitive to salinity and you need total control over nutrient fertigation. Choose High-EC (>1.0 mS/cm) for agricultural open-field soil amendment, turf grass lawns, golf courses, equestrian/poultry animal bedding, or industrial spill absorption.',
  },
  {
    q: 'What standard details should I include in my export inquiry?',
    a: 'Please specify: 1) Product Name (Low EC or High EC), 2) Target EC level, 3) Desired pH range, 4) Destination Port & Country, 5) Quantity (e.g. 1x40ft HC container ~24-26 MT), 6) Export Term (FOB, CIF, CFR, or EXW), and 7) Preferred Payment Option (LC, TT Advance, DP).',
  },
  {
    q: 'Which seaports do you ship from in India?',
    a: 'We ship primarily through V.O. Chidambaranar Port (Tuticorin), Cochin Port (Kerala), and Chennai Port (Tamil Nadu), providing direct vessel connections to Europe, the Americas, the Middle East, Southeast Asia, and Australia.',
  },
  {
    q: 'What is the container loading capacity for 5kg blocks?',
    a: 'Palletized: ~22 to 24 Metric Tons per 40ft HC container (approx. 4,400–4,800 blocks across 20-22 pallets). Floor-loaded (loose blocks): ~25 to 26 Metric Tons per 40ft HC container (approx. 5,000–5,200 blocks), maximizing ocean freight economics.',
  },
  {
    q: 'What export documents are issued with each container?',
    a: 'Every export shipment includes: 1) Commercial Invoice & Packing List, 2) Clean on Board Ocean Bill of Lading (B/L), 3) Official Phytosanitary Certificate issued by the Plant Quarantine Authority of India, 4) ISPM-15 Fumigation Certificate, 5) Certificate of Origin (COO), and 6) Batch Laboratory Certificate of Analysis for EC, pH & moisture.',
  },
];

/**
 * Standard WhatsApp inquiry message generator adhering to the user specification
 */
export function generateStandardWhatsAppMessage(data?: {
  productName?: string;
  ecLevel?: string;
  phRange?: string;
  location?: string;
  quantity?: string;
  incoterm?: string;
  paymentOption?: string;
  buyerName?: string;
  companyName?: string;
}): string {
  const prod = data?.productName || 'Low-EC Coco Peat 5kg Blocks';
  const ec = data?.ecLevel || 'Low EC (< 0.5 mS/cm)';
  const ph = data?.phRange || '5.5 - 6.5';
  const loc = data?.location || '[Destination Port / Country]';
  const qty = data?.quantity || '1 x 40ft HC Container (~24-26 MT)';
  const inc = data?.incoterm || 'CIF / FOB';
  const pay = data?.paymentOption || 'Letter of Credit (LC) / TT Advance';
  const name = data?.buyerName ? `\nFrom: ${data.buyerName} ${data.companyName ? `(${data.companyName})` : ''}` : '';

  return (
    `*HELIOS GLOBAL EXPORTS - CONTAINER INQUIRY*${name}\n\n` +
    `1. Product Name: ${prod}\n` +
    `2. Required EC Level: ${ec}\n` +
    `3. Required pH Range: ${ph}\n` +
    `4. Delivery Location / Destination Port: ${loc}\n` +
    `5. Quantity: ${qty}\n` +
    `6. Export Term (Incoterm): ${inc}\n` +
    `7. Preferred Payment Option: ${pay}\n\n` +
    `Please provide commercial price quotation and container shipping schedule.`
  );
}
