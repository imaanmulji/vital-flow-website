import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTABlock from "@/components/shared/CTABlock";

export const metadata: Metadata = {
  title: "Physical Therapy Blog | Vital Flow PT Warminster",
  description: "Read the latest insights on pelvic floor, orthopedic, and vestibular physical therapy from Dr. Palak Mulji.",
  alternates: { canonical: "https://vitalflowpt.com/blog" }
};

export default function BlogIndexPage() {
  const posts = [
    {
      title: "What Causes Vertigo and How Is It Treated?",
      excerpt: "BPPV is the most common cause of vertigo, and it is also one of the most treatable conditions in physical therapy. Learn what happens inside your inner ear and how a 15-minute repositioning maneuver can resolve it.",
      slug: "what-causes-vertigo-bppv-treatment",
      date: "May 10, 2026",
      category: "Vestibular"
    },
    {
      title: "Pelvic Floor Recovery After C-Section: What Your OB May Not Have Told You",
      excerpt: "A C-section is major abdominal surgery, and your pelvic floor is affected by pregnancy regardless of how you deliver. Here is why targeted rehabilitation matters and when to start.",
      slug: "pelvic-floor-exercises-after-c-section",
      date: "May 3, 2026",
      category: "Pelvic Floor"
    },
    {
      title: "5 Signs You Might Need Vestibular Physical Therapy",
      excerpt: "Dizziness is one of the most common and most misunderstood symptoms. Here are five signs that your balance problems may be vestibular in origin and that a specialized evaluation could help.",
      slug: "signs-you-need-vestibular-therapy",
      date: "April 28, 2026",
      category: "Vestibular"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-bg relative border-b border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-primaryDark mb-6 leading-tight">
              The Vital Flow Blog
            </h1>
            <p className="text-lg md:text-xl text-brand-textSecondary leading-relaxed max-w-2xl mx-auto">
              Insights, exercises, and advice on holistic physical therapy, movement health, and living pain-free.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col border-brand-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-brand-primary tracking-wider uppercase">{post.category}</span>
                    <span className="text-xs text-brand-textMuted">{post.date}</span>
                  </div>
                  <CardTitle className="font-heading text-xl text-brand-primaryDark leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-brand-textSecondary mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-primary hover:text-brand-primaryDark transition-colors inline-flex items-center gap-1">
                    Read Article &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
