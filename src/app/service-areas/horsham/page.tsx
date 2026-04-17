import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/shared/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy in Horsham, PA | Vital Flow PT",
  description: "Expert holistic physical therapy near Horsham Township, PA. One-on-one orthopedic, vestibular, and pelvic floor care. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/service-areas/horsham" }
};

export default function HorshamPage() {
  return (
    <ServiceAreaTemplate
      town="Horsham"
      heroH1="Physical Therapy in Horsham, PA"
      introParagraph="Horsham Township residents are just minutes from our private clinic at 1250 Old York Road in Warminster. Whether you are recovering from knee surgery, dealing with chronic back pain, or experiencing vertigo, Vital Flow provides the kind of focused, one-on-one care that busy chain clinics simply cannot match. Every session is a full 60 minutes with Dr. Palak Mulji."
      imagePath="/images/clinic-location.webp"
      reasons={[
        "We are right next door. Our Warminster clinic is less than 10 minutes from most Horsham neighborhoods, making it one of the most convenient options for premium, concierge-level PT.",
        "Horsham has a large active adult community. Our vestibular rehabilitation program helps older adults reduce fall risk and regain confidence with walking and daily activities.",
        "We accept Medicare Part B and also work with HSA and FSA accounts. Most PPO plans reimburse 50 to 80 percent of our sessions through out-of-network benefits."
      ]}
      testimonial={{
        quote: "I tried two other PT offices in Horsham before finding Palak. At both places, I saw the therapist for maybe 10 minutes and then was handed off to an aide. At Vital Flow, Palak is with me the entire session. My knee is finally getting better.",
        author: "James K., Horsham"
      }}
    />
  );
}
