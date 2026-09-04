import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Home, ActivitySquare, Package, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Vital Flow Physical Therapy",
  description: "From your first free phone consultation to a clinic evaluation and personalized treatment plan. See how concierge physical therapy works.",
  alternates: { canonical: "https://vitalflowpt.com/how-it-works" }
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
              From the first call to a plan built around you.
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-2xl mx-auto">
              We've designed our process to be as simple and frictionless as possible. No waiting rooms, no complex intake packets, just direct access to expert care.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className="py-16 md:py-24 bg-white border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0 relative">
                <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold border-4 border-white">1</div>
                <Phone className="w-12 h-12 md:w-20 md:h-20" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Free 15-minute call</h2>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
                Before we schedule anything, we talk. This is a low-pressure conversation directly with Dr. Mulji to ensure we're the right fit for your specific issue.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <Card className="p-6 bg-brand-bg border-none shadow-sm">
                  <h4 className="font-semibold text-brand-primaryDark mb-2 flex items-center gap-2">
                    <span className="text-brand-success font-bold">✓</span> What's covered
                  </h4>
                  <ul className="text-sm text-brand-textSecondary space-y-2">
                    <li>Your specific symptoms & history</li>
                    <li>What you've already tried</li>
                    <li>Whether private clinic PT is appropriate</li>
                    <li>Pricing and insurance estimates</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-brand-bg border-none shadow-sm">
                  <h4 className="font-semibold text-brand-primaryDark mb-2 flex items-center gap-2">
                    <span className="text-brand-textMuted font-bold">✗</span> What's NOT covered
                  </h4>
                  <ul className="text-sm text-brand-textSecondary space-y-2">
                    <li>No intake forms required</li>
                    <li>No commitment to book</li>
                    <li>No sales pressure</li>
                    <li>No automated phone trees</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0 relative">
                <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold border-4 border-white">2</div>
                <Home className="w-12 h-12 md:w-20 md:h-20" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Clinic evaluation</h2>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
                You visit our private clinic for a full 60-minute assessment. By evaluating you one-on-one in a quiet, dedicated environment, we can build a highly tailored plan without the distractions of a crowded gym.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold text-brand-primaryDark mb-3">What to expect</h4>
                  <p className="text-sm text-brand-textSecondary leading-relaxed">
                    A thorough discussion of your history, a physical movement and strength assessment, initial manual therapy treatment, and a clear explanation of the diagnosis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primaryDark mb-3">What to have ready</h4>
                  <p className="text-sm text-brand-textSecondary leading-relaxed">
                    Wear comfortable clothing you can move in. Bring any relevant medical records or imaging reports you might have, along with a list of your current medications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-16 md:py-24 bg-white border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0 relative">
                <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold border-4 border-white">3</div>
                <ActivitySquare className="w-12 h-12 md:w-20 md:h-20" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Treatment plan</h2>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
                Your recommended visit frequency and length of care are based on your evaluation, goals, health history, and response to treatment. We review progress together and adjust the plan as your needs change.
              </p>
              <div className="bg-brand-accentLight p-6 rounded-2xl">
                <h4 className="font-semibold text-brand-primaryDark mb-4">What sessions look like:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></span>
                    <span className="text-brand-textPrimary"><strong>60-minute duration:</strong> You have Dr. Mulji's undivided attention for the full hour.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></span>
                    <span className="text-brand-textPrimary"><strong>Hands-on treatment:</strong> Manual therapy to address tissue restrictions and joint mobility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></span>
                    <span className="text-brand-textPrimary"><strong>Direct access:</strong> Between sessions, you have direct email/phone access to Dr. Mulji for questions about your home program.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics / What she brings */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-brand-primaryDark mb-10 text-center">Clinic logistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-brand-border shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-xl text-brand-primaryDark">Our private clinic</h3>
                </div>
                <p className="text-brand-textSecondary leading-relaxed mb-4">We provide a comfortable, fully-equipped space:</p>
                <ul className="space-y-2 text-brand-textPrimary">
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Private treatment room</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> State-of-the-art rehab equipment</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Comfortable waiting area</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Ample parking</li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-brand-border shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-xl text-brand-primaryDark">What to bring</h3>
                </div>
                <p className="text-brand-textSecondary leading-relaxed mb-4">To make the most of your first visit, please bring:</p>
                <ul className="space-y-2 text-brand-textPrimary">
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Comfortable athletic clothing</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Any relevant medical records</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> List of current medications</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Photo ID and Insurance Card (if applicable)</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white border-t border-brand-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Process FAQ</h2>
          </div>
          <Accordion className="w-full">
            <AccordionItem value="item-1" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                How quickly can I be seen?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Because we do not overbook our schedule, we can typically see new patients within 3 to 5 business days of your initial phone call. We also hold specific slots each week for acute issues (like severe vertigo or acute back pain).
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                What if I need to reschedule?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                We understand that life happens. We ask for 24 hours notice for cancellations or rescheduling to allow us to offer that 60-minute block to another patient. Late cancellations may be subject to a fee, which will be detailed in your initial paperwork.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                Do I need to be dressed a certain way?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Please wear comfortable, loose-fitting clothing that allows you to move freely. Athletic wear, shorts, or yoga pants are ideal. We need to be able to see and access the area we are treating.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                What if I arrive early?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                We have a comfortable waiting area available if you arrive early. However, since we do not overbook our schedule, you will be seen exactly at your appointment time without the typical waiting room delays.
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
