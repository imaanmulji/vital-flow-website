import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HeartHandshake, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Medicare Physical Therapy in Warminster, PA | Vital Flow PT",
  description: "Vital Flow Physical Therapy accepts Medicare in Warminster, PA. Get expert, one-on-one holistic physical therapy covered by your Medicare benefits.",
  alternates: { canonical: "https://vitalflowpt.com/medicare" }
};

export default function MedicarePage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-semibold tracking-wider uppercase text-sm mb-6 flex items-center justify-center w-fit mx-auto gap-2">
              <ShieldCheck className="w-5 h-5" /> Medicare Accepted
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
              Expert physical therapy covered by Medicare.
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-2xl mx-auto mb-10">
              Unlike many private concierge clinics, Vital Flow Physical Therapy is proud to be a participating provider with Medicare. Get the one-on-one, holistic care you deserve, right here in Warminster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base w-full sm:w-auto">
                <Link href="/contact">Book an Evaluation</Link>
              </Button>
              <a href="tel:267-362-9596" className="flex items-center justify-center gap-2 py-3 px-8 border border-brand-border rounded-full font-medium text-brand-textPrimary hover:bg-white transition-colors w-full sm:w-auto">
                <Phone className="w-4 h-4" /> (267) 362-9596
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-12 text-center">
            Why Medicare patients choose Vital Flow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl border border-brand-border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-primary mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">True 1-on-1 Care</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                Most clinics schedule 2-3 Medicare patients at the same time, leaving you alone with exercises. At Vital Flow, your full 60-minute session is exclusively with Dr. Mulji.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl border border-brand-border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-primary mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">In-Network Convenience</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                As a participating provider, we bill Medicare directly for you. There is no complicated paperwork or out-of-network reimbursement to worry about.
              </p>
            </Card>
            <Card className="p-8 rounded-2xl border border-brand-border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-primary mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">Holistic Approach</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                We do not just treat the symptom. We take the time to evaluate your full body, address underlying balance issues, and help you return to the activities you love safely.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Details/Requirements */}
      <section className="py-20 bg-brand-accentLight border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="font-heading text-3xl text-brand-primaryDark mb-6">How Medicare coverage works</h2>
            <div className="space-y-6 text-lg text-brand-textSecondary">
              <p>
                Vital Flow Physical Therapy is a participating provider with <strong>Medicare Part B</strong>. This means Medicare covers a significant portion of your outpatient physical therapy services at our clinic.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">✓</span>
                  <span><strong>Medicare Part B</strong> covers 80% of the approved amount for physical therapy services after you meet your annual deductible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">✓</span>
                  <span><strong>Secondary Insurance:</strong> If you have a supplemental plan (Medigap), it typically covers the remaining 20% co-insurance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">✓</span>
                  <span><strong>Prescription Requirement:</strong> To utilize your Medicare benefits, you will need a prescription or referral from your physician. We can help coordinate this with your doctor's office.</span>
                </li>
              </ul>
              <p className="pt-4 text-base bg-brand-bg p-4 rounded-xl border border-brand-border">
                <em>Note: We do not currently accept Medicare Advantage (Part C) plans. However, you can still see us as a self-pay patient.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
