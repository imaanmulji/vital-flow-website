import type { Metadata } from "next";
import ServiceTemplate from "@/components/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Physical Therapy for Chronic Pain in Doylestown | Vital Flow PT",
  description: "Clinic-based physical therapy for chronic pain management. Compassionate, 1-on-1 care for persistent lower back, neck, and joint pain in Bucks County.",
  alternates: { canonical: "https://vitalflowpt.com/services/pain-management" }
};

export default function PainManagementPage() {
  return (
    <ServiceTemplate
      breadcrumbName="Chronic Pain Management"
      heroEyebrow="Chronic Pain Management · Clinic-Based · Doylestown & Bucks County"
      heroH1="Physical Therapy for Chronic Pain in Doylestown & Warminster"
      heroIntro="Chronic pain rarely responds to generic protocols. It responds to a therapist who has time to examine it, watch how you move through your day, and build a treatment plan around the life you actually live. That's what clinic-based concierge PT makes possible."
      imagePath="/images/pain-management.webp"
      conditions={[
        "Chronic low back pain",
        "Persistent neck pain",
        "Fibromyalgia and widespread pain",
        "Nerve pain and neuropathy",
        "Joint pain (shoulders, hips, knees)",
        "Post-surgical pain",
        "Myofascial pain syndromes",
        "Pain that hasn't resolved with previous PT"
      ]}
      benefits={[
        {
          title: "Time to Actually Listen",
          description: "Chronic pain is complex. A 60-minute session gives us the necessary time to hear your full history, understand your triggers, and pivot the treatment plan as your body responds."
        },
        {
          title: "Nervous System Focus",
          description: "Persistent pain often involves an over-sensitized nervous system. We incorporate pain neuroscience education and graded exposure techniques in a safe, comfortable environment."
        },
        {
          title: "Hands-On Relief",
          description: "Every session includes targeted manual therapy, myofascial release, and joint mobilization to modulate pain signals before moving into active rehabilitation."
        }
      ]}
      testimonial={{
        quote: "I've had back pain on and off for fifteen years. Palak actually watched me work at my standing desk — where the problem was.",
        author: "David L., Newtown"
      }}
      faqs={[
        {
          q: "I've tried physical therapy before and it didn't work. How is this different?",
          a: "Clinic PT often fails chronic pain patients because 15-minute intervals aren't enough time to address complex, persistent nervous system sensitization. By spending a full hour one-on-one in our private treatment room, we can dig deeper, adjust our approach in real-time, and focus on the specific daily tasks that cause you pain."
        },
        {
          q: "Will the treatments hurt?",
          a: "Our goal is never to push you through unbearable pain. We use a concept called 'graded exposure'—finding the safe threshold of movement and gradually expanding it. We focus on calming the nervous system first."
        },
        {
          q: "Do you use modalities like heat, ice, or TENS?",
          a: "While we can instruct you on the proper home use of heat or ice for symptom management, we do not waste your paid, one-on-one therapy time hooking you up to machines. Your 60 minutes are spent on high-value, skilled interventions like manual therapy and movement re-education."
        },
        {
          q: "How long will it take to see results?",
          a: "There is no single timeline for chronic pain. Your plan depends on your history, symptoms, goals, and response to care. We review what is changing at each visit and adjust the approach with you."
        },
        {
          q: "Can you communicate with my pain management doctor?",
          a: "Absolutely. Collaborative care is essential for chronic pain. With your permission, we frequently share progress notes and communicate directly with your physicians, rheumatologists, or pain specialists."
        }
      ]}
      relatedServices={[
        { name: "Orthopedic & Sports", href: "/services/orthopedic-sports" },
        { name: "Pelvic Floor Therapy", href: "/services/pelvic-floor-therapy" },
        { name: "Vestibular Rehabilitation", href: "/services/vestibular-rehabilitation" }
      ]}
    />
  );
}
