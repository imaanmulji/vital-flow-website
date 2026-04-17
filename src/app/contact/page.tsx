import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact/ContactForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Booking | Vital Flow Physical Therapy",
  description: "Contact Dr. Palak Mulji to schedule a physical therapy evaluation in Warminster, Doylestown, and surrounding Bucks County. Medicare accepted.",
  alternates: { canonical: "https://vitalflowpt.com/contact" }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-brand-bg">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
                Let's get started.
              </h1>
              <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-2xl mx-auto">
                Reach out to schedule your free 15-minute consultation or ask any questions about clinic-based physical therapy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Left Column: Contact Info */}
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-border shadow-sm h-full">
                  <h2 className="font-heading text-2xl text-brand-primaryDark mb-8">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-primaryDark mb-1">Phone</h3>
                        <a href="tel:267-362-9596" className="text-lg text-brand-textPrimary hover:text-brand-primary transition-colors">(267) 362-9596</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-primaryDark mb-1">Email</h3>
                        <a href="mailto:hello@vitalflowpt.com" className="text-lg text-brand-textPrimary hover:text-brand-primary transition-colors">hello@vitalflowpt.com</a>
                        <p className="text-sm text-brand-textMuted mt-1">We reply within 1 business day</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-primaryDark mb-1">Service Area</h3>
                        <p className="text-brand-textSecondary leading-relaxed">
                          Our private clinic serves patients from Doylestown, Warminster, Warwick, Jamison, Furlong, Buckingham, Newtown, New Hope, Chalfont, and surrounding Bucks County.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primaryLight flex items-center justify-center text-brand-primary shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-primaryDark mb-1">Hours</h3>
                        <p className="text-brand-textSecondary leading-relaxed">
                          Mon & Fri: 2:00 PM – 5:00 PM<br />
                          Sat: 9:00 AM – 2:00 PM<br />
                          <span className="text-sm text-brand-textMuted">Additional times by appointment</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-brand-border">
                    <h3 className="font-semibold text-brand-primaryDark mb-4 text-center">Prefer to book directly?</h3>
                    <Button asChild size="lg" className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-primaryDark rounded-xl h-14 text-base">
                      <a href="https://vitaflowpt.janeapp.com/" target="_blank" rel="noopener noreferrer">
                        Schedule via JaneApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="order-1 lg:order-2">
                <div className="bg-brand-accentLight/50 p-8 md:p-10 rounded-3xl border border-brand-accentLight">
                  <h2 className="font-heading text-2xl text-brand-primaryDark mb-2">Send a Message</h2>
                  <p className="text-brand-textSecondary mb-8 text-sm">Fill out the form below and we'll be in touch shortly to answer your questions or schedule a call.</p>
                  
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
