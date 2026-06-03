import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const PageHero = ({ title, subtitle, containerClass, children }) => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".page-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      className={clsx(
        "relative flex min-h-[60vh] w-screen flex-col items-center justify-center bg-black text-blue-50",
        containerClass
      )}
    >
      {children && (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {children}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center gap-4">
        {subtitle && (
          <p className="page-hero-subtitle font-general text-sm uppercase md:text-[10px]">
            {subtitle}
          </p>
        )}

        <AnimatedTitle
          title={title}
          containerClass="mt-2 text-center"
        />
      </div>
    </div>
  );
};

export default PageHero;
