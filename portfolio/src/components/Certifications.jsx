import {
  ArrowUpRight,
  Award,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import awsCloudPractitioner from "../assets/aws-certificate-1.jpg";

const certificates = [
  {
    id: "aws-cloud-practitioner-essentials",

    title:
      "AWS Cloud Practitioner Essentials",

    issuer:
      "Amazon Web Services (AWS)",

    type:
      "Foundational Cloud Training",

    date:
      "2026",

    image:
      awsCloudPractitioner,

    description:
      "Foundational AWS training covering cloud concepts, core AWS services, security, architecture, pricing, and support.",

    skills: [
      "AWS",
      "Cloud Fundamentals",
      "AWS Architecture",
      "Cloud Security",
      "AWS Services",
    ],

    verifyUrl:
      "https://drive.google.com/file/d/1jAHfljGCr6OWnXvZbmxJM8TcraA88wS3/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="
        relative

        py-24
        px-6

        md:px-10
        lg:px-16
        xl:px-20
      "
    >
      <div
        className="
          max-w-[1450px]
          mx-auto
        "
      >
        {/* Header */}

        <div className="max-w-3xl">
          <div className="section-label">
            <Award size={13} />

            CERTIFICATIONS // TRAINING
          </div>

          <h2
            className="
              mt-5

              text-4xl
              md:text-5xl
              lg:text-6xl

              font-extrabold

              tracking-[-0.05em]
            "
            style={{
              color:
                "var(--text-primary)",
            }}
          >
            Credentials that
            <span
              style={{
                color:
                  "var(--accent)",
              }}
            >
              {" "}
              support the work.
            </span>
          </h2>

          <p
            className="
              mt-5

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
            Cloud and DevOps training that
            strengthens my understanding of
            modern cloud infrastructure,
            security, and AWS services.
          </p>
        </div>

        {/* Certificates */}

        <div
          className="
            mt-12

            grid
            lg:grid-cols-2

            gap-6
          "
        >
          {certificates.map(
            (certificate, index) => (
              <motion.article
                key={certificate.id}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.08,
                }}
                className="
                  group

                  relative

                  overflow-hidden

                  rounded-2xl

                  border

                  p-6
                  md:p-7
                "
                style={{
                  borderColor:
                    "var(--border)",

                  background:
                    "var(--surface)",
                }}
              >
                {/* Top row */}
                

                <div
                  className="
                    flex
                    items-start
                    justify-between

                    gap-4
                  "
                >
                  <div
                    className="
                      w-12
                      h-12

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
                    <Award size={22} />
                  </div>

                  <span
                    className="
                      px-2.5
                      py-1

                      rounded-lg

                      text-[9px]

                      font-mono

                      uppercase
                      tracking-wider
                    "
                    style={{
                      color:
                        "var(--accent)",

                      background:
                        "var(--accent-soft)",
                    }}
                  >
                    {certificate.type}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-7">
                  <p
                    className="
                      text-[10px]

                      font-mono

                      uppercase
                      tracking-[0.16em]
                    "
                    style={{
                      color:
                        "var(--text-muted)",
                    }}
                  >
                    {certificate.issuer}
                  </p>

                  <h3
                    className="
                      mt-2

                      text-xl
                      md:text-2xl

                      font-bold
                    "
                    style={{
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    {certificate.title}
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
                    {
                      certificate.description
                    }
                  </p>
                </div>

                {/* Skills */}

                <div
                  className="
                    mt-6

                    flex
                    flex-wrap

                    gap-2
                  "
                >
                  {certificate.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="
                          px-2.5
                          py-1.5

                          rounded-lg

                          border

                          text-[10px]

                          font-mono
                        "
                        style={{
                          borderColor:
                            "var(--border)",

                          color:
                            "var(--text-secondary)",
                        }}
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>

                {/* Footer */}

                <div
                  className="
                    mt-7
                    pt-5

                    border-t

                    flex
                    items-center
                    justify-between

                    gap-4
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

                      text-xs
                      font-mono
                    "
                    style={{
                      color:
                        "var(--text-muted)",
                    }}
                  >
                    <ShieldCheck
                      size={14}
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    />

                    {certificate.date}
                  </div>
                  

                  <a
                    href={
                      certificate.verifyUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link

                      inline-flex
                      items-center
                      gap-2

                      text-xs
                      font-semibold
                    "
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    Verify / View

                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        group-hover/link:translate-x-0.5
                        group-hover/link:-translate-y-0.5
                      "
                    />
                  </a>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;