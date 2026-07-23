import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  MapPin,
  Server,
  Terminal,
} from "lucide-react";

import profileImg from "../assets/profile.png";

const focusAreas = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Designing secure, scalable AWS environments using VPC, ECS, EC2, RDS, S3, CloudFront and ALB.",
  },
  {
    icon: Terminal,
    title: "DevOps & Automation",
    description:
      "Building containerized workflows and automated CI/CD pipelines using Docker and GitHub Actions.",
  },
  {
    icon: Code2,
    title: "Full Stack Engineering",
    description:
      "Building production-ready applications with React, Node.js, Express and PostgreSQL.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="portfolio-section"
    >
      <div className="section-container">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label">
            <Terminal size={13} />

            ./developer.config
          </div>

          <h2 className="section-title">
            Behind the{" "}
            <span>infrastructure.</span>
          </h2>

          <p className="section-description">
            I combine cloud infrastructure,
            DevOps practices and software
            development to understand the
            complete journey from writing code
            to running it reliably in production.
          </p>
        </motion.div>

        <div
          className="
            grid
            lg:grid-cols-[0.8fr_1.2fr]
            gap-8
            lg:gap-12
            items-start
          "
        >
          {/* ======================
              LEFT PROFILE
          ====================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              relative
              rounded-[2rem]
              overflow-hidden
              border
              glass-panel
            "
            style={{
              borderColor: "var(--border)",
            }}
          >
            {/* Window bar */}

            <div
              className="
                h-12
                px-4

                flex
                items-center
                justify-between

                border-b
              "
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>

              <span
                className="
                  text-[10px]
                  font-mono
                "
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                identity.profile
              </span>

              <Server
                size={13}
                style={{
                  color:
                    "var(--text-muted)",
                }}
              />
            </div>

            {/* Image */}

            <div className="relative p-5">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  aspect-[4/4.4]
                "
              >
                <img
                  src={profileImg}
                  alt="Purvanshu Machhi"
                  className="
                    w-full
                    h-full
                    object-cover

                    transition-transform
                    duration-700

                    hover:scale-[1.03]
                  "
                />

                {/* gradient */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/2
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                {/* status */}

                <div
                  className="
                    absolute
                    left-4
                    right-4
                    bottom-4

                    flex
                    items-end
                    justify-between
                    gap-3
                  "
                >
                  <div>
                    <p className="text-white text-xl font-bold">
                      Purvanshu Machhi
                    </p>

                    <p className="mt-1 text-slate-300 text-xs font-mono">
                      Cloud & DevOps Engineer
                    </p>
                  </div>

                  <div
                    className="
                      shrink-0

                      px-2.5
                      py-1.5

                      rounded-lg

                      border

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
                    AVAILABLE
                  </div>
                </div>
              </div>

              {/* Details */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3

                  mt-4
                "
              >
                <div
                  className="
                    rounded-xl
                    border
                    p-3
                  "
                  style={{
                    borderColor:
                      "var(--border)",

                    background:
                      "var(--surface)",
                  }}
                >
                  <p
                    className="
                      text-[9px]
                      font-mono
                      uppercase
                      tracking-wider
                    "
                    style={{
                      color:
                        "var(--text-muted)",
                    }}
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-2

                      flex
                      items-center
                      gap-1.5

                      text-xs
                      font-medium
                    "
                    style={{
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    <MapPin
                      size={12}
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    />

                    India
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    p-3
                  "
                  style={{
                    borderColor:
                      "var(--border)",

                    background:
                      "var(--surface)",
                  }}
                >
                  <p
                    className="
                      text-[9px]
                      font-mono
                      uppercase
                      tracking-wider
                    "
                    style={{
                      color:
                        "var(--text-muted)",
                    }}
                  >
                    Education
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      font-medium
                    "
                    style={{
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    B.E. Computer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================
              RIGHT
          ====================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            {/* Terminal config */}

            <div
              className="
                rounded-2xl
                overflow-hidden

                border

                glass-panel
              "
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              <div
                className="
                  px-4
                  py-3

                  flex
                  items-center
                  justify-between

                  border-b
                "
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Terminal
                    size={14}
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  />

                  <span
                    className="
                      text-xs
                      font-mono
                    "
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    developer.config.js
                  </span>
                </div>

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
                  UTF-8
                </span>
              </div>

              <div
                className="
                  p-5
                  sm:p-6

                  font-mono

                  text-xs
                  sm:text-sm

                  leading-7
                  overflow-x-auto
                "
              >
                <p
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    const
                  </span>{" "}
                  engineer = {"{"}
                </p>

                <p className="pl-5">
                  <span
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    name:
                  </span>{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "Purvanshu Machhi"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    role:
                  </span>{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "Cloud & DevOps Engineer"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    degree:
                  </span>{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "B.E. Computer Engineering"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    cgpa:
                  </span>{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    8.10
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    focus:
                  </span>{" "}
                  [
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "AWS"
                  </span>
                  ,{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "DevOps"
                  </span>
                  ,{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "Automation"
                  </span>
                  ],
                </p>

                <p className="pl-5">
                  <span
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    mindset:
                  </span>{" "}
                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    "build → automate → deploy → observe"
                  </span>
                </p>

                <p
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  {"};"}
                </p>
              </div>
            </div>

            {/* Text */}

            <div className="mt-7">
              <h3
                className="
                  text-xl
                  sm:text-2xl

                  font-bold

                  tracking-tight
                "
                style={{
                  color:
                    "var(--text-primary)",
                }}
              >
                From application code to
                production infrastructure.
              </h3>

              <p
                className="
                  mt-4

                  text-sm
                  sm:text-base

                  leading-7
                "
                style={{
                  color:
                    "var(--text-secondary)",
                }}
              >
                My background in full-stack
                development helps me understand
                what applications need before
                they reach production. I focus
                on deploying those applications
                securely, automating delivery,
                designing cloud infrastructure,
                and improving reliability.
              </p>
            </div>

            {/* Focus areas */}

            <div
              className="
                mt-7

                grid
                gap-3
              "
            >
              {focusAreas.map(
                ({
                  icon: Icon,
                  title,
                  description,
                },
                index) => (
                  <motion.div
                    key={title}
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
                    transition={{
                      delay:
                        index * 0.08,
                    }}
                    className="
                      group

                      flex
                      gap-4

                      p-4

                      rounded-2xl

                      border

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
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
                        shrink-0

                        w-10
                        h-10

                        rounded-xl

                        flex
                        items-center
                        justify-center

                        border
                      "
                      style={{
                        color:
                          "var(--accent)",

                        background:
                          "var(--accent-soft)",

                        borderColor:
                          "var(--border-active)",
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <h4
                        className="
                          font-semibold
                        "
                        style={{
                          color:
                            "var(--text-primary)",
                        }}
                      >
                        {title}
                      </h4>

                      <p
                        className="
                          mt-1

                          text-sm

                          leading-6
                        "
                        style={{
                          color:
                            "var(--text-secondary)",
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ),
              )}
            </div>

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2

                mt-7

                text-sm
                font-semibold

                transition-all

                hover:gap-3
              "
              style={{
                color: "var(--accent)",
              }}
            >
              See how I apply these skills

              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;