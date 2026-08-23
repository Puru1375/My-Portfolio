import {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Box,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,

    title:
      "AWS Cloud Infrastructure",

    description:
      "Designing and deploying secure cloud architectures using networking, compute, storage, databases, CDN and identity services.",

    tools: [
      "ECS Fargate",
      "EC2",
      "RDS",
      "S3",
      "CloudFront",
      "VPC",
      "ALB",
      "IAM",
      "ECR",
      "CloudWatch",
      "ACM",
      "Secrets Manager",
    ],

    workflow: [
      "VPC",
      "ALB",
      "ECS",
      "RDS",
    ],
  },

  {
    id: "devops",
    label: "DevOps",
    icon: GitBranch,

    title:
      "CI/CD & Automation",

    description:
      "Automating software delivery from source code to production using version control, build pipelines and deployment workflows.",

    tools: [
      "GitHub Actions",
      "Git",
      "Linux",
      "CI/CD",
      // "Bash",
      "Terraform",
    ],

    workflow: [
      "Code",
      "Build",
      "Test",
      "Deploy",
    ],
  },

  {
    id: "containers",
    label: "Containers",
    icon: Box,

    title:
      "Containers & Runtime",

    description:
      "Packaging applications consistently and deploying containerized workloads with secure networking and reverse proxies.",

    tools: [
      "Docker",
      "Docker Compose",
      "Amazon ECR",
      "ECS Fargate",
      "Traefik",
      "Nginx",
    ],

    workflow: [
      "Dockerfile",
      "Image",
      "ECR",
      "Runtime",
    ],
  },

  {
    id: "backend",
    label: "Backend",
    icon: Server,

    title:
      "Backend Engineering",

    description:
      "Building APIs and backend services while understanding how applications interact with infrastructure and databases.",

    tools: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Python",
      // "Prisma",
    ],

    workflow: [
      "Client",
      "API",
      "Service",
      "Database",
    ],
  },

  {
    id: "data",
    label: "Data",
    icon: Database,

    title:
      "Databases & Caching",

    description:
      "Working with relational and NoSQL databases, managed cloud databases and caching systems.",

    tools: [
      "PostgreSQL",
      "Amazon RDS",
      "MongoDB",
      "MySQL",
      "Supabase",
      "Redis",
    ],

    workflow: [
      "API",
      "Cache",
      "Query",
      "Storage",
    ],
  },

  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,

    title:
      "Frontend Development",

    description:
      "Building responsive application interfaces and connecting frontend systems with production APIs.",

    tools: [
      "React",
      "Vite",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    workflow: [
      "UI",
      "React",
      "API",
      "CloudFront",
    ],
  },
];

const Skills = () => {
  const [activeId, setActiveId] =
    useState("cloud");

  const active =
    skillGroups.find(
      (group) =>
        group.id === activeId,
    ) || skillGroups[0];

  const ActiveIcon = active.icon;

  return (
    <section
      id="skills"
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
            <Layers3 size={13} />

            capability.matrix
          </div>

          <h2 className="section-title">
            Tools I use to{" "}
            <span>ship.</span>
          </h2>

          <p className="section-description">
            My skill set spans the full
            application lifecycle—from writing
            application code to containerizing,
            deploying, securing and monitoring
            it in the cloud.
          </p>
        </motion.div>

        <div
          className="
            grid

            lg:grid-cols-[300px_1fr]

            gap-5
          "
        >
          {/* =====================
              LEFT NAV
          ====================== */}

          <div
            className="
              rounded-2xl

              border

              p-2

              glass-panel

              h-fit
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <div
              className="
                px-3
                py-3

                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[10px]
                  font-mono

                  uppercase
                  tracking-[0.15em]
                "
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                Select domain
              </span>

              <Terminal
                size={13}
                style={{
                  color:
                    "var(--accent)",
                }}
              />
            </div>

            <div
              className="
                grid
                grid-cols-2

                lg:grid-cols-1

                gap-1
              "
            >
              {skillGroups.map(
                (group) => {
                  const Icon =
                    group.icon;

                  const isActive =
                    group.id ===
                    activeId;

                  return (
                    <button
                      type="button"
                      key={group.id}
                      onClick={() =>
                        setActiveId(
                          group.id,
                        )
                      }
                      className="
                        relative

                        w-full

                        flex
                        items-center
                        gap-3

                        px-3
                        py-3

                        rounded-xl

                        text-left
                        text-xs
                        sm:text-sm

                        transition-all
                        duration-200
                      "
                      style={{
                        background:
                          isActive
                            ? "var(--accent-soft)"
                            : "transparent",

                        color: isActive
                          ? "var(--accent)"
                          : "var(--text-secondary)",
                      }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="skill-active"
                          className="
                            absolute
                            left-0

                            w-[2px]
                            h-6

                            rounded-full
                          "
                          style={{
                            background:
                              "var(--accent)",
                          }}
                        />
                      )}

                      <Icon
                        size={16}
                        className="shrink-0"
                      />

                      <span className="font-medium">
                        {group.label}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* =====================
              RIGHT CONTENT
          ====================== */}

          <div
            className="
              min-h-[500px]

              rounded-[1.75rem]

              border

              overflow-hidden

              glass-panel
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            {/* window header */}

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
                skills/{active.id}
                .config
              </span>

              <span
                className="
                  text-[9px]
                  font-mono
                "
                style={{
                  color:
                    "var(--accent)",
                }}
              >
                ACTIVE
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.22,
                }}
                className="
                  p-5
                  sm:p-8
                "
              >
                {/* heading */}

                <div
                  className="
                    flex
                    flex-col

                    sm:flex-row

                    sm:items-start
                    sm:justify-between

                    gap-5
                  "
                >
                  <div>
                    <div
                      className="
                        w-12
                        h-12

                        rounded-2xl

                        flex
                        items-center
                        justify-center

                        border

                        mb-5
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
                      <ActiveIcon
                        size={22}
                      />
                    </div>

                    <h3
                      className="
                        text-2xl
                        sm:text-3xl

                        font-bold

                        tracking-tight
                      "
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      {active.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        max-w-2xl

                        text-sm

                        leading-7
                      "
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {
                        active.description
                      }
                    </p>
                  </div>

                  <div
                    className="
                      shrink-0

                      px-3
                      py-2

                      rounded-xl

                      border

                      text-[10px]
                      font-mono
                    "
                    style={{
                      borderColor:
                        "var(--border)",

                      color:
                        "var(--text-muted)",

                      background:
                        "var(--surface)",
                    }}
                  >
                    {
                      active.tools
                        .length
                    }{" "}
                    technologies
                  </div>
                </div>

                {/* Workflow */}

                <div className="mt-9">
                  <p
                    className="
                      mb-4

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
                    Typical workflow
                  </p>

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center

                      gap-2
                    "
                  >
                    {active.workflow.map(
                      (
                        step,
                        index,
                      ) => (
                        <div
                          key={step}
                          className="
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              px-3
                              py-2

                              rounded-lg

                              border

                              text-xs
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
                            {step}
                          </span>

                          {index <
                            active
                              .workflow
                              .length -
                              1 && (
                            <span
                              className="
                                text-xs
                                font-mono
                              "
                              style={{
                                color:
                                  "var(--text-muted)",
                              }}
                            >
                              →
                            </span>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Tools */}

                <div className="mt-9">
                  <p
                    className="
                      mb-4

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
                    Technologies
                  </p>

                  <div
                    className="
                      grid

                      sm:grid-cols-2
                      xl:grid-cols-3

                      gap-2.5
                    "
                  >
                    {active.tools.map(
                      (
                        tool,
                        index,
                      ) => (
                        <motion.div
                          key={tool}
                          initial={{
                            opacity: 0,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay:
                              index *
                              0.025,
                          }}
                          className="
                            group

                            flex
                            items-center
                            justify-between

                            px-4
                            py-3

                            rounded-xl

                            border

                            transition-all
                            duration-200

                            hover:-translate-y-0.5
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
                              flex
                              items-center
                              gap-2

                              text-xs
                              sm:text-sm

                              font-medium
                            "
                            style={{
                              color:
                                "var(--text-primary)",
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

                            {tool}
                          </span>

                          <span
                            className="
                              opacity-0

                              group-hover:opacity-100

                              transition-opacity

                              text-[9px]
                              font-mono
                            "
                            style={{
                              color:
                                "var(--accent)",
                            }}
                          >
                            ✓
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;