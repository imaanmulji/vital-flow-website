import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/shared/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy in Chalfont, PA | Vital Flow PT",
  description: "One-on-one holistic physical therapy near Chalfont and New Britain, PA. Pelvic floor, orthopedic, and vestibular care at our Warminster clinic. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/service-areas/chalfont" }
};

export default function ChalfontPage() {
  return (
    <ServiceAreaTemplate
      town="Chalfont"
      heroH1="Physical Therapy in Chalfont, PA"
      introParagraph="Serving Chalfont Borough, New Britain Township, and the surrounding neighborhoods along Route 202 and Butler Avenue. Vital Flow Physical Therapy offers personalized, evidence-based care at our private clinic in nearby Warminster. Every session is 60 minutes, one-on-one with Dr. Palak Mulji, and focused entirely on your recovery."
      imagePath="/images/clinic-location.webp"
      reasons={[
        "Our Warminster clinic is an easy drive from Chalfont via Route 202 South. Skip the crowded chain clinics and get the individualized attention your recovery deserves.",
        "If you are postpartum and dealing with pelvic floor issues like incontinence or diastasis recti, our private treatment room gives you the comfort and dignity that a busy open-floor clinic cannot.",
        "We are a participating provider with Medicare Part B, which is uncommon for practices that offer the concierge-level care we provide."
      ]}
      testimonial={{
        quote: "After my second pregnancy, I was dealing with leaking every time I sneezed or jumped. My OB said it was normal. Palak said it was treatable. She was right.",
        author: "Sarah M., Chalfont"
      }}
    />
  );
}
