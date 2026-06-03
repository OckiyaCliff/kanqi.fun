import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

import PageHero from "../PageHero";
import Button from "../Button";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const openRoles = [
  {
    id: "role-1",
    title: "Lead Game Systems Designer",
    type: "Full-Time",
    location: "Bayelsa, Nigeria / Hybrid",
    description:
      "We are looking for an experienced Systems Designer to define core mechanics, player progression, and sandbox loops for our flagship project 'Incident of 95'. You will collaborate closely with artists and writers to translate cultural lore into interactive gameplay systems.",
  },
  {
    id: "role-2",
    title: "Senior 3D Generalist / Animator",
    type: "Full-Time",
    location: "Remote (Global)",
    description:
      "Join our creative team to model, texturize, and animate characters and environments. Experience in stylised realism, Unreal Engine 5 integration, and character performance capture pipeline is highly preferred.",
  },
  {
    id: "role-3",
    title: "Narrative Designer & Screenwriter",
    type: "Contract / Project-based",
    location: "Bayelsa, Nigeria / Hybrid",
    description:
      "Looking for a writer to expand the lore of our upcoming IPs, draft cinematic scripts, and write in-game dialogue. A deep understanding of West African myths, history, and contemporary culture is essential.",
  },
];

const RoleAccordion = ({ role, index, activeId, setActiveId }) => {
  const contentRef = useRef(null);
  const isOpen = activeId === role.id;

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10 py-6">
      <button
        onClick={() => setActiveId(isOpen ? null : role.id)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <div>
          <span className="font-general text-xs text-violet-300 mr-4">
            {role.type}
          </span>
          <span className="font-general text-xs text-white/50">
            {role.location}
          </span>
          <h3 className="mt-2 font-circular-web text-xl font-semibold text-white hover:text-violet-300 transition-colors">
            {role.title}
          </h3>
        </div>
        <div className="relative flex size-8 items-center justify-center rounded-full border border-white/20 text-white">
          <span
            className={`absolute h-[2px] w-3 bg-white transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-90"}`}
          />
          <span className="h-3 w-[2px] bg-white" style={{ display: isOpen ? "none" : "block" }} />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="pt-4 font-circular-web text-sm text-blue-50/70 leading-relaxed">
          <p className="mb-6">{role.description}</p>
          <Button
            id={`apply-${role.id}`}
            title="Apply for this role"
            containerClass="bg-white text-black text-xs px-4 py-2 hover:bg-violet-300 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

const CareersPage = () => {
  const [activeId, setActiveId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "", portfolio: "", why: "" });
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Culture block parallax scroll effect
      gsap.fromTo(
        imageRef.current,
        { y: -30 },
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".culture-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Stagger open roles headers
      gsap.from(".roles-container > *", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".roles-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.role) {
      setSubmitted(true);
      setFormData({ name: "", email: "", role: "", portfolio: "", why: "" });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="J<b>o</b>in Us"
        subtitle="Careers at kanQi"
        containerClass="min-h-[60vh]"
      />

      {/* Culture Section */}
      <section className="culture-section py-24 bg-black">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
                Our Philosophy
              </p>
              <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl mb-6">
                Cinema + Code + Culture
              </h2>
              <p className="font-circular-web text-lg text-blue-50/70 leading-relaxed mb-6">
                kanQi Studios is not just a workplace. It's an incubation hub for African
                lore, cutting-edge game tech, and high-fidelity filmmaking. We believe that
                the stories we carry in our bones are meant to be built into worlds you can walk through.
              </p>
              <p className="font-circular-web text-blue-50/60 leading-relaxed">
                We are a flat, highly collaborative team. We value emotional intelligence, technical
                curiosity, and the courage to make art that does not seek permission.
              </p>
            </div>

            {/* Parallax Image container */}
            <div className="relative h-[50vh] overflow-hidden rounded-lg border border-white/10">
              <img
                ref={imageRef}
                src="/img/entrance.webp"
                alt="kanQi culture"
                className="absolute inset-0 size-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="roles-section bg-[#0f0f11] py-32 border-y border-white/5">
        <div className="container mx-auto px-5 md:px-10">
          <div className="mb-16">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Open Positions
            </p>
            <h2 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
              Build With Us
            </h2>
          </div>

          <div className="roles-container max-w-4xl">
            {openRoles.map((role, idx) => (
              <RoleAccordion
                key={role.id}
                role={role}
                index={idx}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* General Application Section */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-5 md:px-10 max-w-3xl">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="pitch yourse<b>l</b>f"
              containerClass="mb-4 text-center"
            />
            <p className="font-circular-web text-blue-50/70">
              Don't see a role that fits but still believe you belong at kanQi? Pitch us.
              Tell us what you want to build and why you.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-md bg-violet-300/20 border border-violet-300/30 p-6 text-violet-300 font-circular-web text-center">
              Application submitted successfully! Our recruiting team will review your profile and reach out if there's a match.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-circular-web">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-general text-[10px] uppercase text-white/50">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                  />
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-general text-[10px] uppercase text-white/50">Role of Interest</label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="rounded-md border border-white/10 bg-[#0f0f11] px-4 py-3 font-general text-xs uppercase tracking-wider text-white/80 focus:border-violet-300 focus:outline-none"
                  >
                    <option value="">Select a role...</option>
                    <option value="lead-designer">Lead Game Systems Designer</option>
                    <option value="3d-generalist">Senior 3D Generalist</option>
                    <option value="narrative-designer">Narrative Designer</option>
                    <option value="other">Other / Custom Pitch</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-general text-[10px] uppercase text-white/50">Portfolio Link</label>
                  <input
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-general text-[10px] uppercase text-white/50">Why kanQi?</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us what excites you about building new universes with us."
                  value={formData.why}
                  onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/20 focus:border-violet-300 focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  id="submit-app-btn"
                  title="Submit Application"
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

export default CareersPage;
