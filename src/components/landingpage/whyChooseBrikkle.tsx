import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GridBackground from "@/assets/images/gridBackground.svg?react";
import { useTheme } from "@/hooks/Theme/themeContext";
import Check from "@/assets/icons/check.svg?react";

type Feature = { title: string; description: string };

const features: Feature[] = [
  {
    title: "Start Small, Grow Big",
    description: "No need to save millions—start with as little as ₦10k.",
  },
  {
    title: "Monthly Passive Income",
    description:
      "Earn rental income directly to your wallet—no agents, no delays.",
  },
  {
    title: "Global Access, Local Assets",
    description: "Invest in Nigerian properties from anywhere in the world.",
  },
  {
    title: "Full Transparency",
    description:
      "Earn rental income directly to your wallet—no agents, no delays.",
  },
];

// Enhanced rotations for more tilt
const rotations = ["-rotate-6", "rotate-8", "-rotate-5", "rotate-8"];
const yTranslations = [
  "-translate-y-1",
  "translate-y-2",
  "-translate-y-1",
  "translate-y-2",
];
const xTranslations = [
  "-translate-x-1",
  "translate-x-2",
  "-translate-x-1",
  "translate-x-2",
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section
      id="why-brikkle"
      className="relative overflow-hidden py-14 bg-background] px-6"
      ref={ref}
    >
      {/* Grid Background SVG */}
      <div className="absolute inset-0 pointer-events-none ">
        {theme === "dark" ? (
          <GridBackground
            className="w-full h-full object-cover opacity-100 "
            style={{
              maskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "cover",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "cover",
            }}
          />
        ) : null}
      </div>

      {/* Soft vignette for readability */}
      {/* {theme === "dark" ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,transparent_40%,rgba(0,0,0,.15)_100%)]"
        />
      ) : null} */}

      <div className="mx-auto max-w-6xl px-6 md:px-0">
        <div className="relative mb-14 text-center ">
          {/* Eclipse gradient glow effect  */}
          {theme === "dark" ? (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-full max-w-4xl aspect-[2/1]">
              <div
                className="w-full h-full rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(63, 2, 250, 1) 0%, rgba(11, 11, 11, 0.8) 40%, rgba(11, 11, 11, 1) 40%, transparent 80%)",
                  filter: "blur(100px)",
                }}
                aria-hidden="true"
              />
            </div>
          ) : (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-full min-w-4xl aspect-[2/1]">
              <div
                className="w-full h-full rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(63, 2, 250, 1) 0%, transparent 100%)",
                  filter: "blur(100px)",
                }}
                aria-hidden="true"
              />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose Brikkle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-20">
              Real estate investing, made easy — secure, affordable,
              transparent, and flexible.
            </p>
          </div>
        </div>

        {/* CARDS WITH FRAMER MOTION */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              // initial={{
              //   opacity: 0,
              //   y: 50,
              //   rotate: 0,
              //   // scale: 0.95,
              // }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      rotate:
                        parseInt(
                          rotations[i]
                            .replace("rotate-", "")
                            .replace("-rotate-", "-"),
                        ) || 0,
                      scale: 1,
                      x:
                        parseInt(
                          xTranslations[i]
                            .replace("translate-x-", "")
                            .replace("-translate-x-", "-"),
                        ) * 4 || 0,
                      y:
                        parseInt(
                          yTranslations[i]
                            .replace("translate-y-", "")
                            .replace("-translate-y-", "-"),
                        ) * 4 || 0,
                    }
                  : false
                // {
                //     opacity: 0,
                //     y: 50,
                //     rotate: 0,
                //     scale: 0.95,
                //   }
              }
              whileHover={{
                rotate: 0,
                transition: {
                  // duration: 0.01,
                  type: "spring",
                  damping: 100,
                  stiffness: 2000,
                },
              }}
              transition={{
                // duration: 0.01,
                // delay: i,
                type: "spring",
                damping: 100,
                stiffness: 2000,
              }}
              className={[
                "relative rounded-md bg-black1  bg-[hsl(220_10%_8%)]/95 p-6 mb-6 ",
                "transition-transform md:p-7",
                "sm:[transform:rotate(1deg)]",
              ].join(" ")}
            >
              <span
                aria-hidden
                className={[
                  "pointer-events-none absolute inset-0 -z-0 rounded-xl bg-gradient-to-br",
                  i === 0 &&
                    "from-[hsl(150_25%_18%)]/35 via-transparent to-[hsl(200_25%_12%)]/35",
                  i === 1 &&
                    "from-[hsl(195_35%_18%)]/35 via-transparent to-[hsl(225_30%_14%)]/35",
                  i === 2 &&
                    "from-[hsl(145_28%_16%)]/35 via-transparent to-[hsl(160_22%_12%)]/35",
                  i === 3 &&
                    "from-[hsl(195_35%_18%)]/35 via-transparent to-[hsl(230_28%_12%)]/35",
                ].join(" ")}
              />

              <div className="relative z-10 mb-3 dark:text-tertiary">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="relative z-10 mb-2  text-xl  dark:text-white font-semibold text-primary  md:text-xl">
                {f.title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed  dark:text-muted-foreground md:text-base">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
