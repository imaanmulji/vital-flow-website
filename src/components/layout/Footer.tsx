import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-brand-surface pt-16 pb-8 border-t border-brand-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading font-semibold text-2xl text-brand-primaryDark tracking-tight">
                Vital Flow
              </span>
            </Link>
            <p className="text-brand-textSecondary text-sm mb-6 leading-relaxed">
              Empowering people to reclaim their health and vitality through compassionate, evidence-based physical therapy that addresses the whole person: body, mind, and spirit.
            </p>
            <div className="space-y-2 text-sm text-brand-textSecondary mb-6">
              <p>1250 Old York Road</p>
              <p>Warminster, PA 18974</p>
              <div className="py-2">
                <p className="font-medium text-brand-textPrimary mb-1">Clinic Hours:</p>
                <p>Mon & Fri: 2:00 PM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 2:00 PM</p>
              </div>
              <p>
                <a href="tel:267-362-9596" className="hover:text-brand-primary transition-colors">(267) 362-9596</a>
              </p>
              <p>
                <a href="mailto:hello@vitalflowpt.com" className="hover:text-brand-primary transition-colors">hello@vitalflowpt.com</a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-brand-textMuted hover:text-brand-primary transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-brand-textMuted hover:text-brand-primary transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-medium text-brand-textPrimary mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services/pelvic-floor-therapy" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Pelvic Floor Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/orthopedic-sports" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Orthopedic & Sports
                </Link>
              </li>
              <li>
                <Link href="/services/vestibular-rehabilitation" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Vestibular Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/services/pain-management" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Chronic Pain Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-medium text-brand-textPrimary mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  About Dr. Mulji
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Insurance & Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-medium text-brand-textPrimary mb-6 uppercase tracking-wider text-sm">Service Areas</h3>
            <ul className="space-y-4 text-sm text-brand-textSecondary">
              <li><Link href="/service-areas/warminster" className="hover:text-brand-primary transition-colors">Warminster, PA</Link></li>
              <li><Link href="/service-areas/doylestown" className="hover:text-brand-primary transition-colors">Doylestown, PA</Link></li>
              <li><Link href="/service-areas/warwick" className="hover:text-brand-primary transition-colors">Warwick, PA</Link></li>
              <li><Link href="/service-areas/newtown" className="hover:text-brand-primary transition-colors">Newtown, PA</Link></li>
              <li><Link href="/service-areas/chalfont" className="hover:text-brand-primary transition-colors">Chalfont, PA</Link></li>
              <li><Link href="/service-areas/horsham" className="hover:text-brand-primary transition-colors">Horsham, PA</Link></li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-brand-border h-[300px] relative shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.2087522519967!2d-75.0935575!3d40.1599388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6af12d3c940b3%3A0xc4eb789c6de76766!2s1250%20Old%20York%20Rd%2C%20Warminster%2C%20PA%2018974!5e0!3m2!1sen!2sus!4v1709669524021!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vital Flow Physical Therapy Location"
            className="absolute inset-0"
          ></iframe>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-textMuted">
          <p>© {new Date().getFullYear()} Vital Flow Physical Therapy. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-brand-textSecondary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-textSecondary cursor-pointer transition-colors">HIPAA Notice</span>
            <span>Licensed PT in Pennsylvania</span>
          </div>
        </div>
      </div>
    </footer>
  );
}




