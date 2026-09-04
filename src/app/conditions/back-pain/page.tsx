import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Back Pain Physical Therapy in Warminster & Bucks County | Vital Flow PT",
  description: "Specialized physical therapy for chronic and acute back pain in Warminster, PA. One-on-one manual therapy and exercise-based treatment. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/conditions/back-pain" }
};

export default function BackPainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Back Pain",
    alternateName: ["Low Back Pain", "Lumbar Pain", "Sciatica"],
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Physical Therapy",
      description: "Manual therapy, therapeutic exercise, and movement retraining for acute and chronic back pain."
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
            <span className="text-brand-textPrimary">Back Pain Treatment</span>
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
              Back Pain Physical Therapy in Warminster, PA
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-3xl mb-10">
              Low back pain is the single leading cause of disability worldwide, according to the Global Burden of Disease study. If you have been dealing with back pain for weeks, months, or even years, the problem is rarely just the spine. It is how you move, how you sit, how you breathe, and how your entire kinetic chain distributes load. That is what we address at Vital Flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base">
                <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                  Book an Evaluation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-brand-border text-brand-textPrimary hover:bg-white">
                <Link href="/services/orthopedic-sports">
                  Learn About Our Approach
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
            <h2>Why Back Pain Keeps Coming Back</h2>
            <p>
              I have treated thousands of patients with low back pain over 25 years of practice, and the pattern I see most often is this: someone goes to a traditional PT clinic, gets a sheet of generic exercises, does them three times a week for six weeks, feels a little better, stops going, and then the pain returns a few months later.
            </p>
            <p>
              This cycle happens because the exercises were treating the symptom (pain) without addressing the underlying cause. Low back pain almost always involves a combination of factors: stiff thoracic spine, weak hip stabilizers, poor motor control of the deep core muscles, faulty breathing mechanics, and habitual movement patterns that overload the lumbar spine. A 15-minute appointment with three other patients in the room does not leave enough time to identify or address any of that.
            </p>

            <h2>Our Approach to Back Pain</h2>
            <p>
              At Vital Flow, every back pain evaluation starts with a full 60-minute assessment. I watch how you move. I look at your squat, your single-leg stance, your sit-to-stand pattern, and the way you reach overhead. I test the mobility of your hips, thoracic spine, and sacroiliac joints. I assess the strength and timing of your deep core stabilizers (transversus abdominis, multifidus, diaphragm, and pelvic floor) because these muscles form the foundation of spinal stability.
            </p>
            <p>
              From there, I build a treatment plan that addresses what I actually find, not what a protocol sheet says. That plan usually includes a combination of:
            </p>
            <ul>
              <li>Manual therapy to restore joint mobility in stiff areas (especially the thoracic spine and hips)</li>
              <li>Soft tissue mobilization for tight or guarded muscles</li>
              <li>Motor control retraining to restore proper activation timing of the deep stabilizers</li>
              <li>Functional strengthening exercises that are specific to your daily activities and goals</li>
              <li>Postural and ergonomic guidance based on how you actually work, drive, and sleep</li>
            </ul>

            <h2>Common Back Pain Conditions We Treat</h2>
            <ul>
              <li>Lumbar disc herniation and disc bulges</li>
              <li>Sciatica and radiating leg pain</li>
              <li>Spinal stenosis</li>
              <li>SI joint dysfunction</li>
              <li>Facet joint irritation</li>
              <li>Degenerative disc disease</li>
              <li>Post-surgical rehabilitation (laminectomy, discectomy, fusion)</li>
              <li>Chronic low back pain with no clear structural cause (this is more common than you might think)</li>
            </ul>

            <h2>What the Research Says About Physical Therapy for Back Pain</h2>
            <p>
              Clinical practice guidelines from the American Physical Therapy Association (APTA) and the American College of Physicians both recommend physical therapy as a first-line treatment for low back pain, ahead of imaging, injections, and surgery for most cases. A 2021 study in the <em>Journal of Orthopaedic and Sports Physical Therapy</em> found that patients who received individualized, exercise-based physical therapy had significantly better outcomes at 12 months compared to those who received generic exercise programs.
            </p>
            <p>
              The key word there is &quot;individualized.&quot; That is what the one-on-one model at Vital Flow makes possible. When I can spend a full hour with each patient, I can identify the specific drivers of their pain, target them precisely, and adjust the plan as they progress.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-12 text-center">
            Why patients choose Vital Flow for back pain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Root Cause Approach</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                We identify the specific mechanical drivers of your pain through a full-body movement assessment, then build a treatment plan around your actual findings.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Hands-On Manual Therapy</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Every session includes skilled manual therapy from a Doctor of Physical Therapy. You will not be left alone with a hot pack and a timer.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-white border-none shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-semibold text-lg text-brand-primaryDark mb-3">Focused, Responsive Care</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Each 60-minute session is focused on your specific findings and goals. We review what is helping and adapt your care as your needs change.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
