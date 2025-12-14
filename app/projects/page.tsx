import ProjectCard from "@/components/project-card";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-12 py-16">
      
      <h1 className={`${playfair.className} text-4xl mb-10`}  >
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProjectCard
          title="Optube"
          description="YouTube-inspired website built with HTML, CSS, and JavaScript."
        />

        <ProjectCard
          title="Minesweeper"
          description="Classic Minesweeper game coded in Python using Tkinter."
        />

        <ProjectCard
          title="Autonomous Mini-Car"
          description="Embedded C project with sensors and navigation algorithm."
        />

        <ProjectCard
          title="Quarto"
          description="Two-player strategy game with simple AI."
        />
      </div>

    </main>
  );
}
