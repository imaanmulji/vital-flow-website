import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/shared/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy in Warwick & Jamison, PA | Vital Flow PT",
  description: "Holistic physical therapy near Warwick Township and Jamison, PA. One-on-one pelvic floor, orthopedic, and vestibular care. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/service-areas/warwick" }
};

export default function WarwickPage() {
  return (
    <ServiceAreaTemplate
      town="Warwick"
      heroH1="Physical Therapy in Warwick, PA"
      introParagraph="Serving patients throughout Warwick Township, Jamison, and the neighborhoods along Almshouse and York Road. Whether you are dealing with postpartum recovery, a sports injury, or chronic back pain, Vital Flow provides 60-minute, one-on-one physical therapy sessions at our private clinic in nearby Warminster."
      imagePath="/images/clinic-location.webp"
      reasons={[
        "Perfect for busy parents in Warwick's family neighborhoods. Our clinic is just a short drive down York Road with ample parking.",
        "Privacy and dignity for sensitive conditions. Pelvic floor therapy is far more comfortable in a private, dedicated treatment room than in a curtained-off corner of a busy gym.",
        "Real-life rehab. We focus on the functional movements that matter to your daily life, making the therapy instantly applicable."
      ]}
      testimonial={{
        quote: "I had diastasis after my second baby and no clinic nearby had evening appointments. Palak was so accommodating with scheduling.",
        author: "Megan T., Warwick"
      }}
    />
  );
}
