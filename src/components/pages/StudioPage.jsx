import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2022",
    title: "Founding & Conception",
    description:
      "kanQi Studios is established in Lagos, Nigeria by a collective of filmmakers, animators, and software developers, set on writing and building original African worlds.",
  },
  {
    year: "2023",
    title: "IP Incubation & First Shorts",
    description:
      "We incubated our first three intellectual properties and produced two award-winning animated shorts, showcasing them at Durban International Film Festival and Durban FilmMart.",
  },
  {
    year: "2024",
    title: "The Cinematic Expansion",
    description:
      "Pre-production began for 'Incident of 95'. Expanded the core studio to house a dedicated interactive games division, uniting real-time graphics and narrative scriptwriters under one roof.",
  },
  {
    year: "2025",
    title: "Building the Interactive Playground",
    description:
      "Released our first gameplay teasers. Partnered with regional culture archives to digitize historical records, serving as the foundational lore for our games.",
  },
  {
    year: "2026",
    title: "Now & Beyond",
    description:
      "With active development underway on multiple platforms, kanQi Studios continues to build cross-media universes that bring modern African mythologies to global players and viewers.",
  },
];

const values = [
  {
    title: "Deep Authenticity",
    desc: "Our worlds are built on rigorous research and personal truth. We do not dilute; we dig deeper into our roots.",
  },
  {
    title: "Uncompromising Quality",
    desc: "Whether it is a 3D pixel shader, a script outline, or a soundscape, we build for high-fidelity global stages.",
  },
  {
    title: "Cross-Medium Fluidity",
    desc: "We do not believe in single-format IPs. If we design a world, it lives as a film, a game, and a historical archive.",
  },
  {
    title: "Creative Sovereignty",
    desc: "We own our voice and our structures. We incubate and build original intellectual property from inception.",
  },
];

const StudioPage = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

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

      // Timeline scrolling progress bar
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      // Stagger animate timeline nodes
      gsap.from(".timeline-card", {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -40 : 40),
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
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
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="The Stu<b>d</b>io"
        subtitle="Our Story"
        containerClass="min-h-[60vh]"
      />

      {/* Manifesto Section */}
      <section className="manifesto-section py-32 bg-black flex items-center justify-center border-b border-white/5">
        <div className="container mx-auto px-5 md:px-10 max-w-4xl text-center">
          <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-6">
            Our Manifesto
          </p>
          <div className="manifesto-text font-circular-web text-2xl md:text-4xl font-light leading-relaxed text-blue-50/90 flex flex-col gap-6">
            <p>We believe that stories are not objects we observe, but gravity fields we inhabit.</p>
            <p>We build universes where African mythologies, historical realities, and speculative futures interact.</p>
            <p>Here, filmmakers and developers write code and scripts on the same whiteboard.</p>
            <p>We do not adapt for mediums; we grow realms across them.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-32 bg-[#0f0f11]">
        <div className="container mx-auto px-5 md:px-10">
          <div className="text-center mb-24">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Chronology
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              Our Journey
            </h2>
          </div>

          {/* Interactive Vertical Timeline */}
          <div className="relative mx-auto max-w-4xl">
            {/* The vertical tracking line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10 hidden md:block">
              <div
                ref={lineRef}
                className="h-full w-full bg-violet-300 origin-top"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            <div className="flex flex-col gap-16 md:gap-24">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className={`timeline-card relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-1/2 top-1/2 z-10 hidden size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300 bg-black md:flex">
                    <div className="size-2 rounded-full bg-violet-300" />
                  </div>

                  {/* Empty side for layout offset on desktop */}
                  <div className="w-full md:w-[45%]" />

                  {/* Content card */}
                  <div className="w-full md:w-[45%] rounded-md bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:border-violet-300 transition-colors duration-300">
                    <span className="font-general text-2xl font-black text-violet-300">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-circular-web text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-circular-web text-sm text-blue-50/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="values-section py-32 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-20 text-center">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Principles
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              Core Values
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
    </div>
  );
};

export default StudioPage;
