import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  viewCaseLabel?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  alt,
  viewCaseLabel = "View Case",
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-surface-container-high border border-outline-variant/30">
        <Image
          alt={alt}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="px-6 py-2 bg-on-surface text-surface text-sm font-bold rounded-full">
            {viewCaseLabel}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm font-light">
        {description}
      </p>
    </div>
  );
}
