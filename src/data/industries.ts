export interface IndustryData {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  relevantChemicalIds: { categoryId: string; productId: string }[];
}

export const INDUSTRIES_DATA: Record<string, IndustryData> = {
  'packaging': {
    id: 'packaging',
    name: 'Packaging: Flexible & Rigid',
    description: 'Blown packaging films and rigid molding chemical solutions.',
    useCases: ['Flexible Films', 'Retail Stretch Films', 'Blow-Molded Containers'],
    relevantChemicalIds: [
      { categoryId: 'pvc', productId: 'pvc-k67' },
      { categoryId: 'pe', productId: 'ldpe-film' },
      { categoryId: 'pe', productId: 'lldpe-film' },
      { categoryId: 'pe', productId: 'hdpe-molding' }
    ]
  },
  'healthcare': {
    id: 'healthcare',
    name: 'HealthCare & Medical',
    description: 'Medical-grade compounds meeting stringent safety and regulatory requirements.',
    useCases: ['IV Bottles', 'Capsules', 'Medical Fittings', 'Surgical Masks'],
    relevantChemicalIds: [
      { categoryId: 'pvc', productId: 'pvc-k57' },
      { categoryId: 'pe', productId: 'hdpe-molding' },
      { categoryId: 'pp', productId: 'pp-meltblown' },
      { categoryId: 'copolymers', productId: 'medical-copolymer' }
    ]
  },
  'foaming': {
    id: 'foaming',
    name: 'Foaming',
    description: 'Chemicals enabling lightweight polymer foams, footwear midsoles, and expanded sheets.',
    useCases: ['Footwear Midsoles', 'Foam Sheets', 'Insulation Padding'],
    relevantChemicalIds: [
      { categoryId: 'eva', productId: 'eva-va18' },
      { categoryId: 'eva', productId: 'eva-va28' }
    ]
  },
  'popp': {
    id: 'popp',
    name: 'POPP Film Packaging',
    description: 'Specialty film packaging and lamination polymers.',
    useCases: ['Specialty Film Packaging', 'Laminations'],
    relevantChemicalIds: [
      { categoryId: 'pe', productId: 'ldpe-film' },
      { categoryId: 'pe', productId: 'lldpe-film' }
    ]
  },
  'cpp': {
    id: 'cpp',
    name: 'CPP Films',
    description: 'Cast Polypropylene film grade solutions and laminated base sheets.',
    useCases: ['Laminated Base Sheets', 'Co-extruded Films'],
    relevantChemicalIds: [
      { categoryId: 'pe', productId: 'ldpe-film' },
      { categoryId: 'pe', productId: 'lldpe-film' }
    ]
  },
  'automotive': {
    id: 'automotive',
    name: 'Automotive',
    description: 'Molded B2B auto parts, cable linings, and flexible panels.',
    useCases: ['Molded Auto Parts', 'Cable Linings', 'Flexible Panels'],
    relevantChemicalIds: [
      { categoryId: 'pvc', productId: 'pvc-k67' },
      { categoryId: 'pvc', productId: 'pvc-k57' },
      { categoryId: 'eva', productId: 'eva-va18' },
      { categoryId: 'copolymers', productId: 'medical-copolymer' }
    ]
  }
};

export const getAllIndustries = () => Object.values(INDUSTRIES_DATA);
export const getIndustryById = (id: string) => INDUSTRIES_DATA[id];
