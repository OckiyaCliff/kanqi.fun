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
    id: "incident-of-95",
    title: "Incident of 95",
    logline:
      "A supernatural thriller set in 1995 Lagos — where forgotten history refuses to stay buried.",
    medium: ["Game", "Film"],
    status: "In Production",
    image: "/img/gallery-1.webp",
  },
  {
    id: "unnamed-world-2",
    title: "Project Ori",
    logline:
      "An Afrofuturist odyssey through fractured timelines and ancestral memory.",
    medium: ["Film"],
    status: "Concept",
    image: "/img/gallery-2.webp",
  },
  {
    id: "unnamed-world-3",
    title: "The Crossing",
    logline:
      "A coming-of-age story that unfolds across two continents and a hidden digital world.",
    medium: ["Film", "Book"],
    status: "Concept",
    image: "/img/gallery-3.webp",
  },
  {
    id: "unnamed-world-4",
    title: "Realm of Dust",
    logline:
      "An open-world action RPG where myth and modernity collide in a post-colonial landscape.",
    medium: ["Game"],
    status: "Concept",
    image: "/img/gallery-5.webp",
  },
];

const statusColors = {
  Concept: "bg-yellow-300 text-black",
  "In Production": "bg-violet-300 text-white",
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

          {/* Title + Logline */}
          <div>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              {project.title}
            </h2>
            <p className="mt-2 max-w-md font-circular-web text-sm text-white/70 md:text-base">
              {project.logline}
            </p>
          </div>
        </div>
      </div>
    </BentoTilt>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-screen bg-black">
      <PageHero
        title="Our W<b>o</b>rlds"
        subtitle="Original IPs"
        containerClass="min-h-[70vh]"
      />

      <section className="container mx-auto px-5 pb-32 md:px-10">
        <div className="mb-16 max-w-xl">
          <p className="font-circular-web text-lg text-blue-50 opacity-50">
            Every project at kanQi begins as a world — with its own rules,
            myths, and emotional gravity. These are the universes we are
            building.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {ipProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center bg-black px-5 pb-32">
        <AnimatedTitle
          title="every w<b>o</b>rld <br /> has a st<b>o</b>ry"
          containerClass="mt-5 text-center"
        />
        <p className="mt-6 max-w-md text-center font-circular-web text-blue-50 opacity-50">
          Want to collaborate on an IP? We're always looking for visionary
          storytellers, designers, and engineers.
        </p>
        <Link to="/careers" className="mt-8">
          <Button
            id="projects-cta"
            title="Join the team"
            containerClass="cursor-pointer"
          />
        </Link>
      </section>
    </div>
  );
};

export default ProjectsPage;
