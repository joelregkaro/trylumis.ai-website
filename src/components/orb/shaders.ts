export const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseStrength;
uniform float uNoiseDensity;
uniform float uMorphFrequency;
uniform float uMorphAmplitude;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vDisplacement;
varying float vFresnel;

// Classic Perlin 3D Noise — Stefan Gustavson
vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);

  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

void main() {
  vNormal = normalize(normalMatrix * normal);

  float t = uTime * uSpeed;

  // Layer 1: Large-scale organic morphing
  float noise1 = cnoise(position * uNoiseDensity + vec3(t * 0.6));

  // Layer 2: Medium detail turbulence
  float noise2 = cnoise(position * uNoiseDensity * 2.0 + vec3(t * 0.8 + 100.0)) * 0.5;

  // Layer 3: Fine ripple detail
  float noise3 = cnoise(position * uNoiseDensity * 4.0 + vec3(t * 1.2 + 200.0)) * 0.25;

  // Layer 4: Morphing undulation — creates the metamorphic shape-shifting
  float morph = sin(position.y * uMorphFrequency + t * 1.5) *
                cos(position.x * uMorphFrequency * 0.7 + t * 1.1) *
                sin(position.z * uMorphFrequency * 0.5 + t * 0.9) * uMorphAmplitude;

  float totalNoise = noise1 + noise2 + noise3 + morph;
  vDisplacement = totalNoise;

  vec3 newPosition = position + normal * (uNoiseStrength * totalNoise);

  // Recompute normal for correct lighting (finite differences)
  float eps = 0.001;
  vec3 tangent1 = normalize(cross(normal, vec3(0.0, 1.0, 0.0)));
  if (length(cross(normal, vec3(0.0, 1.0, 0.0))) < 0.001) {
    tangent1 = normalize(cross(normal, vec3(1.0, 0.0, 0.0)));
  }
  vec3 tangent2 = normalize(cross(normal, tangent1));

  vec3 p1 = position + tangent1 * eps;
  vec3 p2 = position + tangent2 * eps;
  float n1 = cnoise(p1 * uNoiseDensity + vec3(t * 0.6)) +
             cnoise(p1 * uNoiseDensity * 2.0 + vec3(t * 0.8 + 100.0)) * 0.5;
  float n2 = cnoise(p2 * uNoiseDensity + vec3(t * 0.6)) +
             cnoise(p2 * uNoiseDensity * 2.0 + vec3(t * 0.8 + 100.0)) * 0.5;
  vec3 np1 = p1 + normal * (uNoiseStrength * n1);
  vec3 np2 = p2 + normal * (uNoiseStrength * n2);
  vec3 displacedNormal = normalize(cross(np1 - newPosition, np2 - newPosition));
  vNormal = normalize(normalMatrix * displacedNormal);

  vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
  vWorldPosition = worldPos.xyz;
  vPosition = newPosition;

  // Fresnel
  vec3 worldViewDir = normalize(cameraPosition - worldPos.xyz);
  vFresnel = pow(1.0 - max(dot(worldViewDir, normalize(normalMatrix * displacedNormal)), 0.0), 3.0);

  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

export const fragmentShader = /* glsl */ `
uniform float uTime;
uniform float uSpeed;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uIridescenceIntensity;
uniform float uReflectionIntensity;
uniform float uChromaticAberration;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vDisplacement;
varying float vFresnel;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  float t = uTime * uSpeed;

  // The orb should be DARK like polished obsidian.
  // Color lives at the edges (Fresnel). Center faces camera = near black.

  float d = vDisplacement * 0.5 + 0.5; // 0..1

  // --- Dark core: almost black with a hint of color from displacement ---
  vec3 coreColor = mix(uColor1, uColor2, d) * 0.08;

  // --- Fresnel edge color: this is where all the life is ---
  float fresnel = vFresnel;

  // Iridescence: rainbow shift at edges based on viewing angle
  float iridAngle = dot(normal, viewDir);
  float hue = fract(iridAngle * 1.5 + t * 0.04 + vDisplacement * 0.3);
  vec3 iridColor = hsv2rgb(vec3(hue, 0.8, 0.6)) * uIridescenceIntensity;

  // Edge color blends iridescence with mood color
  vec3 edgeColor = mix(uColor3 * 0.5, iridColor, 0.5);

  // Chromatic split at edges
  edgeColor.r += pow(fresnel, 3.0) * 0.08 * uChromaticAberration;
  edgeColor.b += pow(fresnel, 2.0) * 0.12 * uChromaticAberration;

  // Combine: dark core + colored edges
  vec3 baseColor = mix(coreColor, edgeColor, pow(fresnel, 1.8));

  // --- Environment reflection: very dark, just adds depth ---
  vec3 reflectDir = reflect(-viewDir, normal);
  float envX = reflectDir.x * 0.5 + 0.5;
  float envY = reflectDir.y * 0.5 + 0.5;
  float envNoise = sin(envX * 10.0 + t * 0.3) * cos(envY * 8.0 - t * 0.2) * 0.5 + 0.5;
  vec3 envColor = mix(vec3(0.01, 0.005, 0.02), vec3(0.04, 0.02, 0.08), envNoise);
  baseColor += envColor * fresnel * uReflectionIntensity * 0.3;

  // --- Specular: tiny bright pinpoints (the "reflective" look) ---
  vec3 lightDir1 = normalize(vec3(1.0, 1.0, 1.0));
  vec3 lightDir2 = normalize(vec3(-0.5, -0.3, 0.8));
  vec3 halfDir1 = normalize(lightDir1 + viewDir);
  vec3 halfDir2 = normalize(lightDir2 + viewDir);
  float spec1 = pow(max(dot(normal, halfDir1), 0.0), 256.0) * 0.6;
  float spec2 = pow(max(dot(normal, halfDir2), 0.0), 128.0) * 0.3;
  baseColor += vec3(0.9, 0.85, 1.0) * spec1;
  baseColor += vec3(0.3, 0.15, 0.7) * spec2;

  // --- Final output ---
  baseColor = clamp(baseColor, 0.0, 1.0);

  gl_FragColor = vec4(baseColor, 1.0);
}
`;
