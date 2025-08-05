import React, { useEffect, useRef, useState } from 'react';
import { RocketIcon } from './icons';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = 'PYTHONICJOURNEY010110CODING';
    const charArray = characters.split('');
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#06b6d4'; // cyan-500
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleEnterClick = () => {
    setIsFadingOut(true);
    setTimeout(onEnter, 500); // Match animation duration
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-slate-900 transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 flex items-center justify-center h-full animate-fade-in-slow">
        <style>{`
            @keyframes fade-in-slow {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-slow {
                animation: fade-in-slow 0.8s ease-out;
            }
        `}</style>
        <div className="text-center bg-slate-800/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-slate-700 max-w-lg mx-4">
          <RocketIcon className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">The Pythonic Journey</h1>
          <p className="text-slate-300 mb-8">
            An interactive odyssey to master Python. Solve challenges, run code directly in your browser, and watch your skills ascend.
          </p>
          <button
            onClick={handleEnterClick}
            className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
