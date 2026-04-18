import { Dumbbell, Users, Play, Heart, Zap, UserCheck, Apple, Bike, Star, MapPin, Phone, MessageCircle } from 'lucide-react';

export const GYM_NAME = "RP FITNESS UNISEX GYM";

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: "HIIT Training",
    description: "High-intensity interval training to burn maximum calories in minimum time.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "CrossFit",
    description: "Functional movements performed at high intensity for total body fitness.",
    icon: <Dumbbell className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Zumba Classes",
    description: "Dance your way to fitness with our energetic Zumba sessions.",
    icon: <Play className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Yoga Sessions",
    description: "Connect mind and body with our guided yoga and meditation classes.",
    icon: <Heart className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Weight Training",
    description: "Build strength and muscle with our premium range of free weights and machines.",
    icon: <Dumbbell className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Personal Training",
    description: "Get personalized workout plans and 1-on-1 guidance from expert trainers.",
    icon: <UserCheck className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Nutrition Consulting",
    description: "Transform your diet with professional nutrition plans tailored to your goals.",
    icon: <Apple className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Cycling Workouts",
    description: "Boost your endurance with high-energy indoor cycling classes.",
    icon: <Bike className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  }
];

export const TRAINERS = [
  {
    name: "Vikram Singh",
    role: "Head Trainer",
    description: "Specialist in Bodybuilding and Strength Training with 8+ years of experience.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    badge: "10+ Years Exp"
  },
  {
    name: "Anjali Kumari",
    role: "Yoga & Zumba Expert",
    description: "Certified professional in Yoga, Zumba, and holistic wellness.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=600",
    badge: "Certified"
  },
  {
    name: "Rahul Mehra",
    role: "Cardio Specialist",
    description: "Expert in HIIT and endurance training programs.",
    image: "https://images.unsplash.com/photo-1491752289445-38d99ca295f1?auto=format&fit=crop&q=80&w=600",
    badge: "HIIT Pro"
  }
];

export const REVIEWS = [
  {
    name: "Aryan Raj",
    text: "Best gym in the city! The equipment is top-notch and the trainers are very helpful. Highly recommended for anyone looking to transform themselves.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Sneha Patel",
    text: "Love the environment here. It's clean, modern, and very motivational. The Zumba classes are my favorite!",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Deepak Kumar",
    text: "Professional trainers and great community. I've seen massive progress in just 3 months. The best fitness experience in Bihar Sharif.",
    rating: 5,
    date: "3 weeks ago"
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533681478291-0ad0c69ea051?auto=format&fit=crop&q=80&w=800"
];

export const CONTACT_INFO = {
  address: "Mangla Asthan Rd, Sherpur, Bihar Sharif, Bihar 803216",
  phone: "062050 12455",
  whatsapp: "916205012455",
  googleLink: "https://www.google.com/maps?q=Mangla+Asthan+Rd,+Sherpur,+Bihar+Sharif,+Bihar+803216",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8546549429185!2d85.4920251!3d25.1742468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f28bb019489569%3A0x6739600e60803c70!2sMangla%20Asthan%20Rd%2C%20Sherpur%2C%20Bihar%20Sharif%2C%20Bihar%20803216!5e0!3m2!1sen!2sin!4v1713374400000!5m2!1sen!2sin"
};
