"use client";
import React, { useState, useMemo, useLayoutEffect } from "react";
import { PROJECTS } from "@/shared/constants";
import { ProjectFilter } from "@/features/ProjectFilter";
import { ProjectsList } from "@/widgets/ProjectsList";
import styles from "./ProjectsSection.module.scss";
import { Reveal } from "@/shared/ui";

const getCountByWidth = (width: number) => {
  if (width > 1884) return 5;
  if (width > 1534) return 4;
  if (width > 1184) return 3;
  if (width > 833) return 2;
  return 2;
};

// Стартовый набор рендерится на СЕРВЕРЕ (детерминированная константа, чтобы не
// было рассинхрона гидрации). Раньше было 0 → витрина уходила в HTML пустой и
// не индексировалась поисковиками. responsive-логика ниже только наращивает
// значение (Math.max), поэтому карточки не «исчезают» после маунта.
const INITIAL_VISIBLE = 6;

export const ProjectsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useLayoutEffect(() => {
    const updateCount = () => {
      const cols = getCountByWidth(window.innerWidth);
      // Грузим минимум 2 полных ряда и всегда кратно числу колонок, чтобы на
      // широких экранах не оставалась «сиротская» карточка в неполном ряду.
      setVisibleCount((prev) => {
        const atLeast = Math.max(prev, cols * 2);
        return Math.ceil(atLeast / cols) * cols;
      });
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
        <Reveal key={"more"} variant="up" className={styles.card}>
          <div className={styles.buttonContainer}>
            <button onClick={handleLoadMore} className={styles.toggleButton}>
              Показать еще (осталось {remainingCount})
            </button>
          </div>
        </Reveal>
      )}
    </section>
  );
};
