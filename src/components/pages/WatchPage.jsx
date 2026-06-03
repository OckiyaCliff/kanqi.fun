import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

import PageHero from "../PageHero";
import { BentoTilt } from "../Features";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const films = [
  {
    id: "film-1",
    title: "The Weight of Light",
    year: "2025",
    runtime: "18 min",
    type: "Short Film",
    festivals: ["TIFF", "Durban IFF"],
    thumbnail: "/img/gallery-4.webp",
    video: "videos/feature-1.mp4",
  },
  {
    id: "film-2",
    title: "Bridges",
    year: "2024",
    runtime: "12 min",
    type: "Short Film",
    festivals: ["AFRIFF", "Sundance Collab"],
    thumbnail: "/img/gallery-2.webp",
    video: "videos/feature-2.mp4",
  },
  {
    id: "film-3",
    title: "Dust & Signal",
    year: "2024",
    runtime: "22 min",
    type: "Short Film",
    festivals: ["Berlin Shorts", "Lagos Film Society"],
    thumbnail: "/img/gallery-3.webp",
    video: "videos/feature-3.mp4",
  },
];

const FeaturedFilm = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".featured-film-info", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container mx-auto px-5 pb-20 md:px-10">
      <BentoTilt className="border-hsla relative overflow-hidden rounded-md">
        <div className="relative h-[60vh] w-full md:h-[75vh]">
          <video
            src="videos/hero-1.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="featured-film-info absolute bottom-0 left-0 z-10 p-8 md:p-12">
            <span className="mb-3 inline-block rounded-full bg-violet-300 px-4 py-1 font-general text-[10px] uppercase text-white">
              Featured
            </span>
            <h2 className="special-font font-zentry text-4xl font-black uppercase text-white md:text-7xl">
              The We<b>i</b>ght of L<b>i</b>ght
            </h2>
            <p className="mt-3 max-w-lg font-circular-web text-white/60">
              A young woman in Lagos discovers that the memories she's been
              running from hold the key to the future she can't imagine.
            </p>
            <div className="mt-4 flex items-center gap-4 font-general text-[10px] uppercase text-white/50">
              <span>2025</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>18 min</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>Short Film</span>
            </div>
            <div className="mt-5">
              <Button
                id="watch-featured"
                title="Watch now"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1"
              />
            </div>
          </div>
        </div>
      </BentoTilt>
    </div>
  );
};

const FilmCard = ({ film, index }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.12,
      });
    },
    { scope: cardRef }
  );

  return (
    <BentoTilt className="border-hsla group overflow-hidden rounded-md transition-transform duration-300 ease-out">
      <div ref={cardRef} className="relative h-[40vh]">
        <img
          src={film.thumbnail}
          alt={film.title}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="relative z-10 flex size-full flex-col justify-end p-5">
          <h3 className="special-font font-zentry text-2xl font-black uppercase text-white md:text-3xl">
            {film.title}
          </h3>
          <div className="mt-2 flex items-center gap-3 font-general text-[10px] uppercase text-white/50">
            <span>{film.year}</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>{film.runtime}</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>{film.type}</span>
          </div>
          {film.festivals.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {film.festivals.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/20 px-3 py-1 font-general text-[9px] uppercase text-white/60"
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </BentoTilt>
  );
};

const WatchPage = () => {
  return (
    <div className="min-h-screen w-screen bg-black">
      <PageHero
        title="W<b>a</b>tch"
        subtitle="Films & Shorts"
        containerClass="min-h-[60vh]"
      />

      <section className="px-5 pb-10 md:px-10">
        <div className="container mx-auto mb-16 max-w-xl">
          <p className="font-circular-web text-lg text-blue-50 opacity-50">
            Our films are windows into the worlds we build. Each one is a
            standalone experience — crafted with intention, rooted in truth.
          </p>
        </div>
      </section>

      <FeaturedFilm />

      <section className="container mx-auto px-5 pb-32 md:px-10">
        <h3 className="mb-10 font-general text-sm uppercase text-blue-50 md:text-[10px]">
          All Films
        </h3>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {films.map((film, index) => (
            <FilmCard key={film.id} film={film} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WatchPage;
