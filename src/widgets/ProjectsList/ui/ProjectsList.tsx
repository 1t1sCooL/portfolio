import { ProjectCard } from "@/entities/project";
import { Project, PROJECTS } from "@/shared/constants/projects";
import styles from "./ProjectsList.module.scss";

interface ProjectsListProps {
  projects?: Project[];
  searchFilter?: React.ReactNode;
}

export const ProjectsList = ({ projects = PROJECTS, searchFilter }: ProjectsListProps) => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        {searchFilter}
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
