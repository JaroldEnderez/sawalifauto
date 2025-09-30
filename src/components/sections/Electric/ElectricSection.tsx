import React from "react";
import { evArticles } from "./data"; // import your EV articles

export default function ElectricCarsSection() {
  return (
    <section className="w-full mx-auto px-6 py-6 pb-20 " id="electric">
        <div className="max-w-6xl mx-auto content-center">
            <h2 className="text-2xl font-semibold mb-2 text-right text-white">
                Electric Cars 
            </h2>
            <hr className="border-gray-400 mb-6 bg-white w-full" />

            <div className="flex gap-x-5 h-[60vh] text-right">
                {/* Left small card */}
                <div
                key={evArticles[0].id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-1/4"
                >
                    <img
                    
                        alt={evArticles[0].title}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-black">
                        {evArticles[0].title}
                        </h3>
                        {/* <p className="text-gray-600 text-sm">{evArticles[0].summary}</p> */}
                        <a
                        href='#'
                        className="text-blue-600 text-sm font-medium mt-3 inline-block"
                        >
                        Read More →
                        </a>
                    </div>
                </div>

                {/* Middle wide card */}
                <div
                key={evArticles[1].id}
                className="relative rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition w-1/2"
                >
                    <img
                       
                        alt={evArticles[1].title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <h3 className="text-lg font-semibold mb-2 text-black z-10">
                        {evArticles[1].title}
                        </h3>
                    </div>
                </div>

                {/* Right small card */}
                <div
                key={evArticles[2].id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-1/4"
                >
                    <img
                       
                        alt={evArticles[2].title}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-black">
                        {evArticles[2].title}
                        </h3>
                        {/* <p className="text-gray-600 text-sm">{evArticles[2].summary}</p> */}
                        <a
                        href='#'
                        className="text-blue-600 text-sm font-medium mt-3 inline-block"
                        >
                        Read More →
                        </a>
                    </div>
                </div>
            </div>
            </div>
        <div/>
    </section>
  );
}
