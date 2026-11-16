import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

export default function HeroToAbout() {
  const { t } = useTranslation();
  const [showAbout, setShowAbout] = useState(false);
  const hasInteracted = useRef(false);

  const handleOpenAbout = () => {
    hasInteracted.current = true;
    setShowAbout(true);
  };

  const handleBackToHero = () => {
    setShowAbout(false);
  };

  const heroPhrase = "Just a Coder";
  const letters = heroPhrase.split("").map((char, index) => ({
    id: `${char}-${index}`,
    char: char === " " ? "\u00A0" : char,
    isInitial: index === 0 || index === 7,
  }));

  const COLLAPSE_DURATION = 0.7;
  const MOVE_DURATION = 1.5;
  const ABOUT_DELAY = MOVE_DURATION;

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!showAbout ? (
          /* HERO VIEW */
          <motion.div
            key="hero"
            id="hero"
            role="button"
            tabIndex={0}
            onClick={handleOpenAbout}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpenAbout();
            }}
            initial={{ opacity: hasInteracted.current ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full flex flex-col items-center justify-center gap-4 px-6 cursor-pointer select-none"
          >
            {/* Shared Initials Morph Element */}
            <motion.div
              layoutId="jc-badge"
              transition={{ duration: MOVE_DURATION, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 py-2 rounded-2xl text-2xl md:text-4xl font-bold flex items-center justify-center bg-[#C2B5A3] font-['Amatic_SC'] leading-none text-[#1E1311]"
            >
              {letters.map((item) => (
                <motion.span
                  key={item.id}
                  layout
                  initial={
                    hasInteracted.current && !item.isInitial
                      ? { opacity: 0, width: 0, scale: 0.6 }
                      : { opacity: 1, width: "auto", scale: 1 }
                  }
                  animate={{ opacity: 1, width: "auto", scale: 1 }}
                  exit={
                    item.isInitial
                      ? { opacity: 1 }
                      : { opacity: 0, width: 0, scale: 0.6 }
                  }
                  transition={{
                    duration: COLLAPSE_DURATION,
                    ease: "easeInOut",
                    delay:
                      hasInteracted.current && !item.isInitial
                        ? MOVE_DURATION * 0.75
                        : 0,
                  }}
                  className="inline-block overflow-hidden whitespace-nowrap"
                >
                  {item.char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          /* ABOUT VIEW */
          <motion.section
            onClick={handleBackToHero}
            key="about"
            id="about"
            className="max-w-4xl w-full px-6 flex flex-col md:flex-row items-center justify-center gap-10 cursor-pointer"
          >
            {/* Initials Badge */}
            <motion.div
              layoutId="jc-badge"
              transition={{ duration: MOVE_DURATION, ease: [0.22, 1, 0.36, 1] }}
              className="w-20 h-20 md:w-30 md:h-30 lg:w-35 lg:h-35 shrink-0 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xl overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{
                  scale: 0.9,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                transition={{ duration: MOVE_DURATION, ease: "easeOut" }}
                className="flex items-center justify-center text-5xl md:text-6xl w-full h-full font-extrabold tracking-tighter select-none rounded-md bg-[#C2B5A3] font-['Amatic_SC'] leading-none text-[#1E1311]"
              >
                <span>J</span>
                <span>C</span>
              </motion.div>
            </motion.div>

            {/* Right Side: About Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: ABOUT_DELAY,
                  duration: 0.75,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: 12,
                transition: {
                  delay: 0,
                  duration: 0.4,
                  ease: "easeIn",
                },
              }}
              className="space-y-4 text-center md:text-left"
            >
              <h2 className="text-xl md:text-3xl font-bold mb-4">
                {t("about.title")}
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {t("about.content")}
              </p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
