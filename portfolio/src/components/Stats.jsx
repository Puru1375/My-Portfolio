import { motion } from "framer-motion";

import {
  Award,
  CloudCog,
  GraduationCap,
  Rocket,
} from "lucide-react";

const stats = [
  {
    id: 1,
    value: "10+",
    label: "AWS Services",
    description:
      "Hands-on cloud infrastructure",
    icon: CloudCog,
  },
  {
    id: 2,
    value: "2",
    label: "Production Deployments",
    description:
      "Cloud deployment projects",
    icon: Rocket,
  },
  {
    id: 3,
    value: "2",
    label: "Hackathon Finals",
    description:
      "National & technical events",
    icon: Award,
  },
  {
    id: 4,
    value: "8.10",
    label: "CGPA",
    description:
      "Computer Engineering",
    icon: GraduationCap,
  },
];

const Stats = () => {
  return (
    <section
      className="
        relative

        px-6
        py-8

        md:px-10
        lg:px-16
        xl:px-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          rounded-[1.75rem]

          border

          overflow-hidden

          glass-panel
        "
        style={{
          borderColor: "var(--border)",
        }}
      >
        {/* top status */}

        <div
          className="
            px-5
            py-3

            flex
            items-center
            justify-between

            border-b
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div
            className="
              flex
              items-center
              gap-2

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
            <span
              className="
                w-1.5
                h-1.5

                rounded-full
              "
              style={{
                background:
                  "var(--accent)",

                boxShadow:
                  "0 0 8px rgba(var(--accent-rgb), .8)",
              }}
            />

            ENGINEER.METRICS
          </div>

          <span
            className="
              hidden
              sm:block

              text-[9px]
              font-mono
            "
            style={{
              color:
                "var(--text-muted)",
            }}
          >
            status: operational
          </span>
        </div>

        <div
          className="
            grid

            grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map(
            (
              {
                id,
                value,
                label,
                description,
                icon: Icon,
              },
              index,
            ) => (
              <motion.div
                key={id}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.5,
                }}
                className={`
                  relative

                  p-5
                  sm:p-7

                  ${
                    index % 2 === 0
                      ? "border-r"
                      : ""
                  }

                  ${
                    index < 2
                      ? "border-b lg:border-b-0"
                      : ""
                  }

                  ${
                    index !==
                    stats.length - 1
                      ? "lg:border-r"
                      : ""
                  }
                `}
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between

                    gap-3
                  "
                >
                  <div>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index * 0.1 +
                          0.15,
                      }}
                      className="
                        text-3xl
                        sm:text-4xl

                        font-extrabold

                        tracking-tight
                      "
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      {value}
                    </motion.p>

                    <p
                      className="
                        mt-2

                        text-xs
                        sm:text-sm

                        font-semibold
                      "
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    >
                      {label}
                    </p>
                  </div>

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
                      background:
                        "var(--accent-soft)",

                      borderColor:
                        "var(--border-active)",

                      color:
                        "var(--accent)",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <p
                  className="
                    mt-3

                    text-[10px]
                    sm:text-xs

                    leading-5
                  "
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  {description}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;