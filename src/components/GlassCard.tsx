import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  /** @deprecated hover3d is ignored — CSS handles hover now */
  hover3d?: boolean;
}

const GlassCard = ({ children, className = '', glow = false }: GlassCardProps) => (
  <div className={cn('glass-card', glow && 'glass-card-glow', className)}>
    {children}
  </div>
);

export default GlassCard;
