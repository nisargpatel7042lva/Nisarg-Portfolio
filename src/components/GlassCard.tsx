import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
  glow?: boolean;
}

const GlassCard = ({ children, className = '', hover3d = true, glow = false }: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        'glass-card',
        glow && 'glass-card-glow',
        className
      )}
      whileHover={hover3d ? {
        y: -6,
        rotateX: 2,
        rotateY: -2,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeOut' },
      } : { y: -4 }}
      transition={{ duration: 0.3 }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
