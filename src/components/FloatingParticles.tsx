import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-github-accent/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-github-accent/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-github-accent/3 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default FloatingParticles;
