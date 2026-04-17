import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import Link from "next/link";
import { Video, Laptop, ActivitySquare, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Telehealth Physical Therapy in Pennsylvania | Vital Flow PT",
  description: "Expert telehealth physical therapy available across Pennsylvania. Get personalized, 1-on-1 care from Dr. Palak Mulji from the comfort of your home.",
  alternates: { canonical: "https://vitalflowpt.com/telehealth" }
};

export default function TelehealthPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
              Expert physical therapy, anywhere in Pennsylvania.
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-2xl mx-auto mb-10">
              Not near our Warminster clinic? Too busy to commute? Vital Flow offers secure, one-on-one telehealth physical therapy for patients across the entire state of PA.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base w-full sm:w-auto">
                <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                  Book Virtual Consult
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-12 text-center">
            How Telehealth PT works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl border border-brand-border bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-primary mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-3">1. Connect Securely</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Join your appointment through our HIPAA-compliant video platform. All you need is a computer, tablet, or smartphone with a camera and internet access.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl border border-brand-border bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-primary mb-6">
                <ActivitySquare className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-3">2. Comprehensive Assessment</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Through movement analysis and detailed discussion, Dr. Mulji can accurately assess your mobility, strength, and pain triggers just as she would in the clinic.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl border border-brand-border bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-primary mb-6">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-3">3. Guided Treatment</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Receive live feedback on your form as we guide you through therapeutic exercises. We also provide self-mobilization techniques you can do at home.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-20 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="font-heading text-3xl text-brand-primaryDark mb-6">Who is telehealth for?</h2>
            <p className="text-lg text-brand-textSecondary mb-8">
              Telehealth is a highly effective option for many conditions, especially when paired with a custom home exercise program. It is particularly well-suited for:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-brand-textSecondary">
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Postpartum pelvic floor guidance</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Chronic pain management coaching</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Ergonomic workspace assessments</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Follow-up exercise progressions</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Mild orthopedic strains</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Maintenance programs</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
