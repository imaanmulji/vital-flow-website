import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/shared/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy in Warminster, PA | Vital Flow PT",
  description: "Expert holistic physical therapy in Warminster, PA. One-on-one care for orthopedic, pelvic floor, and vestibular conditions. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/service-areas/warminster" }
};

export default function WarminsterPage() {
  return (
    <ServiceAreaTemplate
      town="Warminster"
      heroH1="Physical Therapy in Warminster, PA"
      introParagraph="Warminster is our home. Operating out of 1250 Old York Road, Vital Flow provides high-quality, holistic physical therapy to patients throughout Warminster Township, Ivyland, and the surrounding area. Our private clinic offers expert, one-on-one care with 60-minute appointments — no shared time, no rushing."
      imagePath="/images/clinic-location.webp"
      reasons={[
        "Since Warminster is our home base, we can often accommodate local patients with very short booking windows or flexible times.",
        "Our private clinic is easy to get to with ample parking and a comfortable, quiet environment — no crowded waiting rooms.",
        "Get back to walking Warminster Community Park faster. Our 1-on-1 model typically resolves issues in half the visits of a traditional clinic."
      ]}
      testimonial={{
        quote: "I've had back pain on and off for fifteen years. Palak actually watched me work at my standing desk — where the problem was — and fixed the root cause. Six sessions, no more pain.",
        author: "David L., Newtown (Treated in Warminster area)"
      }}
    />
  );
}
