import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Container,
  GitBranch,
  MapPin,
  Server,
} from "lucide-react";

import { motion } from "framer-motion";

import CloudScene from "./CloudScene";

const technologies = [
  "AWS",
  "Docker",
  "GitHub Actions",
  "Linux",
  "Terraform",
  "React",
];

const statusItems = [
  {
    icon: Cloud,
    label: "Cloud",
    value: "AWS",
  },
  {
    icon: Container,
    label: "Containers",
    value: "Docker",
  },
  {
    icon: GitBranch,
    label: "Delivery",
    value: "CI/CD",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative

        min-h-screen

        flex
        items-center

        px-6
        pt-28
        pb-16

        md:px-10
        lg:px-16
        xl:px-20

        overflow-hidden
      "
    >
      <div
        className="
          w-full
          max-w-[1450px]
          mx-auto

          grid
          lg:grid-cols-[1.02fr_.98fr]

          gap-10
          lg:gap-6

          items-center
        "
      >
        {/* =========================
            LEFT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            z-10
            max-w-3xl
          "
        >
          {/* Status */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="section-label"
          >
            <span
              className="
                relative
                flex
                w-2
                h-2
              "
            >
              <span
                className="
                  absolute
                  inline-flex
                  w-full
                  h-full
                  rounded-full
                  opacity-60
                  animate-ping
                "
                style={{
                  background:
                    "var(--accent)",
                }}
              />

              <span
                className="
                  relative
                  inline-flex
                  w-2
                  h-2
                  rounded-full
                "
                style={{
                  background:
                    "var(--accent)",
                }}
              />
            </span>

            SYSTEM // AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          {/* Main heading */}

          <h1
            className="
              mt-4

              text-[clamp(3.3rem,7vw,7.3rem)]

              font-extrabold

              tracking-[-0.065em]

              leading-[0.91]
            "
            style={{
              color:
                "var(--text-primary)",
            }}
          >
            Building
            <br />

            <span
              style={{
                color: "var(--accent)",
              }}
            >
              infrastructure
            </span>

            <br />

            that scales.
          </h1>

          {/* Intro */}

          <p
            className="
              mt-8

              max-w-2xl

              text-base
              md:text-lg

              leading-8
            "
            style={{
              color:
                "var(--text-secondary)",
            }}
          >
            I'm{" "}
            <strong
              style={{
                color:
                  "var(--text-primary)",
              }}
            >
              Purvanshu Machhi
            </strong>
            , a Cloud & DevOps Engineer
            focused on building secure AWS
            infrastructure, automated CI/CD
            pipelines, containerized workloads,
            and production-ready applications.
          </p>

          {/* Location */}

          <div
            className="
              mt-5

              flex
              flex-wrap
              items-center

              gap-x-5
              gap-y-2

              text-sm
              font-mono
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            <span
              className="
                flex
                items-center
                gap-2
              "
            >
              <MapPin size={14} />

              India
            </span>

            <span
              className="
                flex
                items-center
                gap-2
              "
            >
              <CheckCircle2
                size={14}
                style={{
                  color:
                    "var(--accent)",
                }}
              />

              Open to Cloud / DevOps roles
            </span>
          </div>

          {/* CTA */}

          <div
            className="
              mt-9

              flex
              flex-col
              sm:flex-row

              gap-3
            "
          >
            <a
              href="#projects"
              className="
                group

                inline-flex
                items-center
                justify-center
                gap-2

                px-6
                py-3.5

                rounded-xl

                font-semibold

                transition-all
                duration-300

                hover:-translate-y-1
              "
              style={{
                background:
                  "var(--accent)",
                color: "#020617",
                boxShadow:
                  "0 15px 45px rgba(var(--accent-rgb), .18)",
              }}
            >
              Explore Projects

              <ArrowDown
                size={17}
                className="
                  transition-transform
                  group-hover:translate-y-1
                "
              />
            </a>

            <a
              href="#contact"
              className="
                group

                inline-flex
                items-center
                justify-center
                gap-2

                px-6
                py-3.5

                rounded-xl

                border

                font-semibold

                transition-all
                duration-300

                hover:-translate-y-1
              "
              style={{
                borderColor:
                  "var(--border)",
                background:
                  "var(--surface)",
                color:
                  "var(--text-primary)",
              }}
            >
              Let's Connect

              <ArrowUpRight
                size={17}
                className="
                  transition-transform

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* Technologies */}

          <div
            className="
              mt-10
              pt-6

              border-t
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <p
              className="
                mb-4

                text-[11px]

                font-mono

                uppercase
                tracking-[0.18em]
              "
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              Core technology
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      px-3
                      py-1.5

                      rounded-lg

                      border

                      text-xs
                      font-mono

                      transition-colors
                    "
                    style={{
                      borderColor:
                        "var(--border)",

                      background:
                        "var(--surface)",

                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* =========================
            RIGHT — 3D
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            relative

            min-h-[460px]
            lg:min-h-[650px]

            rounded-[2rem]

            border

            overflow-hidden

            glass-panel
          "
          style={{
            borderColor:
              "var(--border)",
          }}
        >
          {/* Decorative header */}

          <div
            className="
              absolute
              top-0
              left-0
              right-0

              z-20

              h-12

              px-4

              flex
              items-center
              justify-between

              border-b

              pointer-events-none
            "
            style={{
              borderColor:
                "var(--border)",

              background:
                "rgba(5,8,22,.35)",
            }}
          >
            <div
              className="
                flex
                gap-1.5
              "
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />

              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />

              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>

            <span
              className="
                text-[10px]
                sm:text-xs
                font-mono
              "
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              infrastructure.production
            </span>

            <Server
              size={14}
              style={{
                color:
                  "var(--text-muted)",
              }}
            />
          </div>

          <div className="absolute inset-0 pt-12">
            <CloudScene />
          </div>

          {/* Architecture status */}

          <div
            className="
              absolute
              left-4
              right-4
              bottom-10

              z-20

              grid
              grid-cols-3

              gap-2

              pointer-events-none
            "
          >
            {statusItems.map(
              ({
                icon: Icon,
                label,
                value,
              }) => (
                <div
                  key={label}
                  className="
                    rounded-xl

                    border

                    px-3
                    py-2.5

                    backdrop-blur-xl
                  "
                  style={{
                    background:
                      "rgba(5,8,22,.68)",

                    borderColor:
                      "rgba(148,163,184,.12)",
                  }}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5

                      text-[9px]
                      sm:text-[10px]

                      font-mono

                      uppercase
                      tracking-wider
                    "
                    style={{
                      color:
                        "#64748b",
                    }}
                  >
                    <Icon size={11} />

                    {label}
                  </div>

                  <p
                    className="
                      mt-1

                      text-xs
                      sm:text-sm

                      font-semibold

                      text-slate-100
                    "
                  >
                    {value}
                  </p>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="
          hidden
          xl:flex

          absolute
          bottom-8
          left-1/2
          -translate-x-1/2

          flex-col
          items-center
          gap-2

          text-[10px]
          font-mono

          uppercase
          tracking-[0.18em]
        "
        style={{
          color: "var(--text-muted)",
        }}
      >
        Scroll

        <ArrowDown
          size={14}
          className="animate-bounce"
        />
      </a>
    </section>
  );
};

export default Hero;