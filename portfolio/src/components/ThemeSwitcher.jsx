import {
  Check,
  Cloud,
  Moon,
  Sun,
  Terminal,
  CloudCog,
  Sparkles,
} from "lucide-react";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "../context/ThemeContext";

const themes = [
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
  },
  {
    id: "terminal",
    label: "Terminal",
    icon: Terminal,
  },
  {
    id: "aws",
    label: "AWS",
    icon: CloudCog,
  },
  {
    id: "nebula",
    label: "Nebula",
    icon: Sparkles,
  },
];

const ThemeSwitcher = () => {
  const {
    theme,
    setTheme,
    mode,
    toggleMode,
  } = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2">

      {/* Light / Dark */}

      <button
        type="button"
        onClick={toggleMode}
        aria-label="Toggle light and dark mode"
        className="
          w-10
          h-10
          rounded-xl

          flex
          items-center
          justify-center

          border

          transition-all
          duration-300

          hover:-translate-y-0.5
        "
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        {mode === "dark" ? (
          <Sun size={17} />
        ) : (
          <Moon size={17} />
        )}
      </button>

      {/* Theme selector */}

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Choose portfolio theme"
          aria-expanded={open}
          className="
            h-10
            px-3

            rounded-xl

            flex
            items-center
            gap-2

            border

            text-sm
            font-medium

            transition-all
            duration-300

            hover:-translate-y-0.5
          "
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        >
          <span
            className="
              w-2.5
              h-2.5
              rounded-full
            "
            style={{
              background: "var(--accent)",
              boxShadow:
                "0 0 12px rgba(var(--accent-rgb), .8)",
            }}
          />

          <span className="hidden sm:inline">
            Theme
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              transition={{
                duration: 0.16,
              }}
              className="
                absolute
                right-0
                top-[calc(100%+12px)]

                w-52

                rounded-2xl

                border

                p-2

                backdrop-blur-xl

                shadow-2xl

                z-[100]
              "
              style={{
                background:
                  "var(--surface-solid)",
                borderColor:
                  "var(--border)",
              }}
            >
              <p
                className="
                  px-3
                  pt-2
                  pb-3

                  text-[11px]
                  uppercase
                  tracking-[0.16em]

                  font-mono
                "
                style={{
                  color:
                    "var(--text-muted)",
                }}
              >
                Interface Theme
              </p>

              {themes.map((item) => {
                const Icon = item.icon;
                const active =
                  theme === item.id;

                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      setTheme(item.id);
                      setOpen(false);
                    }}
                    className="
                      w-full

                      flex
                      items-center
                      justify-between

                      px-3
                      py-2.5

                      rounded-xl

                      text-sm

                      transition-all
                    "
                    style={{
                      background: active
                        ? "var(--accent-soft)"
                        : "transparent",

                      color: active
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                    }}
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <Icon size={16} />

                      {item.label}
                    </span>

                    {active && (
                      <Check size={15} />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThemeSwitcher;