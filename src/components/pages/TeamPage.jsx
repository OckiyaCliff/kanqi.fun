import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Ockiya Cliff Omiebi",
    role: "Founder & CEO",
    desc: "Leads KanQi's strategic direction, business development, production and creative vision.",
    initials: "OC",
  },
  {
    name: "Daniel Ndatah",
    role: "Technical Lead",
    desc: "Leads the studio's technical development and engineering activities.",
    initials: "DN",
  },
  {
    name: "Francis Igbiriki",
    role: "Business Development",
    desc: "Supports partnerships, business development and strategic growth.",
    initials: "FI",
  },
  {
    name: "Laszlo Turbok",
    role: "Post-Production & Quality Assurance",
    desc: "Focuses on post-production, quality control and delivery.",
    initials: "LT",
  },
  {
    name: "Nnamene K. Emmanuel",
    role: "Lead 2D Animator",
    desc: "Leads 2D animation development and contributes to visual storytelling and animation production.",
    initials: "NE",
  },
];

const TeamPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Team members stagger reveal
      gsap.from(".team-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Network text reveal
      gsap.from(".network-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".network-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="Our Te<b>a</b>m"
        subtitle="Meet the Team"
        containerClass="min-h-[60vh]"
      />

      {/* Team Section */}
      <section className="team-section py-32 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-20 text-center">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Leadership
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              The People
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <BentoTilt
                key={idx}
                className="team-card border-hsla rounded-md p-8 bg-white/5 backdrop-blur-md hover:border-violet-300/50 transition-colors flex flex-col items-center text-center"
              >
                <div className="size-20 rounded-full bg-violet-300 text-black flex items-center justify-center special-font font-zentry text-3xl font-black mb-6">
                  {member.initials}
                </div>
                <h3 className="font-circular-web text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-general text-xs uppercase tracking-wider text-violet-300 mb-4">
                  {member.role}
                </p>
                <p className="font-circular-web text-sm text-blue-50/70 leading-relaxed">
                  {member.desc}
                </p>
              </BentoTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Network Section */}
      <section className="network-section py-32 bg-[#0f0f11] border-t border-white/5">
        <div className="container mx-auto px-5 md:px-10 max-w-4xl text-center">
          <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-6">
            Our Network
          </p>
          <div className="network-text">
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl mb-8">
              Our Creative Network
            </h2>
            <p className="font-circular-web text-xl md:text-2xl font-light leading-relaxed text-blue-50/80">
              KanQi also works with a growing network of artists, developers, animators, designers and other creative professionals across different projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
