export interface Service {
  name: string;
  description: string;
  price: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  photo: string;
}

export interface Testimonial {
  stars: number;
  text: string;
  author: string;
  date: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface HoursRow {
  day: string;
  time: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface BookingTimeSlot {
  value: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}
