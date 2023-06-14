import React, { useEffect, useRef } from 'react';

const ColorCircles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size;
    canvas.height = size;

    // Define parameters for animation
    const numParticles = 500;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 20 + 2,
        color: getRandomColor(),
        angle: Math.random() * 360,
        speed: Math.random() * 0.5 + 0.1,
        rotation: Math.random() > 0.5 ? 1 : -1,
        distance: Math.random() * canvas.width * 0.6 + canvas.width * 0.1,
      });
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Calculate the particle's position
        const angleInRadians = (particle.angle * Math.PI) / 180;
        particle.x = canvas.width / 2 + Math.cos(angleInRadians) * particle.distance;
        particle.y = canvas.height / 2 + Math.sin(angleInRadians) * particle.distance;

        // Update the angle
        particle.angle += particle.rotation * particle.speed;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      });

      // Request next frame
      requestAnimationFrame(draw);
    }

    // Start animation
    draw();
  }, []);

  return <canvas ref={canvasRef} style={wrapperStyle}/>;
};

const wrapperStyle = {
    width: '100%',
    height: '100%',
  };

export default ColorCircles;
