import { Hero } from "@/widgets/Hero";
import { ProjectsList } from "@/widgets/ProjectsList";
import { ContactForm } from "@/widgets/ContactForm";
import { About } from "@/widgets/About";
import { Stack } from "@/widgets/Stack";

export default function HomePage() {
  return (
    <main>
      {/* <Hero /> */}
      <About />
      <Stack />
      <ProjectsList />
      <ContactForm />
    </main>
  );
}
