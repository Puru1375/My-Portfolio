import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Award,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Medal,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

/*
  IMPORTANT:
  Replace these filenames with your
  actual existing achievement assets.
*/

import achievement2 from "../assets/odooxcgc_1.jpeg";
import achievement1 from "../assets/sih_1.jpeg";


const achievements = [
  {
    id: 1,

    type: "Hackathon",

    title:
      "Smart India Hackathon — Final Round",

    organization:
      "Smart India Hackathon",

    year: "2025",

    status: "Finalist",

    featured: true,

    image: achievement1,

    description:
      "Reached the final round while working on an AI-Based Smart Allocation Engine for the PM Internship Scheme problem statement.",

    highlights: [
      "Worked on a real-world government problem statement",
      "Built an intelligent allocation workflow",
      "Combined Python-based logic with full-stack development",
      "Worked collaboratively under hackathon constraints",
    ],

    skills: [
      "Problem Solving",
      "Python",
      "Full Stack",
      "Teamwork",
    ],

    link: "",
  },

  {
    id: 2,

    type: "Hackathon",

    title:
      "Odoo Hackathon — Final Round",

    organization:
      "Odoo Hackathon",

    year: "2025",

    status: "Finalist",

    featured: true,

    image: achievement2,

    description:
      "Reached the final round with StockMaster, an inventory management solution focused on product and stock workflows.",

    highlights: [
      "Designed an inventory-management workflow",
      "Built a functional full-stack solution",
      "Worked in a time-constrained development environment",
      "Focused on usability and business workflows",
    ],

    skills: [
      "React",
      "Backend",
      "Database",
      "Rapid Development",
    ],

    link: "",
  },

  // {
  //   id: 3,

  //   type: "Certification",

  //   title:
  //     "Cloud & Technical Learning",

  //   organization:
  //     "Professional Learning",

  //   year: "2025–26",

  //   status: "Completed",

  //   featured: false,

  //   image: achievement3,

  //   description:
  //     "Completed technical learning and hands-on work across cloud computing, AWS, deployment and software engineering topics.",

  //   highlights: [
  //     "Cloud fundamentals",
  //     "AWS infrastructure concepts",
  //     "Deployment workflows",
  //     "Continuous technical learning",
  //   ],

  //   skills: [
  //     "AWS",
  //     "Cloud",
  //     "DevOps",
  //   ],

  //   link: "",
  // },

  // {
  //   id: 4,

  //   type: "Achievement",

  //   title:
  //     "Engineering & Development Milestone",

  //   organization:
  //     "Technical Journey",

  //   year: "2024–26",

  //   status: "Completed",

  //   featured: false,

  //   image: achievement4,

  //   description:
  //     "Built and participated in multiple technical projects spanning full-stack development, cloud deployment and engineering problem solving.",

  //   highlights: [
  //     "Multiple end-to-end projects",
  //     "Hackathon participation",
  //     "Production deployment experience",
  //     "Cloud and DevOps specialization",
  //   ],

  //   skills: [
  //     "Engineering",
  //     "Development",
  //     "Cloud",
  //   ],

  //   link: "",
  // },
];

const Achievements = () => {
  const [selected, setSelected] =
    useState(null);

  return (
    <>
      <section
        id="achievements"
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
            className="mb-12"
          >
            <div className="section-label">
              <Trophy size={13} />

              achievement.vault
            </div>

            <h2 className="section-title">
              Milestones that{" "}
              <span>shaped me.</span>
            </h2>

            <p className="section-description">
              Hackathons, technical milestones
              and learning experiences that
              pushed me to build under pressure,
              solve real problems and expand
              beyond application development.
            </p>
          </motion.div>

          {/* Achievement grid */}

          <div
            className="
              grid

              md:grid-cols-2
              xl:grid-cols-12

              gap-5
            "
          >
            {achievements.map(
              (
                achievement,
                index,
              ) => (
                <AchievementCard
                  key={
                    achievement.id
                  }
                  achievement={
                    achievement
                  }
                  index={index}
                  onOpen={
                    setSelected
                  }
                />
              ),
            )}
          </div>

          {/* Footer strip */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-6

              rounded-2xl

              border

              px-5
              py-4

              flex
              flex-col
              sm:flex-row

              sm:items-center
              sm:justify-between

              gap-3
            "
            style={{
              borderColor:
                "var(--border)",

              background:
                "var(--surface)",
            }}
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  w-9
                  h-9

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  border
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
                <Sparkles
                  size={16}
                />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Still building.
                </p>

                <p
                  className="
                    mt-0.5

                    text-xs
                  "
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  The next milestone is
                  always the next system
                  I learn to build better.
                </p>
              </div>
            </div>

            <span
              className="
                text-[9px]

                font-mono

                uppercase
                tracking-[0.15em]
              "
              style={{
                color:
                  "var(--accent)",
              }}
            >
              CONTINUOUS_LEARNING = TRUE
            </span>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <AchievementModal
            achievement={selected}
            onClose={() =>
              setSelected(null)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

/* =================================================
   CARD
================================================= */

const AchievementCard = ({
  achievement,
  index,
  onOpen,
}) => {
  const isLarge =
    achievement.featured;

  return (
    <motion.button
      type="button"
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
      }}
      onClick={() =>
        onOpen(achievement)
      }
      className={`
        group

        relative

        text-left

        overflow-hidden

        rounded-[1.6rem]

        border

        transition-all
        duration-300

        hover:-translate-y-1

        ${
          isLarge
            ? "xl:col-span-6"
            : "xl:col-span-6"
        }
      `}
      style={{
        borderColor:
          "var(--border)",

        background:
          "var(--surface)",
      }}
    >
      <div
        className={`
          grid

          ${
            isLarge
              ? "sm:grid-cols-[.9fr_1.1fr]"
              : "sm:grid-cols-[.8fr_1.2fr]"
          }

          min-h-full
        `}
      >
        {/* Image */}

        <div
          className="
            relative

            min-h-[230px]
            sm:min-h-[310px]

            overflow-hidden
          "
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t

              from-black/75
              via-black/10
              to-transparent
            "
          />

          {/* status */}

          <div
            className="
              absolute
              top-4
              left-4

              px-2.5
              py-1.5

              rounded-lg

              border

              backdrop-blur-xl

              text-[9px]
              font-mono
            "
            style={{
              background:
                "rgba(5,8,22,.72)",

              borderColor:
                "rgba(var(--accent-rgb), .3)",

              color:
                "var(--accent)",
            }}
          >
            {achievement.status}
          </div>

          <div
            className="
              absolute
              bottom-4
              left-4
            "
          >
            <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
              {achievement.type}
            </p>

            <p className="mt-1 text-xs font-medium text-white">
              {achievement.year}
            </p>
          </div>
        </div>

        {/* Content */}

        <div
          className="
            p-5
            sm:p-6

            flex
            flex-col
          "
        >
          <div
            className="
              flex
              items-center
              justify-between

              gap-3
            "
          >
            <Award
              size={18}
              style={{
                color:
                  "var(--accent)",
              }}
            />

            <span
              className="
                text-[9px]
                font-mono
              "
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              ACH_
              {String(
                achievement.id,
              ).padStart(
                2,
                "0",
              )}
            </span>
          </div>

          <p
            className="
              mt-6

              text-[9px]

              uppercase
              tracking-[0.14em]

              font-mono
            "
            style={{
              color:
                "var(--accent)",
            }}
          >
            {
              achievement.organization
            }
          </p>

          <h3
            className="
              mt-2

              text-xl
              sm:text-2xl

              font-bold

              tracking-tight

              leading-tight
            "
            style={{
              color:
                "var(--text-primary)",
            }}
          >
            {achievement.title}
          </h3>

          <p
            className="
              mt-4

              text-sm

              leading-6
            "
            style={{
              color:
                "var(--text-secondary)",
            }}
          >
            {achievement.description}
          </p>

          <div
            className="
              mt-auto
              pt-6

              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-xs
                font-semibold
              "
              style={{
                color:
                  "var(--accent)",
              }}
            >
              View milestone
            </span>

            <ChevronRight
              size={16}
              style={{
                color:
                  "var(--accent)",
              }}
              className="
                transition-transform

                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
};

/* =================================================
   MODAL
================================================= */

const AchievementModal = ({
  achievement,
  onClose,
}) => {

  useEffect(() => {
  document.body.style.overflow =
    "hidden";

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener(
    "keydown",
    handleKeyDown,
  );

  return () => {
    document.body.style.overflow =
      "";

    window.removeEventListener(
      "keydown",
      handleKeyDown,
    );
  };
}, [onClose]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
      className="
        fixed
        inset-0

        z-[110]

        flex
        items-center
        justify-center

        overflow-y-auto

        bg-black/75

        backdrop-blur-xl

        p-4
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.97,
          y: 15,
        }}
        className="
          relative

          w-full
          max-w-4xl

          my-auto

          rounded-[1.75rem]

          border

          overflow-hidden
        "
        style={{
          background:
            "var(--background-secondary)",

          borderColor:
            "var(--border)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close achievement"
          className="
            absolute
            top-4
            right-4

            z-20

            w-10
            h-10

            rounded-xl

            border

            flex
            items-center
            justify-center

            backdrop-blur-xl
          "
          style={{
            background:
              "rgba(5,8,22,.7)",

            borderColor:
              "rgba(255,255,255,.12)",

            color: "white",
          }}
        >
          <X size={18} />
        </button>

        <div
          className="
            grid
            lg:grid-cols-[.9fr_1.1fr]
          "
        >
          {/* Image */}

          <div
            className="
              relative

              min-h-[300px]
              lg:min-h-[600px]
            "
          >
            <img
              src={
                achievement.image
              }
              alt={
                achievement.title
              }
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t

                from-black/70
                via-transparent
                to-black/20
              "
            />
          </div>

          {/* Details */}

          <div
            className="
              p-6
              sm:p-9
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center

                gap-2
              "
            >
              <span
                className="
                  px-2.5
                  py-1.5

                  rounded-lg

                  border

                  text-[9px]
                  font-mono
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
                {achievement.status}
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-1.5

                  text-[10px]
                  font-mono
                "
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                <CalendarDays
                  size={12}
                />

                {achievement.year}
              </span>
            </div>

            <p
              className="
                mt-7

                text-[9px]

                uppercase
                tracking-[0.15em]

                font-mono
              "
              style={{
                color:
                  "var(--accent)",
              }}
            >
              {
                achievement.organization
              }
            </p>

            <h2
              className="
                mt-2

                text-3xl
                sm:text-4xl

                font-bold

                tracking-[-0.04em]

                leading-tight
              "
              style={{
                color:
                  "var(--text-primary)",
              }}
            >
              {achievement.title}
            </h2>

            <p
              className="
                mt-5

                text-sm

                leading-7
              "
              style={{
                color:
                  "var(--text-secondary)",
              }}
            >
              {
                achievement.description
              }
            </p>

            {/* Highlights */}

            <div className="mt-8">
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Medal
                  size={15}
                  style={{
                    color:
                      "var(--accent)",
                  }}
                />

                <p
                  className="
                    text-[10px]

                    uppercase
                    tracking-[0.15em]

                    font-mono
                  "
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  Key highlights
                </p>
              </div>

              <div
                className="
                  mt-4

                  grid
                  gap-2
                "
              >
                {achievement.highlights.map(
                  (item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3

                        p-3

                        rounded-xl

                        border
                      "
                      style={{
                        borderColor:
                          "var(--border)",

                        background:
                          "var(--surface)",
                      }}
                    >
                      <span
                        className="
                          mt-1.5

                          w-1.5
                          h-1.5

                          shrink-0

                          rounded-full
                        "
                        style={{
                          background:
                            "var(--accent)",
                        }}
                      />

                      <span
                        className="
                          text-xs
                          sm:text-sm

                          leading-6
                        "
                        style={{
                          color:
                            "var(--text-secondary)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Skills */}

            <div
              className="
                mt-7

                flex
                flex-wrap

                gap-2
              "
            >
              {achievement.skills.map(
                (skill) => (
                  <span
                    key={skill}
                    className="
                      px-2.5
                      py-1.5

                      rounded-lg

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
                    {skill}
                  </span>
                ),
              )}
            </div>

            {achievement.link && (
              <a
                href={
                  achievement.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8

                  inline-flex
                  items-center
                  gap-2

                  px-5
                  py-3

                  rounded-xl

                  text-sm
                  font-semibold
                "
                style={{
                  background:
                    "var(--accent)",

                  color: "#020617",
                }}
              >
                View Credential

                <ExternalLink
                  size={14}
                />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;