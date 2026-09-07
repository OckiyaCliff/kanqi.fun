import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Storytelling",
    desc: "Stories can preserve culture, communicate ideas and connect people.",
  },
  {
    title: "Innovation",
    desc: "We combine creativity and technology to explore new ways of telling stories.",
  },
  {
    title: "Impact",
    desc: "We want our work to stay with people long after they experience it.",
  },
  {
    title: "Education",
    desc: "We believe creative industries can create knowledge, careers and opportunities for the next generation.",
  },
];

const stats = [
  { label: "2022", text: "Founded" },
  { label: "2024", text: "Formally Registered" },
  { label: "3+", text: "Original Projects" },
  { label: "30+", text: "Creative Network" },
  { label: "2+", text: "Countries Reached" },
  { label: "4+", text: "Years Building" },
];

const AboutPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Manifesto text fade in
      gsap.from(".manifesto-text p", {
        opacity: 0.1,
        stagger: 0.1,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".manifesto-section",
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // Values reveal
      gsap.from(".value-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats reveal
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="Ab<b>o</b>ut Us"
        subtitle="Our Story"
        containerClass="min-h-[60vh]"
      />

      {/* Manifesto Section */}
      <section className="manifesto-section py-32 bg-black flex items-center justify-center border-b border-white/5">
        <div className="container mx-auto px-5 md:px-10 max-w-4xl text-center">
          <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-6">
            Who We Are
          </p>
          <div className="manifesto-text font-circular-web text-2xl md:text-4xl font-light leading-relaxed text-blue-50/90 flex flex-col gap-6">
            <p>We are storytellers, creators and builders.</p>
            <p>KanQi Studios is a Nigerian creative studio working across animation, games, storytelling and creative education.</p>
            <p>Founded in 2022 and formally registered in 2024, KanQi was created around a simple belief: Creative work should do more than entertain. It should mean something.</p>
            <p>We develop original stories and experiences while collaborating with creators, studios and organisations to bring ideas to life.</p>
            <p>Our work explores different worlds, cultures, ideas and human experiences. African stories and perspectives are an important part of our creative identity, but our ambition is global.</p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="values-section py-32 bg-black border-b border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-20 text-center">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Principles
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((v, idx) => (
              <BentoTilt
                key={idx}
                className="value-card border-hsla rounded-md p-8 bg-[#0f0f11] hover:border-violet-300/40 transition-colors"
              >
                <span className="font-general text-[10px] uppercase text-violet-300 tracking-wider">
                  0{idx + 1} / VALUE
                </span>
                <h3 className="special-font font-zentry text-2xl font-black uppercase text-white mt-4 mb-2">
                  {v.title}
                </h3>
                <p className="font-circular-web text-sm text-blue-50/60 leading-relaxed">
                  {v.desc}
                </p>
              </BentoTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-32 bg-[#0f0f11]">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-20 text-center">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Impact
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              KanQi By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="stat-item flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-md backdrop-blur-md"
              >
                <span className="special-font font-zentry text-4xl md:text-6xl font-black text-violet-300 mb-2">
                  {s.label}
                </span>
                <span className="font-general text-xs uppercase tracking-wider text-blue-50/70 text-center">
                  {s.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
