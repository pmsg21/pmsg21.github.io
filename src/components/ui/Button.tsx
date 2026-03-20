interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
}

export function Button({ children, variant = "primary", href = "#", className = "" }: ButtonProps) {
  const base = "px-8 py-3 font-bold rounded-md transition-all flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-primary text-on-primary hover:bg-primary-dim shadow-lg shadow-primary/10",
    ghost:
      "bg-surface-container-highest text-on-surface border border-outline-variant hover:bg-surface-variant",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className} hover:scale-105 transition-all duration-300 min-w-33`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
