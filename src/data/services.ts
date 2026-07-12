/**
 * ملف البيانات المركزي لموقع Home Spa
 * يحتوي على جميع الخدمات والباقات والبيانات المشتركة
 */

// ============================================================
// أنواع البيانات
// ============================================================

/** خدمة سبا فردية */
export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description?: string;
  icon?: string;
}

/** باقة اشتراك شهري */
export interface SubscriptionPackage {
  id: string;
  name: string;
  monthlyPrice: number;
  sessionsPerMonth: number;
  features: string[];
  savings: number;
  popular?: boolean;
  icon?: string;
  color: "silver" | "gold" | "platinum";
}

/** معلومات الاتصال */
export interface ContactInfo {
  whatsappNumber: string;
  whatsappLink: string;
  email?: string;
  workingHours: string;
  serviceArea: string;
}

// ============================================================
// رقم واتساب الأساسي
// ============================================================

export const WHATSAPP_NUMBER = "966549986148";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** إنشاء رابط واتساب مع رسالة مخصصة */
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
    icon: "🌿",
  },
  {
    id: "thai-massage",
    name: "مساج تايلندي",
    duration: "90 دقيقة",
    price: 300,
    description:
      "تقنية تايلندية أصيلة تجمع بين الضغط والتمدد لتحسين المرونة وتنشيط الدورة الدموية وتخفيف آلام العضلات.",
    icon: "🧘",
  },
  {
    id: "hot-stone-massage",
    name: "مساج أحجار ساخنة",
    duration: "90 دقيقة",
    price: 350,
    description:
      "تدليك فاخر باستخدام أحجار البازلت الساخنة لتخفيف التوتر العضلي العميق وتحسين تدفق الطاقة في الجسم.",
    icon: "🪨",
  },
  {
    id: "cupping-massage",
    name: "مساج كاسات الهواء",
    duration: "60 دقيقة",
    price: 250,
    description:
      "علاج بالحجامة لتخفيف آلام العضلات وتحسين الدورة الدموية وإزالة السموم من الجسم بأسلوب آمن وفعال.",
    icon: "🫙",
  },
  {
    id: "head-neck-massage",
    name: "مساج الرأس والرقبة",
    duration: "45 دقيقة",
    price: 180,
    description:
      "تدليك مكثف لمنطقة الرأس والرقبة والأكتاف لتخفيف الصداع والتوتر الناتج عن الجلوس الطويل والعمل المكتبي.",
    icon: "💆",
  },
  {
    id: "pregnancy-massage",
    name: "مساج الحامل",
    duration: "60 دقيقة",
    price: 270,
    description:
      "مساج لطيف وآمن للحوامل يساعد على تخفيف آلام الظهر وتحسين النوم وتقليل التورم في القدمين.",
    icon: "🤰",
  },
  {
    id: "postnatal-massage",
    name: "مساج النفاس",
    duration: "60 دقيقة",
    price: 280,
    description:
      "جلسة عناية مخصصة لفترة النفاس تساعد على استعادة الجسم لحيويته وتخفيف التوتر بعد الولادة.",
    icon: "👶",
  },
  {
    id: "foot-massage",
    name: "مساج الأرجل",
    duration: "45 دقيقة",
    price: 180,
    description:
      "تدليك متخصص للأرجل والقدمين لتخفيف التعب وتحسين الدورة الدموية بعد يوم طويل من الوقوف أو المشي.",
    icon: "🦶",
  },
  {
    id: "manicure",
    name: "مانيكير",
    duration: "30-45 دقيقة",
    price: 100,
    description:
      "عناية كاملة بالأظافر وتشذيبها وتلميعها مع ترطيب اليدين لتحصلي على أظافر جميلة ومشرقة.",
    icon: "💅",
  },
  {
    id: "pedicure",
    name: "بديكير",
    duration: "30-45 دقيقة",
    price: 120,
    description:
      "عناية شاملة بالقدمين والأظافر مع تقشير وترطيب لإعادة النعومة والجمال لقدميك.",
    icon: "🦶",
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
    icon: "🥈",
  },
  {
    id: "gold",
    name: "الباقة الذهبية",
    monthlyPrice: 1299,
    sessionsPerMonth: 8,
    features: [
      "٨ جلسات مساج شهرياً",
      "أولوية مضاعفة في الحجز",
      "خصم ١٠٪ على الخدمات الإضافية",
    ],
    savings: 461,
    popular: true,
    color: "gold",
    icon: "🥇",
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
    icon: "💎",
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
// مساعد: تنسيق السعر بالريال السعودي
// ============================================================

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-SA")} ر.س`;
}

// ============================================================
// روابط التنقل
// ============================================================

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/subscriptions", label: "الباقات" },
  { href: "/contact", label: "تواصل معنا" },
] as const;
