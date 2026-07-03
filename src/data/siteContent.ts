import { BookOpen, HeartPulse, ShieldCheck, Sparkles, Compass, HandHeart, GraduationCap, Baby, Sparkles as SparkleIcon, Star } from "lucide-react";

export const navItems = [
  { label: "About", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Stories", href: "#stories" },
  { label: "Volunteer", href: "#volunteer" },
];

export const stats = [
  { value: "20K+", label: "Children educated" },
  { value: "350+", label: "Learning centers" },
  { value: "150+", label: "Volunteers" },
  { value: "25", label: "Cities" },
];

export const programs = [
  {
    title: "Education",
    description: "Bright classrooms, digital learning, and joyful mentors who guide each child beyond the basics.",
    icon: BookOpen,
    color: "from-[#F97316] to-[#FB923C]",
    bg: "bg-orange-50",
    text: "text-[#F97316]",
  },
  {
    title: "Health & Nutrition",
    description: "Daily nourishment, wellness support, and preventive care so children can thrive in body and spirit.",
    icon: HeartPulse,
    color: "from-[#EA580C] to-[#FB923C]",
    bg: "bg-orange-50",
    text: "text-[#EA580C]",
  },
  {
    title: "Child Protection",
    description: "Safe spaces, counselling, and advocacy that keep every child protected and supported.",
    icon: ShieldCheck,
    color: "from-[#D97706] to-[#F59E0B]",
    bg: "bg-amber-50",
    text: "text-[#D97706]",
  },
  {
    title: "Life Skills",
    description: "Confidence-building lessons in leadership, communication, and creative futures.",
    icon: Sparkles,
    color: "from-[#F59E0B] to-[#FBBF24]",
    bg: "bg-amber-50",
    text: "text-[#B45309]",
  },
];

export const stories = [
  {
    title: "Asha found her voice through reading circles",
    description: "After years of being quiet in class, Asha now leads her neighborhood literacy club and mentors younger children.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    tag: "Featured story",
  },
  {
    title: "Ravi’s dream of becoming a teacher",
    description: "Scholarships and tutoring helped Ravi stay in school and begin teaching younger students on weekends.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    tag: "Student spotlight",
  },
  {
    title: "A safe place for girls to learn",
    description: "A new community center gave over 80 girls a refuge, guidance, and time to imagine a bigger future.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    tag: "Community impact",
  },
  {
    title: "Volunteer-led art workshop sparks confidence",
    description: "Weekly art sessions helped children express emotions, celebrate culture, and discover new talents.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    tag: "Creative learning",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    alt: "Children smiling during a classroom activity",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteer reading with children",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
    alt: "Children sharing a meal at a community center",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    alt: "Children learning with a teacher",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    alt: "Art workshop with children",
    className: "md:col-span-1",
  },
];

export const testimonials = [
  {
    quote:
      "The team made my son feel seen, safe, and curious again. Every lesson feels like a celebration.",
    author: "Meera S.",
    role: "Parent",
  },
  {
    quote:
      "I came as a volunteer and left as a family member. The warmth here is unmatched.",
    author: "Daniel K.",
    role: "Volunteer",
  },
  {
    quote:
      "My classroom now feels like a place of possibility, not pressure. I love seeing children shine.",
    author: "Nadia R.",
    role: "Student",
  },
];

export const impactCounters = [
  { value: 20000, label: "Children educated" },
  { value: 480, label: "Scholarships" },
  { value: 1200, label: "Teachers" },
  { value: 350, label: "Centers" },
];

export const trustBadges = [
  { icon: Compass, label: "Community-led" },
  { icon: HandHeart, label: "Compassion first" },
  { icon: GraduationCap, label: "Future-ready" },
  { icon: SparkleIcon, label: "Joyful learning" },
  { icon: Star, label: "Trusted by families" },
];