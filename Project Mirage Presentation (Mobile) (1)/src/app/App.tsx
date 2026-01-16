import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slide1Hero } from "@/app/components/slide-1-hero";
import { Slide2Conflict } from "@/app/components/slide-2-conflict";
import { Slide3Threat } from "@/app/components/slide-3-threat";
import { Slide4Solution } from "@/app/components/slide-4-solution";
import { Slide5Trap } from "@/app/components/slide-5-trap";
import { Slide6Venn } from "@/app/components/slide-6-venn";
import { Slide7Pillars } from "@/app/components/slide-7-pillars";
import { Slide8Roadmap } from "@/app/components/slide-8-roadmap";
import logoImage from "figma:asset/dbd2726d662191dbf4bd5afe03739ca922f0521e.png";

const slides = [
  { component: Slide1Hero, title: "Intro" },
  { component: Slide2Conflict, title: "The Conflict" },
  { component: Slide3Threat, title: "The Trap" },
  { component: Slide4Solution, title: "The Solution" },
  { component: Slide5Trap, title: "The Threat" },
  { component: Slide6Venn, title: "Sovereign Innovation" },
  { component: Slide7Pillars, title: "Tech Features" },
  { component: Slide8Roadmap, title: "Roadmap" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Set document title and meta description
  useEffect(() => {
    document.title = "Project Mirage (NEXUS)";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'A GenAI Cybersecurity solution which ends Data Paralysis.');

    // Update or create Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'A GenAI Cybersecurity solution which ends Data Paralysis.');

    // Update or create Twitter description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', 'A GenAI Cybersecurity solution which ends Data Paralysis.');
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0B1021 0%, #1A1B41 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Slide Container */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-md px-3 py-1.5 z-50">
        <p className="text-white/60 tracking-[0.1em] text-[11px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[76px] right-6 flex gap-1 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-md p-1.5 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.03] disabled:hover:border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-white/60" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-md p-1.5 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.03] disabled:hover:border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3.5 h-3.5 text-white/60" />
        </button>
      </div>

      {/* Project Logo */}
      <div className="absolute top-6 left-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src={logoImage} alt="NEXUS Logo" className="h-20 w-auto opacity-90" />
        </motion.div>
      </div>

      {/* Keyboard Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 right-6 text-white/30 text-[10px] z-50"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Use ← → or Space to navigate
      </motion.div>
    </div>
  );
}