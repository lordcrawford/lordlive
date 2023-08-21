import React, { useEffect } from 'react';

const StarfieldAnimation = () => {
  useEffect(() => {
    // Generate random stars with random colors and add them to the animation container
    const container = document.getElementById('animation-container');

    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Generate a random color for the star
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      star.style.backgroundColor = randomColor;

      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 5 + 80}s`;
      star.style.animationDelay = `${Math.random() * 50}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            overflow: hidden;
            background-color: transparent;
          }

          #animation-container {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .star {
            position: absolute;
            width: 30px;
            height: 30px;
            animation: moveStar 5s linear infinite, twinkle 1s linear infinite;
            background-color: transparent;
          }

          @keyframes moveStar {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(100vw, 100vh);
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      <div id="animation-container"></div>
    </div>
  );
}

export default StarfieldAnimation;
