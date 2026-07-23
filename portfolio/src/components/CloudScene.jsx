import { useTheme } from "../context/ThemeContext";
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const architectureNodes = [
  {
    id: "cloudfront",
    label: "CloudFront",
    sublabel: "CDN",
    position: [-2.8, 1.35, 0],
  },
  {
    id: "alb",
    label: "ALB",
    sublabel: "Load Balancer",
    position: [-1.1, 0.15, 0.2],
  },
  {
    id: "ecs",
    label: "ECS",
    sublabel: "Fargate",
    position: [1, 0.15, 0.2],
  },
  {
    id: "rds",
    label: "RDS",
    sublabel: "PostgreSQL",
    position: [2.8, 1.35, 0],
  },
];

const connections = [
  ["cloudfront", "alb"],
  ["alb", "ecs"],
  ["ecs", "rds"],
];

const getNode = (id) =>
  architectureNodes.find((node) => node.id === id);

function ConnectionLine({ start, end, accentColor }) {
  const lineRef = useRef();

  const points = useMemo(
    () => [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ],
    [start, end],
  );

  const geometry = useMemo(
    () =>
      new THREE.BufferGeometry().setFromPoints(points),
    [points],
  );

  useFrame((state) => {
    if (!lineRef.current) return;

    const pulse =
      0.3 +
      Math.sin(
        state.clock.elapsedTime * 2 +
          start[0],
      ) *
        0.15;

    lineRef.current.material.opacity =
      Math.max(0.15, pulse);
  });

  return (
    <line
      ref={lineRef}
      geometry={geometry}
    >
      <lineBasicMaterial
        color={accentColor}
        transparent
        opacity={0.35}
      />
    </line>
  );
}

function DataPacket({
  start,
  end,
  delay = 0,
  accentColor,
}) {
  const ref = useRef();

  const startVector = useMemo(
    () => new THREE.Vector3(...start),
    [start],
  );

  const endVector = useMemo(
    () => new THREE.Vector3(...end),
    [end],
  );

  useFrame((state) => {
    if (!ref.current) return;

    const progress =
      ((state.clock.elapsedTime * 0.22 +
        delay) %
        1);

    ref.current.position.lerpVectors(
      startVector,
      endVector,
      progress,
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 12, 12]} />

      <meshBasicMaterial
        color="#ffffff"
        toneMapped={false}
      />
    </mesh>
  );
}

function ArchitectureNode({
  label,
  sublabel,
  position,
  index,
  accentColor,
}) {
  const group = useRef();
  const core = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.position.y =
      position[1] +
      Math.sin(
        state.clock.elapsedTime * 1.2 +
          index,
      ) *
        0.07;

    if (core.current) {
      core.current.rotation.x += 0.002;
      core.current.rotation.y += 0.004;
    }
  });

  return (
    <group
      ref={group}
      position={position}
    >
      <Float
        speed={1.5}
        rotationIntensity={0.15}
        floatIntensity={0.2}
      >
        {/* Outer shell */}

        <mesh ref={core}>
          <icosahedronGeometry
            args={[0.48, 1]}
          />

          <meshStandardMaterial
            color="#07111f"
            emissive={accentColor}
            emissiveIntensity={0.18}
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>

        {/* Wireframe */}

        <mesh scale={1.13}>
          <icosahedronGeometry
            args={[0.48, 1]}
          />

          <meshBasicMaterial
            color={accentColor}
            wireframe
            transparent
            opacity={0.32}
          />
        </mesh>

        {/* Core */}

        <mesh>
          <sphereGeometry
            args={[0.13, 20, 20]}
          />

          <meshBasicMaterial
            color={accentColor}
            toneMapped={false}
          />
        </mesh>

        {/* Label */}

        <Html
          center
          position={[0, -0.78, 0]}
          distanceFactor={7}
          transform
        >
          <div
            style={{
              width: "125px",
              textAlign: "center",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "5px 9px",
                borderRadius: "8px",
                background:
                  "rgba(5,8,22,.86)",
                border:
                  "1px solid rgba(56,189,248,.25)",
                backdropFilter: "blur(8px)",
                color: "#f8fafc",
                fontSize: "11px",
                fontFamily: "monospace",
                whiteSpace: "nowrap",
              }}
            >
              {label}

              <div
                style={{
                  marginTop: "2px",
                  color: "#64748b",
                  fontSize: "8px",
                }}
              >
                {sublabel}
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}

function CorePlatform() {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((_, delta) => {
    if (ring1.current) {
      ring1.current.rotation.z +=
        delta * 0.08;
    }

    if (ring2.current) {
      ring2.current.rotation.z -=
        delta * 0.05;
    }
  });

  return (
    <group position={[0, -1.15, -0.4]}>
      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <cylinderGeometry
          args={[2.3, 2.7, 0.12, 64]}
        />

        <meshStandardMaterial
          color="#050816"
          metalness={0.8}
          roughness={0.35}
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh
        ref={ring1}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[2.25, 0.018, 12, 100]}
        />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh
        ref={ring2}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[1.75, 0.01, 12, 100]}
        />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

function Scene({ accentColor }) {
  return (
    <>
      <ambientLight intensity={0.7} />

      <pointLight
        position={[4, 4, 5]}
        intensity={18}
        color="#38bdf8"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={10}
        color="#2563eb"
      />

      <Sparkles
        count={45}
        scale={[8, 5, 4]}
        size={1.2}
        speed={0.25}
        opacity={0.35}
        color={accentColor}
      />

      <CorePlatform />

      {architectureNodes.map(
        (node, index) => (
          <ArchitectureNode
            key={node.id}
            {...node}
            index={index}
            accentColor={accentColor}
          />
        ),
      )}

      {connections.map(
        ([startId, endId], index) => {
          const start =
            getNode(startId).position;

          const end =
            getNode(endId).position;

          return (
            <group key={startId + endId}>
              <ConnectionLine
                start={start}
                end={end}
              />

              <DataPacket
                start={start}
                end={end}
                delay={index * 0.31}
              />

              <DataPacket
                start={start}
                end={end}
                delay={
                  index * 0.31 + 0.5
                }
              />
            </group>
          );
        },
      )}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.25}
        minPolarAngle={Math.PI / 2.7}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

const CloudScene = () => {

    const { theme } = useTheme();

  const themeColors = {
    cloud: "#38bdf8",
    terminal: "#10b981",
    aws: "#ff9900",
    nebula: "#a78bfa",
  };

  const accentColor =
    themeColors[theme] || themeColors.cloud;

  return (
    <div
      className="
        relative
        w-full
        h-full
        min-h-[420px]
      "
    >
      {/* UI label */}

      <div
        className="
          absolute
          top-5
          left-5
          z-10

          flex
          items-center
          gap-2

          px-3
          py-2

          rounded-lg
          border

          text-[10px]
          sm:text-xs
          font-mono

          backdrop-blur-xl
        "
        style={{
          background:
            "var(--surface)",
          borderColor:
            "var(--border)",
          color:
            "var(--text-secondary)",
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

        LIVE INFRASTRUCTURE
      </div>

      <Canvas
        camera={{
          position: [0, 1.1, 7.8],
          fov: 48,
        }}
        dpr={[1, 1.6]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene accentColor={accentColor}/>
        </Suspense>
      </Canvas>

      <div
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2

          text-[10px]
          font-mono

          whitespace-nowrap

          pointer-events-none
        "
        style={{
          color: "var(--text-muted)",
        }}
      >
        drag to inspect architecture
      </div>
    </div>
  );
};

export default CloudScene;