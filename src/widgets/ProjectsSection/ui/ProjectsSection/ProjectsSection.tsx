"use client";
import React, { useState, useMemo, useLayoutEffect } from "react";
import { PROJECTS } from "@/shared/constants";
import { ProjectFilter } from "@/features/ProjectFilter";
import { ProjectsList } from "@/widgets/ProjectsList";
import styles from "./ProjectsSection.module.scss";
import { motion } from "framer-motion";

const getCountByWidth = (width: number) => {
  if (width > 1884) return 5;
  if (width > 1534) return 4;
  if (width > 1184) return 3;
  if (width > 833) return 2;
  return 2;
};

export const ProjectsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(0);

  useLayoutEffect(() => {
    const updateCount = () => {
      const count = getCountByWidth(window.innerWidth);
      setVisibleCount(count);
    };

    updateCount();

    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return PROJECTS;

    const query = searchQuery.toLowerCase();
    return PROJECTS.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(query);
      const descriptionMatch = project.description
        .toLowerCase()
        .includes(query);
      const stackMatch = project.stack.some((tech) =>
        tech.toLowerCase().includes(query),
      );

      return titleMatch || descriptionMatch || stackMatch;
    });
  }, [searchQuery]);

  const displayedProjects = searchQuery.trim()
    ? filteredProjects
    : filteredProjects.slice(0, visibleCount);

  const hasMoreProjects = visibleCount < filteredProjects.length;
  const remainingCount = filteredProjects.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(
      (prev) =>
        prev +
        (typeof window !== "undefined"
          ? getCountByWidth(window.innerWidth)
          : 3),
    );
  };

  return (
    <section className={styles.section}>
      <ProjectsList
        projects={displayedProjects}
        searchFilter={
          <ProjectFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        }
      />
      {hasMoreProjects && !searchQuery.trim() && (
        <motion.div
          key={"more"}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <div className={styles.buttonContainer}>
            <button onClick={handleLoadMore} className={styles.toggleButton}>
              Показать еще (осталось {remainingCount})
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};
