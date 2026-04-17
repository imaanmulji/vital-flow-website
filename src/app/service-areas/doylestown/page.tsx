import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/shared/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy in Doylestown, PA | Vital Flow PT",
  description: "Expert physical therapy near Doylestown Borough and Central Bucks. Dr. Mulji provides holistic, one-on-one pelvic floor, orthopedic, and vestibular rehab. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/service-areas/doylestown" }
};

export default function DoylestownPage() {
  return (
    <ServiceAreaTemplate
      town="Doylestown"
      heroH1="Physical Therapy in Doylestown, PA"
      introParagraph="From the historic Borough out to Peace Valley Park and the family neighborhoods along 611 and 313, Vital Flow delivers premium concierge physical therapy from our private clinic in nearby Warminster. Skip the crowded waiting rooms and receive 60 minutes of uninterrupted, one-on-one care from an experienced Doctor of Physical Therapy."
      imagePath="/images/clinic-location.webp"
      reasons={[
        "Our Warminster clinic is just a short drive from Doylestown — skip the crowded chain PT offices and get truly personalized care.",
        "Recovering from a procedure at Doylestown Hospital? We provide seamless post-surgical rehab with one-on-one attention.",
        "We evaluate how you move in real-world situations — whether that's your home office ergonomics, how you lift groceries, or your running gait."
      ]}
      testimonial={{
        quote: "After six months of hit-or-miss clinic PT, Palak solved my vertigo in three visits. She walked me through the exact movements that trigger it, and I haven't had a spin since.",
        author: "Kathleen R., Doylestown"
      }}
    />
  );
}
