"use client";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");   // ce que utilisateur écrit
  const [message, setMessage] = useState("");         // texte qui va s’afficher

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex items-center justify-center">
      <section className="text-center px-6 max-w-2xl">

        <h1 className="text-5xl font-serif font-extrabold text-pink-600 mb-4">
          Hello, my name is Manar ElKadi
        </h1>

        <h2 className="text-lg text-gray-600 mb-6">
          Electronic & Computer Engineering Student
        </h2>

        {/*  paragraphe texte + celui ajouté */}
        <p className="text-gray-700 leading-relaxed mb-8">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          <br />

          {/*  texte ajouté par utilisateur */}
          <span className="text-pink-600 font-semibold">{message}</span>
        </p>

        {/* BARRE DE RECHERCHE */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Écris quelque chose..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none w-72"
          />

          <button
            onClick={() => setMessage(inputValue)}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all shadow-md"
          >
            Ajouter le texte
          </button>
        </div>

        <a
          href="/projects"
          className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-50 transition-all"
        >
          zzzzzzzzzzzzzzzzz
        </a>
      </section>
    </div>
  );
}
