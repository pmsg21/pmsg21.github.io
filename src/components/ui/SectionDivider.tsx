type DividerVariant = "wave" | "diagonal" | "steps" | "angle" | "curve";

interface SectionDividerProps {
  variant: DividerVariant;
  fillClass: string;
}

const paths: Record<DividerVariant, React.ReactNode> = {
  wave: (
    <path d="M0,0 C200,120 400,120 600,60 C800,0 1000,0 1200,80 L1200,120 L0,120Z" />
  ),
  diagonal: <path d="M1200 120L0 120 1200 0z" />,
  steps: (
    <>
      <path
        d="M0,0 C150,80 350,100 600,50 C850,0 1050,30 1200,90 L1200,120 L0,120Z"
        opacity=".2"
      />
      <path
        d="M0,20 C200,100 400,80 600,40 C800,0 1000,20 1200,80 L1200,120 L0,120Z"
        opacity=".4"
      />
      <path d="M0,50 C250,100 450,60 650,40 C850,20 1050,50 1200,70 L1200,120 L0,120Z" />
    </>
  ),
  angle: <path d="M0,0V120H1200V0L600,60Z" />,
  curve: (
    <path d="M0,60 Q300,120 600,100 Q900,80 1200,120 L1200,120 L0,120Z" />
  ),
};

export function SectionDivider({ variant, fillClass }: SectionDividerProps) {
  return (
    <div className="section-divider divider-bottom">
      <svg
        className={`h-24 md:h-40 ${fillClass}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths[variant]}
      </svg>
    </div>
  );
}
