import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartPulse, Activity, Compass, Sparkles, Star, MapPin } from "lucide-react";
import CTABlock from "@/components/shared/CTABlock";

export default function Home() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Vital Flow Physical Therapy",
    "image": "https://vitalflowpt.com/images/og-image.webp",
    "telephone": "+1-267-362-9596",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1250 Old York Road",
      "addressLocality": "Warminster",
      "addressRegion": "PA",
      "postalCode": "18974",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Kathleen R." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "She walked me through the exact movements that trigger it, and I haven't had a spin since."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Megan T." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I had diastasis after my second baby and no clinic nearby had evening appointments. Palak was so accommodating."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "David L." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I've had back pain on and off for fifteen years. Palak actually watched me work at my standing desk — where the problem was."
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* 7.1 Hero Section */}
      <section className="relative bg-brand-bg pt-32 pb-20 md:pt-48 md:pb-32 lg:min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-[60%] animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
              <span className="inline-block text-xs md:text-sm font-semibold text-brand-textSecondary tracking-wider uppercase mb-6">
                PRIVATE CLINIC PHYSICAL THERAPY · DOYLESTOWN, PA
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-brand-primaryDark leading-[1.1] mb-8 tracking-tight">
                One-on-one physical therapy built around you.
              </h1>
              <p className="text-lg md:text-xl lg:text-[22px] text-brand-textPrimary leading-relaxed mb-10 max-w-2xl">
                Vital Flow offers holistic physical therapy in a private clinic and via telehealth. Every session is a full hour, one-on-one, with Dr. Palak Mulji, and your plan adapts to your goals and response to care.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base w-full sm:w-auto">
                  <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                    Book Free 15-Min Consult
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-brand-border text-brand-textPrimary hover:bg-white w-full sm:w-auto">
                  <Link href="/how-it-works">
                    How It Works
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-textSecondary font-medium">
                <div className="flex text-amber-400" role="img" aria-label="5 out of 5 stars">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span>Trusted by patients across Bucks County</span>
              </div>
            </div>
            <div className="w-full lg:w-[40%] animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-200">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-brand-accentLight"></div>
                <Image 
                  src="/images/hero-clinic.webp" 
                  alt="Dr. Palak Mulji guiding a patient through mobility exercises in our private clinic" 
                  fill 
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.2 Trust Strip */}
      <section className="bg-white border-y border-brand-border py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm font-medium text-brand-textSecondary">
            <span>25+ Years Experience</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-brand-border"></span>
            <span>Doctor of Physical Therapy</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-brand-border"></span>
            <span className="text-brand-primary font-semibold">Medicare Accepted</span>
            <span className="hidden lg:inline w-1 h-1 rounded-full bg-brand-border"></span>
            <span>HSA/FSA Eligible</span>
            <span className="hidden lg:inline w-1 h-1 rounded-full bg-brand-border"></span>
            <span>50–80% Typical Reimbursement</span>
            <span className="hidden xl:inline w-1 h-1 rounded-full bg-brand-border"></span>
            <span>APTA Member</span>
          </div>
        </div>
      </section>

      {/* 7.3 Care approach */}
      <section className="py-20 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold text-brand-primary tracking-[0.16em] uppercase mb-4">
              Care built around you
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-primaryDark mb-6">
              A plan that evolves as you progress.
            </h2>
            <p className="text-lg text-brand-textSecondary leading-relaxed">
              Every person arrives with a different history, body, and goal. Your care begins with a thorough evaluation, then adapts based on how you respond—not a preset timeline.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            {[
              ["01", "Focused, one-on-one care", "Your appointment is dedicated to you, with space to ask questions and work through what matters most."],
              ["02", "A plan you understand", "Leave your evaluation with clear priorities, practical next steps, and a plan shaped around your goals."],
              ["03", "Progress reviewed together", "Each visit builds on what is helping. When something is not working, the plan changes with you."],
              ["04", "One therapist throughout", "Work with Dr. Mulji from your first evaluation through your final visit for consistent, connected care."],
            ].map(([number, title, description]) => (
              <li key={number}>
                <Card className="h-full rounded-3xl border-brand-border bg-white/80 p-7 md:p-8 shadow-none">
                  <span aria-hidden="true" className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-brand-primaryLight text-brand-primary text-xs font-bold">
                    {number}
                  </span>
                  <h3 className="font-heading text-2xl text-brand-primaryDark mt-6 mb-3">{title}</h3>
                  <p className="text-brand-textSecondary leading-relaxed">{description}</p>
                </Card>
              </li>
            ))}
          </ol>

          <aside className="max-w-5xl mt-5 rounded-3xl bg-brand-primaryLight/60 p-7 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-brand-primaryDark mb-4">Your timeline is personal.</h3>
              <p className="text-brand-textPrimary leading-relaxed">
                Recovery depends on your condition, health history, goals, and how your body responds. After your evaluation, Dr. Mulji will explain what she sees, recommend next steps, and revisit the plan with you as care progresses.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-6 py-6">
                <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">Book a free consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-brand-primary text-brand-primary bg-white/70 hover:bg-white px-6 py-6">
                <Link href="/how-it-works">How your first visit works</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* 7.4 Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-primaryDark mb-6">Expert care across four specialties.</h2>
            <p className="text-lg text-brand-textSecondary">All delivered in our private clinic by Dr. Palak Mulji.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <Link href="/services/pelvic-floor-therapy" className="block group">
              <Card className="h-full p-8 rounded-2xl border border-brand-border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center mb-6 text-brand-primary">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-primaryDark mb-4 group-hover:text-brand-primary transition-colors">Pelvic Floor Therapy</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong className="block text-brand-textPrimary text-lg font-medium mb-1">Incontinence, prolapse, diastasis recti</strong>
                  For pelvic pain, postpartum recovery, and pregnancy-related pain.
                </p>
              </Card>
            </Link>

            {/* Service 2 */}
            <Link href="/services/orthopedic-sports" className="block group">
              <Card className="h-full p-8 rounded-2xl border border-brand-border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center mb-6 text-brand-primary">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-primaryDark mb-4 group-hover:text-brand-primary transition-colors">Orthopedic & Sports Rehab</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong className="block text-brand-textPrimary text-lg font-medium mb-1">Back, neck, shoulder, knee, and hip pain</strong>
                  Pre- and post-surgical rehab. Return to running, lifting, or your sport.
                </p>
              </Card>
            </Link>

            {/* Service 3 */}
            <Link href="/services/vestibular-rehabilitation" className="block group">
              <Card className="h-full p-8 rounded-2xl border border-brand-border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center mb-6 text-brand-primary">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-primaryDark mb-4 group-hover:text-brand-primary transition-colors">Vestibular Rehabilitation</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong className="block text-brand-textPrimary text-lg font-medium mb-1">BPPV, vertigo, dizziness, and balance disorders</strong>
                  Clinic-based Epley maneuver and gaze stabilization training.
                </p>
              </Card>
            </Link>

            {/* Service 4 */}
            <Link href="/services/pain-management" className="block group">
              <Card className="h-full p-8 rounded-2xl border border-brand-border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center mb-6 text-brand-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-primaryDark mb-4 group-hover:text-brand-primary transition-colors">Holistic Pain Management</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong className="block text-brand-textPrimary text-lg font-medium mb-1">Lower back, neck, joint, and nerve pain</strong>
                  Integrative mind-body approach, myofascial release, and hands-on manual therapy.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 7.5 How it works */}
      <section className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-primaryDark">From first call to feeling better.</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-brand-primary/30"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading text-xl font-semibold z-10 mb-6 shadow-sm">
                  1
                </div>
                <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">Free 15-minute call</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  We talk through what&apos;s going on, what you&apos;ve tried, and whether private clinic PT is the right fit. No intake forms, no obligation.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading text-xl font-semibold z-10 mb-6 shadow-sm">
                  2
                </div>
                <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">Clinic evaluation</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  You visit our private clinic. A full 60-minute assessment of the actual problem to build a robust foundation. You leave with a clear plan.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading text-xl font-semibold z-10 mb-6 shadow-sm">
                  3
                </div>
                <h3 className="font-semibold text-xl text-brand-primaryDark mb-4">Targeted follow-up care</h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  Hands-on treatment plus a personalized program built around your life. We review progress with you and adjust the plan as you move toward what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.7 About Dr. Mulji Preview */}
      <section className="py-20 md:py-32 bg-brand-accentLight/30 border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-5xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-sm max-w-md mx-auto lg:mx-0">
                <div className="w-full h-full bg-brand-surface border-2 border-dashed border-brand-border flex items-center justify-center p-8 text-center text-brand-textMuted font-medium">
                  [Placeholder for Dr. Palak's Photo]
                </div>
                {/* 
                <Image 
                  src="/images/dr-palak-portrait.webp" 
                  alt="Portrait of Dr. Palak Mulji, PT, DPT" 
                  fill 
                  className="object-cover" 
                /> 
                */}
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block text-xs md:text-sm font-semibold text-brand-primary tracking-wider uppercase mb-4">
                MEET YOUR PHYSICAL THERAPIST
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-primaryDark mb-6">
                Dr. Palak Mulji, PT, DPT
              </h2>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
                Palak has spent over 25 years treating the full spectrum of orthopedic, pelvic floor, and vestibular conditions. She is deeply committed to furthering her knowledge, constantly studying the newest advancements in holistic physical therapy to provide the most effective care possible.
              </p>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-10">
                She founded Vital Flow to bring a different kind of care to patients: longer sessions, direct access, and the time to actually listen. She holds a Doctorate of Physical Therapy from Rutgers University and is currently completing Advanced Mind-Body Practitioner training at the Jefferson School of Integrative Medicine.
              </p>
              <Link href="/about" className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primaryDark transition-colors group text-lg">
                Read Palak&apos;s full story 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7.6 Insurance Reassurance */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-primaryDark mb-8 leading-tight">
                Cash-based focus. <br className="hidden lg:block"/>
                <span className="inline-block mt-4 px-4 py-2 bg-brand-primaryLight/50 text-brand-primaryDark rounded-xl font-bold border-2 border-brand-primary text-2xl md:text-3xl shadow-sm">
                  We Proudly Accept Medicare
                </span>
              </h2>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
                Vital Flow is out-of-network by design for most commercial insurances — it&apos;s what lets us spend a full hour with every patient. <strong className="text-brand-primaryDark font-bold bg-brand-primaryLight/30 px-1 rounded">However, we are a participating provider with Medicare.</strong>
              </p>
              <p className="text-lg text-brand-textSecondary leading-relaxed mb-10">
                For commercial plans, most PPO plans reimburse <strong className="text-brand-primaryDark font-medium">50–80% of our sessions</strong> after your deductible. We&apos;ll generate superbills automatically through Reimbursify and accept HSA/FSA cards.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <Card className="bg-brand-bg border-brand-border p-8 md:p-10 rounded-3xl text-center">
                <h3 className="font-heading text-2xl text-brand-primaryDark mb-4">Curious what you&apos;d actually pay?</h3>
                <p className="text-brand-textSecondary mb-8">Use our calculator to estimate your out-of-network reimbursement based on your specific plan.</p>
                <Button asChild size="lg" className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full py-6">
                  <Link href="/insurance">Use Insurance Calculator</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7.8 Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-primaryDark mb-6">What patients say.</h2>
            <p className="text-lg text-brand-textSecondary mb-3">Reviews from across Doylestown and Bucks County.</p>
            <p className="text-sm text-brand-textSecondary">
              Every person responds differently. Testimonials describe individual experiences and do not guarantee results or a particular timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <Card className="p-8 rounded-2xl bg-brand-bg border-none shadow-sm flex flex-col">
              <div className="flex text-amber-400 mb-6" role="img" aria-label="5 out of 5 stars">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-heading italic text-lg lg:text-xl text-brand-textPrimary leading-relaxed mb-8 flex-grow">
                "She walked me through the exact movements that trigger it, and I haven&apos;t had a spin since."
              </p>
              <div className="text-sm font-semibold tracking-wider text-brand-textSecondary uppercase">
                Kathleen R., Doylestown
              </div>
            </Card>

            {/* Review 2 */}
            <Card className="p-8 rounded-2xl bg-brand-bg border-none shadow-sm flex flex-col">
              <div className="flex text-amber-400 mb-6" role="img" aria-label="5 out of 5 stars">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-heading italic text-lg lg:text-xl text-brand-textPrimary leading-relaxed mb-8 flex-grow">
                "I had diastasis after my second baby and no clinic nearby had evening appointments. Palak was so accommodating."
              </p>
              <div className="text-sm font-semibold tracking-wider text-brand-textSecondary uppercase">
                Megan T., Warwick
              </div>
            </Card>

            {/* Review 3 */}
            <Card className="p-8 rounded-2xl bg-brand-bg border-none shadow-sm flex flex-col">
              <div className="flex text-amber-400 mb-6" role="img" aria-label="5 out of 5 stars">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-heading italic text-lg lg:text-xl text-brand-textPrimary leading-relaxed mb-8 flex-grow">
                "I&apos;ve had back pain on and off for fifteen years. Palak actually watched me work at my standing desk — where the problem was."
              </p>
              <div className="text-sm font-semibold tracking-wider text-brand-textSecondary uppercase">
                David L., Newtown
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 7.9 Service Area */}
      <section className="py-20 md:py-32 bg-brand-primaryDark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-5xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Serving Warminster and surrounding Bucks County.
              </h2>
              <p className="text-lg text-brand-primaryLight/80 mb-10">
                Private clinic sessions and Telehealth appointments available.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-brand-primaryLight">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-brand-accent" />
                  <Link href="/service-areas/doylestown" className="hover:text-white transition-colors">Doylestown</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-brand-accent" />
                  <Link href="/service-areas/warminster" className="hover:text-white transition-colors">Warminster</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-brand-accent" />
                  <Link href="/service-areas/warwick" className="hover:text-white transition-colors">Warwick</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>Jamison</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>Furlong</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>Buckingham</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>Newtown</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>New Hope</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>Chalfont</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 opacity-50" />
                  <span>Richboro</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="w-full max-w-md aspect-square bg-brand-primary rounded-full flex items-center justify-center p-8 border-4 border-brand-primaryLight/10 relative">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-accent/30 scale-110"></div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                  <p className="font-heading text-xl md:text-2xl font-medium text-white max-w-[200px] mx-auto">
                    Conveniently located in Warminster, PA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.10 FAQ Preview */}
      <section className="py-20 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-primaryDark mb-6">Common Questions</h2>
          </div>

          <Accordion className="w-full mb-10">
            <AccordionItem value="item-1" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                Do I need a prescription or referral?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                In Pennsylvania, physical therapists have Direct Access. This means you do not need a prescription or referral from a doctor to start evaluation and treatment. If your condition requires treatment beyond 30 days, we will coordinate with your physician at that time. Some specific insurance plans may require a referral for out-of-network reimbursement, which we can help you verify.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                How does out-of-network insurance reimbursement work?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                You pay directly at the time of your session. After each visit, we provide you with a superbill (a detailed medical receipt) or submit it automatically on your behalf via Reimbursify. You then submit this to your insurance provider, and they mail a reimbursement check directly to you based on your out-of-network benefits. Most PPO plans cover 50-80% after your deductible is met.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                What should I bring to my clinic session?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Very little. We have a fully equipped clinic with everything needed to assess and treat your condition. Dr. Mulji has all the necessary assessment tools and therapy equipment ready for your session.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                Where are you located?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Our private clinic is located in Warminster, PA. We proudly serve patients from Doylestown, Warminster, Warwick, Jamison, Furlong, Buckingham, Newtown, New Hope, Chalfont, Horsham, and surrounding towns across Bucks County.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-brand-border">
              <AccordionTrigger className="text-left font-medium text-lg text-brand-textPrimary hover:text-brand-primary">
                Can I use my HSA or FSA card?
              </AccordionTrigger>
              <AccordionContent className="text-brand-textSecondary text-base leading-relaxed pt-2 pb-6">
                Yes, physical therapy is a qualified medical expense. We accept all major HSA and FSA credit cards for payment directly through our secure patient portal. We can also provide any detailed receipts your administrator might require to verify the expense.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center">
            <Link href="/faq" className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primaryDark transition-colors text-lg">
              See all questions →
            </Link>
          </div>
        </div>
      </section>

      {/* 7.11 Final CTA */}
      <CTABlock />
    </div>
  );
}
