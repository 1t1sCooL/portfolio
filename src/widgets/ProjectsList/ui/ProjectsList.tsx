"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "@/entities/project";
import styles from "./ProjectsList.module.scss";

const projects = [
  {
    title: "День на Земле",
    description: "Сколько дней вы прожили?",
    image: "/next.sv", // Используй реальный файл из папки public или заглушку
    tags: ["React", "Vite", "SCSS"],
  },
];

export const ProjectsList = () => (
  <section className={styles.section} id="projects">
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      Мои Проекты
    </motion.h2>
    <div className={styles.grid}>
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </section>
);
