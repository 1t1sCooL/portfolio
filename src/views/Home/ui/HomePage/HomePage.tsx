"use client";
import dynamic from "next/dynamic";
import { ErrorBoundary, LoadingFallback } from "@/shared/ui";
import { Suspense } from "react";

const About = dynamic(() =>
  import("@/widgets/About/ui/About").then((mod) => mod.About),
);
const Stack = dynamic(() =>
  import("@/widgets/Stack/ui/Stack").then((mod) => mod.Stack),
);
const ProjectsSection = dynamic(() =>
  import("@/widgets/ProjectsSection").then((mod) => mod.ProjectsSection),
);

export const HomePage = () => {
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Stack />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};
