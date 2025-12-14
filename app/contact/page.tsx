import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section
        className="
        flex
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
        max-w-4xl
      "
      >
        <div className="  flex flex-col items-center justify-center p-20">
          <h2 className={`${playfair.className} pb-4 text-3xl`}>
            {" "}
            How to join me?{" "}
          </h2>
          <p className="text-sm text-gray-600 pb-1">Mail: manarelladi@gmail.com</p>
          <p className="text-sm text-gray-600 ">Phone number: +3247062xxxx</p>
          <a
            href="https://www.linkedin.com/in/manar-e-071438247/"
            target="_blank"
            className="
    inline-block
    mt-4
    text-pink-400
    font-medium
    transition
    hover:text-pink-600
    hover:underline
  "
          >
            Find me on LinkedIn 
          </a>
        </div>
      </section>
    </main>
  );
}
