import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Animation",
    desc: "",
    badges: ["2D Animation", "3D Animation", "Character Animation", "Storyboarding", "Animatics", "Visual Development", "Post-Production"],
  },
  {
    title: "Game Development",
    desc: "",
    badges: ["Game Design", "Gameplay Development", "Narrative Design", "3D Development", "Unreal Engine Development", "Prototyping", "Production Support"],
  },
  {
    title: "Original IP & Storytelling",
    desc: "We develop original worlds, characters and stories for animation, games and other forms of media.",
    badges: [],
  },
  {
    title: "Creative Collaboration",
    desc: "We work with creators, studios and organisations to support projects across different stages of development.",
    badges: [],
  },
  {
    title: "Education & Talent Development",
    desc: "We are interested in developing the next generation of African creative professionals through mentorship, training and eventually dedicated creative education initiatives.",
    badges: [],
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Services reveal
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      
      gsap.from(".badge-item", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".services-section",
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
        title="What We D<b>o</b>"
        subtitle="Our Services"
        containerClass="min-h-[60vh]"
      />

      <section className="services-section py-32 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-20 text-center">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Capabilities
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              Our Services
            </h2>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {services.map((s, idx) => (
              <BentoTilt
                key={idx}
                className="service-card border-hsla rounded-md p-8 bg-[#0f0f11] hover:border-violet-300/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="flex-shrink-0 size-12 rounded-full bg-violet-300 flex items-center justify-center font-zentry text-black text-2xl font-black">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="special-font font-zentry text-2xl font-black uppercase text-white mt-2 mb-4">
                      {s.title}
                    </h3>
                    {s.desc && (
                      <p className="font-circular-web text-sm text-blue-50/80 leading-relaxed mb-4 max-w-2xl">
                        {s.desc}
                      </p>
                    )}
                    {s.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {s.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="badge-item px-3 py-1 bg-white/10 border border-white/20 rounded-full font-general text-[10px] uppercase tracking-wider text-blue-100"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </BentoTilt>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
