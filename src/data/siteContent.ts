import { BookOpen, HeartPulse, ShieldCheck, Sparkles, Compass, HandHeart, GraduationCap, Baby, Sparkles as SparkleIcon, Star } from "lucide-react";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Stories", href: "/stories" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
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
    description:
      "Bright classrooms, digital learning, and joyful mentors who guide each child beyond the basics.",
    image: "/programs/education.jpg",
    icon: BookOpen,
    color: "from-[#F97316] to-[#FB923C]",
    bg: "bg-orange-50",
    text: "text-[#F97316]",
  },
  {
    title: "Health & Nutrition",
    description:
      "Daily nourishment, wellness support, and preventive care so children can thrive in body and spirit.",
    image: "/programs/health.jpg",
    icon: HeartPulse,
    color: "from-[#EA580C] to-[#FB923C]",
    bg: "bg-orange-50",
    text: "text-[#EA580C]",
  },
  {
    title: "Child Protection",
    description:
      "Safe spaces, counselling, and advocacy that keep every child protected and supported.",
    image: "/programs/protection.jpg",
    icon: ShieldCheck,
    color: "from-[#D97706] to-[#F59E0B]",
    bg: "bg-amber-50",
    text: "text-[#D97706]",
  },
  {
    title: "Life Skills",
    description:
      "Confidence-building lessons in leadership, communication, and creative futures.",
    image: "/programs/life-skills.jpg",
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
  {
    title: "A shared meal brought a whole classroom ",
    description: "Daily nutrition support meant children could focus on learning instead of hunger, and lunchtime became the happiest hour of the day.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    tag: "Health & nutrition",
  },
  {
    title: "From shy first-grader to confident storyteller",
    description: "Small classroom sizes and patient mentors gave Priya the courage to raise her hand — now she leads morning assembly stories.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    tag: "Student spotlight",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    alt: "Children smiling during a classroom activity",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    alt: "Children learning with a teacher",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    alt: "Art workshop with children",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteer reading with children",
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
    alt: "Children sharing a meal at a community center",
  },
];

export const testimonials = [
  {
    quote:
      "The team made my son feel seen, safe, and curious again. Every lesson feels like a celebration.",
    author: "Meera S.",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "I came as a volunteer and left as a family member. The warmth here is unmatched.",
    author: "Daniel K.",
    role: "Volunteer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "My classroom now feels like a place of possibility, not pressure. I love seeing children shine.",
    author: "Nadia R.",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
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

export const donationTiers = [
  {
    amount: "₹500",
    frequency: "one-time",
    impact: "Provides a full month of notebooks, pencils, and learning materials for one child.",
    highlighted: false,
  },
  {
    amount: "₹1,500",
    frequency: "one-time",
    impact: "Covers nutritious daily meals for one child for an entire month.",
    highlighted: true,
  },
  {
    amount: "₹5,000",
    frequency: "one-time",
    impact: "Sponsors a full term of classes, mentorship, and health check-ups for one child.",
    highlighted: false,
  },
  {
    amount: "₹12,000",
    frequency: "one-time",
    impact: "Funds a full year of education, meals, and protection support for one child.",
    highlighted: false,
  },
];

export const donationBreakdown = [
  { label: "Classroom education", percent: 45 },
  { label: "Nutrition & health", percent: 30 },
  { label: "Child protection", percent: 15 },
  { label: "Community operations", percent: 10 },
];

export const contactChannels = [
  {
    icon: "Mail",
    label: "Email us",
    value: "hello@brightpath.org",
    href: "mailto:hello@brightpath.org",
  },
  {
    icon: "Phone",
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: "MapPin",
    label: "Visit us",
    value: "14 Sunshine Lane, Delhi, India",
    href: "https://maps.google.com",
  },
  {
    icon: "Clock",
    label: "Office hours",
    value: "Mon–Sat, 9:00 AM – 6:00 PM",
    href: undefined,
  },
];

export const faqs = [
  {
    question: "How do I know my donation is being used well?",
    answer: "Every center publishes a quarterly impact report, and donors receive updates showing exactly how funds were used for education, nutrition, and protection programs.",
  },
  {
    question: "Can I volunteer without teaching experience?",
    answer: "Yes! We welcome mentors, event organizers, and fundraisers. We match you with a role that fits your skills and schedule, with training provided.",
  },
  {
    question: "Do you offer scholarships for older students?",
    answer: "Yes, our life-skills and scholarship program supports students through secondary school and into vocational training or college.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, BrightPath Foundation is a registered nonprofit and all donations are eligible for tax deductions under applicable local law.",
  },
];