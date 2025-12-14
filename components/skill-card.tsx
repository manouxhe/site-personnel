import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type SkillSectionProps = {
  title: string;
  skills: string[];
};

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
      <h3 className={`${playfair.className} text-xl text-pink-400 mb-6`}>
        {title}
      </h3>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              bg-pink-100
              text-sm
              px-4
              py-2
              rounded-lg
              shadow-sm
              transition
              hover:scale-105
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
