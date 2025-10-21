import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating hearts
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, 0.5);
    heartShape.bezierCurveTo(0, 0.8, -0.4, 0.8, -0.4, 0.5);
    heartShape.bezierCurveTo(-0.4, 0.2, 0, -0.2, 0, -0.8);
    heartShape.bezierCurveTo(0, -0.2, 0.4, 0.2, 0.4, 0.5);
    heartShape.bezierCurveTo(0.4, 0.8, 0, 0.8, 0, 0.5);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 0.1,
      bevelThickness: 0.1
    };

    const hearts: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
      const material = new THREE.MeshPhongMaterial({
        color: i % 3 === 0 ? 0x8b5cf6 : i % 3 === 1 ? 0xef4444 : 0xfbbf24,
        emissive: i % 3 === 0 ? 0x8b5cf6 : i % 3 === 1 ? 0xef4444 : 0xfbbf24,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.6
      });
      
      const heart = new THREE.Mesh(geometry, material);
      heart.position.x = (Math.random() - 0.5) * 20;
      heart.position.y = (Math.random() - 0.5) * 20;
      heart.position.z = (Math.random() - 0.5) * 20;
      heart.rotation.x = Math.random() * Math.PI;
      heart.rotation.y = Math.random() * Math.PI;
      heart.scale.set(0.5, 0.5, 0.5);
      
      scene.add(heart);
      hearts.push(heart);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xef4444, 1, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    camera.position.z = 15;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      hearts.forEach((heart, i) => {
        heart.rotation.x += 0.005;
        heart.rotation.y += 0.005;
        heart.position.y += Math.sin(time + i) * 0.01;
        heart.position.x += Math.cos(time + i * 0.5) * 0.005;
      });

      pointLight1.position.x = Math.sin(time) * 10;
      pointLight1.position.y = Math.cos(time) * 10;
      pointLight2.position.x = Math.cos(time) * 10;
      pointLight2.position.y = Math.sin(time) * 10;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};
