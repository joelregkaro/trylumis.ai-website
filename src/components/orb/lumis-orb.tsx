"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./shaders";

interface MoodPreset {
  color1: number[];
  color2: number[];
  color3: number[];
  noiseStrength: number;
  noiseDensity: number;
  speed: number;
  morphFrequency: number;
  morphAmplitude: number;
  iridescenceIntensity: number;
  reflectionIntensity: number;
  chromaticAberration: number;
  bloomIntensity: number;
  rotationSpeed: number;
}

const MOOD_PRESETS: Record<string, MoodPreset> = {
  calm: {
    color1: [0.15, 0.08, 0.35],
    color2: [0.05, 0.3, 0.4],
    color3: [0.1, 0.15, 0.5],
    noiseStrength: 0.06,
    noiseDensity: 1.0,
    speed: 0.2,
    morphFrequency: 1.8,
    morphAmplitude: 0.025,
    iridescenceIntensity: 0.5,
    reflectionIntensity: 0.6,
    chromaticAberration: 0.3,
    bloomIntensity: 1.2,
    rotationSpeed: 0.06,
  },
  focused: {
    color1: [0.3, 0.1, 0.6],
    color2: [0.1, 0.4, 0.7],
    color3: [0.5, 0.2, 0.8],
    noiseStrength: 0.08,
    noiseDensity: 1.2,
    speed: 0.28,
    morphFrequency: 2.2,
    morphAmplitude: 0.04,
    iridescenceIntensity: 0.7,
    reflectionIntensity: 0.5,
    chromaticAberration: 0.5,
    bloomIntensity: 1.5,
    rotationSpeed: 0.08,
  },
  energized: {
    color1: [0.5, 0.15, 0.6],
    color2: [0.8, 0.2, 0.4],
    color3: [0.9, 0.5, 0.2],
    noiseStrength: 0.12,
    noiseDensity: 1.4,
    speed: 0.38,
    morphFrequency: 2.8,
    morphAmplitude: 0.06,
    iridescenceIntensity: 0.9,
    reflectionIntensity: 0.4,
    chromaticAberration: 0.8,
    bloomIntensity: 2.0,
    rotationSpeed: 0.12,
  },
  anxious: {
    color1: [0.4, 0.1, 0.2],
    color2: [0.6, 0.15, 0.3],
    color3: [0.3, 0.05, 0.4],
    noiseStrength: 0.14,
    noiseDensity: 1.6,
    speed: 0.45,
    morphFrequency: 3.2,
    morphAmplitude: 0.07,
    iridescenceIntensity: 0.6,
    reflectionIntensity: 0.3,
    chromaticAberration: 1.0,
    bloomIntensity: 1.8,
    rotationSpeed: 0.15,
  },
  peaceful: {
    color1: [0.05, 0.2, 0.35],
    color2: [0.1, 0.35, 0.3],
    color3: [0.08, 0.25, 0.45],
    noiseStrength: 0.04,
    noiseDensity: 0.8,
    speed: 0.12,
    morphFrequency: 1.4,
    morphAmplitude: 0.018,
    iridescenceIntensity: 0.4,
    reflectionIntensity: 0.7,
    chromaticAberration: 0.2,
    bloomIntensity: 1.0,
    rotationSpeed: 0.04,
  },
};

type MoodKey = keyof typeof MOOD_PRESETS;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpArray(
  a: readonly number[],
  b: readonly number[],
  t: number
): number[] {
  return a.map((v, i) => lerp(v, b[i], t));
}

interface OrbMeshProps {
  mood: MoodKey;
}

function OrbMesh({ mood }: OrbMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentPreset = useRef<MoodPreset>({ ...MOOD_PRESETS.calm });
  const targetPreset = MOOD_PRESETS[mood];

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: 0.2 },
      uNoiseStrength: { value: 0.06 },
      uNoiseDensity: { value: 1.0 },
      uMorphFrequency: { value: 1.8 },
      uMorphAmplitude: { value: 0.025 },
      uColor1: { value: new THREE.Vector3(0.15, 0.08, 0.35) },
      uColor2: { value: new THREE.Vector3(0.05, 0.3, 0.4) },
      uColor3: { value: new THREE.Vector3(0.1, 0.15, 0.5) },
      uIridescenceIntensity: { value: 0.5 },
      uReflectionIntensity: { value: 0.6 },
      uChromaticAberration: { value: 0.3 },
    }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.ShaderMaterial;

    // Frame-rate independent exponential smoothing
    // decayRate controls transition speed: lower = slower/smoother
    const decayRate = 2.5;
    const smoothFactor = 1 - Math.exp(-decayRate * delta);

    // Even slower smoothing for shape-defining params (frequency/density)
    // to avoid visual jumps when the noise pattern shifts
    const shapeFactor = 1 - Math.exp(-1.2 * delta);

    const cp = currentPreset.current;
    cp.noiseStrength = lerp(cp.noiseStrength, targetPreset.noiseStrength, smoothFactor);
    cp.noiseDensity = lerp(cp.noiseDensity, targetPreset.noiseDensity, shapeFactor);
    cp.speed = lerp(cp.speed, targetPreset.speed, smoothFactor);
    cp.morphFrequency = lerp(cp.morphFrequency, targetPreset.morphFrequency, shapeFactor);
    cp.morphAmplitude = lerp(cp.morphAmplitude, targetPreset.morphAmplitude, smoothFactor);
    cp.iridescenceIntensity = lerp(cp.iridescenceIntensity, targetPreset.iridescenceIntensity, smoothFactor);
    cp.reflectionIntensity = lerp(cp.reflectionIntensity, targetPreset.reflectionIntensity, smoothFactor);
    cp.chromaticAberration = lerp(cp.chromaticAberration, targetPreset.chromaticAberration, smoothFactor);
    cp.rotationSpeed = lerp(cp.rotationSpeed, targetPreset.rotationSpeed, smoothFactor);

    const colorFactor = 1 - Math.exp(-1.8 * delta);
    const c1 = lerpArray(cp.color1, targetPreset.color1, colorFactor);
    const c2 = lerpArray(cp.color2, targetPreset.color2, colorFactor);
    const c3 = lerpArray(cp.color3, targetPreset.color3, colorFactor);
    cp.color1 = c1;
    cp.color2 = c2;
    cp.color3 = c3;

    mat.uniforms.uTime.value = t;
    mat.uniforms.uSpeed.value = cp.speed;
    mat.uniforms.uNoiseStrength.value = cp.noiseStrength;
    mat.uniforms.uNoiseDensity.value = cp.noiseDensity;
    mat.uniforms.uMorphFrequency.value = cp.morphFrequency;
    mat.uniforms.uMorphAmplitude.value = cp.morphAmplitude;
    mat.uniforms.uIridescenceIntensity.value = cp.iridescenceIntensity;
    mat.uniforms.uReflectionIntensity.value = cp.reflectionIntensity;
    mat.uniforms.uChromaticAberration.value = cp.chromaticAberration;
    mat.uniforms.uColor1.value.set(c1[0], c1[1], c1[2]);
    mat.uniforms.uColor2.value.set(c2[0], c2[1], c2[2]);
    mat.uniforms.uColor3.value.set(c3[0], c3[1], c3[2]);

    meshRef.current.rotation.y += cp.rotationSpeed * 0.01;
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.06;
  });

  return (
    <mesh ref={meshRef} scale={2.0}>
      <icosahedronGeometry args={[1, 200]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function Scene({ mood }: { mood: MoodKey }) {
  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#7C3AED" />
      <pointLight position={[-5, -3, 3]} intensity={0.2} color="#2DD4BF" />
      <pointLight position={[0, -5, -5]} intensity={0.1} color="#A78BFA" />

      <OrbMesh mood={mood} />

      <Environment preset="night" />

      <EffectComposer>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

interface LumisOrbProps {
  className?: string;
  mood?: MoodKey;
  autoTransition?: boolean;
}

export default function LumisOrb({
  className = "",
  mood: controlledMood,
  autoTransition = true,
}: LumisOrbProps) {
  const [currentMood, setCurrentMood] = useState<MoodKey>("calm");
  const moods: MoodKey[] = ["calm", "focused", "energized", "peaceful", "anxious"];

  useEffect(() => {
    if (controlledMood) {
      setCurrentMood(controlledMood);
      return;
    }
    if (!autoTransition) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % moods.length;
      setCurrentMood(moods[index]);
    }, 10000);
    return () => clearInterval(interval);
  }, [controlledMood, autoTransition]);

  const activeMood = controlledMood || currentMood;

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        dpr={[1.5, 2]}
        style={{ background: "#000000" }}
      >
        <Scene mood={activeMood} />
      </Canvas>

      {/* Mood label */}
      {autoTransition && !controlledMood && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setCurrentMood(m)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-500 ${
                activeMood === m
                  ? "bg-brand-purple/30 text-text-primary border border-brand-purple/50"
                  : "bg-white/5 text-text-tertiary border border-white/5 hover:bg-white/10"
              }`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { MOOD_PRESETS };
export type { MoodKey };
