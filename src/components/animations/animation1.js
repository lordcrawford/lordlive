import React, { useEffect, useRef } from 'react';

const MagmaAnimation = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the canvas size to fill the entire window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to create a new particle
    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = 1; // Initial size
      const targetSize = Math.random() * 500 + 10; // Target size
      const rotation = Math.random() * 360;
      const color = getRandomMatteColor();

      particlesRef.current.push({ x, y, size, targetSize, rotation, color });
    };

    // Function to generate a random matte color
    const getRandomMatteColor = () => {
      const hue = Math.random() * 360; // Random hue between 0 and 360
      const saturation = Math.random() * 50 + 20; // Random saturation between 20 and 50
      const lightness = Math.random() * 50 + 35; // Random lightness between 35 and 65
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Function to update the animation frame
    const update = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Create new particles gradually
      if (particlesRef.current.length < 1000) {
        if (Math.random() < 0.6) {
          createParticle();
        }
        if(particlesRef.current.length > 500){
          particlesRef.current.splice(0,200);
        }
      }

      // Loop through all particles and update their properties
      particlesRef.current.forEach((particle, index) => {
        // Increase the size gradually until reaching the target size
        if (particle.size < particle.targetSize) {
          particle.size += 1;
        }

        // Remove particles that have gone off the screen
        if (particle.y > canvas.height + particle.size) {
          particlesRef.current.splice(index, 1);
        }

        // Draw the particle
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate((particle.rotation * Math.PI) / 180);

        context.beginPath();
        context.moveTo(particle.size, 0);
        for (let i = 1; i < 6; i++) {
          const angle = (i * 2 * Math.PI) / 6;
          const x = particle.size * Math.cos(angle);
          const y = particle.size * Math.sin(angle);
          context.lineTo(x, y);
        }
        context.closePath();

        context.fillStyle = particle.color;
        context.fill();

        context.restore();
      });

      // Call the update function recursively to create an animation loop
      requestRef.current = requestAnimationFrame(update);
    };

    // Start the animation
    update();

    // Cleanup function
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={wrapperStyle}/>;
};

const wrapperStyle = {
  width: '100%',
  height: '100%',
};

export default MagmaAnimation;
