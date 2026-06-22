import { Project, PROJECTS } from "@/shared/constants/projects";
import styles from "./ProjectsList.module.scss";
import { FadeIn } from "@/shared/ui";
import { ProjectCard } from "@/entities/project";

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
            <ProjectCard key={project.id} {...project} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
