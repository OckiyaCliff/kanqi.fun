import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";
import Button from "../Button";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const devlogs = [
  {
    id: "log-1",
    date: "June 2026",
    title: "Reimagining 90s Lagos: Worldbuilding and Art Direction",
    category: "Art / Dev",
    summary:
      "A deep dive into our references, architecture research, and how we are using atmospheric lighting to capture the texture and mood of 1995 Lagos.",
  },
  {
    id: "log-2",
    date: "April 2026",
    title: "Building the Fear: Sound Design of the Unknown",
    category: "Audio",
    summary:
      "How dynamic audio layers, ambient street noises, and whispers are programmed to react to the player's choices and proximity to anomalous zones.",
  },
  {
    id: "log-3",
    date: "February 2026",
    title: "Proto-Systems: Designing Supernatural Clues",
    category: "Design",
    summary:
      "An overview of our investigative gameplay loop, examining physical objects, cassettes, and developing photos to solve historical riddles.",
  },
];

const GamesPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const featuredRef = useRef(null);
  const featuredImageRef = useRef(null);

  useGSAP(
    () => {
      // Pin and scale animation for the featured game container
      gsap.fromTo(
        featuredImageRef.current,
        { scale: 0.8, borderRadius: "24px" },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      // Fade-in animations for game details
      gsap.from(".game-details-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".game-details-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Stagger reveal devlog entries
      gsap.from(".devlog-item", {
        opacity: 0,
        x: -40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".devlog-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: featuredRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black text-blue-50">
      <PageHero
        title="G<b>a</b>mes"
        subtitle="Interactive Worlds"
        containerClass="min-h-[60vh]"
      />

      {/* Featured Game Section (Incident of 95) */}
      <section ref={featuredRef} className="relative w-full bg-black py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="mb-4 font-general text-xs uppercase tracking-widest text-violet-300">
            Flagship Project
          </p>
          <AnimatedTitle
            title="Incident of 95"
            containerClass="mb-10 text-left font-black uppercase text-white"
          />
        </div>

        {/* Cinematic Frame */}
        <div className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
          <div ref={featuredImageRef} className="relative size-full overflow-hidden">
            <video
              src="videos/feature-1.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95" />
          </div>
        </div>

        {/* Game Details Section */}
        <div className="game-details-section mx-auto mt-20 max-w-7xl px-5 md:px-10">
          <div className="game-details-content grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="special-font font-zentry text-3xl font-black uppercase text-white md:text-5xl">
                A Supernatural Thriller Set in 1995 Lagos
              </h3>
              <p className="mt-6 font-circular-web text-lg text-blue-50 opacity-60">
                You play as a freelance journalist investigating the unexplained
                disappearance of a close friend, leading you back to the old
                districts of Lagos. What starts as a standard missing persons case
                soon spirals into a nightmare of temporal anomalies, forgotten folklore,
                and secrets that power-brokers would kill to keep hidden.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="rounded-md border border-white/20 px-4 py-2 font-general text-xs uppercase tracking-wider text-white/80">
                  Genre: Psychological Horror / Investigation
                </span>
                <span className="rounded-md border border-white/20 px-4 py-2 font-general text-xs uppercase tracking-wider text-white/80">
                  Platform: PC / Next-Gen Consoles
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-violet-300/10 p-8 border border-white/5 backdrop-blur-md">
              <h4 className="font-general text-xs uppercase tracking-widest text-violet-300 mb-4">
                Lore Fragment
              </h4>
              <p className="font-circular-web text-sm italic text-blue-50/80 leading-relaxed">
                "The shadows here don't conform to the light. They belong to
                the soil. When the generators hum, and the neon lights flicker on
                Broad Street, count the silhouettes. If you find one extra, do
                not look back. Walk until you hear the waves."
              </p>
              <p className="mt-4 font-general text-[10px] uppercase text-white/40">
                — Recovered tape recording, Oct 12, 1995
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Devlog Section */}
      <section className="devlog-section bg-[#0f0f11] py-32 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-20">
            <p className="font-general text-xs uppercase tracking-widest text-violet-300 mb-3">
              Behind the Scenes
            </p>
            <h2 className="special-font font-zentry text-4xl font-black uppercase text-white md:text-6xl">
              Development Logs
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {devlogs.map((log) => (
              <div
                key={log.id}
                className="devlog-item group border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-general text-xs text-white/50">
                      {log.date}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 font-general text-[9px] uppercase tracking-wider text-violet-300">
                      {log.category}
                    </span>
                  </div>
                  <h3 className="font-circular-web text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {log.title}
                  </h3>
                  <p className="mt-2 font-circular-web text-sm text-blue-50/60">
                    {log.summary}
                  </p>
                </div>
                <Button
                  id={`read-devlog-${log.id}`}
                  title="Read More"
                  containerClass="bg-white text-black hover:bg-violet-300 transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-black py-32 text-center px-5">
        <div className="mx-auto max-w-xl">
          <AnimatedTitle
            title="be the f<b>i</b>rst <br /> to enter the l<b>o</b>re"
            containerClass="mb-6 text-center"
          />
          <p className="font-circular-web text-blue-50/70 mb-10">
            Subscribe to receive playtest invites, development updates, and exclusive
            digital relics from the world of Incident of 95.
          </p>

          {submitted ? (
            <div className="rounded-md bg-violet-300/20 border border-violet-300/30 p-6 text-violet-300 font-circular-web">
              Thank you! You have been added to the secure waitlist. Watch your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-80 rounded-md border border-white/20 bg-white/5 px-4 py-3 font-general text-xs uppercase tracking-wider text-white placeholder-white/30 focus:border-violet-300 focus:outline-none"
              />
              <Button
                id="join-waitlist-btn"
                title="Join Waitlist"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1 cursor-pointer font-bold uppercase"
              />
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default GamesPage;
