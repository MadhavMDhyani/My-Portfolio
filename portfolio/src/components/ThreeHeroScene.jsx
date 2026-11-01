import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { COLOR_INTS } from "../utils/themeTokens";

const ThreeHeroScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Feature detect WebGL
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl2") || canvas.getContext("webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) return;

    let renderer = null;
    let scene = null;
    let camera = null;
    let pmremGenerator = null;
    let envTexture = null;
    let orbMesh = null;
    let particleMesh = null;
    let originalPositions = null;
    let animFrameId = null;
    let isVisible = true;
    let isTabActive = true;

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    try {
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(COLOR_INTS.indigo950, 0.09);

      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 5.5);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      // Ensure no leftover canvas in strict mode
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // Environment lighting
      pmremGenerator = new THREE.PMREMGenerator(renderer);
      pmremGenerator.compileEquirectangularShader();
      const roomEnv = new RoomEnvironment();
      envTexture = pmremGenerator.fromScene(roomEnv).texture;
      scene.environment = envTexture;

      // Soft ambient & directional accents
      const ambientLight = new THREE.AmbientLight(COLOR_INTS.indigo400, 0.8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(COLOR_INTS.ghost, 2.5, 12);
      pointLight.position.set(3, 4, 4);
      scene.add(pointLight);

      const rimLight = new THREE.PointLight(COLOR_INTS.indigo400, 3, 10);
      rimLight.position.set(-4, -3, -2);
      scene.add(rimLight);

      // Centrepiece Liquid Orb
      const orbDetail = isMobile ? 4 : 28;
      const orbRadius = 1.35;
      const geometry = new THREE.IcosahedronGeometry(orbRadius, orbDetail);
      originalPositions = geometry.attributes.position.clone();

      let material;
      if (isMobile) {
        material = new THREE.MeshStandardMaterial({
          color: COLOR_INTS.indigo400,
          roughness: 0.15,
          metalness: 0.2,
          transparent: true,
          opacity: 0.85,
        });
      } else {
        material = new THREE.MeshPhysicalMaterial({
          color: COLOR_INTS.ghost,
          transmission: 0.92,
          opacity: 1,
          transparent: true,
          roughness: 0.08,
          ior: 1.45,
          thickness: 1.2,
          iridescence: 0.35,
          iridescenceIOR: 1.3,
          attenuationColor: new THREE.Color(COLOR_INTS.indigo400),
          attenuationDistance: 1.8,
        });
      }

      orbMesh = new THREE.Mesh(geometry, material);
      orbMesh.position.set(0, 0, 0);
      scene.add(orbMesh);

      // Sparse Particle Field
      const particleCount = isMobile ? 45 : 120;
      const particleGeo = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);

      const palette = [
        new THREE.Color(COLOR_INTS.indigo400),
        new THREE.Color(COLOR_INTS.indigo200),
        new THREE.Color(COLOR_INTS.ghost),
      ];

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particlePositions[i3] = (Math.random() - 0.5) * 12;
        particlePositions[i3 + 1] = (Math.random() - 0.5) * 8;
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 6;

        const color = palette[i % palette.length];
        particleColors[i3] = color.r;
        particleColors[i3 + 1] = color.g;
        particleColors[i3 + 2] = color.b;
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });

      particleMesh = new THREE.Points(particleGeo, particleMat);
      scene.add(particleMesh);

      // Mouse & Scroll interaction state
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let scrollY = 0;

      const handlePointerMove = (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.8;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
      };

      const handleScroll = () => {
        scrollY = window.scrollY * 0.0015;
      };

      if (!prefersReducedMotion) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });
      }

      // Fast periodic trigonometric noise for vertex displacement
      const noise3D = (x, y, z, t) => {
        return (
          Math.sin(x * 1.6 + t * 0.8) * Math.cos(y * 1.6 + t * 0.6) +
          Math.sin(y * 2.2 - t * 0.9) * Math.cos(z * 2.2 + t * 0.7) +
          Math.sin(z * 1.8 + t * 0.7) * Math.cos(x * 1.8 - t * 0.8)
        ) / 3;
      };

      // Visibility & Resize Observers
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      const observer = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0].isIntersecting;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      const handleVisibilityChange = () => {
        isTabActive = !document.hidden;
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Context Lost & Restored
      const canvasEl = renderer.domElement;
      const handleContextLost = (e) => {
        e.preventDefault();
        if (animFrameId) cancelAnimationFrame(animFrameId);
      };
      const handleContextRestored = () => {
        handleResize();
      };
      canvasEl.addEventListener("webglcontextlost", handleContextLost, false);
      canvasEl.addEventListener("webglcontextrestored", handleContextRestored, false);

      // Render Loop
      let clock = new THREE.Clock();

      const animate = () => {
        if (!renderer || !scene || !camera) return;

        if (prefersReducedMotion) {
          renderer.render(scene, camera);
          return;
        }

        animFrameId = requestAnimationFrame(animate);

        if (!isVisible || !isTabActive) return;

        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        // Parallax lerp
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        orbMesh.rotation.y = time * 0.15 + mouseX * 0.8 + scrollY * 1.2;
        orbMesh.rotation.x = time * 0.1 + mouseY * 0.8;
        orbMesh.position.y = -mouseY * 0.3;
        orbMesh.position.x = mouseX * 0.3;

        // Vertices wave displacement
        const posAttr = geometry.attributes.position;
        const origAttr = originalPositions;
        const count = posAttr.count;

        for (let i = 0; i < count; i++) {
          const uX = origAttr.getX(i);
          const uY = origAttr.getY(i);
          const uZ = origAttr.getZ(i);

          const len = Math.sqrt(uX * uX + uY * uY + uZ * uZ) || 1;
          const nX = uX / len;
          const nY = uY / len;
          const nZ = uZ / len;

          const displacement = noise3D(nX, nY, nZ, time) * 0.22;
          const newRadius = orbRadius + displacement;

          posAttr.setXYZ(i, nX * newRadius, nY * newRadius, nZ * newRadius);
        }

        posAttr.needsUpdate = true;
        geometry.computeVertexNormals();

        // Particles gentle drift
        particleMesh.rotation.y = -time * 0.04;
        particleMesh.rotation.x = time * 0.02;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        observer.disconnect();

        canvasEl.removeEventListener("webglcontextlost", handleContextLost);
        canvasEl.removeEventListener("webglcontextrestored", handleContextRestored);

        // Proper resource disposal
        if (geometry) geometry.dispose();
        if (originalPositions) originalPositions = null;
        if (material) material.dispose();
        if (particleGeo) particleGeo.dispose();
        if (particleMat) particleMat.dispose();
        if (envTexture) envTexture.dispose();
        if (pmremGenerator) pmremGenerator.dispose();

        if (renderer) {
          renderer.forceContextLoss();
          renderer.dispose();
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
          renderer = null;
        }
      };
    } catch (err) {
      console.warn("WebGL initialization failed:", err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
};

export default ThreeHeroScene;
