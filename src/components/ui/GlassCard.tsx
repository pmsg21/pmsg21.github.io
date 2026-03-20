interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={`glass-card ${hover ? "hover:border-primary/40 transition-all duration-500" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
