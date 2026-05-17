// @ts-nocheck

export const studio = {
  name: 'Apex Fitness',
  tagline: 'Where Legends Are Built',
  address: { street: '2901 Kirby Dr', city: 'Houston', state: 'TX', zip: '77098' },
  phone: '(713) 555-0192',
  email: 'info@apexfitnesshtx.com',
  hours: {
    'Mon – Fri': '5:00 AM – 10:00 PM',
    'Saturday': '7:00 AM – 8:00 PM',
    'Sunday': '8:00 AM – 6:00 PM',
  },
  social: { instagram: '#', youtube: '#', facebook: '#' },
};

export const stats = [
  { value: '12', unit: '+', label: 'Years in Business' },
  { value: '1,200', unit: '+', label: 'Active Members' },
  { value: '40', unit: '+', label: 'Weekly Classes' },
  { value: '98', unit: '%', label: 'Retention Rate' },
];

export const instructors = [
  {
    name: 'Marcus Webb',
    specialty: 'Strength & Powerlifting',
    bio: 'NSCA-CSCS certified with 12 years coaching competitive lifters. Marcus holds multiple state powerlifting records and coaches athletes from beginner to elite.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&h=750&fit=crop&q=80',
    years: '12',
  },
  {
    name: 'Deja Simmons',
    specialty: 'HIIT & Body Composition',
    bio: 'ACE-certified personal trainer and nutrition coach. Deja specializes in body recomposition and high-performance conditioning programs.',
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=600&h=750&fit=crop&q=80',
    years: '8',
  },
  {
    name: 'Tyler Rhodes',
    specialty: 'Athletic Performance',
    bio: 'Former D1 football athlete turned strength coach. Tyler\'s programs are built for athletes who demand more from every session.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=750&fit=crop&q=80',
    years: '9',
  },
];

export const classes = [
  {
    name: 'Iron Hour',
    description: 'Traditional strength training — bench, squat, deadlift. Progressive overload, proper form, real gains.',
    duration: '60 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Power HIIT',
    description: 'Compound movements + metabolic conditioning. Build muscle and torch fat simultaneously.',
    duration: '45 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Athlete Prep',
    description: 'Sport-specific training. Speed, explosiveness, and injury prevention for competitive athletes.',
    duration: '60 min',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1504025468847-0e438279542c?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Foundations',
    description: 'Movement fundamentals for beginners. Learn to lift safely, build consistency, and gain confidence.',
    duration: '50 min',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop&q=80',
  },
];

export const testimonials = [
  {
    name: 'Jordan Tate',
    title: 'Member Since 2021',
    quote: 'I\'ve tried four gyms in Houston. None come close to Apex. The coaching is elite and the culture keeps you accountable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Priya Mehta',
    title: '3× Weight Loss Challenge Winner',
    quote: 'Dropped 30lbs and kept it off for 2 years. The trainers actually care about long-term results, not just quick fixes.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Carlos Rivera',
    title: 'Competitive Powerlifter',
    quote: 'Under Marcus\'s programming I hit a 500lb squat. Apex is the only place in Houston with this level of strength coaching.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  },
];

export const pricing = [
  {
    name: 'Drop-In',
    price: '$25',
    period: 'per class',
    highlight: false,
    cta: 'Buy a Pass',
    features: ['Any single class', 'Equipment access', 'Locker room', 'No commitment'],
  },
  {
    name: 'Elite Monthly',
    price: '$149',
    period: '/ month',
    highlight: true,
    cta: 'Join Now',
    features: ['Unlimited classes', 'Gym floor access', '2 PT sessions/mo', 'Nutrition consult', 'Member app access'],
  },
  {
    name: 'Personal Training',
    price: '$85',
    period: 'per session',
    highlight: false,
    cta: 'Book a Session',
    features: ['1-on-1 coaching', 'Custom program', 'Progress tracking', 'Flexible scheduling'],
  },
];

export const garrison365 = {
  gymSlug: 'apex-fitness',
  baseUrl: 'https://app.codegyms.com',
};
