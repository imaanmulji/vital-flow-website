import type { Metadata } from "next";
import ServiceTemplate from "@/components/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Orthopedic & Sports Physical Therapy in Bucks County | Vital Flow PT",
  description: "Clinic-based orthopedic physical therapy and sports rehabilitation in Doylestown, PA. Specializing in back pain, post-surgical rehab, and sports injuries.",
  alternates: { canonical: "https://vitalflowpt.com/services/orthopedic-sports" }
};

export default function OrthopedicSportsPage() {
  return (
    <ServiceTemplate
      breadcrumbName="Orthopedic & Sports"
      heroEyebrow="Orthopedic & Sports · Clinic-Based · Doylestown & Bucks County"
      heroH1="Orthopedic & Sports Physical Therapy in Bucks County"
      heroIntro="Back pain, rotator cuff injuries, knee pain, post-surgical rehab, and sports injuries — evaluated and treated with a full hour of focused, one-on-one attention. Dr. Mulji assesses your movement patterns, evaluates your daily biomechanics, and builds a recovery plan tailored to your actual life."
      imagePath="/images/orthopedic-sports.webp"
      conditions={[
        "Lower back pain and sciatica",
        "Neck pain and headaches",
        "Rotator cuff injuries",
        "Knee pain and meniscus issues",
        "Hip pain",
        "Plantar fasciitis",
        "Tennis/golfer's elbow",
        "Pre- and post-surgical rehabilitation (ACL, rotator cuff, joint replacement)",
        "Running injuries",
        "Return-to-sport programming"
      ]}
      benefits={[
        {
          title: "Your True Environment",
          description: "We don't just run you through cookie-cutter exercises. We evaluate how you actually move — your lifting form, your running gait, your desk posture — and tailor treatment to your specific daily demands."
        },
        {
          title: "Focused, Responsive Care",
          description: "Every session provides 60 minutes of uninterrupted, one-on-one attention. Your treatment plan is reviewed and adjusted as your movement, symptoms, and goals change."
        },
        {
          title: "Seamless Post-Op Care",
          description: "After surgery, the last thing you need is a crowded gym environment. Our private clinic provides quiet, focused post-operative rehabilitation during the critical early phases of recovery."
        }
      ]}
      testimonial={{
        quote: "I've had back pain on and off for fifteen years. Palak actually watched me work at my standing desk — where the problem was.",
        author: "David L., Newtown"
      }}
      faqs={[
        {
          q: "What equipment does the clinic have for orthopedic rehab?",
          a: "Our clinic is fully equipped with a professional treatment table, resistance bands, weights, manual therapy tools, and specialized assessment equipment. We also focus on functional movement patterns that translate directly to your daily life, making your exercise program realistic and effective."
        },
        {
          q: "How soon after surgery should I start physical therapy?",
          a: "This depends entirely on your surgeon's specific protocol. We frequently start within 3-5 days post-operation for procedures like joint replacements or ACL repairs. We will coordinate directly with your surgeon's office to ensure we follow their exact guidelines."
        },
        {
          q: "Do you treat acute sports injuries?",
          a: "Yes. From ankle sprains to muscle strains, early intervention is critical. We provide acute pain management, mobility preservation, and a clear progressive plan to return you to your sport safely."
        },
        {
          q: "I want to get back to running. Can you help?",
          a: "Absolutely. We perform running gait analysis right in your neighborhood, identifying biomechanical faults that may be contributing to your pain. We then build a targeted strength and return-to-run program."
        },
        {
          q: "Is manual therapy included?",
          a: "Yes. Almost all orthopedic sessions include some form of hands-on manual therapy—such as joint mobilization, soft tissue release, or mobilization with movement—followed immediately by active exercise to reinforce the new mobility."
        }
      ]}
      relatedServices={[
        { name: "Pelvic Floor Therapy", href: "/services/pelvic-floor-therapy" },
        { name: "Vestibular Rehabilitation", href: "/services/vestibular-rehabilitation" },
        { name: "Chronic Pain Management", href: "/services/pain-management" }
      ]}
    />
  );
}
