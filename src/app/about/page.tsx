import type { Metadata } from "next";
import Image from "next/image";
import CTABlock from "@/components/shared/CTABlock";
import { Card } from "@/components/ui/card";
import { Check, Heart, Shield, Activity, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Palak Mulji, PT, DPT | Vital Flow PT",
  description: "Meet Dr. Palak Mulji, Doctor of Physical Therapy with over 25 years of experience treating orthopedic, pelvic floor, and vestibular conditions in Bucks County.",
  alternates: { canonical: "https://vitalflowpt.com/about" }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Palak Mulji",
    honorificSuffix: "PT, DPT",
    jobTitle: "Doctor of Physical Therapy",
    worksFor: {
      "@type": "MedicalBusiness",
      name: "Vital Flow Physical Therapy"
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Rutgers University"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Emory University"
      }
    ],
    knowsAbout: [
      "Physical Therapy",
      "Vestibular Rehabilitation",
      "Pelvic Floor Therapy",
      "Orthopedic Physical Therapy"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero & Bio - Premium Split Layout */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primaryLight/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Image Side */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-brand-surface border-2 border-dashed border-brand-border flex items-center justify-center p-8 text-center text-brand-textMuted font-medium">
                    [Placeholder for Dr. Palak's Photo]
                  </div>
                  {/* 
                  <Image 
                    src="/images/dr-palak-portrait.webp" 
                    alt="Dr. Palak Mulji, PT, DPT" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primaryDark/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <p className="text-white font-heading text-2xl mb-1">Palak Mulji</p>
                    <p className="text-white/80 font-medium tracking-wide text-sm uppercase">PT, DPT</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-border/50 max-w-[200px] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                  <div className="flex gap-2 text-brand-primary mb-2">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-brand-primaryDark leading-tight">Integrative Mind-Body Practitioner</p>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primaryLight text-brand-primary font-semibold text-sm tracking-wider uppercase mb-8">
                  <Heart className="w-4 h-4" /> Meet Your Clinician
                </span>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-8 leading-[1.15]">
                  25+ years of clinical experience. <br/>
                  <span className="text-brand-primary">One patient at a time.</span>
                </h1>

                <div className="space-y-6 text-lg md:text-xl text-brand-textPrimary leading-relaxed">
                  <p className="font-medium text-brand-primaryDark">
                    "I'm Palak Mulji, PT, DPT, a licensed physical therapist with over 25 years of experience helping individuals restore function, reduce pain, and reconnect with their bodies. Since beginning my career in 1998, I've been committed to providing thoughtful, evidence-based, and compassionate care that honors the whole person."
                  </p>
                  
                  <p className="text-brand-textSecondary">
                    "I earned my Doctorate in Physical Therapy (DPT) from Rutgers University. Over the years, my passion for integrative healing led me to expand my training beyond traditional physical therapy. I am a Certified Vestibular Therapist (Emory University) and am currently completing Advanced Mind-Body Practitioner training through the Jefferson School of Integrative Medicine, deepening my understanding of how emotional, mental, and physical systems work together in healing."
                  </p>
                  
                  <p className="text-brand-textSecondary">
                    I founded Vital Flow Physical Therapy because I recognized a growing problem in the traditional clinic model: it forces shorter visits, shared attention, and care plans built around scheduling constraints rather than healing. I wanted to practice the way I was trained: one patient, full focus, and enough time to actually examine what's happening without watching the clock.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-brand-surface relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl text-brand-primaryDark mb-4">Credentials & Education</h2>
              <p className="text-lg text-brand-textSecondary">A foundation of clinical excellence and lifelong learning.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-10 rounded-3xl bg-white border-brand-border/50 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-brand-primaryLight flex items-center justify-center text-brand-primary mb-8">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl text-brand-primaryDark mb-6">Licensure & Education</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div>Doctor of Physical Therapy (DPT), Rutgers University</div>
                  </li>
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div>Licensed Physical Therapist in Pennsylvania</div>
                  </li>
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div>Member, American Physical Therapy Association (APTA)</div>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-10 rounded-3xl bg-white border-brand-border/50 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-brand-primaryLight flex items-center justify-center text-brand-primary mb-8">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl text-brand-primaryDark mb-6">Advanced Training</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div><strong className="text-brand-textPrimary font-semibold">In Progress:</strong> Advanced Mind-Body Practitioner training, Jefferson School of Integrative Medicine</div>
                  </li>
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div>Pelvic Health Physical Therapy (Herman & Wallace)</div>
                  </li>
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div><strong className="text-brand-textPrimary font-semibold">Certified Vestibular Therapist</strong> (Emory University) & Concussion Management</div>
                  </li>
                  <li className="flex items-start gap-4 text-brand-textSecondary text-lg">
                    <Check className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <div>Orthopedic Manual Therapy & Myofascial Release</div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* A Day in the Life */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-brand-primaryLight/20 -translate-y-1/2 skew-y-3"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-primaryDark mb-12 text-center">What a clinic visit actually looks like</h2>
            
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-brand-border/30 relative">
              {/* Quotation mark decoration */}
              <div className="absolute top-10 left-8 md:left-10 text-[8rem] leading-none text-brand-primaryLight opacity-40 font-serif select-none">"</div>
              
              <div className="relative z-10 space-y-8 text-xl md:text-2xl text-brand-textPrimary leading-relaxed font-medium">
                <p>
                  When you arrive at our clinic, the first thing we do is sit down and talk—no rush, no crowded waiting rooms. We'll head into our private treatment room while we discuss how your week has been. We spend a full, uninterrupted hour together. 
                </p>
                <p>
                  Usually, we'll start with hands-on manual therapy on the table to address joint restrictions or muscle tension. Then, we move into active exercise. But instead of just putting you on machines, we focus on the functional movements that matter to your daily life. We practice balance, we work on core engagement for lifting, and we adjust your posture for your specific work setup.
                </p>
                <p className="text-brand-primary">
                  When you leave, you'll have a clear plan and the confidence to keep living your day, already feeling better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABlock />
    </div>
  );
}
