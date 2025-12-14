import SkillSection from "@/components/skill-card";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

export default function SkillsPage() {
  return (
    <main className={`${playfair.className} min-h-screen px-10 py-20`}>
      <h1 className="text-4xl mb-14">My Skills</h1>

      <SkillSection
        title="Programming Languages"
        skills={["Python", "C", "C#", "JavaScript", "SQL", "HTML", "CSS"]}
      />

      <SkillSection
        title="Software & Tools"
        skills={[
          "Altium Designer",
          "MySQL Workbench",
          "VS Code",
          "Git & GitHub",
          "MPLAB",
          "Arduino IDE",
          "Linux / Bash",
        ]}
      />

      <SkillSection
        title="Soft Skills"
        skills={[
          "Teamwork",
          "Adaptability",
          "Problem-Solving",
          "Communication",
          "Creativity",
          "Project Management",
        ]}
      />
    </main>
  );
}
