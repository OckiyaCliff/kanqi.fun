import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PageHero from "../PageHero";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  "Animation",
  "Game Development",
  "Digital Art",
  "Storytelling",
  "Creative Technology",
  "Production",
  "Entrepreneurship",
];

const pipelineSteps = [
  "Learn",
  "Build",
  "Collaborate",
  "Produce",
  "Enter the Industry",
];

const EducationPage = () => {
  const containerRef = useRef(null);
  const pipelineRef = useRef(null);

  useGSAP(
    () => {
      // Focus areas pill badges reveal
      gsap.from(".focus-badge", {
        opacity: 0,
        scale: 0.8,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".main-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Pipeline nodes reveal
      gsap.from(".pipeline-node", {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pipelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Pipeline connectors reveal
      gsap.from(".pipeline-connector", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pipelineRef.current,
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
        title="Educ<b>a</b>tion"
        subtitle="Building the Future"
        containerClass="min-h-[60vh]"
      />

      {/* Main Section */}
      <section className="main-section py-32 bg-black border-b border-white/5">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl mb-8">
              Building the Next Generation
            </h2>
            <p className="font-circular-web text-xl font-light leading-relaxed text-blue-50/90 mb-12">
              KanQi believes that Africa's creative potential is enormous, but talent needs access to the right opportunities, training and production environments. Our long-term ambition is to establish a specialised creative learning institution focused on areas such as:
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="focus-badge px-6 py-3 bg-[#0f0f11] border border-white/10 rounded-full font-general text-sm uppercase tracking-widest text-violet-300 hover:bg-white/5 hover:border-violet-300 transition-colors cursor-default"
                >
                  {area}
                </div>
              ))}
            </div>

            <p className="special-font font-zentry text-2xl font-bold uppercase text-white">
              The goal is not simply to teach theory.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section ref={pipelineRef} className="pipeline-section py-32 bg-[#0f0f11]">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <div className="mb-20">
            <h2 className="font-circular-web text-2xl md:text-3xl font-light leading-relaxed text-white">
              We want to create an environment where:
            </h2>
          </div>

          <div className="max-w-6xl mx-auto py-10 overflow-x-auto custom-scrollbar pb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 min-w-max md:min-w-0 px-4">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center">
                  <div className="pipeline-node size-32 md:size-40 rounded-full bg-black border-2 border-violet-300/30 flex items-center justify-center p-4 text-center shadow-[0_0_20px_rgba(87,36,255,0.15)] z-10">
                    <span className="font-general text-xs md:text-sm font-bold uppercase tracking-wider text-white">
                      {step}
                    </span>
                  </div>
                  
                  {idx < pipelineSteps.length - 1 && (
                    <>
                      {/* Vertical connector for mobile */}
                      <div className="h-8 w-[2px] bg-violet-300/30 md:hidden" />
                      
                      {/* Horizontal connector for desktop */}
                      <div className="pipeline-connector hidden md:block w-8 lg:w-16 h-[2px] bg-violet-300" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 max-w-3xl mx-auto">
            <p className="font-circular-web text-xl font-medium leading-relaxed text-blue-50/80 p-8 border-t border-b border-white/10">
              This could eventually become one of KanQi's biggest contributions to the African creative ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
