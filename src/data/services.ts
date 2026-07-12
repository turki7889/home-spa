/**
 * ملف البيانات المركزي لموقع Home Spa
 * سبا نسائي فاخر — Muted Dusty palette
 * React Icons replacing all emoji
 * Target: المرأة السعودية — تجربة سبا منزلي أنثوية راقية
 */

import type { IconType } from "react-icons";

// ============================================================
// أنواع البيانات
// ============================================================

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description?: string;
  iconKey: string;
}

export interface SubscriptionPackage {
  id: string;
  name: string;
  monthlyPrice: number;
  sessionsPerMonth: number;
  features: string[];
  savings: number;
  popular?: boolean;
  iconKey: string;
  color: "silver" | "gold" | "platinum";
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappLink: string;
  email?: string;
  workingHours: string;
  serviceArea: string;
}

// ============================================================
// React Icons — centralized mapping
// ============================================================

import {
  FaLeaf,
  FaPray,
  FaFlask,
  FaUserCircle,
  FaBaby,
  FaBabyCarriage,
  FaShoePrints,
  FaHandSparkles,
  FaMedal,
  FaCrown,
  FaGem,
  FaWhatsapp,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaHome,
  FaSpa,
  FaChevronDown,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import {
  GiStoneBlock,
  GiFootprint,
  GiRosaShield,
} from "react-icons/gi";

import {
  LuWaves,
  LuFlower2,
  LuSparkles,
  LuStar,
} from "react-icons/lu";

const iconMap: Record<string, IconType> = {
  leaf: FaLeaf,
  prayer: FaPray,
  stone: GiStoneBlock,
  flask: FaFlask,
  headMassage: FaUserCircle,
  pregnancy: FaBaby,
  postnatal: FaBabyCarriage,
  footMassage: GiFootprint,
  manicure: FaHandSparkles,
  pedicure: FaShoePrints,
  silverMedal: FaMedal,
  goldMedal: FaMedal,
  diamond: FaGem,
  crown: FaCrown,
  clock: FaClock,
  phone: FaPhone,
  mapMarker: FaMapMarkerAlt,
  home: FaHome,
  spa: FaSpa,
  whatsapp: FaWhatsapp,
  calendar: FaCalendarAlt,
  checkCircle: FaCheckCircle,
  waves: LuWaves,
  flower: LuFlower2,
  sparkles: LuSparkles,
  star: LuStar,
};

/**
 * Returns the React Icon component for a given icon key.
 * Falls back to FaSpa if key not found.
 */
export function getIcon(key: string): IconType {
  return iconMap[key] || FaSpa;
}

// ============================================================
// رقم واتساب الأساسي
// ============================================================

export const WHATSAPP_NUMBER = "966549986148";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message?: string): string {
  const base = WHATSAPP_BASE_URL;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// ============================================================
// قائمة الخدمات
// ============================================================

export const services: Service[] = [
  {
    id: "relaxation-massage",
    name: "مساج استرخائي",
    duration: "60 دقيقة",
    price: 220,
    description:
      "جلسة مساج مريحة تهدف إلى تخفيف التوتر والإجهاد، باستخدام زيوت عطرية طبيعية وحركات ناعمة لإعادة التوازن للجسم والعقل.",
    iconKey: "leaf",
  },
  {
    id: "thai-massage",
    name: "مساج تايلندي",
    duration: "90 دقيقة",
    price: 300,
    description:
      "تقنية تايلندية أصيلة تجمع بين الضغط والتمدد لتحسين المرونة وتنشيط الدورة الدموية وتخفيف آلام العضلات.",
    iconKey: "prayer",
  },
  {
    id: "hot-stone-massage",
    name: "مساج أحجار ساخنة",
    duration: "90 دقيقة",
    price: 350,
    description:
      "تدليك فاخر باستخدام أحجار البازلت الساخنة لتخفيف التوتر العضلي العميق وتحسين تدفق الطاقة في الجسم.",
    iconKey: "stone",
  },
  {
    id: "cupping-massage",
    name: "مساج كاسات الهواء",
    duration: "60 دقيقة",
    price: 250,
    description:
      "علاج بالحجامة لتخفيف آلام العضلات وتحسين الدورة الدموية وإزالة السموم من الجسم بأسلوب آمن وفعال.",
    iconKey: "flask",
  },
  {
    id: "head-neck-massage",
    name: "مساج الرأس والرقبة",
    duration: "45 دقيقة",
    price: 180,
    description:
      "تدليك مكثف لمنطقة الرأس والرقبة والأكتاف لتخفيف الصداع والتوتر الناتج عن الجلوس الطويل والعمل المكتبي.",
    iconKey: "headMassage",
  },
  {
    id: "pregnancy-massage",
    name: "مساج الحامل",
    duration: "60 دقيقة",
    price: 270,
    description:
      "مساج لطيف وآمن للحوامل يساعد على تخفيف آلام الظهر وتحسين النوم وتقليل التورم في القدمين.",
    iconKey: "pregnancy",
  },
  {
    id: "postnatal-massage",
    name: "مساج النفاس",
    duration: "60 دقيقة",
    price: 280,
    description:
      "جلسة عناية مخصصة لفترة النفاس تساعد على استعادة الجسم لحيويته وتخفيف التوتر بعد الولادة.",
    iconKey: "postnatal",
  },
  {
    id: "foot-massage",
    name: "مساج الأرجل",
    duration: "45 دقيقة",
    price: 180,
    description:
      "تدليك متخصص للأرجل والقدمين لتخفيف التعب وتحسين الدورة الدموية بعد يوم طويل من الوقوف أو المشي.",
    iconKey: "footMassage",
  },
  {
    id: "manicure",
    name: "مانيكير",
    duration: "30-45 دقيقة",
    price: 100,
    description:
      "عناية كاملة بالأظافر وتشذيبها وتلميعها مع ترطيب اليدين لتحصلي على أظافر جميلة ومشرقة.",
    iconKey: "manicure",
  },
  {
    id: "pedicure",
    name: "بديكير",
    duration: "30-45 دقيقة",
    price: 120,
    description:
      "عناية شاملة بالقدمين والأظافر مع تقشير وترطيب لإعادة النعومة والجمال لقدميك.",
    iconKey: "pedicure",
  },
];

// ============================================================
// باقـات الاشتراك الشهرية
// ============================================================

export const subscriptions: SubscriptionPackage[] = [
  {
    id: "silver",
    name: "الباقة الفضية",
    monthlyPrice: 699,
    sessionsPerMonth: 4,
    features: [
      "٤ جلسات مساج شهرياً",
      "أولوية في الحجز",
      "إشعار بالعروض الموسمية",
    ],
    savings: 181,
    color: "silver",
    iconKey: "silverMedal",
  },
  {
    id: "gold",
    name: "الباقة الذهبية",
    monthlyPrice: 1299,
    sessionsPerMonth: 8,
    features: [
      "٨ جلسات مساج شهرياً",
      "أولوية مضاعفة في الحجز",
      "خصم ١٠٪ على الخدمات الإضافة",
    ],
    savings: 461,
    popular: true,
    color: "gold",
    iconKey: "goldMedal",
  },
  {
    id: "platinum",
    name: "الباقة البلاتينية",
    monthlyPrice: 1799,
    sessionsPerMonth: 12,
    features: [
      "١٢ جلسة مساج شهرياً",
      "جلسة بديكير مجانية",
      "أولوية قصوى في الحجز",
      "هدية شهرية",
    ],
    savings: 841,
    color: "platinum",
    iconKey: "diamond",
  },
];

// ============================================================
// معلومات الاتصال
// ============================================================

export const contactInfo: ContactInfo = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappLink: WHATSAPP_BASE_URL,
  workingHours: "يومياً من ٩ صباحاً حتى ١٠ مساءً",
  serviceArea: "نخدم جميع مناطق الرياض والمدن الكبرى في المملكة",
};

// ============================================================
// روابط التنقل
// ============================================================

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/subscriptions", label: "الباقات" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

// ============================================================
// مساعد: تنسيق السعر بالريال السعودي
// ============================================================

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-SA")} ر.س`;
}
