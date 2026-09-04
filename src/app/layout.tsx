import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Vital Flow Physical Therapy | Physical Therapy in Warminster & Doylestown, PA",
  description:
    "Holistic concierge physical therapy in Warminster, PA. Personalized pelvic floor, orthopedic, vestibular, and pain management care. Medicare accepted. Serving Doylestown, Warminster, and Bucks County.",
  openGraph: {
    title: "Vital Flow Physical Therapy",
    description: "Holistic concierge physical therapy in Warminster, PA. Medicare accepted.",
    url: "https://vitalflowpt.com",
    siteName: "Vital Flow Physical Therapy",
    images: [
      {
        url: "https://vitalflowpt.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Vital Flow Physical Therapy Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "PhysicalTherapy"],
    name: "Vital Flow Physical Therapy",
    url: "https://vitalflowpt.com",
    telephone: "+1-267-362-9596",
    email: "hello@vitalflowpt.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1250 Old York Road",
      addressLocality: "Warminster",
      addressRegion: "PA",
      postalCode: "18974",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Doylestown, PA" },
      { "@type": "City", name: "Warminster, PA" },
      { "@type": "City", name: "Warwick, PA" },
      { "@type": "City", name: "Newtown, PA" },
      { "@type": "City", name: "New Hope, PA" },
      { "@type": "City", name: "Buckingham, PA" },
      { "@type": "City", name: "Jamison, PA" },
      { "@type": "City", name: "Furlong, PA" },
      { "@type": "City", name: "Chalfont, PA" },
    ],
    medicalSpecialty: ["PhysicalTherapy"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "14:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Palak Mulji",
      honorificSuffix: "PT, DPT",
      jobTitle: "Doctor of Physical Therapy",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans bg-brand-bg text-brand-textPrimary min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}




