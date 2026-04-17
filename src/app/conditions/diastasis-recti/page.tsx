import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Diastasis Recti Treatment in Bucks County, PA | Vital Flow PT",
  description: "Specialized diastasis recti and postpartum core rehabilitation in Warminster, PA. One-on-one pelvic floor therapy with Dr. Palak Mulji, DPT.",
  alternates: { canonical: "https://vitalflowpt.com/conditions/diastasis-recti" }
};

export default function DiastasisRectiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Diastasis Recti",
    alternateName: ["Diastasis Rectus Abdominis", "Abdominal Separation"],
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Pelvic Floor Physical Therapy",
      description: "Core rehabilitation including transversus abdominis retraining, scar tissue mobilization, and progressive functional strengthening."
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
            <span className="text-brand-textPrimary">Diastasis Recti Treatment</span>
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
              Diastasis Recti Treatment in Bucks County, PA
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-3xl mb-10">
              Diastasis recti is the widening of the gap between the two sides of your rectus abdominis muscle, the &quot;six-pack&quot; muscle that runs vertically along the front of your abdomen. It is extremely common during and after pregnancy, and it is a condition that responds well to skilled physical therapy. Understanding what it actually is (and what it is not) is the first step toward recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base">
                <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                  Book a Pelvic Floor Evaluation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-brand-border text-brand-textPrimary hover:bg-white">
                <Link href="/services/pelvic-floor-therapy">
                  Learn About Pelvic Floor Therapy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-brand-primaryDark text-brand-textSecondary">
            <h2>What Is Diastasis Recti?</h2>
            <p>
              The rectus abdominis muscles are connected along the midline of the abdomen by a band of connective tissue called the linea alba. During pregnancy, as the uterus expands, this connective tissue stretches and thins to accommodate the growing baby. In many women, this stretching results in a visible gap between the two sides of the muscle. That gap is diastasis recti.
            </p>
            <p>
              Research published in the <em>British Journal of Sports Medicine</em> found that approximately 100 percent of women have some degree of diastasis recti at the end of pregnancy. By six months postpartum, about 39 percent still have a clinically significant separation. By 12 months, the rate drops to around 33 percent. These are not small numbers, and they highlight why routine postpartum assessment is so important.
            </p>
            <p>
              It is worth noting that diastasis recti is not exclusive to pregnancy. Men can develop it too, particularly after rapid weight gain, improper core training (especially excessive crunches and sit-ups), or abdominal surgery.
            </p>

            <h2>How Do I Know If I Have It?</h2>
            <p>
              The most common sign is a visible bulge or ridge along the midline of the abdomen when you attempt a sit-up or curl-up motion. Some patients describe it as a &quot;coning&quot; or &quot;doming&quot; of the belly. Other signs include:
            </p>
            <ul>
              <li>A feeling that your core is &quot;not working&quot; or that you cannot engage your abs the way you used to</li>
              <li>Low back pain that worsened during or after pregnancy</li>
              <li>Pelvic floor symptoms like urinary leakage or pelvic pressure</li>
              <li>Difficulty with activities that load the core, such as lifting your baby, carrying car seats, or returning to exercise</li>
            </ul>
            <p>
              A physical therapist can assess the width, depth, and tension of the gap through a simple hands-on evaluation. I measure the inter-recti distance (IRD) at three points above and below the navel and assess how well the linea alba generates tension when you attempt to activate your deep core muscles. This tells me whether the tissue is recovering functional integrity, which matters more than the gap measurement alone.
            </p>

            <h2>How We Treat Diastasis Recti</h2>
            <p>
              Treatment centers on restoring functional integrity of the core pressure system. Remember, the core is made up of four interconnected components: the diaphragm, the pelvic floor, the transversus abdominis, and the multifidus. Diastasis recti affects the front wall of this system, and recovery requires retraining all four components to work together again.
            </p>
            <p>
              A typical treatment plan includes:
            </p>
            <ul>
              <li>Diaphragmatic breathing retraining, which is foundational because the diaphragm and pelvic floor move in coordination during each breath cycle</li>
              <li>Transversus abdominis activation exercises, starting with gentle, isolated contractions and progressing to functional movements</li>
              <li>Pelvic floor coordination training, because pelvic floor dysfunction and diastasis recti frequently coexist</li>
              <li>Progressive loading of the abdominal wall through exercises tailored to your specific stage of recovery</li>
              <li>Education on movement strategies for daily tasks (how to pick up your baby, how to get out of bed, how to carry heavy objects) that protect the healing tissue</li>
            </ul>
            <p>
              I also work with patients on C-section scar mobilization when applicable, because scar tissue adhesions can directly affect the ability of the abdominal wall to generate tension and function properly.
            </p>

            <h2>What About the Gap? Does It Have to Close Completely?</h2>
            <p>
              This is one of the most common questions I get, and it is an important one. Current research suggests that the width of the gap matters less than the ability of the linea alba to generate tension and transfer force across the midline. A study by Diane Lee and Paul Hodges, published in the <em>Journal of Orthopaedic and Sports Physical Therapy</em>, found that it is possible to have a gap that is wider than &quot;normal&quot; but still have excellent core function if the tissue has good tension and the deep stabilizers are activating properly.
            </p>
            <p>
              So the goal of treatment is not necessarily to make the gap disappear. The goal is to restore the functional capacity of your core so that you can return to all the activities you want to do, including exercise, lifting, and daily life, without pain, leakage, or the sense that your midsection is not supporting you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-12 text-center">
            Why patients trust Vital Flow for postpartum recovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Private Treatment Room</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Postpartum rehabilitation involves sensitive assessments. Our private clinic room ensures comfort and dignity throughout every visit.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Whole-System Assessment</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Diastasis recti rarely exists in isolation. We assess the entire core system, including the pelvic floor, breathing mechanics, and scar tissue.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Evidence-Based Care</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Dr. Mulji stays current with the latest postpartum rehabilitation research to ensure your treatment plan reflects the best available evidence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
