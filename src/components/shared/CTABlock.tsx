import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTABlock() {
  return (
    <section className="py-20 md:py-32 bg-brand-accentLight border-y border-brand-accentLight/50">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <p className="text-sm font-medium text-brand-primary tracking-wider uppercase mb-4">
          Ready when you are
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-brand-primaryDark mb-6 leading-tight">
          Start with a free 15-minute call.
        </h2>
        <p className="text-lg md:text-xl text-brand-textSecondary mb-10 leading-relaxed max-w-2xl mx-auto">
          Talk directly with Dr. Mulji about what&apos;s going on. No pressure, no intake forms.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-6 text-base w-full sm:w-auto">
            <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
              Book Free Consult
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-brand-border text-brand-textPrimary hover:bg-white w-full sm:w-auto">
            <Link href="/insurance">
              See Pricing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
