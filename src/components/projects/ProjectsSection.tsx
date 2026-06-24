import { ProjectRow } from "@/components/projects/ProjectRow";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ProjectsSection() {
  const { ref, inView } = useScrollReveal({ amount: 0.12 });

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-ink text-paper py-20 sm:py-28 torn-edge-top relative z-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader inView={inView} />

        <div className="border-b border-paper/10">
          {projects.map((project, i) => (
            <ProjectRow key={project.index} project={project} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
