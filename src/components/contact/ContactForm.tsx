"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  reason: z.string().min(10, { message: "Please tell us briefly what brings you in" }),
  contactMethod: z.enum(["phone", "email"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
      contactMethod: "phone",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form submitted:", values);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-success/10 border border-brand-success text-brand-primaryDark p-8 rounded-2xl text-center">
        <h3 className="font-heading text-2xl mb-4">Message sent</h3>
        <p className="text-brand-textPrimary">Thank you for reaching out. We will get back to you within 1 business day.</p>
        <Button 
          variant="outline" 
          className="mt-6 border-brand-border"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-brand-textPrimary font-medium">Full Name *</Label>
        <Input 
          id="name" 
          placeholder="Jane Doe" 
          {...form.register("name")}
          className="h-12 border-brand-border bg-white rounded-xl focus-visible:ring-brand-primary"
        />
        {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-brand-textPrimary font-medium">Email Address *</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="jane@example.com" 
            {...form.register("email")}
            className="h-12 border-brand-border bg-white rounded-xl focus-visible:ring-brand-primary"
          />
          {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-brand-textPrimary font-medium">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="(555) 123-4567" 
            {...form.register("phone")}
            className="h-12 border-brand-border bg-white rounded-xl focus-visible:ring-brand-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason" className="text-brand-textPrimary font-medium">What brings you in? *</Label>
        <textarea 
          id="reason" 
          rows={4}
          placeholder="Briefly describe your symptoms or what you'd like to address..." 
          {...form.register("reason")}
          className="w-full p-4 border border-brand-border bg-white rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 transition-colors resize-none text-sm"
        />
        {form.formState.errors.reason && <p className="text-red-500 text-xs">{form.formState.errors.reason.message}</p>}
      </div>

      <div className="space-y-3">
        <Label className="text-brand-textPrimary font-medium block">Preferred contact method *</Label>
        <RadioGroup 
          onValueChange={(val) => form.setValue("contactMethod", val as "phone" | "email", { shouldValidate: true })}
          defaultValue="phone"
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-2"
        >
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="phone" id="contact-phone" className="border-brand-border text-brand-primary focus:ring-brand-primary" />
            <Label htmlFor="contact-phone" className="font-normal text-brand-textPrimary cursor-pointer">Phone Call</Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="email" id="contact-email" className="border-brand-border text-brand-primary focus:ring-brand-primary" />
            <Label htmlFor="contact-email" className="font-normal text-brand-textPrimary cursor-pointer">Email</Label>
          </div>
        </RadioGroup>
        {form.formState.errors.contactMethod && <p className="text-red-500 text-xs">{form.formState.errors.contactMethod.message}</p>}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        disabled={isSubmitting}
        className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white h-14 rounded-xl text-base mt-4"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
