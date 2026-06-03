import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

import Button from "./Button";

const navItems = [
  { label: "Projects", path: "/projects" },
  { label: "Watch", path: "/watch" },
  { label: "Games", path: "/games" },
  { label: "Careers", path: "/careers" },
  { label: "Studio", path: "/studio" },
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.from(".mobile-nav-item", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.2,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            {/* Logo and Product button */}
            <div className="flex items-center gap-7">
              <Link to="/">
                <img
                  src="/kanqi-logo.jpg"
                  alt="kanQi Studios"
                  className="w-10 rounded-full"
                />
              </Link>

              <Link to="/projects">
                <Button
                  id="product-button"
                  title="Projects"
                  rightIcon={<TiLocationArrow />}
                  containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                />
              </Link>
            </div>

            {/* Navigation Links and Audio Button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={clsx("nav-hover-btn", {
                      "after:scale-x-100 after:origin-bottom-left":
                        location.pathname === item.path,
                    })}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="ml-6 flex flex-col gap-1 md:hidden"
                aria-label="Toggle menu"
              >
                <span
                  className={clsx(
                    "block h-[2px] w-5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "translate-y-[6px] rotate-45"
                  )}
                />
                <span
                  className={clsx(
                    "block h-[2px] w-5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={clsx(
                    "block h-[2px] w-5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "-translate-y-[6px] -rotate-45"
                  )}
                />
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black md:hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="mobile-nav-item special-font font-zentry text-4xl font-black uppercase text-blue-50 transition-colors hover:text-violet-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/press"
            className="mobile-nav-item special-font font-zentry text-4xl font-black uppercase text-blue-50 transition-colors hover:text-violet-300"
          >
            Press
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-item special-font font-zentry text-4xl font-black uppercase text-blue-50 transition-colors hover:text-violet-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
