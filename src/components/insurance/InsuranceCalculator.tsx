"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Controller } from "react-hook-form";

const formSchema = z.object({
  provider: z.string().min(1, { message: "Please select a provider" }),
  plan: z.string().min(1, { message: "Please select a plan type" }),
  deductible: z.string().min(1, { message: "Please select deductible status" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function InsuranceCalculator() {
  const [result, setResult] = useState<{
    estimate: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "",
      plan: "",
      deductible: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    let estimate = "";
    let description = "";
    let ctaText = "Book a free call";
    let ctaLink = "https://vitaflowpt.janeapp.com/";

    const { provider, plan, deductible } = values;

    if (provider === "Medicaid" || plan === "Medicaid") {
      estimate = "$0";
      description = "Medicaid typically does not reimburse out-of-network physical therapy. We'd recommend searching for in-network providers in your area. If you'd still like to work with us, HSA/FSA payments and out-of-pocket care are options — call us to discuss.";
      ctaText = "Call (267) 362-9596";
      ctaLink = "tel:267-362-9596";
    } else if (provider === "Medicare" && plan === "Medicare Part B") {
      estimate = "~70-80%";
      description = "Medicare Part B covers outpatient physical therapy at 80% after your annual deductible ($240 in 2025). Because Vital Flow is a non-participating provider, Medicare reimburses you directly at the approved rate. You pay us upfront, and we'll provide the documentation you need to file with Medicare.";
      ctaText = "Book a free call to discuss Medicare details";
    } else if (plan === "HMO") {
      estimate = "$0–20%";
      description = "HMOs typically require you to use in-network providers and generally do not reimburse out-of-network care without a prior authorization. The good news: your visits are HSA/FSA eligible, and many patients find the cost still works out favorably when factoring in the efficiency of 4–6 visits vs. 8–12 at a clinic. We're happy to walk through numbers with you on a free call.";
      ctaText = "Book a free call about your specific plan";
    } else if (plan === "EPO" || plan === "POS") {
      estimate = "0–60%";
      description = "EPO and POS plans vary widely. Some offer partial out-of-network benefits; others behave like HMOs. The safest move is a quick benefits check — we'll call your insurance with you or on your behalf to confirm. It takes about 10 minutes.";
      ctaText = "Request a free benefits check";
      ctaLink = "/contact";
    } else if (plan === "PPO" && deductible === "Yes") {
      estimate = "50–80%";
      description = `You're in the best spot for reimbursement. With a PPO and your deductible already met, most of our patients see 50–80% reimbursement for each session. For a typical $225 session, that means roughly $112–180 comes back to you. We'll generate a superbill after every visit that you submit to ${provider !== "Other / Not Listed" ? provider : "your insurance"} — or Reimbursify can do it for you automatically.`;
      ctaText = "Book your first session";
    } else if (plan === "PPO" && deductible === "Partially") {
      estimate = "50–80% after deductible";
      description = "Once your deductible is fully met, PPOs typically reimburse 50–80% of our sessions. Until then, payments apply toward your deductible — which is still financial progress, not waste. Many patients choose to start now so the sessions count toward their deductible. We'll generate superbills after every visit.";
      ctaText = "Book your first session";
    } else if (plan === "PPO" && deductible === "No") {
      estimate = "50–80% after deductible";
      description = "PPO plans typically reimburse 50–80% of out-of-network PT after the deductible is met. Your payments now apply toward that deductible, so they're not lost — they count toward reaching it. Many patients find that 4–6 focused sessions meets their deductible faster than 8–12 scattered clinic visits would. Call us and we'll walk through the math for your specific plan.";
      ctaText = "Book a free call";
    } else if (plan === "HDHP") {
      estimate = "50–80% after deductible";
      description = "With a high-deductible plan, you'll typically pay out-of-pocket until your deductible is met, then your PPO-style out-of-network benefits kick in (usually 50–80% reimbursement). The upside: HSA contributions pay for our sessions tax-free, and our efficient model means fewer total sessions to reach your deductible.";
      ctaText = "Book your first session";
    } else if (plan === "I'm not sure" || provider === "Other / Not Listed") {
      estimate = "Varies";
      description = "No problem. The easiest way to find out is a free 10-minute benefits check — we'll call your insurance for you, ask the specific questions, and send you a one-page summary of what to expect.";
      ctaText = "Request a free benefits check";
      ctaLink = "/contact";
    } else {
      estimate = "Varies";
      description = "Coverage varies by plan. A free 10-minute benefits check with your insurance will tell us exactly what to expect. We'll call on your behalf if you'd like.";
      ctaText = "Request a free benefits check";
      ctaLink = "/contact";
    }

    setResult({ estimate, description, ctaText, ctaLink });
  };

  return (
    <Card className="rounded-3xl shadow-sm border-brand-border bg-white max-w-[680px] mx-auto p-8 md:p-10 relative overflow-hidden">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="space-y-4">
          <Label htmlFor="provider" className="text-base font-semibold text-brand-primaryDark">Who&apos;s your insurance carrier?</Label>
          <div className="relative">
            <select
              {...form.register("provider")}
              className="w-full h-12 rounded-xl border border-brand-border bg-brand-bg text-brand-textPrimary focus:ring-2 focus:ring-brand-primary focus:outline-none px-4 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Select a provider</option>
              <option value="Aetna">Aetna</option>
              <option value="Blue Cross Blue Shield">Blue Cross Blue Shield (Independence, Horizon, Highmark, etc.)</option>
              <option value="Cigna">Cigna</option>
              <option value="UnitedHealthcare">UnitedHealthcare</option>
              <option value="Humana">Humana</option>
              <option value="Anthem">Anthem</option>
              <option value="Medicare">Medicare</option>
              <option value="Medicaid">Medicaid</option>
              <option value="Other / Not Listed">Other / Not Listed</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-textMuted pointer-events-none" />
          </div>
          {form.formState.errors.provider && <p className="text-red-500 text-sm">{form.formState.errors.provider.message}</p>}
        </div>

        <div className="space-y-4">
          <Label htmlFor="plan" className="text-base font-semibold text-brand-primaryDark">What type of plan do you have?</Label>
          <div className="relative">
            <select
              {...form.register("plan")}
              className="w-full h-12 rounded-xl border border-brand-border bg-brand-bg text-brand-textPrimary focus:ring-2 focus:ring-brand-primary focus:outline-none px-4 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Select a plan type</option>
              <option value="PPO">PPO</option>
              <option value="HMO">HMO</option>
              <option value="EPO">EPO</option>
              <option value="POS">POS</option>
              <option value="HDHP">HDHP (High-Deductible Health Plan)</option>
              <option value="Medicare Part B">Medicare Part B</option>
              <option value="Medicaid">Medicaid</option>
              <option value="I'm not sure">I&apos;m not sure</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-textMuted pointer-events-none" />
          </div>
          {form.formState.errors.plan && <p className="text-red-500 text-sm">{form.formState.errors.plan.message}</p>}
        </div>

        <div className="space-y-4">
          <Label className="text-base font-semibold text-brand-primaryDark block">Have you met your deductible this year?</Label>
          <div className="flex flex-col space-y-2 mt-3">
            {[
              { id: "r1", value: "Yes", label: "Yes" },
              { id: "r2", value: "Partially", label: "Partially" },
              { id: "r3", value: "No", label: "No" },
              { id: "r4", value: "I don't know", label: "I don't know" }
            ].map((option) => (
              <div key={option.id} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={option.id}
                  value={option.value}
                  {...form.register("deductible")}
                  className="w-4 h-4 accent-brand-primary border-brand-border focus:ring-2 focus:ring-brand-primary cursor-pointer"
                />
                <Label htmlFor={option.id} className="font-normal text-brand-textPrimary cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          {form.formState.errors.deductible && <p className="text-red-500 text-sm">{form.formState.errors.deductible.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white h-14 rounded-xl text-lg mt-8">
          Estimate my reimbursement
        </Button>
      </form>

      {result && (
        <div className="mt-10 pt-10 border-t border-brand-border animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
          <div className="text-center mb-6">
            <span className="text-sm font-semibold tracking-wider text-brand-textSecondary uppercase mb-2 block">
              Estimated Reimbursement
            </span>
            <div className="font-heading text-4xl md:text-5xl text-brand-primaryDark">
              {result.estimate}
            </div>
          </div>
          
          <p className="text-brand-textPrimary leading-relaxed mb-8 text-center text-lg">
            {result.description}
          </p>
          
          <div className="flex justify-center mb-8">
            {result.ctaLink.startsWith("/") || result.ctaLink.startsWith("tel:") ? (
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8">
                <a href={result.ctaLink}>{result.ctaText}</a>
              </Button>
            ) : (
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8">
                <a href={result.ctaLink} target="_blank" rel="noopener noreferrer">{result.ctaText}</a>
              </Button>
            )}
          </div>
          
          <p className="text-xs text-brand-textMuted text-center leading-relaxed max-w-lg mx-auto">
            This is an estimate, not a guarantee. Actual reimbursement depends on your specific plan, deductible status, and whether your insurance deems the visit medically necessary. We'll always verify benefits before your first appointment.
          </p>
        </div>
      )}

      <div className="mt-12 pt-6 border-t border-brand-border text-center">
        <p className="text-xs text-brand-textMuted leading-relaxed">
          The Vital Flow Insurance Calculator provides general estimates only. It is not a guarantee of coverage or reimbursement. Your actual benefits depend on your specific plan terms, deductible status, medical necessity determinations, and your insurer's policies. Always verify benefits directly with your insurance company before beginning care.
        </p>
      </div>
    </Card>
  );
}
