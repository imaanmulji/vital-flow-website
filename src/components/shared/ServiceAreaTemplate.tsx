import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import { MapPin, HeartPulse, Activity, Compass, Sparkles } from "lucide-react";
import Image from "next/image";

interface ServiceAreaTemplateProps {
  town: string;
  heroH1: string;
  introParagraph: string;
  imagePath: string;
  reasons: string[];
  testimonial: { quote: string; author: string };
}

export default function ServiceAreaTemplate({
  town,
  heroH1,
  introParagraph,
  imagePath,
  reasons,
  testimonial,
}: ServiceAreaTemplateProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Vital Flow Physical Therapy - ${town}`,
    url: `https://vitalflowpt.com/service-areas/${town.toLowerCase()}`,
    telephone: "+1-267-362-9596",
    areaServed: {
      "@type": "City",
      name: town,
      containedInPlace: {
        "@type": "State",
        name: "Pennsylvania"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
                {heroH1}
              </h1>
              <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed">
                {introParagraph}
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-sm max-w-xl mx-auto">
                <div className="absolute inset-0 bg-brand-accentLight"></div>
                <Image src={imagePath} alt={heroH1} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Town */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-4">Services available in {town}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/services/pelvic-floor-therapy" className="block group">
              <Card className="p-6 rounded-2xl border border-brand-border h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <HeartPulse className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-semibold text-lg text-brand-primaryDark group-hover:text-brand-primary transition-colors">Pelvic Floor Therapy</h3>
              </Card>
            </Link>
            <Link href="/services/orthopedic-sports" className="block group">
              <Card className="p-6 rounded-2xl border border-brand-border h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <Activity className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-semibold text-lg text-brand-primaryDark group-hover:text-brand-primary transition-colors">Orthopedic & Sports</h3>
              </Card>
            </Link>
            <Link href="/services/vestibular-rehabilitation" className="block group">
              <Card className="p-6 rounded-2xl border border-brand-border h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <Compass className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-semibold text-lg text-brand-primaryDark group-hover:text-brand-primary transition-colors">Vestibular Rehab</h3>
              </Card>
            </Link>
            <Link href="/services/pain-management" className="block group">
              <Card className="p-6 rounded-2xl border border-brand-border h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <Sparkles className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-semibold text-lg text-brand-primaryDark group-hover:text-brand-primary transition-colors">Pain Management</h3>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Town Patients Choose Clinic-Based */}
      <section className="py-20 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-10 text-center">
              Why {town} patients choose clinic-based PT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
                  <p className="text-brand-textPrimary leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & Map Callout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
            <div>
              <Card className="p-8 rounded-2xl bg-brand-bg border-none shadow-sm">
                <p className="font-heading italic text-xl text-brand-textPrimary leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm font-semibold tracking-wider text-brand-textSecondary uppercase">
                  {testimonial.author}
                </div>
              </Card>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary mx-auto lg:mx-0 mb-6">
                <MapPin className="w-10 h-10" />
              </div>
              <h2 className="font-heading text-3xl text-brand-primaryDark mb-4">Visit our private clinic.</h2>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-8">
                Vital Flow serves {town} and surrounding communities from our private clinic at 1250 Old York Road, Warminster, PA. Experience true one-on-one care.
              </p>
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8">
                <Link href="/contact">Book an evaluation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABlock />
    </div>
  );
}
