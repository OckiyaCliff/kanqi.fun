import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Create",
    desc: "Original animation, games and stories.",
  },
  {
    title: "Develop",
    desc: "People, skills and creative capabilities.",
  },
  {
    title: "Connect",
    desc: "African creators with global audiences and collaborators.",
  },
];

const ecosystemSteps = [
  "STUDIO",
  "ORIGINAL IP",
  "TALENT DEVELOPMENT",
  "EDUCATION",
  "INTERNATIONAL COLLABORATION",
  "GLOBAL DISTRIBUTION",
];

const MissionPage = () => {
  const containerRef = useRef(null);
  const flowchartRef = useRef(null);
  const lineRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Mission pillars reveal
      gsap.from(".pillar-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax scroll effect
      gsap.fromTo(
        imageRef.current,
        { y: -30 },
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Flowchart scrolling line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: flowchartRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      // Flowchart nodes reveal
      gsap.from(".flowchart-node", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: flowchartRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="Our Missi<b>o</b>n"
        subtitle="Why We Build"
        containerClass="min-h-[60vh]"
      />

      {/* Mission Section */}
      <section className="mission-section py-32 bg-black border-b border-white/5">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-6">
            The Mission
          </p>
          <div className="max-w-4xl mx-auto mb-20">
            <p className="font-circular-web text-2xl md:text-4xl font-light leading-relaxed text-blue-50/90">
              To create meaningful stories and creative experiences that entertain, educate and leave lasting impressions, while creating opportunities for the people who bring them to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, idx) => (
              <BentoTilt
                key={idx}
                className="pillar-card border-hsla rounded-md p-8 bg-[#0f0f11] hover:border-violet-300/40 transition-colors"
              >
                <span className="font-general text-[10px] uppercase text-violet-300 tracking-wider mb-4 block">
                  0{idx + 1} / PILLAR
                </span>
                <h3 className="special-font font-zentry text-3xl font-black uppercase text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="font-circular-web text-sm text-blue-50/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </BentoTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="parallax-section py-24 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="relative h-[60vh] overflow-hidden rounded-lg border border-white/10 max-w-5xl mx-auto">
            <img
              ref={imageRef}
              src="/img/entrance.webp"
              alt="KanQi Vision"
              className="absolute inset-0 size-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Vision & Ecosystem Section */}
      <section ref={flowchartRef} className="vision-section py-32 bg-[#0f0f11]">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <div className="max-w-4xl mx-auto mb-24">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-6">
              The Vision
            </p>
            <h2 className="font-circular-web text-2xl md:text-4xl font-light leading-relaxed text-blue-50/90">
              To become one of Africa's leading creative production companies, developing globally recognised stories, intellectual properties and creative talent.
            </h2>
          </div>

          <div className="text-center mb-16">
            <h3 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              The KanQi Ecosystem
            </h3>
          </div>

          {/* Flowchart Sequence */}
          <div className="relative mx-auto max-w-2xl py-10">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10 hidden md:block">
              <div
                ref={lineRef}
                className="h-full w-full bg-violet-300 origin-top"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            <div className="flex flex-col gap-12 relative z-10">
              {ecosystemSteps.map((step, idx) => (
                <div key={idx} className="flowchart-node flex justify-center">
                  <div className="px-8 py-4 bg-black border border-violet-300/40 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(87,36,255,0.2)]">
                    <span className="font-general text-sm md:text-base font-bold uppercase tracking-widest text-white">
                      {step}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
