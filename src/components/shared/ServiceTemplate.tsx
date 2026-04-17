import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import { CheckCircle2, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

interface ServiceTemplateProps {
  breadcrumbName: string;
  heroEyebrow: string;
  heroH1: string;
  heroIntro: string;
  imagePath: string;
  conditions: string[];
  benefits: { title: string; description: string }[];
  testimonial: { quote: string; author: string };
  faqs: { q: string; a: string }[];
  relatedServices: { name: string; href: string }[];
}

export default function ServiceTemplate({
  breadcrumbName,
  heroEyebrow,
  heroH1,
  heroIntro,
  imagePath,
  conditions,
  benefits,
  testimonial,
  faqs,
  relatedServices,
}: ServiceTemplateProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: breadcrumbName,
        provider: {
          "@type": "MedicalBusiness",
          name: "Vital Flow Physical Therapy"
        },
        description: heroIntro
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://vitalflowpt.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://vitalflowpt.com/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: breadcrumbName
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Breadcrumb */}
      <div className="bg-brand-bg py-4 border-b border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center text-sm text-brand-textMuted">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Services</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-textPrimary font-medium">{breadcrumbName}</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero */}
      <section className="py-16 md:py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block text-xs md:text-sm font-semibold text-brand-primary tracking-wider uppercase mb-6">
                {heroEyebrow}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
                {heroH1}
              </h1>
              <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed mb-10 max-w-xl">
                {heroIntro}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base w-full sm:w-auto">
                  <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                    Book Free Consult
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-brand-border text-brand-textPrimary hover:bg-white w-full sm:w-auto">
                  <Link href="/insurance">
                    See Pricing
                  </Link>
                </Button>
              </div>
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

      {/* 3. Conditions we treat */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-10 text-center">
              Conditions we treat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {conditions.map((condition, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                  <span className="text-brand-textPrimary text-lg">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What makes clinic-based different */}
      <section className="py-20 md:py-32 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">
                What makes clinic-based care different
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="p-8 rounded-2xl bg-white border-none shadow-sm">
                  <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">{benefit.title}</h3>
                  <p className="text-brand-textSecondary leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Treatment Approach */}
      <section className="py-20 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-16">
              Your treatment approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-brand-border z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading text-2xl font-semibold mb-6">1</div>
                <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Evaluate</h3>
                <p className="text-brand-textSecondary text-sm leading-relaxed">A full hour examining the root cause, observing how you move in your actual space.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading text-2xl font-semibold mb-6">2</div>
                <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Treat</h3>
                <p className="text-brand-textSecondary text-sm leading-relaxed">Hands-on manual therapy and targeted movement re-education right where you need it.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading text-2xl font-semibold mb-6">3</div>
                <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Home Program</h3>
                <p className="text-brand-textSecondary text-sm leading-relaxed">A simple, realistic plan built around your daily life, not generic printouts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial */}
      <section className="py-20 bg-brand-primaryDark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center text-brand-accent mb-8">
              <Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" />
            </div>
            <p className="font-heading italic text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10">
              "{testimonial.quote}"
            </p>
            <div className="font-medium tracking-wider text-brand-primaryLight uppercase text-sm">
              {testimonial.author}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Questions about {breadcrumbName}</h2>
          </div>
          <Accordion className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-brand-border">
                <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. Related Services */}
      <section className="py-16 bg-brand-bg border-t border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-2xl text-brand-primaryDark mb-8 text-center">Explore other services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service, idx) => (
              <Link key={idx} href={service.href} className="px-6 py-3 bg-white border border-brand-border rounded-full text-brand-textPrimary hover:border-brand-primary hover:text-brand-primary transition-colors text-sm font-medium">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTABlock />
    </div>
  );
}
