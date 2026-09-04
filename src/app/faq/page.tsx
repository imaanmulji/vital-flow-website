import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTABlock from "@/components/shared/CTABlock";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Vital Flow PT",
  description: "Find answers about clinic-based physical therapy, insurance reimbursement, out-of-network benefits, and specific treatments in Bucks County.",
  alternates: { canonical: "https://vitalflowpt.com/faq" }
};

export default function FAQPage() {
  const gettingStartedFAQs = [
    {
      q: "Do I need a prescription or referral?",
      a: "In Pennsylvania, physical therapists have Direct Access. This means you do not need a prescription or referral from a doctor to start evaluation and treatment. If your condition requires treatment beyond 30 days, we will coordinate with your physician at that time. Some specific insurance plans may require a referral for out-of-network reimbursement, which we can help you verify."
    },
    {
      q: "How quickly can I be seen?",
      a: "We can typically see new patients within 3 to 5 business days of your initial phone call. We also hold specific slots each week for acute issues (like severe vertigo or acute back pain)."
    },
    {
      q: "Is the clinic accessible for patients with mobility issues?",
      a: "Yes. Our clinic at 1250 Old York Road in Warminster has ample parking and accessible entry. The private treatment room is on the ground floor."
    },
    {
      q: "What should I wear?",
      a: "Please wear comfortable, loose-fitting clothing that allows you to move freely. Athletic wear, shorts, or yoga pants are ideal. We need to be able to see and access the area we are treating."
    },
    {
      q: "Can you treat me via telehealth?",
      a: "Yes, we offer telehealth appointments for appropriate conditions. Telehealth is ideal for follow-up visits, home exercise program check-ins, and certain evaluations. Contact us to determine if telehealth is suitable for your specific needs."
    }
  ];

  const insuranceFAQs = [
    {
      q: "Do you accept insurance?",
      a: "Vital Flow Physical Therapy is an out-of-network provider for all commercial insurance plans. This means we do not bill your insurance directly. Instead, you pay for your session at the time of service, and we provide you with a superbill that you can submit to your insurance company for reimbursement."
    },
    {
      q: "How does out-of-network reimbursement work?",
      a: "You pay directly at the time of your session. After each visit, we provide you with a superbill (a detailed medical receipt) or submit it automatically on your behalf via Reimbursify. You then submit this to your insurance provider, and they mail a reimbursement check directly to you based on your out-of-network benefits. Most PPO plans cover 50-80% after your deductible is met."
    },
    {
      q: "Can I use my HSA or FSA card?",
      a: "Yes, physical therapy is a qualified medical expense. We accept all major HSA and FSA credit cards for payment directly through our secure patient portal."
    },
    {
      q: "What is a superbill?",
      a: "A superbill is a detailed medical receipt that contains all the necessary information an insurance company requires to process a claim, including diagnosis codes (ICD-10), treatment codes (CPT), provider information, and your payment details."
    },
    {
      q: "What about Medicare?",
      a: "Dr. Mulji is a non-participating provider with Medicare. This means we can treat Medicare patients, but you must pay upfront for your sessions. We will then submit the claim to Medicare on your behalf, and Medicare will reimburse you directly at their approved rate (typically 80% after your deductible is met)."
    },
    {
      q: "Why are you cash-based / out-of-network?",
      a: "Vital Flow's out-of-network model supports 60-minute one-on-one care and direct access to your PT between sessions. Your recommended visit frequency and length of care are based on your evaluation, goals, and response to treatment."
    }
  ];

  const inHomeFAQs = [
    {
      q: "What should I bring to my clinic session?",
      a: "Wear comfortable, loose-fitting clothing. Bring any relevant medical records, imaging reports, a list of current medications, and your photo ID and insurance card if applicable. Our clinic is fully equipped with everything else needed for your session."
    },
    {
      q: "Where is the clinic located?",
      a: "Our private clinic is located at 1250 Old York Road, Warminster, PA 18974. We serve patients from Doylestown, Warwick, Jamison, Furlong, Buckingham, Newtown, New Hope, Chalfont, Horsham, and surrounding towns across Bucks County."
    },
    {
      q: "What equipment does the clinic have?",
      a: "Our private treatment room is equipped with a professional treatment table, manual therapy tools, assessment equipment, resistance bands, weights, and a system for exercise video demonstrations. Everything you need is already here."
    },
    {
      q: "What if I have pets?",
      a: "Pets are welcome as long as they are friendly and do not interfere with your treatment. If your pet is overly curious or anxious, we may ask that they be in another room during the session for your safety and focus."
    },
    {
      q: "Can family members be present?",
      a: "Yes, family members or caregivers are welcome to be present, especially if they need to assist you with your home exercise program between sessions."
    }
  ];

  const aboutFAQs = [
    {
      q: "Who is Dr. Palak Mulji?",
      a: "Dr. Palak Mulji has over 25 years of experience treating orthopedic, pelvic floor, and vestibular conditions across Bucks County. She is a Certified Vestibular Therapist (Emory University) and holds a Doctorate of Physical Therapy from Rutgers University. She founded Vital Flow to provide unhurried, one-on-one concierge care."
    },
    {
      q: "Will I always see the same physical therapist?",
      a: "Yes. One of the core principles of Vital Flow is care continuity. You will see Dr. Mulji for your evaluation and every single follow-up session. You will never be handed off to an aide or another therapist."
    },
    {
      q: "What advanced training does Dr. Mulji have?",
      a: "She holds advanced continuing education in Pelvic Health Physical Therapy (through the Herman & Wallace track), Vestibular Rehabilitation & Concussion Management, and Orthopedic Manual Therapy & Myofascial Release."
    }
  ];

  // Helper to construct FAQPage JSON-LD
  const allFaqs = [...gettingStartedFAQs, ...insuranceFAQs, ...inHomeFAQs, ...aboutFAQs];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed">
              Find answers about clinic-based physical therapy, insurance reimbursement, out-of-network benefits, and specific treatments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-primaryDark mb-8">Getting Started</h2>
            <Accordion className="w-full">
              {gettingStartedFAQs.map((faq, idx) => (
                <AccordionItem key={idx} value={`getting-started-${idx}`} className="border-brand-border">
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

          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-primaryDark mb-8">Insurance & Payment</h2>
            <Accordion className="w-full">
              {insuranceFAQs.map((faq, idx) => (
                <AccordionItem key={idx} value={`insurance-${idx}`} className="border-brand-border">
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

          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-primaryDark mb-8">Clinic Sessions</h2>
            <Accordion className="w-full">
              {inHomeFAQs.map((faq, idx) => (
                <AccordionItem key={idx} value={`clinic-based-${idx}`} className="border-brand-border">
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

          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-brand-primaryDark mb-8">About Dr. Mulji</h2>
            <Accordion className="w-full">
              {aboutFAQs.map((faq, idx) => (
                <AccordionItem key={idx} value={`about-${idx}`} className="border-brand-border">
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

        </div>
      </section>

      {/* Final CTA */}
      <CTABlock />
    </div>
  );
}
