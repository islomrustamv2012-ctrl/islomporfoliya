import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 2.5, 50);
    cyanLight.position.set(3, 4, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.5, 50);
    purpleLight.position.set(-4, -3, 3);
    scene.add(purpleLight);

    // 3. Central Interactive Group
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    // 3a. Inner glowing core sphere
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x070d1e,
      emissive: 0x004d66,
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centralGroup.add(coreMesh);

    // 3b. Wireframe Icosahedron (Futuristic Geodesic Cage)
    const icoGeo = new THREE.IcosahedronGeometry(1.22, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    centralGroup.add(icoMesh);

    // 3c. Second outer wireframe polyhedron
    const outerIcoGeo = new THREE.IcosahedronGeometry(1.55, 0);
    const outerIcoMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerIcoMesh = new THREE.Mesh(outerIcoGeo, outerIcoMat);
    centralGroup.add(outerIcoMesh);

    // 4. Orbital Gimbal Rings
    const ringMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.65 }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.6 }),
      new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.5 }),
    ];

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.015, 16, 100), ringMaterials[0]);
    ring1.rotation.x = Math.PI / 3;
    centralGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.012, 16, 100), ringMaterials[1]);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    centralGroup.add(ring2);

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.01, 16, 100), ringMaterials[2]);
    ring3.rotation.z = Math.PI / 2.5;
    centralGroup.add(ring3);

    // 5. Swirling Particle Galaxy / Constellation
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00e5ff);
    const colorPurple = new THREE.Color(0x8b5cf6);
    const colorBlue = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      // Spherical shell distribution with variance
      const radius = 1.3 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation
      const mixRatio = Math.random();
      const chosenColor = mixRatio < 0.45 ? colorCyan : mixRatio < 0.8 ? colorPurple : colorBlue;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    centralGroup.add(particles);

    // 6. Orbiting Satellites (Mini Polyhedral Nodes)
    const satellites = [];
    const satCount = 4;
    for (let i = 0; i < satCount; i++) {
      const satMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.08 + (i % 2) * 0.03),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x00e5ff : 0x8b5cf6,
          wireframe: false,
        })
      );
      satellites.push({
        mesh: satMesh,
        speed: 0.8 + i * 0.25,
        radius: 2.0 + i * 0.25,
        offset: (i * Math.PI * 2) / satCount,
      });
      centralGroup.add(satMesh);
    }

    // 7. Mouse & Gyro Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // 8. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (lerp)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle float oscillation
      centralGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Rotations
      centralGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      centralGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouseY;

      icoMesh.rotation.x = -elapsedTime * 0.35;
      icoMesh.rotation.y = elapsedTime * 0.4;

      outerIcoMesh.rotation.z = elapsedTime * 0.2;
      outerIcoMesh.rotation.y = -elapsedTime * 0.25;

      ring1.rotation.z = elapsedTime * 0.5;
      ring2.rotation.x = -elapsedTime * 0.4;
      ring3.rotation.y = elapsedTime * 0.35;

      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.x = Math.sin(elapsedTime * 0.08) * 0.1;

      // Orbiting satellites
      satellites.forEach((sat) => {
        const angle = elapsedTime * sat.speed + sat.offset;
        sat.mesh.position.x = Math.cos(angle) * sat.radius;
        sat.mesh.position.z = Math.sin(angle) * sat.radius;
        sat.mesh.position.y = Math.sin(angle * 2) * 0.35;
        sat.mesh.rotation.x += 0.02;
        sat.mesh.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });

    resizeObserver.observe(container);

    // 10. Clean-up
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      outerIcoGeo.dispose();
      outerIcoMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Beautiful CSS 3D fallback for environments without WebGL
    return (
      <div className="relative flex h-[380px] w-full max-w-[460px] items-center justify-center sm:h-[480px]">
        <div className="absolute h-64 w-64 rounded-full border border-cyber-cyan/30 animate-spin-slow" />
        <div className="absolute h-80 w-80 rounded-full border border-cyber-purple/25 animate-spin-slower" />
        <div className="h-44 w-44 rounded-full bg-gradient-to-tr from-cyber-blue/30 via-cyber-cyan/20 to-cyber-purple/30 backdrop-blur-md shadow-glow-cyan flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-cyber-dark/80 border border-cyber-cyan/50 shadow-inner" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="relative flex h-[360px] w-full max-w-[500px] items-center justify-center cursor-grab active:cursor-grabbing sm:h-[440px] md:h-[480px] lg:h-[520px]"
    />
  );
}
