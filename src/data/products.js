export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'tombs', label: 'Tombs & Memorials' },
  { id: 'kitchens', label: 'Kitchens & Cabinets' },
  { id: 'lecterns', label: 'Lecterns & Pulpits' },
  { id: 'tables', label: 'Chairs & Tables' },
  { id: 'flooring', label: 'Flooring & Others' },
];

export const PRODUCTS = [
  // Tombs & Memorials
  {
    id: 'tomb-01',
    title: 'Monumental Regal Ledger Slab',
    category: 'tombs',
    categoryLabel: 'Tombs & Memorials',
    stoneType: 'Black Galaxy Granite',
    finish: 'Mirror Polished Finish',
    description: 'Dignified, weather-resistant full ledger tomb monument crafted with precision engraving and gold embellishments.',
    image: '/assets/tombstone.jpg',
    features: ['100% High-Density Granite', 'Custom Laser Inscription', 'Weather & Corrosion Proof'],
    popular: true
  },
  {
    id: 'tomb-02',
    title: 'Sacred Heart Cross Headstone',
    category: 'tombs',
    categoryLabel: 'Tombs & Memorials',
    stoneType: 'Carrara White Marble',
    finish: 'Honed & Sealed',
    description: 'Elegantly sculpted memorial cross with custom epitaph carving and raised marble foundation base.',
    image: '/assets/tomb1.jpg',
    features: ['Hand-Carved Relief Detail', 'UV & Rain Shielded', 'Lifetime Structural Warranty']
  },
  {
    id: 'tomb-03',
    title: 'Double Tier Vault Memorial',
    category: 'tombs',
    categoryLabel: 'Tombs & Memorials',
    stoneType: 'Absolute Black Granite',
    finish: 'High-Gloss Polish',
    description: 'Spacious double-tier tomb monument featuring polished pillared side supports and protective granite curbing.',
    image: '/assets/tomb2.jpg',
    features: ['Double Vault Capacity', 'Solid Pillar Accents', 'Custom Photo Medallion Option']
  },
  {
    id: 'tomb-04',
    title: 'Graceful Arch Memorial Monument',
    category: 'tombs',
    categoryLabel: 'Tombs & Memorials',
    stoneType: 'Imperial Red Granite',
    finish: 'Diamond Polished',
    description: 'Stunning arched monument with bevelled edge borders and integrated granite flower vase attachments.',
    image: '/assets/tomb3.jpg',
    features: ['Matching Granite Vases', 'Custom Inset Lettering', 'Reinforced Foundation Slabs']
  },
  {
    id: 'tomb-05',
    title: 'Contemporary Minimalist Headstone',
    category: 'tombs',
    categoryLabel: 'Tombs & Memorials',
    stoneType: 'Tan Brown Granite',
    finish: 'Mirror Finish',
    description: 'Clean-cut contemporary tombstone designed for modern memorial gardens with gold inlaid text.',
    image: '/assets/tomb4.jpg',
    features: ['Clean Bevelled Edges', 'Gold / Silver Leaf Infill', 'Compact Footprint']
  },
  {
    id: 'tomb-06',
    title: 'Heritage Sanctuary Memorial Slab',
    category: 'tombs',
    categoryLabel: 'Tombs & Memorials',
    stoneType: 'Nero Marquina Black Marble',
    finish: 'Satin Smooth Polish',
    description: 'Full-sized memorial slab adorned with custom decorative borders, symbolic engravings, and memorial pillars.',
    image: '/assets/tomb5.jpg',
    features: ['Bespoke Border Engravings', 'Heavy-Duty Base Slab', 'Fade-Resistant Inscriptions']
  },

  // Kitchens & Cabinets
  {
    id: 'kitchen-01',
    title: 'Chef Series Executive Granite Countertop',
    category: 'kitchens',
    categoryLabel: 'Kitchens & Cabinets',
    stoneType: 'Giallo Ornamental Granite',
    finish: 'Sealed Diamond Gloss',
    description: 'High-durability polished granite countertop paired with custom cabinet fitting, stain resistance, and integrated sink cutouts.',
    image: '/assets/kitchencab.jpg',
    features: ['Heat & Scratch Resistant', 'Bullnose Edge Profile', 'Precision Sink & Cooktop Cutouts'],
    popular: true
  },
  {
    id: 'kitchen-02',
    title: 'Luxury Marble Island & Backsplash Suite',
    category: 'kitchens',
    categoryLabel: 'Kitchens & Cabinets',
    stoneType: 'Calacatta Gold Vein Marble',
    finish: 'Polished Mirror Surface',
    description: 'Seamless waterfall marble kitchen island with matching full-height wall backsplash and moisture-proof backing.',
    image: '/assets/kitchencabinet.jpg',
    features: ['Waterfall Edge Design', 'Full-Height Wall Cladding', 'Stain-Guard Surface Coating']
  },

  // Lecterns & Pulpits
  {
    id: 'lectern-01',
    title: 'Sanctuary Majesty Marble Podium',
    category: 'lecterns',
    categoryLabel: 'Lecterns & Pulpits',
    stoneType: 'Pure Crystal White Marble',
    finish: 'Hand-Finished Mirror Polish',
    description: 'Architectural church podium featuring gold accent trim, integrated scripture rest, and robust pedestal support.',
    image: '/assets/pulpit.jpg',
    features: ['Sacred Sanctuary Grade', 'Integrated Cable Passages', 'Engraved Emblem/Cross Option'],
    popular: true
  },
  {
    id: 'lectern-02',
    title: 'Imperial Church Pulpit & Altar Ensemble',
    category: 'lecterns',
    categoryLabel: 'Lecterns & Pulpits',
    stoneType: 'Verde Guatemala Green Marble',
    finish: 'High-Gloss Architectural Finish',
    description: 'Grand church pulpit handcrafted with intricate stone moulding, solid marble columns, and reading slope.',
    image: '/assets/pulpi3.jpg',
    features: ['Bespoke Sanctuary Dimensions', 'Solid Column Supports', 'Hand-Carved Decorative Borders']
  },

  // Chairs & Tables
  {
    id: 'table-01',
    title: 'Opulent Marble Dining & Conference Slabs',
    category: 'tables',
    categoryLabel: 'Chairs & Tables',
    stoneType: 'Empress Gold & Black Marble',
    finish: 'Bevelled Mirror Polish',
    description: 'Distinctive custom stone dining table with heavy-duty solid marble pedestals, suitable for luxury interiors and executive boardrooms.',
    image: '/assets/table.jpg',
    features: ['8-12 Seater Slab Options', 'Solid Stone Twin Pedestals', 'Bevelled & Ogee Edge Options'],
    popular: true
  },

  // Flooring & Others
  {
    id: 'flooring-01',
    title: 'Mirror-Finish Marble Flooring & Staircases',
    category: 'flooring',
    categoryLabel: 'Flooring & Others',
    stoneType: 'Crema Marfil & Onyx Accents',
    finish: 'Mirror Gloss Honing',
    description: 'Heavy-duty polished floor tiles and custom riser/tread staircase panels for residential halls and commercial plazas.',
    image: '/assets/others.jpg',
    features: ['High-Traffic Resistance', 'Precision Joint Cutting', 'Matching Wall Cladding']
  },
  {
    id: 'flooring-02',
    title: 'Architectural Stone Cladding & Custom Cuts',
    category: 'flooring',
    categoryLabel: 'Flooring & Others',
    stoneType: 'Multicolor Granite & Travertine',
    finish: 'Textured / Polished Dual Finish',
    description: 'Exterior building facades, entrance pillars, water features, and custom cut-to-size stone projects.',
    image: '/assets/othersimg.jpg',
    features: ['Weather Resistant Exterior Coating', 'Custom CAD Dimension Cutting', 'Structural Pillar Wraps']
  }
];

export const TRUST_POINTS = [
  {
    icon: 'ShieldCheck',
    title: '100% Quality Guarantee',
    description: 'Grade-A imported and local marble & granite slabs inspect for flawless color consistency and zero structural fissures.'
  },
  {
    icon: 'Ruler',
    title: 'Precision CAD Custom Sizing',
    description: 'Laser-guided cutting and edge profiling customized down to the millimeter for your exact space requirements.'
  },
  {
    icon: 'Sparkles',
    title: 'Flawless Edge Profiling',
    description: 'Choose from Bullnose, Ogee, Bevelled, Waterfall, and Square polished edge profiles crafted by master stone masons.'
  },
  {
    icon: 'Truck',
    title: 'Nationwide Delivery & Fitting',
    description: 'Complete logistics, safe transit packaging, and professional on-site installation across Nigeria.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Beracah Marble transformed our church sanctuary with a breathtaking altar and pulpit. The mirror-finish white marble and craftsmanship exceeded all our expectations.",
    author: "Pastor Samuel A.",
    role: "Lagos Sanctuary Committee",
    rating: 5
  },
  {
    quote: "We commissioned a custom Black Galaxy tombstone for our family memorial. The level of care, dignity, and fine gold lettering was truly exceptional.",
    author: "Mrs. Florence O.",
    role: "Abuja",
    rating: 5
  },
  {
    quote: "The granite kitchen countertops installed in our villa are magnificent. Heat resistant, smooth, and installed perfectly without noticeable seams.",
    author: "Engr. David K.",
    role: "Homeowner, Port Harcourt",
    rating: 5
  }
];
