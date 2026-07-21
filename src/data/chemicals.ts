export interface ChemicalProduct {
  id: string;
  name: string;
  purpose: string;
  applications: string[];
  benefits: string[];
  usedInIndustries: string[];
  image?: string;
  datasheetAvailable?: boolean;
}

export interface ChemicalCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconType: string;
  products: ChemicalProduct[];
}

export const CHEMICALS_DATA: Record<string, ChemicalCategory> = {
  'pvc': {
    id: 'pvc',
    name: 'PVC Resins',
    subtitle: 'Polyvinyl Chloride (PVC)',
    description: 'High-purity suspension and compounding PVC resins offering exceptional mechanical properties, chemical safety, and batch consistency.',
    iconType: 'layers',
    products: [
      {
        id: 'pvc-k67',
        name: 'PVC K-67 (Suspension Grade)',
        purpose: 'High-purity suspension PVC resin offering exceptional mechanical properties.',
        applications: ['Electrical wire and cable insulation cladding', 'Rigid and flexible profile extrusion'],
        benefits: ['High chemical safety', 'Batch consistency', 'Excellent mechanical properties'],
        usedInIndustries: ['packaging', 'automotive'],
        datasheetAvailable: true,
      },
      {
        id: 'pvc-k57',
        name: 'PVC K-57 (Compounding Grade)',
        purpose: 'Low molecular weight suspension PVC resin designed for easy melt processing.',
        applications: ['Injection-molded fittings and rigid components', 'Flexible profiles and medical-grade compound bases'],
        benefits: ['Easy melt processing', 'Physical flexibility parameters'],
        usedInIndustries: ['healthcare', 'automotive'],
        datasheetAvailable: true,
      }
    ]
  },
  'pe': {
    id: 'pe',
    name: 'PE Polymers',
    subtitle: 'Polyethylene (PE)',
    description: 'Versatile Polyethylene raw materials including LDPE, LLDPE, and HDPE, offering transparency, strength, and chemical resistance.',
    iconType: 'box',
    products: [
      {
        id: 'ldpe-film',
        name: 'LDPE Film Grade',
        purpose: 'Low Density Polyethylene with excellent optical transparency and flexibility.',
        applications: ['General purpose blown packaging films', 'POPP film packaging', 'CPP laminated base sheets'],
        benefits: ['Optical transparency', 'High flexibility', 'Heat-seal capabilities'],
        usedInIndustries: ['packaging', 'popp', 'cpp'],
        datasheetAvailable: true,
      },
      {
        id: 'lldpe-film',
        name: 'LLDPE Blown Film Grade',
        purpose: 'Linear Low Density Polyethylene featuring outstanding puncture resistance.',
        applications: ['High-strength retail packaging stretch films', 'POPP packaging laminates', 'CPP co-extruded films'],
        benefits: ['Puncture resistance', 'High tear strength', 'Tensile durability'],
        usedInIndustries: ['packaging', 'popp', 'cpp'],
        datasheetAvailable: true,
      },
      {
        id: 'hdpe-molding',
        name: 'HDPE Blow & Injection Molding Grade',
        purpose: 'High Density Polyethylene copolymer showing high mechanical stiffness.',
        applications: ['Blow-molded industrial containers and hollow parts'],
        benefits: ['High mechanical stiffness', 'Impact toughness', 'Environmental stress crack resistance'],
        usedInIndustries: ['packaging', 'healthcare'],
        datasheetAvailable: true,
      }
    ]
  },
  'eva': {
    id: 'eva',
    name: 'EVA Copolymers',
    subtitle: 'Ethylene-Vinyl Acetate (EVA)',
    description: 'Specialty EVA granules curated for manufacturing segments that require high flexibility, low-temperature toughness, and stress-crack resistance.',
    iconType: 'cloud',
    products: [
      {
        id: 'eva-va18',
        name: 'EVA Copolymer (VA 18%)',
        purpose: 'EVA copolymer with 18% Vinyl Acetate content, offering high flexibility.',
        applications: ['Footwear midsole, insole, and sheet foaming', 'Automotive flexible panels'],
        benefits: ['High flexibility', 'Impact shock safety'],
        usedInIndustries: ['foaming', 'automotive'],
        datasheetAvailable: true,
      },
      {
        id: 'eva-va28',
        name: 'EVA Copolymer (VA 28%)',
        purpose: 'EVA copolymer with 28% Vinyl Acetate content for superior low-temperature flexibility.',
        applications: ['Premium hot-melt adhesives formulation', 'Solar cell encapsulation sheets'],
        benefits: ['Superior low-temperature flexibility', 'Stress safety'],
        usedInIndustries: ['foaming'],
        datasheetAvailable: true,
      }
    ]
  },
  'pp': {
    id: 'pp',
    name: 'Polypropylene (PP)',
    subtitle: 'Specialty Polypropylene',
    description: 'High melt flow polypropylene polymer designed specifically for meltblown nonwoven processes with excellent filtration efficiency.',
    iconType: 'heart',
    products: [
      {
        id: 'pp-meltblown',
        name: 'PP Meltblown Grade',
        purpose: 'High melt flow polypropylene polymer designed for meltblown nonwoven processes.',
        applications: ['Surgical mask meltblown filter media (filtration)', 'Industrial liquid and air filtration webs'],
        benefits: ['Excellent filtration efficiency', 'High melt flow'],
        usedInIndustries: ['healthcare'],
        datasheetAvailable: false,
      }
    ]
  },
  'copolymers': {
    id: 'copolymers',
    name: 'Specialty Copolymers',
    subtitle: 'Healthcare Copolymer Grade',
    description: 'High-purity copolymer compounds offering low-temperature toughness, sterilization safety, and structural longevity.',
    iconType: 'file',
    products: [
      {
        id: 'medical-copolymer',
        name: 'Healthcare Copolymer Grade',
        purpose: 'High-purity copolymer compound offering sterilization safety.',
        applications: ['CPAP mask and medical device components', 'Automotive cable conduits'],
        benefits: ['Low-temperature toughness', 'Sterilization safety', 'Structural longevity'],
        usedInIndustries: ['healthcare', 'automotive'],
        datasheetAvailable: false,
      }
    ]
  }
};

export const getAllCategories = () => Object.values(CHEMICALS_DATA);
export const getCategoryById = (id: string) => CHEMICALS_DATA[id];
export const getProductById = (categoryId: string, productId: string) => {
  const category = CHEMICALS_DATA[categoryId];
  return category?.products.find(p => p.id === productId);
};
