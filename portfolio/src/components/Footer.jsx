import {
  ArrowUp,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";

const Footer = () => {
  const currentYear =
    new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative

        px-6
        pb-8
        pt-6

        md:px-10
        lg:px-16
        xl:px-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          rounded-[1.6rem]

          border

          overflow-hidden

          glass-panel
        "
        style={{
          borderColor:
            "var(--border)",
        }}
      >
        {/* Main footer */}

        <div
          className="
            p-5
            sm:p-7

            flex
            flex-col

            lg:flex-row

            lg:items-center
            lg:justify-between

            gap-7
          "
        >
          {/* Brand */}

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="
                flex
                items-center
                gap-3

                text-left
              "
            >
              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  border

                  flex
                  items-center
                  justify-center
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
                <Terminal
                  size={17}
                />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-bold

                    tracking-tight
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Purvanshu
                  Machhi
                </p>

                <p
                  className="
                    mt-0.5

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
                  CLOUD & DEVOPS
                  ENGINEER
                </p>
              </div>
            </button>
          </div>

          {/* System status */}

          <div
            className="
              flex
              flex-wrap

              gap-2
            "
          >
            <FooterStatus
              icon={Cloud}
              label="Portfolio"
              value="Online"
            />

            <FooterStatus
              icon={Code2}
              label="Build"
              value="Stable"
            />

            <div
              className="
                flex
                items-center

                gap-2

                px-3
                py-2

                rounded-lg

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
                  w-1.5
                  h-1.5

                  rounded-full
                "
                style={{
                  background:
                    "var(--accent)",

                  boxShadow:
                    "0 0 8px rgba(var(--accent-rgb), .7)",
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
                OPEN TO
                OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Social */}

          <div
            className="
              flex
              items-center

              gap-2
            "
          >
            <SocialButton
              href="https://github.com/Puru1375"
              label="GitHub"
              icon={Github}
            />

            <SocialButton
              href="https://www.linkedin.com/in/purvanshu-machhi-77622532a/"
              label="LinkedIn"
              icon={Linkedin}
            />

            <button
              type="button"
              onClick={
                scrollToTop
              }
              aria-label="Back to top"
              className="
                w-10
                h-10

                rounded-xl

                border

                flex
                items-center
                justify-center

                transition-all

                hover:-translate-y-1
              "
              style={{
                borderColor:
                  "var(--border)",

                background:
                  "var(--surface)",

                color:
                  "var(--accent)",
              }}
            >
              <ArrowUp
                size={16}
              />
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            px-5
            py-3

            sm:px-7

            border-t

            flex
            flex-col
            sm:flex-row

            sm:items-center
            sm:justify-between

            gap-2
          "
          style={{
            borderColor:
              "var(--border)",
          }}
        >
          <p
            className="
              text-[9px]
              font-mono
            "
            style={{
              color:
                "var(--text-muted)",
            }}
          >
            © {currentYear}{" "}
            Purvanshu Machhi.
            Built with React.
          </p>

          <p
            className="
              text-[9px]
              font-mono
            "
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
              $
            </span>{" "}
            uptime --status
            operational
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterStatus = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div
      className="
        flex
        items-center

        gap-2

        px-3
        py-2

        rounded-lg

        border
      "
      style={{
        borderColor:
          "var(--border)",

        background:
          "var(--surface)",
      }}
    >
      <Icon
        size={12}
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
        {label}:
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
        {value}
      </span>
    </div>
  );
};

const SocialButton = ({
  href,
  label,
  icon: Icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-10
        h-10

        rounded-xl

        border

        flex
        items-center
        justify-center

        transition-all

        hover:-translate-y-1
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
      <Icon size={16} />
    </a>
  );
};

export default Footer;