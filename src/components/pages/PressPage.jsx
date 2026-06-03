import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";
import Button from "../Button";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const pressKits = [
  {
    title: "Brand Assets",
    size: "14.2 MB",
    type: "ZIP (PNG, SVG, Guideline)",
    desc: "Official vector logos, color codes, custom fonts, and brand identity documentation.",
  },
  {
    title: "Incident of 95 Press Kit",
    size: "45.8 MB",
    type: "ZIP (PDF, PNG, MP4)",
    desc: "Key art, character posters, screenshots, loglines, and game feature sheet.",
  },
  {
    title: "Studio Factsheet",
    size: "1.2 MB",
    type: "PDF",
    desc: "Founder bios, milestone timeline, company history, and media contact info.",
  },
];

const PressPage = () => {
  const [formData, setFormData] = useState({ name: "", publication: "", email: "", inquiry: "" });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Stagger reveal press kit cards
      gsap.from(".kit-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".kits-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Stagger reveal awards
      gsap.from(".award-row", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".awards-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.inquiry) {
      setSubmitted(true);
      setFormData({ name: "", publication: "", email: "", inquiry: "" });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="Pr<b>e</b>ss"
        subtitle="Media Resources"
        containerClass="min-h-[60vh]"
      />

      {/* Press Kits Section */}
      <section className="kits-section py-24 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-16">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Downloads
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              Media Kits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressKits.map((kit, idx) => (
              <BentoTilt
                key={idx}
                className="kit-card border-hsla bg-[#0f0f11] p-8 rounded-md flex flex-col justify-between hover:border-violet-300/40 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-general text-[10px] uppercase text-violet-300 tracking-wider">
                      {kit.type}
                    </span>
                    <span className="font-general text-[10px] text-white/40">
                      {kit.size}
                    </span>
                  </div>
                  <h3 className="special-font font-zentry text-2xl font-black uppercase text-white mb-3">
                    {kit.title}
                  </h3>
                  <p className="font-circular-web text-sm text-blue-50/60 leading-relaxed">
                    {kit.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <Button
                    id={`download-kit-${idx}`}
                    title="Download Kit"
                    containerClass="bg-white text-black hover:bg-violet-300 transition-colors w-full flex justify-center text-xs"
                  />
                </div>
              </BentoTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Selections Section */}
      <section className="awards-section bg-[#0f0f11] py-32 border-y border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-20">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Recognition
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              Awards & Festival Selections
            </h2>
          </div>

          <div className="border-t border-white/10 max-w-4xl">
            {[
              { year: "2025", event: "TIFF (Toronto International Film Festival)", category: "Official Selection — Short Cuts" },
              { year: "2025", event: "Durban International Film Festival", category: "Best African Animated Short" },
              { year: "2024", event: "AFRIFF (Africa International Film Festival)", category: "Outstanding Narrative Script" },
              { year: "2024", event: "Sundance Collab Lab", category: "Featured Project Incubation" },
            ].map((award, idx) => (
              <div
                key={idx}
                className="award-row border-b border-white/10 py-6 grid grid-cols-1 md:grid-cols-4 gap-4 font-circular-web"
              >
                <span className="font-general text-sm text-violet-300 md:col-span-1">
                  {award.year}
                </span>
                <span className="font-semibold text-white md:col-span-2">
                  {award.event}
                </span>
                <span className="text-blue-50/60 md:col-span-1 text-sm">
                  {award.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Inquiries Section */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-5 md:px-10 max-w-2xl">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="media inq<b>u</b>iries"
              containerClass="mb-4 text-center"
            />
            <p className="font-circular-web text-blue-50/70">
              For interview requests, review codes, or custom media packages, please get in touch using the form below or email us directly at{" "}
              <a href="mailto:press@kanqistudios.com" className="text-violet-300 hover:underline">
                press@kanqistudios.com
              </a>
              .
            </p>
          </div>

          {submitted ? (
            <div className="rounded-md bg-violet-300/20 border border-violet-300/30 p-6 text-violet-300 font-circular-web text-center">
              Thank you! Your media request has been sent. We will get back to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-circular-web">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-general text-[10px] uppercase text-white/50">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-general text-[10px] uppercase text-white/50">Publication / Outlet</label>
                  <input
                    type="text"
                    required
                    value={formData.publication}
                    onChange={(e) => setFormData({ ...formData, publication: e.target.value })}
                    className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-general text-[10px] uppercase text-white/50">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-general text-[10px] uppercase text-white/50">Inquiry Details</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Provide details about your publication, deadlines, and specific requirements."
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  id="submit-press-btn"
                  title="Send Inquiry"
                  leftIcon={<TiLocationArrow />}
                  containerClass="bg-yellow-300 flex-center gap-1 cursor-pointer font-bold uppercase"
                />
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default PressPage;
