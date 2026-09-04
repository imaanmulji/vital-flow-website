import type { Metadata } from "next";
import InsuranceCalculator from "@/components/insurance/InsuranceCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTABlock from "@/components/shared/CTABlock";
import { FileText, DollarSign, ArrowRightLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Vital Flow PT",
  description: "Calculate your out-of-network physical therapy reimbursement. Most PPO plans reimburse 50–80% for clinic-based PT sessions in Doylestown and Bucks County.",
  openGraph: {
    title: "Insurance & Pricing | Vital Flow PT",
    description: "Calculate your out-of-network physical therapy reimbursement.",
  },
  alternates: { canonical: "https://vitalflowpt.com/insurance" }
};

export default function InsurancePage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero & Calculator */}
      <section className="py-16 md:py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight tracking-tight">
              Will my insurance cover this?
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed">
              Most PPO plans reimburse 50–80% of out-of-network physical therapy after your deductible. Use the calculator below to get a ballpark for your specific plan.
            </p>
          </div>
          
          <InsuranceCalculator />
        </div>
      </section>

      {/* How Reimbursement Works */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">
              How reimbursement actually works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-primaryLight text-brand-primary flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">1. You pay at service</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                You pay Vital Flow at the time of your session using a credit card, HSA, or FSA card.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-primaryLight text-brand-primary flex items-center justify-center mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">2. We create a superbill</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                We generate a detailed medical receipt (superbill) automatically via Reimbursify, or provide it to you manually.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-primaryLight text-brand-primary flex items-center justify-center mb-6">
                <ArrowRightLeft className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">3. You get reimbursed</h3>
              <p className="text-brand-textSecondary leading-relaxed">
                You submit it to your insurance, and they reimburse you directly based on your out-of-network benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Cash-Based */}
      <section className="py-20 md:py-32 bg-brand-bg border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">
                  Why we&apos;re cash-based
                </h2>
                <div className="w-20 h-1 bg-brand-accent mb-8"></div>
              </div>
              <div>
                <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
                  Being out-of-network isn&apos;t about charging more. It&apos;s about spending more time with you. In-network contracts pressure clinics into 15-minute visits with three patients at once — not because clinicians want that, but because reimbursement rates force it.
                </p>
                <p className="text-lg text-brand-textSecondary leading-relaxed">
                  By stepping outside that system, Vital Flow can offer 60-minute one-on-one care and direct access to your PT between sessions. Your total cost depends on your individual plan of care and any reimbursement available through your benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSA / FSA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-shrink-0">
              <div className="bg-brand-success/10 text-brand-success px-4 py-2 rounded-full font-bold tracking-wider uppercase text-sm">
                HSA & FSA Eligible
              </div>
            </div>
            <div>
              <p className="text-lg text-brand-textPrimary leading-relaxed">
                Vital Flow sessions are fully HSA and FSA eligible. We accept HSA/FSA cards directly and can provide documentation for reimbursement from your administrator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Common questions about insurance.</h2>
          </div>

          <Accordion className="w-full mb-10">
            <AccordionItem value="item-1" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Vital Flow Physical Therapy is an out-of-network provider for all commercial insurance plans. This means we do not bill your insurance directly. Instead, you pay for your session at the time of service, and we provide you with a superbill that you can submit to your insurance company for reimbursement.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                What is a superbill?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                A superbill is a detailed medical receipt that contains all the necessary information an insurance company requires to process a claim, including diagnosis codes (ICD-10), treatment codes (CPT), provider information, and your payment details.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                How long does reimbursement take?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Processing times vary significantly by insurance company, but typically range from 2 to 6 weeks after you submit your claim. Reimbursement checks are usually mailed directly to your home address.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                What if my insurance denies the claim?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                If a claim is denied, it is often due to a missing prior authorization, an unmet deductible, or a specific exclusion in your plan. We recommend verifying your out-of-network physical therapy benefits before starting care. While we cannot guarantee reimbursement, we are happy to assist by providing any additional documentation your insurance company may request.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                Can I use HSA or FSA funds?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Yes, physical therapy is a qualified medical expense under both Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). You can use your HSA/FSA debit card to pay for your sessions directly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                What about Medicare?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Dr. Mulji is a non-participating provider with Medicare. This means we can treat Medicare patients, but you must pay upfront for your sessions. We will then submit the claim to Medicare on your behalf, and Medicare will reimburse you directly at their approved rate (typically 80% after your deductible is met).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <CTABlock />
    </div>
  );
}
