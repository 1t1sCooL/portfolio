"use client";
import { ErrorBoundary } from "@/shared/ui";
import { Hero } from "@/widgets/Hero";
import { About } from "@/widgets/About/ui/About";
import { Stack } from "@/widgets/Stack/ui/Stack";
import { ProjectsSection } from "@/widgets/ProjectsSection";

// Секции рендерим обычным импортом (SSR на месте), без dynamic()+Suspense:
// ленивая подгрузка основного контента подменяла SSR-разметку маленьким
// LoadingFallback на время гидратации → огромный CLS и поздний LCP.
export const HomePage = () => {
  return (
    <main>
      <Hero />
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Stack />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProjectsSection />
      </ErrorBoundary>
    </main>
  );
};
