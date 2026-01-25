import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Project, PROJECTS } from "@/shared/constants/projects";
import styles from "./ProjectsList.module.scss";
import { LoadingFallback, FadeIn } from "@/shared/ui";

const ProjectCard = dynamic(() =>
  import("@/entities/project").then((mod) => mod.ProjectCard),
);

interface ProjectsListProps {
  projects?: Project[];
  searchFilter?: React.ReactNode;
}

export const ProjectsList = ({
  projects = PROJECTS,
  searchFilter,
}: ProjectsListProps) => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.title}>Проекты</h2>
          {searchFilter}
        </FadeIn>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <Suspense key={project.id} fallback={<LoadingFallback />}>
              <ProjectCard {...project} delay={idx * 0.1} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};
