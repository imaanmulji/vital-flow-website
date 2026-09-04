import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABlock from "@/components/shared/CTABlock";
import { ChevronLeft } from "lucide-react";

interface BlogPost {
  title: string;
  desc: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const posts: Record<string, BlogPost> = {
  "what-causes-vertigo-bppv-treatment": {
    title: "What Causes Vertigo and How Is It Treated?",
    desc: "BPPV is one of the most common causes of vertigo. Learn what happens inside your inner ear and how clinicians use the Epley maneuver to treat it.",
    category: "Vestibular",
    date: "May 10, 2026",
    readTime: "7 min read",
    content: (
      <>
        <p className="lead text-xl text-brand-textPrimary font-medium mb-8">
          You roll over in bed and the room starts spinning. Or you tilt your head back in the shower and suddenly grab for the wall. These episodes can be terrifying, especially the first time they happen. The good news is that the most common form of vertigo, called BPPV, is also one of the most treatable conditions in all of physical therapy.
        </p>

        <h2>Understanding BPPV: What Is Actually Happening Inside Your Ear</h2>
        <p>
          BPPV stands for Benign Paroxysmal Positional Vertigo. Let me break that down, because the name actually tells you a lot about the condition. &quot;Benign&quot; means it is not dangerous. &quot;Paroxysmal&quot; means it comes in sudden, brief episodes. &quot;Positional&quot; means it is triggered by specific head positions. And &quot;vertigo&quot; means the sensation that you or the room is spinning.
        </p>
        <p>
          Inside each of your inner ears, you have three semicircular canals filled with fluid. These canals detect rotational head movement and send that information to your brain so you can maintain balance. Near these canals sit tiny calcium carbonate crystals called otoconia (sometimes referred to as &quot;ear rocks&quot; or &quot;ear crystals&quot;). Normally, these crystals stay attached to a membrane in a part of the ear called the utricle. In BPPV, some of these crystals become dislodged and drift into one of the semicircular canals.
        </p>
        <p>
          Once the crystals are in the canal, they shift around every time you move your head, creating abnormal fluid movement. Your brain receives conflicting signals: your eyes say you are still, but your inner ear says you are spinning. That mismatch is what causes the intense spinning sensation.
        </p>
        <p>
          Research published in the journal <em>Otolaryngology, Head and Neck Surgery</em> estimates that BPPV accounts for roughly 17 to 42 percent of all vertigo cases seen in clinical settings, making it by far the most common peripheral vestibular disorder.
        </p>

        <h2>Who Gets BPPV and Why</h2>
        <p>
          BPPV can happen to anyone at any age, though it becomes significantly more common after age 50. Women are affected about twice as often as men, and researchers believe hormonal changes may play a role in weakening the membrane that holds the otoconia in place.
        </p>
        <p>
          Some common triggers and risk factors include:
        </p>
        <ul>
          <li>Head trauma or concussion (even a minor bump can dislodge crystals)</li>
          <li>Prolonged bed rest after surgery or illness</li>
          <li>Vitamin D deficiency, which has been linked to weaker otoconia attachment</li>
          <li>Inner ear infections or prior vestibular disorders</li>
          <li>Osteoporosis and osteopenia (the same calcium metabolism issues that affect bones may affect otoconia)</li>
        </ul>
        <p>
          In many cases, there is no clear cause at all. The crystals simply break free on their own. This is especially common in patients over 60, and I see it regularly in my practice here in Warminster.
        </p>

        <h2>How BPPV Is Diagnosed</h2>
        <p>
          Diagnosing BPPV requires a specific clinical test called the Dix-Hallpike maneuver. During this test, I guide the patient from a seated position to lying down with their head turned 45 degrees to one side and extended slightly over the edge of the table. If BPPV is present, this position will trigger a characteristic eye movement called nystagmus, where the eyes beat in a rotational pattern. I watch the direction, timing, and duration of the nystagmus closely because these details tell me exactly which canal is affected and which type of BPPV we are dealing with.
        </p>
        <p>
          The posterior canal is involved in about 80 to 90 percent of BPPV cases. The horizontal canal accounts for most of the remaining cases, and the anterior canal is rarely affected. Knowing which canal is involved determines which treatment maneuver I use.
        </p>

        <h2>The Epley Maneuver: How Treatment Works</h2>
        <p>
          The primary treatment for posterior canal BPPV is the Epley maneuver, also called the canalith repositioning procedure. It involves a series of specific head and body position changes that use gravity to guide the displaced crystals out of the semicircular canal and back toward the utricle, where they can be reabsorbed.
        </p>
        <p>
          A systematic review published in the <em>Cochrane Database of Systematic Reviews</em> supports the Epley maneuver as an effective treatment for posterior canal BPPV. Individual response varies, and some people need reassessment, a repeat maneuver, or a different approach based on which canal is involved.
        </p>
        <p>
          The procedure itself takes about 15 minutes and does not involve medication, imaging, or surgery. Afterward, I reassess symptoms and eye movements, explain what changed, and recommend next steps based on the individual response.
        </p>

        <h2>What About the Other Types of Vertigo?</h2>
        <p>
          BPPV is the most common cause, but vertigo can also result from vestibular neuritis (inflammation of the vestibular nerve, usually after a viral infection), Meniere&apos;s disease (a condition involving fluid buildup in the inner ear that causes episodes of vertigo along with hearing loss and tinnitus), vestibular migraine, or central causes related to the brain and brainstem.
        </p>
        <p>
          Each of these conditions requires a different treatment approach. A thorough vestibular evaluation can identify which type of vertigo you have and guide treatment appropriately. This is why a &quot;wait and see&quot; approach to vertigo often does more harm than good. The sooner the cause is identified, the sooner targeted treatment can begin.
        </p>

        <h2>When to Seek Help</h2>
        <p>
          If you are experiencing vertigo that comes on with position changes, especially rolling over in bed, looking up, or bending forward, there is a strong chance it is BPPV. You do not need a referral to see a physical therapist in Pennsylvania thanks to direct access laws. A single evaluation can often confirm the diagnosis and begin treatment in the same visit.
        </p>
        <p>
          If you are in the Warminster, Doylestown, or surrounding Bucks County area and are dealing with vertigo, dizziness, or balance problems, I would be glad to help you figure out what is going on and get you back to feeling steady.
        </p>
      </>
    )
  },
  "pelvic-floor-exercises-after-c-section": {
    title: "Pelvic Floor Recovery After C-Section: What Your OB May Not Have Told You",
    desc: "A C-section is major abdominal surgery. Here is why pelvic floor therapy is critical for postpartum recovery and when to start.",
    category: "Pelvic Floor",
    date: "May 3, 2026",
    readTime: "8 min read",
    content: (
      <>
        <p className="lead text-xl text-brand-textPrimary font-medium mb-8">
          There is a common misconception that because a cesarean delivery does not involve vaginal birth, the pelvic floor is unaffected. In my experience treating postpartum patients across Bucks County for over 25 years, this could not be further from the truth. If you had a C-section, your pelvic floor still needs attention, and understanding why can make a real difference in your recovery.
        </p>

        <h2>Why Your Pelvic Floor Is Affected Even Without Vaginal Delivery</h2>
        <p>
          The pelvic floor is a group of muscles, ligaments, and connective tissue that forms a hammock-like structure at the base of the pelvis. These muscles support the bladder, uterus, and rectum. They also play a critical role in core stability, continence, and sexual function.
        </p>
        <p>
          During pregnancy, your pelvic floor bears the increasing weight of the growing uterus for nine months. The hormone relaxin, which peaks during the third trimester, softens ligaments and connective tissue throughout the body to prepare for delivery. These changes affect the pelvic floor regardless of how the baby is ultimately delivered.
        </p>
        <p>
          A 2018 study published in <em>BJOG: An International Journal of Obstetrics and Gynaecology</em> found that 45 percent of women who had cesarean deliveries reported pelvic floor symptoms (including urinary leakage and pelvic pressure) at 12 months postpartum. That number is lower than the rate for vaginal deliveries, but it is far from zero.
        </p>

        <h2>The C-Section and Your Core: What Actually Gets Cut</h2>
        <p>
          During a cesarean delivery, the surgeon cuts through multiple layers of tissue: the skin, the subcutaneous fat layer, the fascia (the tough connective tissue envelope that wraps around your abdominal muscles), and the peritoneum (the lining of the abdominal cavity). The rectus abdominis muscles are typically separated along the midline rather than cut. The uterus is then incised, and the baby is delivered.
        </p>
        <p>
          All of these layers are then sutured or stapled closed. As they heal, scar tissue forms. This scar tissue can adhere to underlying structures, restrict the normal sliding and gliding of tissue layers against each other, and create areas of tightness or pulling that affect how your entire core system functions.
        </p>
        <p>
          The core is not just your &quot;six-pack&quot; muscles. It is a pressure management system made up of four components working together: the diaphragm on top, the pelvic floor on the bottom, the transversus abdominis wrapping around the sides, and the multifidus muscles along the spine. A C-section disrupts the front wall of this system. When one part is compromised, the other parts have to compensate, and that compensation often shows up as pelvic floor dysfunction.
        </p>

        <h2>Common Postpartum Symptoms After C-Section</h2>
        <p>
          Many of my C-section patients come to me with some combination of the following:
        </p>
        <ul>
          <li>Urinary leakage when coughing, sneezing, laughing, or exercising</li>
          <li>A feeling of heaviness or pressure in the pelvis</li>
          <li>Difficulty activating their deep core muscles (they describe feeling &quot;disconnected&quot; from their abs)</li>
          <li>Low back pain that started during pregnancy and never resolved</li>
          <li>Pain or sensitivity around the C-section scar, sometimes years later</li>
          <li>Diastasis recti (a separation of the rectus abdominis muscles along the midline)</li>
          <li>Pain during intercourse</li>
        </ul>
        <p>
          These symptoms are common, but they are not normal. They are signs that the core and pelvic floor system is not functioning optimally, and they respond well to targeted rehabilitation.
        </p>

        <h2>When to Start Pelvic Floor Therapy After a C-Section</h2>
        <p>
          The American College of Obstetricians and Gynecologists (ACOG) recommends that all women have a postpartum visit within 12 weeks of delivery. In many countries, including France and the Netherlands, postpartum pelvic floor assessment with a physiotherapist is standard care for every mother, regardless of delivery type.
        </p>
        <p>
          I generally recommend scheduling a pelvic floor assessment around 6 to 8 weeks postpartum, once your OB has cleared you for activity. However, there are things we can begin working on even earlier, including diaphragmatic breathing, gentle pelvic floor awareness exercises, and scar desensitization once the incision has fully closed (usually around 6 weeks).
        </p>

        <h2>What Pelvic Floor Therapy Looks Like After a C-Section</h2>
        <p>
          A postpartum pelvic floor evaluation starts with a detailed history of your pregnancy, delivery, and current symptoms. I assess your posture, breathing mechanics, core muscle activation, and the mobility and sensitivity of your C-section scar. Depending on your comfort level and symptoms, an internal pelvic floor assessment may also be performed to evaluate muscle tone, strength, and coordination.
        </p>
        <p>
          Treatment typically includes:
        </p>
        <ul>
          <li>Scar tissue mobilization to restore tissue gliding and reduce adhesions</li>
          <li>Diaphragmatic breathing retraining to restore the pressure coordination between your diaphragm and pelvic floor</li>
          <li>Progressive core strengthening that starts with deep stabilizers (transversus abdominis, pelvic floor) and gradually builds toward functional movements</li>
          <li>Diastasis recti management if a separation is present</li>
          <li>Guidance on safe return to exercise, lifting, and daily activities</li>
        </ul>
        <p>
          Recovery after a C-section is different for every person. We review your progress as care continues and adapt your plan to help you feel strong, confident, and connected to your body again while meeting the demands of caring for a new baby.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          A C-section is a major abdominal surgery. Your body needs and deserves rehabilitation afterward, just as it would after a knee replacement or a rotator cuff repair. If you are experiencing any of the symptoms I described above, or if you simply want to make sure your core and pelvic floor are recovering well, pelvic floor physical therapy can help. You do not need a referral in Pennsylvania, and you can reach out anytime to schedule an evaluation at our Warminster clinic.
        </p>
      </>
    )
  },
  "signs-you-need-vestibular-therapy": {
    title: "5 Signs You Might Need Vestibular Physical Therapy",
    desc: "Feeling dizzy or off-balance? It might be your inner ear. Here are five signs that a vestibular evaluation could help.",
    category: "Vestibular",
    date: "April 28, 2026",
    readTime: "6 min read",
    content: (
      <>
        <p className="lead text-xl text-brand-textPrimary font-medium mb-8">
          Dizziness is one of the most common reasons people visit their doctor, yet it is also one of the most frequently misunderstood symptoms. Many patients I see have been told their dizziness is caused by anxiety, dehydration, or aging. While those factors can certainly contribute, the vestibular system (your inner ear balance organs) is the culprit far more often than most people realize. Here are five signs that your dizziness may be vestibular in origin and that a specialized evaluation could help.
        </p>

        <h2>1. The Room Spins When You Change Head Position</h2>
        <p>
          If you experience a brief but intense spinning sensation when you roll over in bed, look up at a high shelf, or tip your head back to rinse your hair in the shower, this is the hallmark pattern of BPPV (benign paroxysmal positional vertigo). BPPV occurs when tiny calcium crystals in the inner ear become displaced into one of the semicircular canals. The spinning typically lasts less than a minute and then fades, but it can be severe enough to cause nausea.
        </p>
        <p>
          A trained vestibular therapist can evaluate BPPV in the office using positional testing and may use a repositioning maneuver as part of treatment. Your response can depend on which canal is involved, whether symptoms return, and other health factors, so follow-up testing or additional care may be appropriate. An individualized evaluation can help determine the right next step for your symptoms.
        </p>

        <h2>2. You Feel Unsteady Walking, Especially in Dim Lighting or on Uneven Ground</h2>
        <p>
          Your brain relies on three systems to maintain balance: your vision, your vestibular system, and the sensory receptors in your joints and muscles (called proprioception). When one of these systems is compromised, the other two can usually compensate. This is why balance problems often become most noticeable in situations where one of the backup systems is limited.
        </p>
        <p>
          Walking in a dimly lit hallway reduces visual input. Walking on uneven ground like gravel, grass, or sand challenges proprioception. If you feel unsteady in these situations, it may be because your vestibular system is not providing the reliable baseline input your brain needs.
        </p>
        <p>
          Vestibular rehabilitation therapy (VRT) can retrain your brain to rely more effectively on the input it does receive and to compensate for any vestibular deficit. A 2015 Cochrane Review found moderate to strong evidence that VRT is safe and effective for reducing symptoms and improving function in patients with unilateral vestibular hypofunction.
        </p>

        <h2>3. You Had a Virus and the Dizziness Never Fully Went Away</h2>
        <p>
          Vestibular neuritis is an inflammation of the vestibular nerve, usually triggered by a viral infection. The initial episode can be dramatic: severe vertigo lasting hours to days, nausea, vomiting, and difficulty walking. Most people recover from the acute phase within one to two weeks, but many are left with a lingering sense of imbalance, brain fog, or motion sensitivity that persists for weeks or months afterward.
        </p>
        <p>
          This happens because the inflammation damages the vestibular nerve on one side, and the brain has to recalibrate to account for the asymmetric input. Vestibular physical therapy accelerates this central compensation process through specific gaze stabilization exercises, habituation exercises, and balance training. Without therapy, the brain can sometimes develop maladaptive compensatory strategies (like avoiding head movements or becoming overly reliant on vision) that actually prolong symptoms.
        </p>

        <h2>4. Scrolling on Your Phone or Watching Fast-Moving Video Makes You Feel Off</h2>
        <p>
          This symptom is called visual motion sensitivity, and it is a common sign of vestibular dysfunction that patients often do not connect to their inner ears. When the vestibular system is not processing motion information correctly, the brain becomes more dependent on visual input. This means that visual stimuli that simulate movement (like scrolling, busy patterns, grocery store aisles, or action movies) can trigger a feeling of disorientation, nausea, or vague dizziness.
        </p>
        <p>
          In therapy, we address this with a combination of habituation exercises (controlled, repeated exposure to the triggering visual stimuli) and vestibular rehabilitation exercises that help the brain rely less on vision and more on accurate vestibular input. Progress varies, so the plan is adjusted according to your symptoms, tolerance, and goals.
        </p>

        <h2>5. You Have Started Avoiding Activities Because of Dizziness or Fear of Falling</h2>
        <p>
          This is perhaps the most important sign on this list, because it speaks to how vestibular dysfunction affects quality of life. I have had patients who stopped driving, stopped going to the grocery store, or stopped exercising because of dizziness or a fear of falling. That kind of activity avoidance can quickly lead to deconditioning, social isolation, and depression.
        </p>
        <p>
          Research from Johns Hopkins University has shown that even mild vestibular dysfunction increases the risk of falls by 12-fold. And a study in <em>The Lancet</em> found that dizziness was associated with a significant increase in anxiety and depressive symptoms, independent of other health conditions.
        </p>
        <p>
          The vestibular system is remarkably responsive to rehabilitation. The brain has a tremendous capacity to adapt when given the right inputs, and vestibular therapy provides exactly that. If dizziness is limiting your life in any way, an evaluation is a worthwhile step.
        </p>

        <h2>What to Expect at a Vestibular Evaluation</h2>
        <p>
          A thorough vestibular evaluation takes about 60 minutes and includes a detailed history, oculomotor testing (watching your eye movements to assess the vestibular-ocular reflex), positional testing for BPPV, balance assessment, and gait analysis. As a Certified Vestibular Therapist through Emory University, I use these findings to identify which part of the vestibular system is affected and to design a treatment plan targeted to your specific diagnosis.
        </p>
        <p>
          If you are in the Warminster, Doylestown, or Bucks County area and are experiencing any of the symptoms described above, you can schedule an evaluation directly. No referral is needed in Pennsylvania.
        </p>
      </>
    )
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug];
  
  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: `${post.title} | Vital Flow PT`,
    description: post.desc,
    alternates: { canonical: `https://vitalflowpt.com/blog/${params.slug}` }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  
  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Palak Mulji",
      honorificSuffix: "PT, DPT",
      jobTitle: "Doctor of Physical Therapy"
    },
    publisher: {
      "@type": "Organization",
      name: "Vital Flow Physical Therapy"
    },
    datePublished: post.date,
    description: post.desc
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primaryDark transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-brand-primary tracking-wider uppercase">{post.category}</span>
            <span className="text-sm text-brand-textMuted">{post.date}</span>
            <span className="text-sm text-brand-textMuted">{post.readTime}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-brand-primaryDark leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary font-heading font-bold">PM</div>
            <div>
              <p className="text-sm font-semibold text-brand-textPrimary">Dr. Palak Mulji, PT, DPT</p>
              <p className="text-xs text-brand-textSecondary">Certified Vestibular Therapist &middot; 25+ Years Experience</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-headings:font-heading prose-headings:text-brand-primaryDark prose-a:text-brand-primary hover:prose-a:text-brand-primaryDark text-brand-textSecondary max-w-none">
          {post.content}
        </div>
      </article>

      <CTABlock />
    </div>
  );
}
