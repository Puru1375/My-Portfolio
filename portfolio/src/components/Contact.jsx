import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Terminal,
} from "lucide-react";

const contactLinks = [
  {
    id: "email",

    label: "Email",

    value:
      "purvanshu1375@gmail.com",

    href:
      "mailto:purvanshu1375@gmail.com",

    icon: Mail,
  },

  {
    id: "linkedin",

    label: "LinkedIn",

    value:
      "Connect professionally",

    href:
      "https://www.linkedin.com/in/purvanshu-machhi-77622532a/",

    icon: Linkedin,
  },

  {
    id: "github",

    label: "GitHub",

    value:
      "Explore my repositories",

    href:
      "https://github.com/Puru1375",

    icon: Github,
  },
];

const Contact = () => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [
    status,
    setStatus,
  ] = useState("idle");

  const [
    copied,
    setCopied,
  ] = useState(false);

  const handleChange = (
    event,
  ) => {
    const {
      name,
      value,
    } = event.target;

    setFormData(
      (current) => ({
        ...current,

        [name]: value,
      }),
    );
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!GOOGLE_SCRIPT_URL) {
    console.error(
      "VITE_GOOGLE_SCRIPT_URL is not configured."
    );

    setStatus("error");
    return;
  }

  setStatus("sending");

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",

      // Required for the current Google Apps Script setup.
      // The response is opaque, so we cannot inspect
      // the HTTP status/body from JavaScript.
      mode: "no-cors",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    setStatus("error");

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  }
};

  const copyEmail =
    async () => {
      const email =
        "purvanshu1375@gmail.com";

      try {
        await navigator.clipboard.writeText(
          email,
        );

        setCopied(true);

        setTimeout(
          () =>
            setCopied(false),
          1800,
        );
      } catch (error) {
        console.error(
          "Unable to copy email:",
          error,
        );
      }
    };

  return (
    <section
      id="contact"
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
            <MessageSquare
              size={13}
            />

            communication.endpoint
          </div>

          <h2 className="section-title">
            Let's build something{" "}
            <span>reliable.</span>
          </h2>

          <p className="section-description">
            I'm interested in
            opportunities where I can
            contribute across cloud,
            DevOps, infrastructure and
            software engineering while
            continuing to grow through
            real production challenges.
          </p>
        </motion.div>

        <div
          className="
            grid

            lg:grid-cols-[.82fr_1.18fr]

            gap-5
          "
        >
          {/* =====================
              LEFT SIDE
          ====================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              flex
              flex-col

              gap-5
            "
          >
            {/* Availability */}

            <div
              className="
                rounded-[1.6rem]

                border

                p-6

                glass-panel
              "
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

                  gap-5
                "
              >
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

                          w-full
                          h-full

                          rounded-full

                          animate-ping

                          opacity-40
                        "
                        style={{
                          background:
                            "var(--accent)",
                        }}
                      />

                      <span
                        className="
                          relative

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

                    AVAILABLE FOR
                    OPPORTUNITIES
                  </div>

                  <h3
                    className="
                      mt-4

                      text-2xl

                      font-bold

                      tracking-tight
                    "
                    style={{
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    Open to Cloud &
                    DevOps roles.
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
                    Entry-level and
                    junior opportunities
                    where I can work on
                    cloud infrastructure,
                    CI/CD, containers,
                    automation and
                    production systems.
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-6
                  pt-5

                  border-t

                  grid
                  grid-cols-2

                  gap-3
                "
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                <div>
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

                <div>
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
                    Focus
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
                    Cloud / DevOps
                  </p>
                </div>
              </div>
            </div>

            {/* Contact links */}

            <div
              className="
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
              <div
                className="
                  px-5
                  py-3

                  border-b

                  flex
                  items-center
                  justify-between
                "
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                <span
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
                  DIRECT CHANNELS
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
                  03 ONLINE
                </span>
              </div>

              <div>
                {contactLinks.map(
                  (
                    item,
                    index,
                  ) => {
                    const Icon =
                      item.icon;

                    return (
                      <a
                        key={
                          item.id
                        }
                        href={
                          item.href
                        }
                        target={
                          item.id ===
                          "email"
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          item.id ===
                          "email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="
                          group

                          flex
                          items-center
                          gap-4

                          p-4

                          transition-all

                          hover:bg-[var(--surface-hover)]
                        "
                        style={{
                          borderBottom:
                            index <
                            contactLinks.length -
                              1
                              ? "1px solid var(--border)"
                              : "none",
                        }}
                      >
                        <div
                          className="
                            w-10
                            h-10

                            shrink-0

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
                          <Icon
                            size={16}
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
                            {
                              item.label
                            }
                          </p>

                          <p
                            className="
                              mt-1

                              truncate

                              text-sm
                              font-medium
                            "
                            style={{
                              color:
                                "var(--text-primary)",
                            }}
                          >
                            {
                              item.value
                            }
                          </p>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className="
                            shrink-0

                            transition-transform

                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                          style={{
                            color:
                              "var(--text-muted)",
                          }}
                        />
                      </a>
                    );
                  },
                )}
              </div>
            </div>

            {/* Email copy */}

            <button
              type="button"
              onClick={copyEmail}
              className="
                group

                rounded-xl

                border

                px-4
                py-3

                flex
                items-center
                justify-between

                gap-3

                text-left
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
                {copied ? (
                  <CheckCircle2
                    size={15}
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  />
                ) : (
                  <Copy
                    size={15}
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  />
                )}

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
                  {copied
                    ? "Email copied to clipboard"
                    : "Copy email address"}
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
                {copied
                  ? "COPIED"
                  : "COPY"}
              </span>
            </button>
          </motion.div>

          {/* =====================
              TERMINAL FORM
          ====================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
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
            {/* Terminal header */}

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

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
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
                    text-[10px]
                    font-mono
                  "
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  deploy-contact.sh
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
                bash
              </span>
            </div>

            {/* Console */}

            <div
              className="
                p-5
                sm:p-7
              "
            >
              <div
                className="
                  mb-7

                  font-mono

                  text-xs

                  leading-6
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
                    purvanshu@portfolio
                  </span>

                  :~$ ./deploy-contact.sh
                </p>

                <p
                  className="mt-1"
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  Initializing secure
                  communication
                  endpoint...
                </p>

                <p
                  style={{
                    color:
                      "var(--accent)",
                  }}
                >
                  ✓ endpoint ready
                </p>

                <p
                  style={{
                    color:
                      "var(--accent)",
                  }}
                >
                  ✓ waiting for
                  payload
                </p>
              </div>

              <form
                onSubmit={
                  handleSubmit
                }
                className="
                  space-y-5
                "
              >
                {/* Name */}

                <TerminalField
                  label="sender.name"
                  name="name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Your name"
                  required
                />

                {/* Email */}

                <TerminalField
                  label="sender.email"
                  name="email"
                  type="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="you@company.com"
                  required
                />

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      block

                      mb-2

                      text-[10px]

                      uppercase
                      tracking-[0.12em]

                      font-mono
                    "
                    style={{
                      color:
                        "var(--text-muted)",
                    }}
                  >
                    payload.message
                  </label>

                  <div
                    className="
                      rounded-xl

                      border

                      overflow-hidden

                      transition-all

                      focus-within:border-[var(--border-active)]
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
                        px-3
                        py-2

                        border-b

                        text-[9px]
                        font-mono
                      "
                      style={{
                        borderColor:
                          "var(--border)",

                        color:
                          "var(--accent)",
                      }}
                    >
                      $ echo
                      "message_payload"
                    </div>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={
                        formData.message
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Tell me about the opportunity, project, or idea..."
                      required
                      className="
                        w-full

                        resize-none

                        bg-transparent

                        px-4
                        py-3

                        outline-none

                        text-sm
                      "
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={
                    status ===
                    "sending"
                  }
                  className="
                    group

                    w-full

                    min-h-12

                    rounded-xl

                    flex
                    items-center
                    justify-center

                    gap-2

                    text-sm
                    font-semibold

                    transition-all
                    duration-300

                    hover:-translate-y-0.5

                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    disabled:transform-none
                  "
                  style={{
                    background:
                      "var(--accent)",

                    color: "#020617",

                    boxShadow:
                      "0 15px 40px rgba(var(--accent-rgb), .15)",
                  }}
                >
                  {status === "sending" ? (
  <>
    <Loader2
      size={16}
      className="animate-spin"
    />

    Deploying message...
  </>
) : status === "success" ? (
  <>
    <CheckCircle2 size={16} />

    Message sent successfully
  </>
) : status === "error" ? (
  <>
    <AlertCircle size={16} />

    Deployment failed — try again
  </>
) : (
  <>
    <Send size={15} />

    Deploy Message
  </>
)}
                </button>

                {/* Status */}

                <div
                  className="
                    flex
                    items-center
                    justify-between

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
                    POST
                    /api/contact
                  </span>

                  <span>
                    {status === "success"
                      ? "REQUEST SENT"
                      : status === "sending"
                      ? "TRANSMITTING"
                      : status === "error"
                      ? "FAILED"
                      : "READY"}
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TerminalField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          block

          mb-2

          text-[10px]

          uppercase
          tracking-[0.12em]

          font-mono
        "
        style={{
          color:
            "var(--text-muted)",
        }}
      >
        {label}
      </label>

      <div
        className="
          flex
          items-center

          rounded-xl

          border

          overflow-hidden

          transition-all

          focus-within:border-[var(--border-active)]
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
            pl-4

            text-sm
            font-mono
          "
          style={{
            color:
              "var(--accent)",
          }}
        >
          &gt;
        </span>

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={
            placeholder
          }
          required={required}
          className="
            w-full

            bg-transparent

            px-3
            py-3.5

            outline-none

            text-sm
          "
          style={{
            color:
              "var(--text-primary)",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;