import { ProjectsList } from "@/widgets/ProjectsList";
import { About } from "@/widgets/About";
import { Stack } from "@/widgets/Stack";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";

export default function HomePage() {
  return (
    <main>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Stack />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProjectsList />
      </ErrorBoundary>
    </main>
  );
}
