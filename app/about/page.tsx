import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});


export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      
      <section className="
        flex
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
        max-w-4xl
      ">
        
        {/* LEFT */}
        <div className="w-1/2 bg-pink-100 flex flex-col items-center justify-center p-8">
          <img
            src="/me.jpg"
            alt="Me"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h2 className={`${playfair.className} text-xl`}>
            Manar El Kadi
          </h2>
          <p className="text-sm text-gray-600">Student</p>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 p-10 text-center">
          <h1 className={`${playfair.className} text-3xl  mb-6`}
          >About Me
          </h1>

          <p className="text-gray-600 mb-4">
            I’m a third-year Electronic and Computer Engineering student...
          </p>

          <p className="text-gray-600 mb-4">
            I love creating new projects that combine creativity and logic...
          </p>

          <p className="text-gray-600">
            My goal is to keep building strong technical skills...
          </p>
        </div>

      </section>

    </main>
  );
}
