"use client"
import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/shared/ui";

const About = dynamic(() =>
    import("@/widgets/About/ui/About").then((mod) => mod.About)
);
const Stack = dynamic(() =>
    import("@/widgets/Stack/ui/Stack").then((mod) => mod.Stack)
);
const ProjectsSection = dynamic(() =>
    import("@/widgets/ProjectsSection").then((mod) => mod.ProjectsSection)
);

export const HomePage = () => {
    return (
        <main>
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
