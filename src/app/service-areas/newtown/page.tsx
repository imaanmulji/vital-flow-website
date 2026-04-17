import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/shared/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy in Newtown, PA | Vital Flow PT",
  description: "Expert holistic physical therapy near Newtown, Bucks County. One-on-one pelvic floor, orthopedic, and vestibular care at our Warminster clinic. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/service-areas/newtown" }
};

export default function NewtownPage() {
  return (
    <ServiceAreaTemplate
      town="Newtown"
      heroH1="Physical Therapy in Newtown, PA"
      introParagraph="From the shops along State Street to the neighborhoods of Newtown Township and Upper Makefield, Vital Flow provides holistic, one-on-one physical therapy at our private clinic just a short drive up Route 332 in Warminster. Whether you are recovering from surgery, managing chronic pain, or dealing with dizziness, you will receive a full 60 minutes of focused care with Dr. Palak Mulji at every visit."
      imagePath="/images/clinic-location.webp"
      reasons={[
        "Our Warminster clinic is less than 20 minutes from Newtown Borough via Route 332, with easy parking and a comfortable, private treatment room.",
        "Newtown families with active kids and athletes benefit from our sports rehabilitation expertise. We treat everything from ACL recovery to Little League elbow to running injuries.",
        "If you are a Medicare beneficiary in Newtown, we are one of the few concierge-style practices in the area that accepts Medicare Part B directly."
      ]}
      testimonial={{
        quote: "I drove past three PT clinics between Newtown and Warminster to get to Palak. The difference is that she actually spends the full hour with you. My shoulder is better than it was before the injury.",
        author: "Robert H., Newtown"
      }}
    />
  );
}
