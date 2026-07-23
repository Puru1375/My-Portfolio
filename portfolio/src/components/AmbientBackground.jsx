import { useEffect, useState } from "react";

const AmbientBackground = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 30,
  });

  useEffect(() => {
    let frameId = null;

    const handleMouseMove = (event) => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
        dev-grid
      "
      aria-hidden="true"
    >
      {/* Cursor-following glow */}

      <div
        className="
          absolute
          inset-0
          transition-opacity
          duration-500
        "
        style={{
          background: `
            radial-gradient(
              650px circle at
              ${mousePosition.x}%
              ${mousePosition.y}%,
              rgba(var(--accent-rgb), 0.11),
              transparent 45%
            )
          `,
        }}
      />

      {/* Top accent atmosphere */}

      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[500px]
          rounded-full
          blur-[120px]
          opacity-20
          animate-pulse-glow
        "
        style={{
          background:
            "rgba(var(--accent-rgb), 0.45)",
        }}
      />

      {/* Left atmospheric glow */}

      <div
        className="
          absolute
          top-[45%]
          -left-48
          w-[500px]
          h-[500px]
          rounded-full
          blur-[140px]
          opacity-10
        "
        style={{
          background:
            "rgba(var(--accent-rgb), 0.5)",
        }}
      />

      {/* Bottom glow */}

      <div
        className="
          absolute
          -bottom-60
          right-[5%]
          w-[650px]
          h-[650px]
          rounded-full
          blur-[150px]
          opacity-10
        "
        style={{
          background:
            "rgba(var(--accent-rgb), 0.45)",
        }}
      />

      {/* Noise-like overlay */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.8)
              0.5px,
              transparent 0.5px
            )
          `,
          backgroundSize: "7px 7px",
        }}
      />
    </div>
  );
};

export default AmbientBackground;