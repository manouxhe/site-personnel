import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});


type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        max-w-sm
        flex
        flex-col
        justify-between
        transition
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        cursor-pointer
      "
    >
      <div>
        <h3 className={`${playfair.className}  text-lg font-semibold mb-2`}> 
          {title} 
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      <button
        className="
          bg-pink-400
          text-white
          px-4
          py-2
          rounded-lg
          w-fit
          hover:bg-pink-500
          cursor-pointer
        "
      >
        View more
      </button>
    </div>
  );
}
