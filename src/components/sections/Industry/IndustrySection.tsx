import React from "react";
import { industryArticles } from "./data"; // make sure you have this array

export default function IndustrySection() {
  return (
    <section className="w-full mx-auto px-6 py-6 pb-20" id="industry">
        <div className="max-w-6xl mx-auto content-center">
            <h2 className="text-2xl font-semibold mb-2 text-white text-right">
                Industry & Business
            </h2>
            <hr className="border-gray-400 mb-6 bg-white w-full" />

            <div className="grid grid-cols-3 gap-6">
                {/* Left Feature Article (big card) */}
                <div
                key={industryArticles[0].id}
                className="col-span-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                <img
               
                    alt={industryArticles[0].title}
                    className="w-full h-[400px] object-cover"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {industryArticles[0].title}
                    </h3>
                    {/* <p className="text-gray-700 mb-4">{industryArticles[0].summary}</p> */}
                    <a
                    href='#'
                    className="text-blue-600 font-medium inline-block"
                    >
                    Read More →
                    </a>
                </div>
                </div>

                {/* Right Smaller Articles (stacked) */}
                <div className="flex flex-col gap-6">
                {industryArticles.slice(1, 3).map((article) => (
                    <div
                    key={article.id}
                    className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                    <img
                      
                        alt={article.title}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {article.title}
                        </h4>
                        {/* <p className="text-sm text-gray-600">{article.summary}</p> */}
                        <a
                        href='#'
                        className="text-blue-500 text-sm font-medium mt-2 inline-block"
                        >
                        Read More →
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
}
