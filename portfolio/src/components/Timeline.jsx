import { motion } from "framer-motion";

import {
  Braces,
  CloudCog,
  Code2,
  GraduationCap,
  Rocket,
  Terminal,
  Trophy,
} from "lucide-react";

const journey = [
  {
    id: 1,
    year: "2022",
    title: "Started Computer Engineering",
    subtitle: "Engineering Foundation",
    icon: GraduationCap,

    description:
      "Started building a foundation in programming, computer science, databases, networking and software development.",

    tags: [
      "Programming",
      "Computer Science",
      "Problem Solving",
    ],
  },

  {
    id: 2,
    year: "2023–24",
    title: "Moved Into Full Stack Development",
    subtitle: "Application Engineering",
    icon: Code2,

    description:
      "Started building complete web applications and learning how frontend, backend APIs and databases work together.",

    tags: [
      "React",
      "Node.js",
      "Express",
      "Databases",
    ],
  },

  {
    id: 3,
    year: "2025",
    title: "Hackathon Finalist",
    subtitle: "Building Under Constraints",
    icon: Trophy,

    description:
      "Worked on real-world problem statements through major hackathons, including smart allocation and inventory-management solutions.",

    tags: [
      "SIH",
      "Odoo Hackathon",
      "Teamwork",
      "Rapid Development",
    ],
  },

  {
    id: 4,
    year: "2025–26",
    title: "Expanded Into Cloud & DevOps",
    subtitle: "Beyond Application Code",
    icon: CloudCog,

    description:
      "Moved beyond simply building applications and started focusing on Docker, AWS infrastructure, CI/CD, networking, security and production deployment.",

    tags: [
      "AWS",
      "Docker",
      "CI/CD",
      "Linux",
    ],
  },

  {
    id: 5,
    year: "2026",
    title: "Built Production AWS Architecture",
    subtitle: "Infrastructure Engineering",
    icon: Rocket,

    description:
      "Designed and deployed production-oriented cloud infrastructure using ECS Fargate, RDS, CloudFront, S3, ALB, Docker and GitHub Actions.",

    tags: [
      "ECS",
      "RDS",
      "CloudFront",
      "GitHub Actions",
    ],
  },

  {
    id: 6,
    year: "NOW",
    title: "Building Toward Cloud & DevOps",
    subtitle: "Current Direction",
    icon: Terminal,

    description:
      "Continuing to strengthen infrastructure-as-code, automation, observability and cloud engineering skills while looking for opportunities to contribute to real production systems.",

    tags: [
      "Terraform",
      "Automation",
      "Observability",
      "Cloud Engineering",
    ],
    current: true,
  },
];

const Timeline = () => {
  return (
    <section
      id="journey"
      className="portfolio-section"
    >
      <div className="section-container">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16"
        >
          <div className="section-label">
            <Braces size={13} />

            journey.log
          </div>

          <h2 className="section-title">
            From code to{" "}
            <span>infrastructure.</span>
          </h2>

          <p className="section-description">
            My journey has gradually moved from
            understanding how applications are
            built to understanding how they are
            deployed, secured, automated and
            operated in production.
          </p>
        </motion.div>

        {/* Timeline */}

        <div
          className="
            relative

            max-w-5xl
            mx-auto
          "
        >
          {/* Main vertical line */}

          <div
            className="
              absolute

              left-[19px]
              md:left-1/2

              top-4
              bottom-4

              w-px

              md:-translate-x-1/2
            "
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--border-active) 8%, var(--border) 50%, var(--border-active) 92%, transparent)",
            }}
          />

          {journey.map(
            (item, index) => {
              const Icon = item.icon;

              const left =
                index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05,
                  }}
                  className="
                    relative

                    grid
                    md:grid-cols-2

                    gap-8

                    mb-10
                    md:mb-14

                    last:mb-0
                  "
                >
                  {/* Timeline node */}

                  <div
                    className="
                      absolute

                      left-0
                      md:left-1/2

                      top-5

                      md:-translate-x-1/2

                      z-10
                    "
                  >
                    {item.current && (
                      <span
                        className="
                          absolute
                          inset-0

                          rounded-full

                          animate-ping

                          opacity-30
                        "
                        style={{
                          background:
                            "var(--accent)",
                        }}
                      />
                    )}

                    <div
                      className="
                        relative

                        w-10
                        h-10

                        rounded-xl

                        border

                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        background:
                          item.current
                            ? "var(--accent)"
                            : "var(--surface-solid)",

                        borderColor:
                          "var(--border-active)",

                        color:
                          item.current
                            ? "#020617"
                            : "var(--accent)",

                        boxShadow:
                          item.current
                            ? "0 0 35px rgba(var(--accent-rgb), .3)"
                            : "none",
                      }}
                    >
                      <Icon size={17} />
                    </div>
                  </div>

                  {/* Desktop blank side */}

                  {left ? (
                    <>
                      <div className="hidden md:block pr-10">
                        <TimelineCard
                          item={item}
                          align="right"
                        />
                      </div>

                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />

                      <div className="hidden md:block pl-10">
                        <TimelineCard
                          item={item}
                          align="left"
                        />
                      </div>
                    </>
                  )}

                  {/* Mobile */}

                  <div
                    className="
                      md:hidden

                      pl-16
                    "
                  >
                    <TimelineCard
                      item={item}
                      align="left"
                    />
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({
  item,
  align,
}) => {
  return (
    <div
      className="
        group

        relative

        rounded-2xl

        border

        p-5
        sm:p-6

        transition-all
        duration-300

        hover:-translate-y-1
      "
      style={{
        borderColor:
          item.current
            ? "var(--border-active)"
            : "var(--border)",

        background:
          "var(--surface)",

        boxShadow:
          item.current
            ? "0 20px 70px rgba(var(--accent-rgb), .08)"
            : "none",
      }}
    >
      {/* year */}

      <div
        className={`
          flex
          items-center
          gap-2

          ${
            align === "right"
              ? "md:justify-end"
              : ""
          }
        `}
      >
        <span
          className="
            px-2.5
            py-1

            rounded-lg

            border

            text-[10px]
            font-mono

            font-semibold
          "
          style={{
            borderColor:
              "var(--border-active)",

            background:
              "var(--accent-soft)",

            color:
              "var(--accent)",
          }}
        >
          {item.year}
        </span>

        {item.current && (
          <span
            className="
              flex
              items-center
              gap-1.5

              text-[9px]
              font-mono

              uppercase
              tracking-wider
            "
            style={{
              color:
                "var(--accent)",
            }}
          >
            <span
              className="
                w-1.5
                h-1.5

                rounded-full
              "
              style={{
                background:
                  "var(--accent)",
              }}
            />

            ACTIVE
          </span>
        )}
      </div>

      <div
        className={
          align === "right"
            ? "md:text-right"
            : ""
        }
      >
        <p
          className="
            mt-4

            text-[9px]

            uppercase
            tracking-[0.14em]

            font-mono
          "
          style={{
            color:
              "var(--text-muted)",
          }}
        >
          {item.subtitle}
        </p>

        <h3
          className="
            mt-2

            text-lg
            sm:text-xl

            font-bold

            tracking-tight
          "
          style={{
            color:
              "var(--text-primary)",
          }}
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3

            text-sm

            leading-6
          "
          style={{
            color:
              "var(--text-secondary)",
          }}
        >
          {item.description}
        </p>
      </div>

      <div
        className={`
          mt-5

          flex
          flex-wrap

          gap-1.5

          ${
            align === "right"
              ? "md:justify-end"
              : ""
          }
        `}
      >
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="
              px-2
              py-1

              rounded-md

              border

              text-[9px]
              font-mono
            "
            style={{
              borderColor:
                "var(--border)",

              color:
                "var(--text-muted)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Timeline;