import type { Service, TeamMember, Testimonial, GalleryImage, HoursRow, Stat, WhyUsItem } from './types';

export const WHATSAPP_NUMBER = '421900123456';

export const WHATSAPP_LINKS = {
  booking: `https://wa.me/${WHATSAPP_NUMBER}?text=Dobr%C3%BD%20de%C5%88%2C%20chcel%20by%20som%20si%20rezervova%C5%A5%20term%C3%ADn%20v%20Lagoricio.`,
  location: `https://wa.me/${WHATSAPP_NUMBER}?text=Dobr%C3%BD%20de%C5%88%2C%20kde%20presne%20sa%20nach%C3%A1dzate%3F`,
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=Dobr%C3%BD%20de%C5%88%2C%20m%C3%A1m%20ot%C3%A1zku%20oh%C4%BEadom%20Lagoricio.`,
};

export const STATS: Stat[] = [
  { number: '7+', label: 'Rokov skúseností' },
  { number: '12K+', label: 'Spokojných klientov' },
  { number: '4', label: 'Profesionálni barberi' },
  { number: '4.9', label: 'Google hodnotenie' },
];

export const SERVICES: Service[] = [
  {
    name: 'Pánsky strih',
    description: 'Klasický alebo moderný strih, konzultácia zahrnutá',
    price: '€15',
  },
  {
    name: 'Úprava brady',
    description: 'Tvarovanie, zastrihnutie a ošetrenie brady',
    price: '€10',
  },
  {
    name: 'Strih + Brada',
    description: 'Kompletný balík — strih vlasov aj úprava brady',
    price: '€22',
  },
  {
    name: 'Klasické holenie',
    description: 'Horúci uterák, pena a britva — tradičný rituál',
    price: '€18',
  },
  {
    name: 'Starostlivosť o pleť',
    description: 'Hĺbkové čistenie, maska a hydratácia',
    price: '€25',
  },
  {
    name: 'Detský strih',
    description: 'Pre malých gentlemanov do 12 rokov',
    price: '€10',
  },
  {
    name: 'Otec + Syn',
    description: 'Spoločný strih pre otca a syna — zľava 15%',
    price: '€22',
  },
  {
    name: 'VIP Balík',
    description: 'Strih, brada, holenie, pleť — kompletný grooming',
    price: '€45',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Marco Lagoricio',
    role: 'Zakladateľ & hlavný barber',
    experience: '12 rokov skúseností',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Tomáš Horváth',
    role: 'Senior barber',
    experience: '8 rokov skúseností',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
  {
    name: 'Daniel Kováč',
    role: 'Barber & grooming špecialista',
    experience: '5 rokov skúseností',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    text: '"Najlepší barber shop v Trenčíne. Marco presne vie, čo chcem, aj keď to neviem vysvetliť. Atmosféra je skvelá, vždy odchádzam spokojný."',
    author: 'Peter N.',
    date: 'Google recenzia · marec 2026',
  },
  {
    stars: 5,
    text: '"Chodím sem s malým synom — obaja odchádzame ako noví ľudia. Balík Otec + Syn je geniálny nápad. Veľký palec hore!"',
    author: 'Marek K.',
    date: 'Google recenzia · február 2026',
  },
  {
    stars: 5,
    text: '"Klasické holenie tu je zážitok. Horúci uterák, voňavá pena, a výsledok dokonalý. Ako v talianskom filme. Odporúčam každému."',
    author: 'Jakub V.',
    date: 'Google recenzia · január 2026',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    alt: 'Barber práca 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80',
    alt: 'Barber práca 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
    alt: 'Barber práca 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80',
    alt: 'Barber práca 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860019-8ef5a69c5a5b?w=600&q=80',
    alt: 'Interiér barber shopu',
  },
];

export const HOURS: HoursRow[] = [
  { day: 'Pondelok – Piatok', time: '09:00 – 19:00' },
  { day: 'Sobota', time: '09:00 – 15:00' },
  { day: 'Nedeľa', time: 'Zatvorené' },
];

export const BARBERS = ['Marco Lagoricio', 'Tomáš Horváth', 'Daniel Kováč'];

export const SERVICE_OPTIONS = SERVICES.map(s => `${s.name} — ${s.price}`);

export const CONTACT = {
  address: 'Hviezdoslavova 12\n911 01 Trenčín, Slovensko',
  phone: '+421 900 123 456',
  phoneHref: 'tel:+421900123456',
  email: 'info@lagoricio.sk',
  emailHref: 'mailto:info@lagoricio.sk',
  instagram: 'https://instagram.com/lagoricio',
  facebook: 'https://facebook.com/lagoricio',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5!2d18.0448!3d48.8945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzQwLjIiTiAxOMKwMDInNDEuMyJF!5e0!3m2!1ssk!2ssk!4v1',
};

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: 'scissors',
    title: 'Vieme, že si originál',
    description: 'Nekopírujeme. Chceme vyzdvihnúť tvoju jedinečnosť.',
  },
  {
    icon: 'location',
    title: 'Sme v centre Trenčína',
    description: 'Nájdeš nás na Hviezdoslavovej ulici, 2 minúty od námestia.',
  },
  {
    icon: 'trend',
    title: 'Sledujeme trendy',
    description: 'Najnovšie strihy aj klasika v podaní profesionálnych barberov.',
  },
  {
    icon: 'star',
    title: 'Sme profesionáli',
    description: 'Každý barber v tíme má minimálne 5 rokov skúseností.',
  },
  {
    icon: 'click',
    title: 'Objednávka na 3 kliky',
    description: 'WhatsApp alebo formulár — rezervácia za pár sekúnd.',
  },
  {
    icon: 'medal',
    title: '4.9 na Google',
    description: 'Stovky spokojných klientov. Prečítaj si recenzie.',
  },
];
