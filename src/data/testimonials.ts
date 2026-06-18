export interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote: "Abdul built our school management system from scratch. The AI integration alone saves our administrative staff over 10 hours per week. The system handles everything we needed and the handover was seamless.",
    name: "Sanjay Shrestha",
    title: "Principal, Sunrise International Academy, Kathmandu",
    initials: "SS"
  },
  {
    stars: 5,
    quote: "The KiranaOS app completely changed how I manage my shop. Tracking credit used to take me 30 minutes every evening. Now it takes 2 minutes. Worth every rupee.",
    name: "Ramesh Tamang",
    title: "Shop Owner, New Road, Kathmandu",
    initials: "RT"
  },
  {
    stars: 5,
    quote: "Our customer inquiry volume was overwhelming the team. After deploying the WhatsApp AI bot, 80 percent of routine questions get handled automatically. The team now focuses on actual sales conversations.",
    name: "Priya Manandhar",
    title: "Operations Manager, Himalayan Commerce",
    initials: "PM"
  }
];
