import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  useTheme,
} from "../context/ThemeContext";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Cloud,
  Code2,
  Download,
  Github,
  Home,
  Layers3,
  Linkedin,
  Mail,
  Map,
  MoonStar,
  Search,
  Terminal,
  UserRound,
  X,
} from "lucide-react";

const CommandPalette = () => {
  const {
    setTheme,
  } = useTheme();

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    query,
    setQuery,
  ] = useState("");

  const inputRef =
    useRef(null);

  /*
    Replace these URLs.

    resumePath should match your
    actual public resume filename.
  */

  const resumePath =
    "/Purvanshu_cloud_Resume-4.pdf";

  const githubUrl =
    "https://github.com/Puru1375";

  const linkedinUrl =
    "https://www.linkedin.com/in/purvanshu-machhi-77622532a/";

  const commands = useMemo(
    () => [
      /* NAVIGATION */

      {
        id: "home",
        group: "Navigation",
        label: "Go to Home",
        description:
          "Return to the hero section",
        icon: Home,

        keywords:
          "home hero start",

        action: () =>
          scrollToSection(
            "home",
          ),
      },

      {
        id: "about",
        group: "Navigation",
        label: "About Me",
        description:
          "Developer profile and focus",
        icon: UserRound,

        keywords:
          "about profile developer",

        action: () =>
          scrollToSection(
            "about",
          ),
      },

      {
        id: "projects",
        group: "Navigation",
        label:
          "View Engineering Projects",
        description:
          "Open project case studies",
        icon: Code2,

        keywords:
          "projects aws case study work",

        action: () =>
          scrollToSection(
            "projects",
          ),
      },

      {
        id: "skills",
        group: "Navigation",
        label:
          "Explore Capability Matrix",
        description:
          "Cloud, DevOps and development skills",
        icon: Layers3,

        keywords:
          "skills technologies aws devops",

        action: () =>
          scrollToSection(
            "skills",
          ),
      },

      {
        id: "journey",
        group: "Navigation",
        label:
          "View Career Journey",
        description:
          "Development to cloud journey",
        icon: Map,

        keywords:
          "journey timeline career",

        action: () =>
          scrollToSection(
            "journey",
          ),
      },

      {
        id: "contact",
        group: "Navigation",
        label: "Contact Me",
        description:
          "Open communication endpoint",
        icon: Mail,

        keywords:
          "contact email message hire",

        action: () =>
          scrollToSection(
            "contact",
          ),
      },

      /* ACTIONS */

      {
        id: "resume",
        group: "Actions",
        label:
          "Download Resume",
        description:
          "Open my latest resume",
        icon: Download,

        keywords:
          "resume cv download",

        action: () => {
          window.open(
            resumePath,
            "_blank",
          );
        },
      },

      {
        id: "github",
        group: "Actions",
        label: "Open GitHub",
        description:
          "View source code and repositories",
        icon: Github,

        keywords:
          "github repositories code",

        action: () => {
          window.open(
            githubUrl,
            "_blank",
            "noopener,noreferrer",
          );
        },
      },

      {
        id: "linkedin",
        group: "Actions",
        label:
          "Open LinkedIn",
        description:
          "Connect professionally",
        icon: Linkedin,

        keywords:
          "linkedin professional connect",

        action: () => {
          window.open(
            linkedinUrl,
            "_blank",
            "noopener,noreferrer",
          );
        },
      },

      /* THEMES */

      {
        id: "cloud-theme",
        group: "Appearance",
        label:
          "Activate Cloud Theme",
        description:
          "Switch accent to cloud cyan",
        icon: Cloud,

        keywords:
          "theme cloud cyan",

        action: () =>
          setTheme("cloud"),
      },

      {
        id: "terminal-theme",
        group: "Appearance",
        label:
          "Activate Terminal Theme",
        description:
          "Switch accent to terminal green",
        icon: Terminal,

        keywords:
          "theme terminal green",

        action: () =>
          setTheme(
            "terminal",
          ),
      },

      {
        id: "aws-theme",
        group: "Appearance",
        label:
          "Activate AWS Theme",
        description:
          "Switch accent to AWS orange",
        icon: Cloud,

        keywords:
          "theme aws orange",

        action: () =>
          setTheme("aws"),
      },

      {
        id: "nebula-theme",
        group: "Appearance",
        label:
          "Activate Nebula Theme",
        description:
          "Switch accent to nebula purple",
        icon: MoonStar,

        keywords:
          "theme nebula purple",

        action: () =>
          setTheme(
            "nebula",
          ),
      },
    ],
    [],
  );

  const filteredCommands =
    commands.filter(
      (command) => {
        const searchable = `
          ${command.label}
          ${command.description}
          ${command.keywords}
          ${command.group}
        `.toLowerCase();

        return searchable.includes(
          query
            .trim()
            .toLowerCase(),
        );
      },
    );

  const groupedCommands =
    filteredCommands.reduce(
      (
        groups,
        command,
      ) => {
        if (
          !groups[
            command.group
          ]
        ) {
          groups[
            command.group
          ] = [];
        }

        groups[
          command.group
        ].push(command);

        return groups;
      },
      {},
    );

    useEffect(() => {
  const handleKeyDown = (
    event,
  ) => {
    if (
      (event.ctrlKey ||
        event.metaKey) &&
      event.key.toLowerCase() ===
        "k"
    ) {
      event.preventDefault();

      setIsOpen(
        (current) =>
          !current,
      );
    }

    if (
      event.key ===
      "Escape"
    ) {
      setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  window.addEventListener(
    "keydown",
    handleKeyDown,
  );

  window.addEventListener(
    "open-command-palette",
    handleOpen,
  );

  return () => {
    window.removeEventListener(
      "keydown",
      handleKeyDown,
    );

    window.removeEventListener(
      "open-command-palette",
      handleOpen,
    );
  };
}, []);

  useEffect(() => {
    const handleKeyDown = (
      event,
    ) => {
      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() ===
          "k"
      ) {
        event.preventDefault();

        setIsOpen(
          (current) =>
            !current,
        );
      }

      if (
        event.key ===
        "Escape"
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");

      document.body.style.overflow =
        "hidden";

      setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [isOpen]);

  const executeCommand = (
    command,
  ) => {
    command.action();

    setIsOpen(false);
  };

  return (
    <>
      {/* Floating shortcut */}

      <button
        type="button"
        onClick={() =>
          setIsOpen(true)
        }
        aria-label="Open command palette"
        className="
          fixed

          bottom-5
          right-5

          z-40

          flex lg:hidden

          items-center
          gap-2

          px-3
          py-2.5

          rounded-xl

          border

          backdrop-blur-xl

          shadow-lg

          transition-all

          hover:-translate-y-1
        "
        style={{
          background:
            "var(--navbar-bg)",

          borderColor:
            "var(--border)",

          color:
            "var(--text-secondary)",
        }}
      >
        <Terminal
          size={13}
          style={{
            color:
              "var(--accent)",
          }}
        />

        <span
          className="
            hidden sm:inline
            text-[10px]
            font-mono
          "
        >
          COMMAND
        </span>

        <kbd
          className="
            px-1.5
            py-0.5

            rounded

            border

            text-[8px]
            font-mono
          "
          style={{
            borderColor:
              "var(--border)",

            background:
              "var(--surface)",

            color:
              "var(--text-muted)",
          }}
        >
          Ctrl K
        </kbd>
      </button>

      {/* Palette */}

      <AnimatePresence>
        {isOpen && (
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
            onMouseDown={(
              event,
            ) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setIsOpen(
                  false,
                );
              }
            }}
            className="
              fixed
              inset-0

              z-[200]

              bg-black/70

              backdrop-blur-xl

              px-4
              pt-[10vh]

              sm:pt-[15vh]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                max-w-2xl
                mx-auto

                rounded-[1.4rem]

                border

                overflow-hidden

                shadow-2xl
              "
              style={{
                background:
                  "var(--background-secondary)",

                borderColor:
                  "var(--border-active)",
              }}
            >
              {/* Search */}

              <div
                className="
                  h-16

                  px-4

                  flex
                  items-center

                  gap-3

                  border-b
                "
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                <Search
                  size={18}
                  style={{
                    color:
                      "var(--accent)",
                  }}
                />

                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(
                    event,
                  ) =>
                    setQuery(
                      event
                        .target
                        .value,
                    )
                  }
                  placeholder="Search commands..."
                  className="
                    flex-1

                    bg-transparent

                    outline-none

                    text-sm
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(
                      false,
                    )
                  }
                  className="
                    w-8
                    h-8

                    rounded-lg

                    border

                    flex
                    items-center
                    justify-center
                  "
                  style={{
                    borderColor:
                      "var(--border)",

                    color:
                      "var(--text-muted)",
                  }}
                >
                  <X size={14} />
                </button>
              </div>

              {/* Results */}

              <div
                className="
                  max-h-[60vh]

                  overflow-y-auto

                  p-2
                "
              >
                {Object.entries(
                  groupedCommands,
                ).map(
                  ([
                    group,
                    items,
                  ]) => (
                    <div
                      key={group}
                      className="
                        mb-2

                        last:mb-0
                      "
                    >
                      <p
                        className="
                          px-3
                          py-2

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
                        {group}
                      </p>

                      {items.map(
                        (
                          command,
                        ) => {
                          const Icon =
                            command.icon;

                          return (
                            <button
                              key={
                                command.id
                              }
                              type="button"
                              onClick={() =>
                                executeCommand(
                                  command,
                                )
                              }
                              className="
                                group

                                w-full

                                flex
                                items-center

                                gap-3

                                p-3

                                rounded-xl

                                text-left

                                transition-all

                                hover:bg-[var(--surface-hover)]
                              "
                            >
                              <div
                                className="
                                  w-9
                                  h-9

                                  shrink-0

                                  rounded-lg

                                  border

                                  flex
                                  items-center
                                  justify-center
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
                                <Icon
                                  size={
                                    15
                                  }
                                />
                              </div>

                              <div
                                className="
                                  min-w-0
                                  flex-1
                                "
                              >
                                <p
                                  className="
                                    text-sm
                                    font-medium
                                  "
                                  style={{
                                    color:
                                      "var(--text-primary)",
                                  }}
                                >
                                  {
                                    command.label
                                  }
                                </p>

                                <p
                                  className="
                                    mt-0.5

                                    truncate

                                    text-[10px]
                                  "
                                  style={{
                                    color:
                                      "var(--text-muted)",
                                  }}
                                >
                                  {
                                    command.description
                                  }
                                </p>
                              </div>

                              <span
                                className="
                                  opacity-0

                                  group-hover:opacity-100

                                  text-[9px]
                                  font-mono

                                  transition-opacity
                                "
                                style={{
                                  color:
                                    "var(--accent)",
                                }}
                              >
                                RUN
                              </span>
                            </button>
                          );
                        },
                      )}
                    </div>
                  ),
                )}

                {filteredCommands.length ===
                  0 && (
                  <div
                    className="
                      py-12

                      text-center
                    "
                  >
                    <Terminal
                      size={24}
                      className="mx-auto"
                      style={{
                        color:
                          "var(--text-muted)",
                      }}
                    />

                    <p
                      className="
                        mt-3

                        text-sm
                      "
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      No command
                      found.
                    </p>

                    <p
                      className="
                        mt-1

                        text-[10px]
                        font-mono
                      "
                      style={{
                        color:
                          "var(--text-muted)",
                      }}
                    >
                      try: projects,
                      resume, aws...
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}

              <div
                className="
                  px-4
                  py-3

                  border-t

                  flex
                  items-center
                  justify-between

                  gap-3
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

                    text-[9px]
                    font-mono
                  "
                  style={{
                    color:
                      "var(--text-muted)",
                  }}
                >
                  <span>
                    ↵ select
                  </span>

                  <span>
                    esc close
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
                  command.center
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================
   HELPERS
========================================= */

const scrollToSection = (
  id,
) => {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

export default CommandPalette;