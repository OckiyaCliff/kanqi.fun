import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";

import PageHero from "../PageHero";
import Button from "../Button";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const inquiryTypes = [
  { id: "general", label: "General" },
  { id: "creators", label: "For Creators" },
  { id: "studios", label: "For Studios & Organisations" },
  { id: "investors", label: "For Investors & Publishers" },
  { id: "talent", label: "For Talent" },
];

const ContactPage = () => {
  const [inquiryType, setInquiryType] = useState("general");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Stagger reveal form inputs
      gsap.from(".form-element", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate contact details
      gsap.from(".info-block-item", {
        opacity: 0,
        x: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="Let's Cre<b>a</b>te"
        subtitle="Get in Touch"
        containerClass="min-h-[60vh]"
      />

      <section className="contact-form-section py-24 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Form Section */}
            <div className="lg:col-span-3">
              <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-4xl mb-8">
                Let's Create Something.
              </h2>

              {/* Inquiry Type Selectors */}
              <div className="form-element flex flex-wrap gap-3 mb-8">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInquiryType(type.id)}
                    className={clsx(
                      "rounded-full px-4 py-2 font-general text-[10px] uppercase tracking-wider transition-all border",
                      inquiryType === type.id
                        ? "bg-violet-300 border-violet-300 text-black font-bold"
                        : "border-white/20 text-white/70 hover:border-white/50"
                    )}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="rounded-md bg-violet-300/20 border border-violet-300/30 p-6 text-violet-300 font-circular-web">
                  Thank you! Your message has been sent. Our team will review your inquiry and respond shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-circular-web">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-element flex flex-col gap-2">
                      <label className="font-general text-[10px] uppercase text-white/50">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                      />
                    </div>
                    <div className="form-element flex flex-col gap-2">
                      <label className="font-general text-[10px] uppercase text-white/50">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="form-element flex flex-col gap-2">
                    <label className="font-general text-[10px] uppercase text-white/50">Subject</label>
                    <input
                      type="text"
                      placeholder="HOW CAN WE HELP?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                    />
                  </div>

                  <div className="form-element flex flex-col gap-2">
                    <label className="font-general text-[10px] uppercase text-white/50">Message</label>
                    <textarea
                      rows="6"
                      required
                      placeholder="WRITE YOUR MESSAGE HERE..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="form-element flex mt-4">
                    <Button
                      id="submit-contact-btn"
                      title="Send Message"
                      leftIcon={<TiLocationArrow />}
                      containerClass="bg-yellow-300 flex-center gap-1 cursor-pointer font-bold uppercase"
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="lg:col-span-2 flex flex-col gap-12 lg:pl-10">

              <div className="info-block-item">
                <h4 className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
                  Location
                </h4>
                <p className="font-circular-web text-lg text-white">
                  Nigeria
                </p>
              </div>

              <div className="info-block-item">
                <h4 className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
                  General Inquiries
                </h4>
                <a href="mailto:hello@kanqi.fun" className="font-circular-web text-lg text-white hover:text-violet-300 transition-colors">
                  hello@kanqi.fun
                </a>
              </div>

              <div className="info-block-item">
                <h4 className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
                  Socials
                </h4>
                <div className="flex flex-col gap-2 font-circular-web text-sm">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-50/70 hover:text-violet-300 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-blue-50/70 hover:text-violet-300 transition-colors">
                    Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-50/70 hover:text-violet-300 transition-colors">
                    Twitter / X
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-50/70 hover:text-violet-300 transition-colors">
                    YouTube
                  </a>
                </div>
              </div>

              <div className="info-block-item">
                <h4 className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
                  Website
                </h4>
                <a href="https://kanqi.fun" className="font-circular-web text-lg text-white hover:text-violet-300 transition-colors">
                  kanqi.fun
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-32 bg-[#0f0f11] border-t border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">Collaborate</p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "For Creators", desc: "Have a story, animation or game you'd like to develop?" },
              { title: "For Studios & Organisations", desc: "Looking for production or creative partners?" },
              { title: "For Investors & Publishers", desc: "Interested in our original projects and long-term vision?" },
              { title: "For Talent", desc: "Want to work with a growing African creative studio?" },
            ].map((item, idx) => (
              <div key={idx} className="border-hsla rounded-md p-8 bg-black hover:border-violet-300/40 transition-colors">
                <h3 className="special-font font-zentry text-xl font-black uppercase text-white mb-3">{item.title}</h3>
                <p className="font-circular-web text-sm text-blue-50/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="mailto:hello@kanqi.fun" className="font-circular-web text-lg text-violet-300 hover:text-yellow-300 transition-colors">hello@kanqi.fun</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
