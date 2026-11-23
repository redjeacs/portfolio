import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useView } from "../contexts/ViewContext";

export default function HeroToAbout() {
  const { t } = useTranslation();
  const { showAbout, toggleView } = useView();

  const MORPH_DURATION = 0.85;
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      onClick={toggleView}
      id="heroToAbout"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggleView();
      }}
      className="min-h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-6 cursor-pointer select-none"
    >
      <div
        className={`w-full flex items-center justify-center ${
          showAbout ? "max-w-4xl flex-col md:flex-row gap-10" : "flex-col gap-4"
        }`}
      >
        <motion.div
          layout
          initial={{ opacity: 0, "--font-scale": 1 } as any}
          animate={{
            opacity: 1,
            "--font-scale": showAbout ? 1.85 : 1,
            paddingLeft: showAbout ? "0px" : "24px",
            paddingRight: showAbout ? "0px" : "24px",
            paddingTop: showAbout ? "0px" : "8px",
            paddingBottom: showAbout ? "0px" : "8px",
            width: showAbout ? "5.5rem" : "14rem",
            height: showAbout ? "5.5rem" : "4rem",
          }}
          style={{
            fontSize: "calc(clamp(1rem, 8vw, 1.875rem) * var(--font-scale, 1))",
          }}
          transition={{ duration: MORPH_DURATION, ease: EASE }}
          className={`shrink-0 rounded-2xl max-w-full bg-[#C2B5A3] text-[#1E1311] font-['Amatic_SC'] font-extrabold leading-none flex items-center justify-center overflow-hidden ${
            showAbout ? "shadow-xl tracking-tighter" : "tracking-normal"
          }`}
        >
          {/* Letter J */}
          <motion.span
            transition={{ duration: MORPH_DURATION, ease: EASE }}
            className="inline-block"
          >
            J
          </motion.span>
          <motion.span
            initial={false}
            animate={{
              width: showAbout ? 0 : "auto",
              opacity: showAbout ? 0 : 1,
            }}
            transition={{
              width: { duration: MORPH_DURATION * 0.8, ease: EASE },
              opacity: {
                duration: MORPH_DURATION * 0.4,
                delay: showAbout ? 0 : MORPH_DURATION * 0.7,
              },
            }}
            className="inline-block overflow-hidden whitespace-pre"
          >
            erry{" "}
          </motion.span>

          {/* Letter C */}
          <motion.span
            transition={{ duration: MORPH_DURATION, ease: EASE }}
            className="inline-block"
          >
            C
          </motion.span>
          <motion.span
            initial={false}
            animate={{
              width: showAbout ? 0 : "auto",
              opacity: showAbout ? 0 : 1,
            }}
            transition={{
              width: { duration: MORPH_DURATION * 0.8, ease: EASE },
              opacity: {
                duration: MORPH_DURATION * 0.4,
                delay: showAbout ? 0 : MORPH_DURATION * 0.7,
              },
            }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            hang
          </motion.span>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {showAbout && (
            <motion.div
              key="about-text"
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: MORPH_DURATION * 0.45,
                  duration: 0.55,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.25, ease: "easeIn" },
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
