import type { Metadata } from "next";
import ServiceTemplate from "@/components/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Vestibular Therapy & BPPV Treatment in Doylestown | Vital Flow PT",
  description: "Clinic-based vestibular physical therapy for vertigo, BPPV, and balance disorders. Get specialized treatment in Doylestown without the dizzy drive to a clinic.",
  alternates: { canonical: "https://vitalflowpt.com/services/vestibular-rehabilitation" }
};

export default function VestibularRehabPage() {
  return (
    <ServiceTemplate
      breadcrumbName="Vestibular Rehabilitation"
      heroEyebrow="Vestibular Therapy · Clinic-Based · Doylestown & Bucks County"
      heroH1="Vestibular Therapy & BPPV Treatment in Doylestown & Warminster"
      heroIntro="For vertigo, dizziness, and balance disorders, focused one-on-one treatment makes all the difference. As a Certified Vestibular Therapist (Emory University), Dr. Mulji performs the Epley maneuver and gaze stabilization training in a quiet, private clinic setting designed for your comfort and safety."
      imagePath="/images/vestibular-rehab.webp"
      conditions={[
        "BPPV (benign paroxysmal positional vertigo)",
        "Vestibular neuritis",
        "Labyrinthitis",
        "Persistent postural-perceptual dizziness (PPPD)",
        "Balance disorders in older adults",
        "Post-concussion dizziness",
        "Gaze stabilization deficits",
        "Motion sensitivity",
        "Fall risk and prevention"
      ]}
      benefits={[
        {
          title: "No Triggering Commutes",
          description: "Driving to a large, noisy clinic when you have vertigo can be overwhelming. Our small, private practice means a calm, quiet environment with no waiting room chaos."
        },
        {
          title: "A Calm Place After Treatment",
          description: "Maneuvers for BPPV can sometimes cause temporary dizziness or nausea. Our private treatment room lets you rest comfortably right after the procedure before heading home."
        },
        {
          title: "Real-World Balance Training",
          description: "We train your balance system on your actual rugs, stairs, and lighting conditions—not just on a flat, sterile clinic floor."
        }
      ]}
      testimonial={{
        quote: "She walked me through the exact movements that trigger it, and I haven't had a spin since.",
        author: "Kathleen R., Doylestown"
      }}
      faqs={[
        {
          q: "What happens during a vestibular evaluation?",
          a: "We perform a thorough assessment of your oculomotor (eye) function, positional testing to check for BPPV, and balance testing. We use specific movements to understand exactly what triggers your dizziness so we can properly diagnose the underlying vestibular fault."
        },
        {
          q: "How fast does BPPV treatment work?",
          a: "BPPV is often treatable with targeted repositioning maneuvers such as the Epley maneuver. Response varies, so we reassess your symptoms and eye movements and explain whether follow-up care or a different approach is appropriate."
        },
        {
          q: "Will the treatment make me dizzy?",
          a: "Assessment and treatment often temporarily reproduce your symptoms—this tells us we've found the problem. Our private treatment room is a calm, controlled environment where you can rest comfortably after the session before heading home."
        },
        {
          q: "Do you treat general balance issues and fall risk?",
          a: "Yes. Vestibular therapy is a core component of balance. We assess all three systems that contribute to balance (vision, vestibular, and somatosensory/joints) and create a targeted program to reduce your fall risk and build confidence."
        },
        {
          q: "I had a concussion and now feel constantly dizzy. Can this help?",
          a: "Yes. Post-concussion syndrome often involves vestibular and oculomotor dysfunction. We use gaze stabilization and habituation exercises to help retrain your brain to process motion properly again."
        }
      ]}
      relatedServices={[
        { name: "Pelvic Floor Therapy", href: "/services/pelvic-floor-therapy" },
        { name: "Orthopedic & Sports", href: "/services/orthopedic-sports" },
        { name: "Chronic Pain Management", href: "/services/pain-management" }
      ]}
    />
  );
}
