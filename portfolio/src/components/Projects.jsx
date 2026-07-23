import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

/*
  Keep these imports matched to your actual
  src/assets filenames.
*/

import project1 from "../assets/odoo-spit-diagram.png";
import project2 from "../assets/pm-i-diagram.png";
import project3 from "../assets/pm-i-1.png";
// import project4 from "../assets/StockMastar_2.png";

import devPlatformArchitecture from "../assets/odoo-spit-diagram.png";

import dockerTraefikArchitecture from "../assets/pm-i-diagram.png";

const projects = [
  {
    id: 1,

    number: "01",

    category:
      "Cloud Architecture / DevOps",

    title:
      "Production-Grade Full Stack AWS Platform",

    shortTitle:
      "AWS Production Platform",

    featured: true,

    description:
      "Designed and deployed a production-grade full-stack application on AWS using containerized backend services, managed PostgreSQL, CDN delivery, secure networking and automated CI/CD.",

    problem:
      "The application needed to move beyond a basic development deployment into a secure, scalable production architecture with isolated networking, managed infrastructure, HTTPS, automated delivery and production monitoring.",

    solution:
      "I designed a multi-tier AWS architecture where the React frontend is delivered through S3 and CloudFront, backend containers run on ECS Fargate behind an Application Load Balancer, and PostgreSQL runs on Amazon RDS inside private networking.",

    architecture: [
      "CloudFront",
      "S3",
      "ALB",
      "ECS Fargate",
      "RDS",
    ],

    architectureDetails: [
      {
        label: "Frontend",
        value: "S3 + CloudFront",
      },
      {
        label: "Traffic",
        value: "HTTPS + ALB",
      },
      {
        label: "Compute",
        value: "ECS Fargate",
      },
      {
        label: "Database",
        value: "Amazon RDS",
      },
      {
        label: "Networking",
        value: "VPC + Subnets + Security Groups",
      },
      {
        label: "Security",
        value: "HTTPS + Secrets Manager + IAM Roles",
      },
    ],

    highlights: [
      "Custom VPC with public and private subnet architecture",
      "Dockerized Node.js backend deployed using ECS Fargate",
      "React frontend hosted on S3 and distributed through CloudFront",
      "PostgreSQL database deployed using Amazon RDS",
      "Application Load Balancer with health checks",
      "HTTPS using AWS Certificate Manager",
      "Secrets managed outside application source code",
      "CloudWatch logging and production monitoring",
    ],

    challenges: [
      {
        title:
          "Container-to-database connectivity",

        description:
          "The backend worked locally with RDS but initially failed when running inside Docker/ECS. I investigated networking, security groups and container configuration to establish reliable database connectivity.",
      },

      {
        title:
          "ECS health checks",

        description:
          "The application container could connect to PostgreSQL but was marked unhealthy by the load balancer. I configured a dedicated health endpoint and aligned container and ALB health checks.",
      },

      {
        title:
          "Secure production networking",

        description:
          "The architecture required separating internet-facing resources from application and database workloads while allowing only required traffic between layers.",
      },
    ],

    security: [
      "Private application/database networking",
      "Security Groups",
      "IAM roles",
      "Secrets Manager",
      "HTTPS / ACM",
      "AWS WAF architecture",
    ],

    cicd: [
      "GitHub Push",
      "GitHub Actions",
      "Docker Build",
      "Amazon ECR",
      "ECS Deploy",
    ],

    tech: [
      "AWS",
      "VPC",
      "ECS Fargate",
      "Docker",
      "Amazon ECR",
      "Amazon RDS",
      "PostgreSQL",
      "S3",
      "CloudFront",
      "ALB",
      "AWS Secrets Manager",
      "IAM",
      "ACM",
      "GitHub Actions",
      "React",
      "Node.js",
    ],

    images: [project1],

    github: "",

    live: "",
  },

  {
    id: 2,

    number: "02",

    category:
      "AWS / Docker / Security",

    title:
      "Secure Containerized AWS Deployment",

    shortTitle:
      "Secure AWS Deployment",

    featured: false,

    description:
      "Deployed a containerized application on AWS with secure networking, HTTPS routing and automated deployment practices.",

    problem:
      "The application needed a repeatable deployment process with secure public access while keeping application configuration and infrastructure concerns separated.",

    solution:
      "Containerized the application using Docker and deployed it on AWS with controlled network access, HTTPS configuration and reverse-proxy based routing.",

    architecture: [
      "Internet",
      "HTTPS",
      "AWS EC2",
      "Reverse Proxy",
      "Docker",
      "Application",
    ],

    architectureDetails: [
      {
        label: "Runtime",
        value: "Docker",
      },
      {
        label: "Compute",
        value: "AWS EC2",
      },
      {
        label: "Routing",
        value: "Traefik",
      },
      {
        label: "Security",
        value: "HTTPS",
      },
      {
        label: "Database",
        value: "Supabase",
      },
    ],

    highlights: [
      "Dockerized application environment",
      "AWS compute deployment",
      "HTTPS traffic routing",
      "Reverse proxy configuration",
      "Environment-based configuration",
      "Deployment automation workflow",
    ],

    challenges: [
      {
        title:
          "Secure application exposure",

        description:
          "Configured the application so only required services were exposed publicly while internal container communication remained controlled.",
      },

      {
        title:
          "Repeatable deployment",

        description:
          "Structured container configuration so the application could be deployed consistently rather than relying on manual server configuration.",
      },
    ],

    security: [
      "HTTPS",
      "Controlled ports",
      "Environment variables",
      "AWS Security Groups",
    ],

    cicd: [
      "Code",
      "Build",
      "Docker",
      "Deploy",
    ],

    tech: [
      "AWS",
      "EC2",
      "Docker",
      "Traefik",
      "Supabase",
      "Linux",
    ],

    images: [project2],

    github: "",

    live: "",
  },

  {
    id: 3,

    number: "03",

    category:
      "AI / Full Stack / Hackathon",

    title:
      "AI-Based Smart Allocation Engine",

    shortTitle:
      "Smart Allocation Engine",

    featured: false,

    description:
      "Built an AI-assisted allocation system for matching candidates and internship opportunities as part of a hackathon problem statement.",

    problem:
      "Large-scale internship allocation requires matching candidates against opportunities while considering multiple attributes, preferences and eligibility constraints.",

    solution:
      "Built a full-stack allocation platform with a Python-based intelligent matching component and a web interface for managing candidate and opportunity data.",

    architecture: [
      "React",
      "API",
      "Python",
      "Allocation Engine",
      "PostgreSQL",
    ],

    architectureDetails: [
      {
        label: "Frontend",
        value: "React",
      },
      {
        label: "Backend",
        value: "Node / Python",
      },
      {
        label: "Data",
        value: "PostgreSQL",
      },
      {
        label: "Logic",
        value: "Smart Matching",
      },
    ],

    highlights: [
      "Smart candidate allocation logic",
      "Full-stack web application",
      "Candidate and internship data processing",
      "Database-backed workflow",
      "Hackathon-oriented rapid development",
    ],

    challenges: [
      {
        title:
          "Multi-factor allocation",

        description:
          "The allocation process needed to account for multiple candidate and opportunity attributes instead of relying on a simple one-field match.",
      },

      {
        title:
          "Connecting intelligence with application workflow",

        description:
          "Integrated matching logic with the full-stack application so results could be processed and presented through a usable interface.",
      },
    ],

    security: [
      "Input validation",
      "Controlled API access",
      "Database-backed data handling",
    ],

    cicd: [
      "Input",
      "Processing",
      "Matching",
      "Allocation",
    ],

    tech: [
      "Python",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AI / Matching",
    ],

    images: [project3],

    github: "",

    live: "",
  },

  // {
  //   id: 4,

  //   number: "04",

  //   category:
  //     "Full Stack / Inventory",

  //   title:
  //     "StockMaster Inventory Management System",

  //   shortTitle:
  //     "StockMaster",

  //   featured: false,

  //   description:
  //     "A full-stack inventory management solution designed for managing products, stock operations and business workflows.",

  //   problem:
  //     "Inventory workflows require clear visibility into products and stock movement while keeping data organized and easy to manage.",

  //   solution:
  //     "Built a full-stack inventory management platform with structured product management, database-backed operations and a responsive user interface.",

  //   architecture: [
  //     "React",
  //     "API",
  //     "Business Logic",
  //     "Database",
  //   ],

  //   architectureDetails: [
  //     {
  //       label: "Interface",
  //       value: "React",
  //     },
  //     {
  //       label: "Backend",
  //       value: "API",
  //     },
  //     {
  //       label: "Storage",
  //       value: "Database",
  //     },
  //     {
  //       label: "Domain",
  //       value: "Inventory",
  //     },
  //   ],

  //   highlights: [
  //     "Inventory management workflows",
  //     "Product and stock operations",
  //     "Responsive frontend",
  //     "Database-backed application",
  //     "Hackathon project development",
  //   ],

  //   challenges: [
  //     {
  //       title:
  //         "Inventory state management",

  //       description:
  //         "Maintained consistent product and stock information across frontend interactions and backend data operations.",
  //     },
  //   ],

  //   security: [
  //     "Input validation",
  //     "API structure",
  //     "Controlled data operations",
  //   ],

  //   cicd: [
  //     "Frontend",
  //     "API",
  //     "Logic",
  //     "Database",
  //   ],

  //   tech: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "Database",
  //     "JavaScript",
  //   ],

  //   images: [project4],

  //   github: "",

  //   live: "",
  // },
];

/* =====================================================
   SMALL ARCHITECTURE FLOW
===================================================== */

const ArchitectureFlow = ({
  items,
  compact = false,
}) => {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center

        gap-1.5
        sm:gap-2
      "
    >
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="
            flex
            items-center
            gap-1.5
            sm:gap-2
          "
        >
          <span
            className={`
              border

              font-mono

              ${
                compact
                  ? "px-2 py-1 text-[9px]"
                  : "px-3 py-2 text-[10px] sm:text-xs"
              }

              rounded-lg
            `}
            style={{
              borderColor:
                "var(--border-active)",

              background:
                "var(--accent-soft)",

              color:
                "var(--accent)",
            }}
          >
            {item}
          </span>

          {index <
            items.length - 1 && (
            <ArrowRight
              size={compact ? 10 : 12}
              style={{
                color:
                  "var(--text-muted)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

/* =====================================================
   FEATURED PROJECT
===================================================== */

const FeaturedProject = ({
  project,
  onOpen,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.65,
      }}
      className="
        relative

        overflow-hidden

        rounded-[2rem]

        border

        glass-panel
      "
      style={{
        borderColor:
          "var(--border)",
      }}
    >
      {/* Header */}

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
          borderColor:
            "var(--border)",
        }}
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              text-xs
              font-mono
            "
            style={{
              color:
                "var(--accent)",
            }}
          >
            {project.number}
          </span>

          <span
            className="
              text-[9px]
              sm:text-[10px]

              uppercase
              tracking-[0.14em]

              font-mono
            "
            style={{
              color:
                "var(--text-muted)",
            }}
          >
            FEATURED DEPLOYMENT
          </span>
        </div>

        <div
          className="
            flex
            items-center
            gap-2

            text-[9px]
            font-mono
          "
          style={{
            color:
              "var(--accent)",
          }}
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

          PRODUCTION
        </div>
      </div>

      <div
        className="
          grid
          lg:grid-cols-[1.05fr_.95fr]
        "
      >
        {/* Information */}

        <div
          className="
            p-6
            sm:p-8
            lg:p-10

            flex
            flex-col
            justify-center
          "
        >
          <p
            className="
              text-[10px]

              uppercase
              tracking-[0.16em]

              font-mono
            "
            style={{
              color:
                "var(--accent)",
            }}
          >
            {project.category}
          </p>

          <h3
            className="
              mt-4

              max-w-2xl

              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              tracking-[-0.04em]

              leading-[1.05]
            "
            style={{
              color:
                "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>

          <p
            className="
              mt-5

              max-w-2xl

              text-sm
              sm:text-base

              leading-7
            "
            style={{
              color:
                "var(--text-secondary)",
            }}
          >
            {project.description}
          </p>

          {/* Architecture */}

          <div className="mt-7">
            <p
              className="
                mb-3

                text-[9px]

                uppercase
                tracking-[0.15em]

                font-mono
              "
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              Production flow
            </p>

            <ArchitectureFlow
              items={
                project.architecture
              }
            />
          </div>

          {/* Tags */}

          <div
            className="
              mt-7

              flex
              flex-wrap

              gap-2
            "
          >
            {project.tech
              .slice(0, 7)
              .map((tech) => (
                <span
                  key={tech}
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

                    background:
                      "var(--surface)",

                    color:
                      "var(--text-secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
          </div>

          <button
            type="button"
            onClick={() =>
              onOpen(project)
            }
            className="
              group

              mt-8

              w-fit

              inline-flex
              items-center
              gap-2

              px-5
              py-3

              rounded-xl

              font-semibold
              text-sm

              transition-all
              duration-300

              hover:-translate-y-1
            "
            style={{
              background:
                "var(--accent)",

              color: "#020617",

              boxShadow:
                "0 15px 40px rgba(var(--accent-rgb), .16)",
            }}
          >
            Explore Case Study

            <ArrowUpRight
              size={16}
              className="
                transition-transform

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>

        {/* Visual */}

        <div
          className="
            relative

            min-h-[380px]
            lg:min-h-[570px]

            border-t
            lg:border-t-0
            lg:border-l

            overflow-hidden
          "
          style={{
            borderColor:
              "var(--border)",
          }}
        >
          <img
            src={project.images[0]}
            alt={`${project.title} project`}
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover

              opacity-40
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br

              from-transparent
              via-[var(--background)]/40
              to-[var(--background)]
            "
          />

          {/* Architecture overlay */}

          <div
            className="
              absolute
              inset-0

              p-6

              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-full
                max-w-md

                rounded-2xl

                border

                p-5

                backdrop-blur-xl
              "
              style={{
                borderColor:
                  "var(--border-active)",

                background:
                  "rgba(5,8,22,.78)",

                boxShadow:
                  "0 25px 80px rgba(0,0,0,.35)",
              }}
            >
              <div
                className="
                  flex
                  items-center
                  justify-between

                  pb-4

                  border-b
                "
                style={{
                  borderColor:
                    "rgba(148,163,184,.12)",
                }}
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Network
                    size={15}
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  />

                  <span
                    className="
                      text-xs
                      font-mono
                      text-slate-200
                    "
                  >
                    architecture.prod
                  </span>
                </div>

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
                  HEALTHY
                </span>
              </div>

              <div className="mt-5">
                <ArchitectureFlow
                  items={
                    project.architecture
                  }
                  compact
                />
              </div>

              <div
                className="
                  mt-6

                  grid
                  grid-cols-2

                  gap-2
                "
              >
                {project
                  .architectureDetails
                  .map(
                    ({
                      label,
                      value,
                    }) => (
                      <div
                        key={label}
                        className="
                          rounded-xl

                          border

                          p-3
                        "
                        style={{
                          borderColor:
                            "rgba(148,163,184,.12)",

                          background:
                            "rgba(15,23,42,.55)",
                        }}
                      >
                        <p className="text-[8px] font-mono uppercase tracking-wider text-slate-500">
                          {label}
                        </p>

                        <p className="mt-1.5 text-[11px] font-medium text-slate-200">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =====================================================
   SMALL PROJECT CARD
===================================================== */

const ProjectCard = ({
  project,
  index,
  onOpen,
}) => {
  return (
    <motion.article
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
        delay: index * 0.08,
      }}
      onClick={() =>
        onOpen(project)
      }
      className="
        group

        relative

        rounded-[1.6rem]

        border

        overflow-hidden

        cursor-pointer

        transition-all
        duration-300

        hover:-translate-y-1
      "
      style={{
        borderColor:
          "var(--border)",

        background:
          "var(--surface)",
      }}
    >
      {/* Image */}

      <div
        className="
          relative

          h-52

          overflow-hidden

          border-b
        "
        style={{
          borderColor:
            "var(--border)",
        }}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="
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

            from-[var(--background)]
            via-transparent
            to-transparent
          "
        />

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
              "rgba(var(--accent-rgb), .25)",

            color:
              "var(--accent)",
          }}
        >
          {project.number}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p
          className="
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
          {project.category}
        </p>

        <h3
          className="
            mt-3

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
          {project.shortTitle}
        </h3>

        <p
          className="
            mt-3

            text-sm

            leading-6

            line-clamp-3
          "
          style={{
            color:
              "var(--text-secondary)",
          }}
        >
          {project.description}
        </p>

        <div className="mt-5">
          <ArchitectureFlow
            items={
              project.architecture
            }
            compact
          />
        </div>

        <div
          className="
            mt-6
            pt-4

            border-t

            flex
            items-center
            justify-between
          "
          style={{
            borderColor:
              "var(--border)",
          }}
        >
          <div
            className="
              flex
              -space-x-1
            "
          >
            {project.tech
              .slice(0, 4)
              .map((tech) => (
                <span
                  key={tech}
                  title={tech}
                  className="
                    w-7
                    h-7

                    rounded-full

                    border

                    flex
                    items-center
                    justify-center

                    text-[8px]
                    font-mono
                  "
                  style={{
                    borderColor:
                      "var(--border)",

                    background:
                      "var(--surface-solid)",

                    color:
                      "var(--text-secondary)",
                  }}
                >
                  {tech
                    .charAt(0)
                    .toUpperCase()}
                </span>
              ))}
          </div>

          <span
            className="
              flex
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
            Case Study

            <ArrowUpRight
              size={14}
              className="
                transition-transform

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

/* =====================================================
   CASE STUDY MODAL
===================================================== */

const CaseStudyModal = ({
  project,
  onClose,
}) => {
  const [imageIndex, setImageIndex] =
    useState(0);

  useEffect(() => {
    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event,
    ) => {
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

  const nextImage = () => {
    setImageIndex(
      (current) =>
        (current + 1) %
        project.images.length,
    );
  };

  const previousImage = () => {
    setImageIndex(
      (current) =>
        (current -
          1 +
          project.images.length) %
        project.images.length,
    );
  };

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

        z-[100]

        overflow-y-auto

        bg-black/75

        backdrop-blur-xl

        p-3
        sm:p-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative

          max-w-6xl
          mx-auto

          my-3
          sm:my-8

          rounded-[1.75rem]

          border

          overflow-hidden

          shadow-2xl
        "
        style={{
          background:
            "var(--background-secondary)",

          borderColor:
            "var(--border)",
        }}
      >
        {/* Sticky modal navigation */}

        <div
          className="
            sticky
            top-0

            z-30

            min-h-16

            px-4
            sm:px-6

            flex
            items-center
            justify-between

            border-b

            backdrop-blur-2xl
          "
          style={{
            background:
              "var(--navbar-bg)",

            borderColor:
              "var(--border)",
          }}
        >
          <div
            className="
              min-w-0

              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                shrink-0

                text-xs
                font-mono
              "
              style={{
                color:
                  "var(--accent)",
              }}
            >
              {project.number}
            </span>

            <div className="min-w-0">
              <p
                className="
                  truncate

                  text-xs
                  sm:text-sm

                  font-semibold
                "
                style={{
                  color:
                    "var(--text-primary)",
                }}
              >
                {project.shortTitle}
              </p>

              <p
                className="
                  hidden
                  sm:block

                  mt-0.5

                  text-[9px]
                  font-mono
                "
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                engineering.case-study
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="
              shrink-0

              w-10
              h-10

              rounded-xl

              border

              flex
              items-center
              justify-center

              transition-transform

              hover:rotate-90
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
            <X size={18} />
          </button>
        </div>

        {/* Hero */}

        <div
          className="
            grid
            lg:grid-cols-[1.05fr_.95fr]
          "
        >
          <div
            className="
              p-6
              sm:p-9
              lg:p-12
            "
          >
            <div className="section-label">
              <Layers3 size={12} />

              {project.category}
            </div>

            <h2
              className="
                mt-4

                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-bold

                tracking-[-0.045em]

                leading-[1.05]
              "
              style={{
                color:
                  "var(--text-primary)",
              }}
            >
              {project.title}
            </h2>

            <p
              className="
                mt-5

                text-sm
                sm:text-base

                leading-7
              "
              style={{
                color:
                  "var(--text-secondary)",
              }}
            >
              {project.description}
            </p>

            <div
              className="
                mt-7

                flex
                flex-wrap

                gap-2
              "
            >
              {project.tech.map(
                (tech) => (
                  <span
                    key={tech}
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

                      background:
                        "var(--surface)",

                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Screenshot */}

          <div
            className="
              relative

              min-h-[320px]

              border-t
              lg:border-t-0
              lg:border-l

              overflow-hidden
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <img
              src={
                project.images[
                  imageIndex
                ]
              }
              alt={`${project.title} screenshot ${
                imageIndex + 1
              }`}
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

                from-black/60
                via-transparent
                to-transparent
              "
            />

            {project.images.length >
              1 && (
              <>
                <button
                  type="button"
                  onClick={
                    previousImage
                  }
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2

                    w-10
                    h-10

                    rounded-full

                    bg-black/60

                    flex
                    items-center
                    justify-center

                    text-white

                    backdrop-blur
                  "
                >
                  <ChevronLeft
                    size={18}
                  />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2

                    w-10
                    h-10

                    rounded-full

                    bg-black/60

                    flex
                    items-center
                    justify-center

                    text-white

                    backdrop-blur
                  "
                >
                  <ChevronRight
                    size={18}
                  />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Case study content */}

        <div
          className="
            border-t
          "
          style={{
            borderColor:
              "var(--border)",
          }}
        >
          {/* Problem + solution */}

          <div
            className="
              grid
              md:grid-cols-2
            "
          >
            <CaseSection
              icon={Terminal}
              eyebrow="01 // PROBLEM"
              title="What needed to be solved?"
              content={project.problem}
            />

            <CaseSection
              icon={Rocket}
              eyebrow="02 // SOLUTION"
              title="How I approached it"
              content={project.solution}
              borderLeft
            />
          </div>

          {/* Architecture */}

          <div
            className="
              p-6
              sm:p-9
              lg:p-12

              border-t
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <SectionHeading
              icon={Network}
              eyebrow="03 // ARCHITECTURE"
              title="System design"
            />

            <div
              className="
                mt-7

                p-5
                sm:p-7

                rounded-2xl

                border
              "
              style={{
                borderColor:
                  "var(--border)",

                background:
                  "var(--surface)",
              }}
            >
              <ArchitectureFlow
                items={
                  project.architecture
                }
              />

              <div
                className="
                  mt-7

                  grid
                  grid-cols-2
                  lg:grid-cols-4

                  gap-3
                "
              >
                {project
                  .architectureDetails
                  .map(
                    ({
                      label,
                      value,
                    }) => (
                      <div
                        key={label}
                        className="
                          rounded-xl

                          border

                          p-4
                        "
                        style={{
                          borderColor:
                            "var(--border)",
                        }}
                      >
                        <p
                          className="
                            text-[9px]

                            uppercase
                            tracking-wider

                            font-mono
                          "
                          style={{
                            color:
                              "var(--text-muted)",
                          }}
                        >
                          {label}
                        </p>

                        <p
                          className="
                            mt-2

                            text-sm

                            font-semibold
                          "
                          style={{
                            color:
                              "var(--text-primary)",
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>

          {/* Highlights */}

          <div
            className="
              p-6
              sm:p-9
              lg:p-12

              border-t
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <SectionHeading
              icon={CheckCircle2}
              eyebrow="04 // IMPLEMENTATION"
              title="What I built"
            />

            <div
              className="
                mt-7

                grid
                md:grid-cols-2

                gap-3
              "
            >
              {project.highlights.map(
                (item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3

                      p-4

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
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                      "
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Challenges */}

          <div
            className="
              p-6
              sm:p-9
              lg:p-12

              border-t
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <SectionHeading
              icon={Code2}
              eyebrow="05 // ENGINEERING"
              title="Challenges I solved"
            />

            <div
              className="
                mt-7

                grid
                lg:grid-cols-3

                gap-4
              "
            >
              {project.challenges.map(
                (
                  challenge,
                  index,
                ) => (
                  <div
                    key={
                      challenge.title
                    }
                    className="
                      rounded-2xl

                      border

                      p-5
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
                        text-[10px]
                        font-mono
                      "
                      style={{
                        color:
                          "var(--accent)",
                      }}
                    >
                      ISSUE_
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <h4
                      className="
                        mt-3

                        font-semibold

                        leading-6
                      "
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      {
                        challenge.title
                      }
                    </h4>

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
                        challenge.description
                      }
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Security + pipeline */}

          <div
            className="
              grid
              lg:grid-cols-2

              border-t
            "
            style={{
              borderColor:
                "var(--border)",
            }}
          >
            <div
              className="
                p-6
                sm:p-9
                lg:p-12
              "
            >
              <SectionHeading
                icon={ShieldCheck}
                eyebrow="06 // SECURITY"
                title="Security controls"
              />

              <div
                className="
                  mt-6

                  flex
                  flex-wrap

                  gap-2
                "
              >
                {project.security.map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        inline-flex
                        items-center
                        gap-2

                        px-3
                        py-2

                        rounded-lg

                        border

                        text-xs
                      "
                      style={{
                        borderColor:
                          "var(--border-active)",

                        background:
                          "var(--accent-soft)",

                        color:
                          "var(--text-primary)",
                      }}
                    >
                      <LockKeyhole
                        size={12}
                        style={{
                          color:
                            "var(--accent)",
                        }}
                      />

                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div
              className="
                p-6
                sm:p-9
                lg:p-12

                border-t
                lg:border-t-0
                lg:border-l
              "
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              <SectionHeading
                icon={GitBranch}
                eyebrow="07 // DELIVERY"
                title="Deployment flow"
              />

              <div className="mt-6">
                <ArchitectureFlow
                  items={project.cicd}
                  compact
                />
              </div>
            </div>
          </div>

          {/* CTA */}

          {(project.github ||
            project.live) && (
            <div
              className="
                p-6
                sm:p-9

                border-t

                flex
                flex-wrap
                gap-3
              "
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    px-5
                    py-3

                    rounded-xl

                    border

                    text-sm
                    font-semibold
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
                  <Github size={16} />

                  View Source

                  <ExternalLink
                    size={13}
                  />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
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
                  Live Deployment

                  <ArrowUpRight
                    size={15}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =====================================================
   REUSABLE CASE COMPONENTS
===================================================== */

const SectionHeading = ({
  icon: Icon,
  eyebrow,
  title,
}) => {
  return (
    <div>
      <div
        className="
          flex
          items-center
          gap-2

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
        <Icon size={13} />

        {eyebrow}
      </div>

      <h3
        className="
          mt-3

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
        {title}
      </h3>
    </div>
  );
};

const CaseSection = ({
  icon,
  eyebrow,
  title,
  content,
  borderLeft = false,
}) => {
  return (
    <div
      className={`
        p-6
        sm:p-9
        lg:p-12

        ${
          borderLeft
            ? "border-t md:border-t-0 md:border-l"
            : ""
        }
      `}
      style={{
        borderColor:
          "var(--border)",
      }}
    >
      <SectionHeading
        icon={icon}
        eyebrow={eyebrow}
        title={title}
      />

      <p
        className="
          mt-5

          text-sm
          sm:text-base

          leading-7
        "
        style={{
          color:
            "var(--text-secondary)",
        }}
      >
        {content}
      </p>
    </div>
  );
};

/* =====================================================
   MAIN PROJECTS
===================================================== */

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const featuredProject =
    projects.find(
      (project) =>
        project.featured,
    );

  const otherProjects =
    projects.filter(
      (project) =>
        !project.featured,
    );

  return (
    <>
      <section
        id="projects"
        className="portfolio-section"
      >
        <div className="section-container">
          {/* Heading */}

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
              <Rocket size={13} />

              deployed.work
            </div>

            <h2 className="section-title">
              Engineering beyond{" "}
              <span>localhost.</span>
            </h2>

            <p className="section-description">
              Projects where I worked across
              application development,
              infrastructure, containers,
              databases, security and
              deployment—not just the user
              interface.
            </p>
          </motion.div>

          {/* Featured */}

          <FeaturedProject
            project={featuredProject}
            onOpen={
              setSelectedProject
            }
          />

          {/* More projects heading */}

          <div
            className="
              mt-14
              mb-6

              flex
              items-end
              justify-between

              gap-5
            "
          >
            <div>
              <p
                className="
                  text-[9px]

                  uppercase
                  tracking-[0.16em]

                  font-mono
                "
                style={{
                  color:
                    "var(--accent)",
                }}
              >
                PROJECT INDEX
              </p>

              <h3
                className="
                  mt-2

                  text-xl
                  sm:text-2xl

                  font-bold
                "
                style={{
                  color:
                    "var(--text-primary)",
                }}
              >
                More things I've built
              </h3>
            </div>

            <span
              className="
                hidden
                sm:block

                text-[10px]
                font-mono
              "
              style={{
                color:
                  "var(--text-muted)",
              }}
            >
              {String(
                projects.length,
              ).padStart(
                2,
                "0",
              )}{" "}
              TOTAL
            </span>
          </div>

          <div
            className="
              grid

              md:grid-cols-2
              xl:grid-cols-3

              gap-5
            "
          >
            {otherProjects.map(
              (
                project,
                index,
              ) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={
                    setSelectedProject
                  }
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* Modal */}

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={
              selectedProject
            }
            onClose={() =>
              setSelectedProject(
                null,
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;