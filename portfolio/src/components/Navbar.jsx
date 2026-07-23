import {
  BriefcaseBusiness,
  Code2,
  Home,
  Layers3,
  Map,
  Menu,
  Command,
  UserRound,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Code2,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Layers3,
  },
  {
    name: "Journey",
    href: "#journey",
    icon: Map,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: BriefcaseBusiness,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections =
        navLinks
          .map((link) =>
            document.querySelector(
              link.href,
            ),
          )
          .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      closeOnResize,
    );

    return () =>
      window.removeEventListener(
        "resize",
        closeOnResize,
      );
  }, []);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0

          z-50

          px-4
          sm:px-6

          pointer-events-none
        "
      >
        <motion.nav
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
          }}
          className={`
            max-w-7xl
            mx-auto

            mt-3

            rounded-2xl

            border

            pointer-events-auto

            transition-all
            duration-300

            ${
              scrolled
                ? "shadow-2xl"
                : ""
            }
          `}
          style={{
            background:
              "var(--navbar-bg)",

            borderColor:
              "var(--border)",

            backdropFilter:
              "blur(20px)",

            WebkitBackdropFilter:
              "blur(20px)",
          }}
        >
          <div
            className="
              h-[66px]

              px-4
              sm:px-5

              flex
              items-center
              justify-between

              gap-4
            "
          >
            {/* Logo */}

            <a
              href="#home"
              className="
                flex
                items-center
                gap-3

                shrink-0
              "
              onClick={() =>
                setIsOpen(false)
              }
            >
              <div
                className="
                  relative

                  w-9
                  h-9

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  border

                  font-mono
                  font-bold

                  text-sm
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
                PM

                <span
                  className="
                    absolute
                    -top-1
                    -right-1

                    w-2
                    h-2

                    rounded-full
                  "
                  style={{
                    background:
                      "var(--accent)",

                    boxShadow:
                      "0 0 10px rgba(var(--accent-rgb), .8)",
                  }}
                />
              </div>

              <div className="hidden sm:block">
                <p
                  className="
                    text-sm
                    font-semibold

                    leading-none
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Purvanshu
                </p>

                <p
                  className="
                    mt-1.5

                    text-[9px]

                    font-mono

                    uppercase
                    tracking-[0.14em]
                  "
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  Cloud // DevOps
                </p>
              </div>
            </a>

            {/* Desktop links */}

            <div
              className="
                hidden
                md:flex

                items-center

                p-1

                rounded-xl

                border
              "
              style={{
                borderColor:
                  "var(--border)",

                background:
                  "rgba(var(--accent-rgb), .025)",
              }}
            >
              {navLinks.map(
                ({
                  name,
                  href,
                }) => {
                  const id =
                    href.replace("#", "");

                  const active =
                    activeSection === id;

                  return (
                    <a
                      key={name}
                      href={href}
                      className="
                        relative

                        px-4
                        py-2

                        rounded-lg

                        text-xs

                        font-medium

                        transition-colors
                      "
                      style={{
                        color: active
                          ? "var(--accent)"
                          : "var(--text-secondary)",
                      }}
                    >
                      {active && (
                        <motion.span
                          layoutId="navbar-active"
                          className="
                            absolute
                            inset-0

                            rounded-lg

                            -z-10
                          "
                          style={{
                            background:
                              "var(--accent-soft)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}

                      {name}
                    </a>
                  );
                },
              )}
            </div>

            {/* Right */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <button
  type="button"
  onClick={() => {
    window.dispatchEvent(
      new Event(
        "open-command-palette",
      ),
    );
  }}
  aria-label="Open command palette"
  className="
    hidden
    lg:flex

    h-9

    items-center
    gap-2

    px-3

    rounded-lg

    border

    transition-all
  "
  style={{
    borderColor:
      "var(--border)",

    background:
      "var(--surface)",
  }}
>
  <Command
    size={13}
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
    CTRL K
  </span>
</button>
              <ThemeSwitcher />

              <a
                href="#contact"
                className="
                  hidden
                  lg:inline-flex

                  items-center
                  gap-2

                  px-4
                  py-2.5

                  rounded-xl

                  text-xs
                  font-semibold

                  transition-all

                  hover:-translate-y-0.5
                "
                style={{
                  background:
                    "var(--accent)",

                  color: "#020617",
                }}
              >
                Let's Talk

                <span>↗</span>
              </a>

              <button
                type="button"
                aria-label={
                  isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isOpen}
                onClick={() =>
                  setIsOpen(
                    (value) => !value,
                  )
                }
                className="
                  md:hidden

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
                    "var(--surface)",

                  borderColor:
                    "var(--border)",

                  color:
                    "var(--text-primary)",
                }}
              >
                {isOpen ? (
                  <X size={19} />
                ) : (
                  <Menu size={19} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="
                  md:hidden

                  overflow-hidden

                  border-t
                "
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                <div
                  className="
                    p-3

                    grid
                    gap-1
                  "
                >
                  {navLinks.map(
                    ({
                      name,
                      href,
                      icon: Icon,
                    }) => {
                      const active =
                        activeSection ===
                        href.replace(
                          "#",
                          "",
                        );

                      return (
                        <a
                          key={name}
                          href={href}
                          onClick={() =>
                            setIsOpen(true)
                          }
                          className="
                            flex
                            items-center
                            gap-3

                            px-4
                            py-3

                            rounded-xl

                            text-sm

                            transition-colors
                          "
                          style={{
                            background:
                              active
                                ? "var(--accent-soft)"
                                : "transparent",

                            color: active
                              ? "var(--accent)"
                              : "var(--text-secondary)",
                          }}
                        >
                          <Icon
                            size={16}
                          />

                          {name}
                        </a>
                      );
                    },
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;