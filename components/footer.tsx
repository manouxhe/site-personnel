import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Footer() {
  return (
    <footer className="bg-white mt-20 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <p className={`${playfair.className} text-lg text-gray-800 mb-2`}>
          Manar El Kadi
        </p>

        <p className="text-sm text-gray-500 mb-4">
          Electronic & Computer Engineering Student
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
