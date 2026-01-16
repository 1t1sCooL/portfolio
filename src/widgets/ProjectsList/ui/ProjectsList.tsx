"use client";
import { ProjectCard } from "@/entities/project";
import { PROJECTS } from "@/shared/constants/projects";
import styles from "./ProjectsList.module.scss";

export const ProjectsList = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
