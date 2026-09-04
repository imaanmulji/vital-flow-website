import type { Metadata } from "next";
import ServiceTemplate from "@/components/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Pelvic Floor Physical Therapy in Doylestown, PA | Vital Flow PT",
  description: "Specialized clinic-based evaluation and treatment for pelvic pain, incontinence, prolapse, and postpartum recovery in Doylestown and Bucks County.",
  alternates: { canonical: "https://vitalflowpt.com/services/pelvic-floor-therapy" }
};

export default function PelvicFloorTherapyPage() {
  return (
    <ServiceTemplate
      breadcrumbName="Pelvic Floor Therapy"
      heroEyebrow="Pelvic Floor Therapy · Clinic-Based · Doylestown & Bucks County"
      heroH1="Pelvic Floor Physical Therapy in Doylestown, PA"
      heroIntro="Specialized evaluation and treatment for pelvic pain, urinary incontinence, pelvic organ prolapse, diastasis recti, postpartum recovery, and pregnancy-related pain. All delivered with privacy and dignity in our private treatment room, by a Doctor of Physical Therapy with advanced training in pelvic health."
      imagePath="/images/pelvic-floor.webp"
      conditions={[
        "Urinary incontinence (stress and urge)",
        "Pelvic organ prolapse",
        "Pelvic pain",
        "Diastasis recti",
        "Postpartum recovery",
        "Pregnancy-related lower back and pelvic pain",
        "Painful intercourse",
        "Post-surgical pelvic recovery",
        "Bladder and bowel dysfunction"
      ]}
      benefits={[
        {
          title: "Complete Privacy",
          description: "No shared spaces or thin walls. Receive focused, specialized care in the comfort and absolute privacy of our dedicated treatment room."
        },
        {
          title: "Real-Life Context",
          description: "We can assess how you lift your child, navigate your stairs, or get out of your specific bed—addressing the exact movements that trigger your symptoms."
        },
        {
          title: "Unhurried Appointments",
          description: "A full 60 minutes dedicated entirely to you. Pelvic conditions are complex, and we take the time to properly evaluate without rushing."
        }
      ]}
      testimonial={{
        quote: "I had diastasis after my second baby and no clinic nearby had evening appointments. Palak was so accommodating with scheduling.",
        author: "Megan T., Warwick"
      }}
      faqs={[
        {
          q: "What does an initial pelvic floor evaluation involve?",
          a: "The evaluation begins with a detailed conversation about your symptoms, medical history, and goals. Depending on your condition, it typically includes an assessment of your posture, breathing, core strength, and pelvic floor muscle function. Internal assessment is often recommended for the most accurate diagnosis, but it is always your choice and performed with strict adherence to clinical standards and your comfort."
        },
        {
          q: "Is an internal exam required?",
          a: "No, an internal exam is never required. While it provides the best clinical picture of what your pelvic floor muscles are doing, we can gather significant information and make great progress using external assessment, core evaluation, and symptom tracking. We proceed only with what you are fully comfortable with."
        },
        {
          q: "When should I start pelvic PT after having a baby?",
          a: "You can begin gentle physical therapy as early as 2-3 weeks postpartum for basic core activation and mobility, though we typically recommend scheduling your comprehensive evaluation around 6 weeks postpartum, after you've been cleared by your OB-GYN or midwife."
        },
        {
          q: "Can you help with pain during intercourse?",
          a: "Yes. Painful intercourse (dyspareunia) is often linked to overactive or restricted pelvic floor muscles. We use manual therapy, gentle stretching, down-training techniques, and targeted exercises to help relax these muscles and reduce pain."
        },
        {
          q: "What should I wear to my appointment?",
          a: "Please wear comfortable, loose-fitting clothing that allows freedom of movement. Athletic wear, shorts, or yoga pants are ideal. We need to be able to see and access the area we are treating."
        }
      ]}
      relatedServices={[
        { name: "Orthopedic & Sports", href: "/services/orthopedic-sports" },
        { name: "Vestibular Rehabilitation", href: "/services/vestibular-rehabilitation" },
        { name: "Chronic Pain Management", href: "/services/pain-management" }
      ]}
    />
  );
}
