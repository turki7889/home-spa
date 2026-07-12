import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Home Spa — سبا منزلي فاخر للمرأة السعودية",
  description:
    "خدمات سبا ومساج منزلي فاخر للمرأة في منزلك. جلسات مساج احترافية، عناية بالأظافر، وباقات اشتراك شهرية مميزة. تجربة أنثوية راقية تصل إليك أينما كنت.",
  keywords: [
    "سبا منزلي",
    "سبا نسائي",
    "مساج",
    "مساج منزلي",
    "مساج نسائي",
    "سبا",
    "عناية",
    "مانيكير",
    "بديكير",
    "استرخاء",
    "السعودية",
    "سبا الرياض",
  ],
  authors: [{ name: "Home Spa" }],
  openGraph: {
    title: "Home Spa — سبا منزلي فاخر للمرأة السعودية",
    description:
      "خدمات سبا ومساج منزلي فاخر للمرأة. احجزي جلستك الآن واستمتعي بتجربة أنثوية راقية في منزلك.",
    type: "website",
    locale: "ar_SA",
  },
};

export const viewport: Viewport = {
  themeColor: "#B76E79",
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
      <body className="flex min-h-full flex-col bg-bg text-deep-rose font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
