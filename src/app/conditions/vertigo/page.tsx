import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vertigo Treatment in Warminster & Doylestown, PA | Vital Flow PT",
  description: "Personalized vertigo and BPPV treatment from a Certified Vestibular Therapist in Warminster, PA. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/conditions/vertigo" }
};

export default function VertigoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Vertigo",
    alternateName: ["BPPV", "Benign Paroxysmal Positional Vertigo"],
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Vestibular Rehabilitation Therapy",
      description: "Canalith repositioning maneuvers and gaze stabilization exercises performed by a certified vestibular therapist."
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-brand-bg py-4 border-b border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-brand-textMuted">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-textPrimary">Vertigo Treatment</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-xs md:text-sm font-semibold text-brand-primary tracking-wider uppercase mb-4">
              Condition Guide
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
              Vertigo and BPPV Treatment in Warminster, PA
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-3xl mb-10">
              Vertigo is disorienting, exhausting, and often frightening. The most common type, called BPPV, often responds to a targeted repositioning maneuver, but the right treatment starts with identifying the cause of your symptoms. As a Certified Vestibular Therapist through Emory University with over 25 years of clinical experience, I have treated hundreds of vertigo cases at our Warminster clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base">
                <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                  Book a Vestibular Evaluation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-brand-border text-brand-textPrimary hover:bg-white">
                <Link href="/services/vestibular-rehabilitation">
                  Learn About Our Approach
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is vertigo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-brand-primaryDark text-brand-textSecondary">
            <h2>What Is Vertigo?</h2>
            <p>
              Vertigo is the sensation that you or the room around you is spinning, tilting, or swaying even though you are perfectly still. It is different from general lightheadedness or feeling faint. True vertigo involves a false sense of rotational movement, and it originates from a problem in the vestibular system, the sensory organs inside your inner ears that detect head position and movement.
            </p>
            <p>
              The most common type is BPPV (Benign Paroxysmal Positional Vertigo), which accounts for roughly 17 to 42 percent of all vertigo cases according to research published in <em>Otolaryngology, Head and Neck Surgery</em>. BPPV happens when tiny calcium carbonate crystals called otoconia break loose from one part of the inner ear and migrate into the semicircular canals, where they do not belong. Once there, they disrupt the normal fluid dynamics of the canal and send conflicting motion signals to the brain every time you move your head.
            </p>

            <h2>Common Symptoms</h2>
            <ul>
              <li>Brief, intense spinning when rolling over in bed, looking up, or bending forward</li>
              <li>Nausea or vomiting during episodes</li>
              <li>A feeling of imbalance or unsteadiness between episodes</li>
              <li>Difficulty concentrating or a sense of brain fog</li>
              <li>Anxiety about triggering another episode</li>
            </ul>

            <h2>How We Treat Vertigo</h2>
            <p>
              Treatment begins with a thorough vestibular evaluation. I use the Dix-Hallpike test and other positional maneuvers to identify exactly which canal is affected and which type of BPPV is present. From there, I perform the appropriate repositioning maneuver (the Epley maneuver for posterior canal BPPV, the BBQ roll for horizontal canal BPPV) to guide the displaced crystals back where they belong.
            </p>
            <p>
              Research supports the Epley maneuver as an effective treatment for posterior canal BPPV. Individual response varies, so I reassess your symptoms and eye movements after treatment and explain whether follow-up care or a different maneuver is appropriate.
            </p>
            <p>
              For patients with non-BPPV vertigo (vestibular neuritis, Meniere&apos;s disease, vestibular migraine, or other causes), I design individualized vestibular rehabilitation programs that include gaze stabilization exercises, habituation exercises, and progressive balance training to help the brain compensate for the vestibular deficit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-12 text-center">
            Why patients trust Vital Flow for vertigo treatment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Certified Vestibular Therapist</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Dr. Mulji completed advanced vestibular rehabilitation training through Emory University and has treated hundreds of vertigo cases over 25 years of practice.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Full 60-Minute Sessions</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Vestibular evaluation requires careful observation and multiple positional tests. A full hour ensures nothing is rushed and the diagnosis is accurate.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Medicare Accepted</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                We are a participating provider with Medicare Part B, which covers a significant portion of vestibular rehabilitation services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
