import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";
import Button from "../Button";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const ipProjects = [
  {
    id: "the-vessel",
    title: "The Vessel",
    logline:
      "An action-adventure RPG combining exploration, combat, narrative and a distinctive world designed to deliver a memorable interactive experience.",
    medium: ["Game"],
    status: "In Development",
    image: "/img/gallery-1.webp",
    details:
      "Role: Original IP / Game Development · Engine: Unreal Engine 5 · Stage: Vertical Slice Development",
  },
  {
    id: "incident-of-95",
    title: "Incident of '95",
    logline:
      "An animated production currently being developed by KanQi Studios.",
    medium: ["Animation"],
    status: "In Production",
    image: "/img/gallery-2.webp",
  },
  {
    id: "the-needful",
    title: "The Needful",
    logline:
      "An animated project in the early stages of development at KanQi Studios.",
    medium: ["Animation"],
    status: "Pre-Production",
    image: "/img/gallery-3.webp",
  },
];

const statusColors = {
  "Pre-Production": "bg-yellow-300 text-black",
  "In Production": "bg-violet-300 text-white",
  "In Development": "bg-blue-500 text-white",
  Released: "bg-green-500 text-white",
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      });
    },
    { scope: cardRef }
  );

  return (
    <BentoTilt className="border-hsla group relative overflow-hidden rounded-md transition-transform duration-300 ease-out">
      <div ref={cardRef} className="relative h-[50vh] w-full">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 flex size-full flex-col justify-between p-6">
          {/* Status badge + Medium tags */}
          <div className="flex items-start justify-between">
            <span
              className={`rounded-full px-3 py-1 font-general text-[10px] uppercase ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
            <div className="flex gap-2">
              {project.medium.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-white/30 px-3 py-1 font-general text-[10px] uppercase text-white/70"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Title + Logline + Details */}
          <div>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              {project.title}
            </h2>
            <p className="mt-2 max-w-md font-circular-web text-sm text-white/70 md:text-base">
              {project.logline}
            </p>
            {project.details && (
              <p className="mt-2 max-w-md font-general text-[10px] uppercase tracking-wider text-white/40">
                {project.details}
              </p>
            )}
          </div>
        </div>
      </div>
    </BentoTilt>
  );
};

const WorkPage = () => {
  return (
    <div className="min-h-screen w-screen bg-black">
      <PageHero
        title="Our W<b>o</b>rk"
        subtitle="Portfolio"
        containerClass="min-h-[70vh]"
      />

      <section className="container mx-auto px-5 pb-32 md:px-10">
        <div className="mb-16 max-w-xl">
          <p className="font-circular-web text-lg text-blue-50 opacity-50">
            Every project at KanQi is built with purpose — combining
            storytelling, design and technology to create meaningful experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {ipProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Client & Collaborative Work */}
      <section className="container mx-auto px-5 pb-16 md:px-10">
        <div className="mb-8">
          <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">Client Work</p>
          <h2 className="special-font font-zentry text-2xl font-black uppercase text-white md:text-4xl">Client & Collaborative Work</h2>
        </div>
        <div className="border-hsla rounded-md p-8 bg-[#0f0f11]">
          <h3 className="font-circular-web text-lg text-white mb-2">Animation Project — United States</h3>
          <p className="font-circular-web text-sm text-blue-50/60">Completed animation production for an independent international creator.</p>
          <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 font-general text-[10px] uppercase text-white/50">Project completed. Publication pending.</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center bg-black px-5 pb-32">
        <AnimatedTitle
          title="every pr<b>o</b>ject <br /> tells a st<b>o</b>ry"
          containerClass="mt-5 text-center"
        />
        <p className="mt-6 max-w-md text-center font-circular-web text-blue-50 opacity-50">
          Interested in working with KanQi Studios? We're always open to new
          collaborations.
        </p>
        <Link to="/contact" className="mt-8">
          <Button
            id="projects-cta"
            title="Get in touch"
            containerClass="cursor-pointer"
          />
        </Link>
      </section>
    </div>
  );
};

export default WorkPage;
