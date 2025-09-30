"use client";
import { useState } from "react";
import { f1Articles } from "./data";
import { ChevronDown, ChevronUp } from "lucide-react"; // install lucide-react if not yet

export default function Formula1Section() {
  const [openId, setOpenId] = useState(null);
  const [toggleState, setToggleState] = useState<Record<number, boolean>>({})

  const toggleOpen = (id: number) => {
    setToggleState((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  return (
    <section className="w-full mx-auto px-6 py-6 pb-20" id="formulaOne">
      <div className="max-w-6xl mx-auto content-center">
      <h2 className="text-2xl font-semibold mb-2 text-right text-white">
        Formula 1
      </h2>
      <hr className="border-gray-400 bg-white w-full mb-6" />
      <p className="mb-8 text-white text-lg italic text-right">
        Every Second Counts. Every Lap Tells a Story.
      </p>

      {/* Accordion articles */}
      <div className="space-y-6">
        {f1Articles.map((article, id) => (
          <div
            key={article.id}
            className={`rounded-lg shadow-md border transition-all duration-300 cursor-pointer ${
              openId === article.id ? "bg-red-50" : "bg-white"
            }`}
          >
            <div
              className="flex items-center justify-between p-4"
              onClick={() => toggleOpen(article.id)}
            >
              {/* Arrow toggle */}
              {toggleState[article.id] ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}

              <h3 className="text-lg font-bold text-gray-800">
                {article.title}
              </h3>

            </div>

            { toggleState[article.id] && (
              <div className="p-4 border-t" onClick={() => toggleOpen(article.id)}>
                <p className="text-gray-600 mb-3">{article.summary}</p>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />

                {/* Read more button only when open */}
                <a
                  href={article.url}
                  className="inline-block bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600"
                >
                  Read more →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
