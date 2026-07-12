import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Home Spa — سبا منزلي فاخر في المملكة العربية السعودية",
  description:
    "خدمات سبا ومساج منزلي فاخر في منزلك. جلسات مساج احترافية، عناية بالأظافر، وباقات اشتراك شهرية مميزة. احجز الآن واسترخِ وأنت في منزلك.",
  keywords: [
    "سبا منزلي",
    "مساج",
    "مساج منزلي",
    "سبا",
    "عناية",
    "مانيكير",
    "بديكير",
    "استرخاء",
    "السعودية",
  ],
  authors: [{ name: "Home Spa" }],
  openGraph: {
    title: "Home Spa — سبا منزلي فاخر",
    description:
      "خدمات سبا ومساج منزلي فاخر. احجز جلسة مساج احترافية في منزلك الآن.",
    type: "website",
    locale: "ar_SA",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1814",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-offwhite text-espresso font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
