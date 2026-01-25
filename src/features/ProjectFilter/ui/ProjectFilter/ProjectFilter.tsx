"use client";
import styles from "./ProjectFilter.module.scss";

interface ProjectFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProjectFilter = ({
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) => {
  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Поиск по проектам..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};
