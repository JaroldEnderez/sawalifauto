"use client"
import { Search } from "lucide-react"; 
import { Formula1Section, ElectricSection, IndustrySection } from '@/components/sections'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      if (y < vh) {
        controls1.start({ height: "100vh" });
        controls2.start({ height: "0vh" });
        controls3.start({ height: "0vh" });
      } else if (y >= vh && y < 2 * vh) {
        controls1.start({ height: "0vh" });
        controls2.start({ height: "100vh" });
        controls3.start({ height: "0vh" });
      } else {
        controls1.start({ height: "0vh" });
        controls2.start({ height: "0vh" });
        controls3.start({ height: "100vh" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls1, controls2, controls3]);

  const articles = [
    {
      id: 1,
      title: "New Porsche 911 Review",
      summary: "A quick look at the latest Porsche 911 and its performance features.",
      image: "https://placehold.co/600x400",
      url: "#",
    },
    {
      id: 2,
      title: "Tesla Model S Plaid",
      summary: "Exploring Tesla’s fastest sedan and how it stacks against supercars.",
      image: "https://placehold.co/600x400",
      url: "#",
    },
    {
      id: 3,
      title: "Toyota Corolla Hybrid",
      summary: "An eco-friendly choice with surprising practicality.",
      image: "https://placehold.co/600x400",
      url: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pb-20 overflow-hidden">
    
      <nav className="shadow-sm bg-gradient-to-r from-black via-gray-700 to-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="relative w-64">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            />
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-gray-300 px-10 py-2 text-white rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>

          {/* Links */}
          <div className="flex w-full justify-between pl-6 ">
            <ul className="flex w-full justify-between text-white text-lg list-none font-bold">
              <li><a href="#latest" className="hover:text-blue-600">Latest</a></li>
              <li><a href="#videos" className="hover:text-blue-600">Reviews</a></li>
              <li><a href="#exclusive" className="hover:text-blue-600">Exclusive</a></li>
              <li><a href="#formulaOne" className="hover:text-blue-600">Formula 1</a></li>
              <li><a href="#electric" className="hover:text-blue-600">Electric Cars</a></li>
              <li><a href="#industry" className="hover:text-blue-600">Industry and Business</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="py-8 shadow-sm bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4 shadow shadow-lg">
            Auto Reviews
          </h1>
          <p className="text-lg">
            Latest car reviews scraped and translated for you.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <motion.section animate={controls1} className="w-full mx-auto px-6 py-6 pb-20 overflow-hidden" id="latest">
        <div className="max-w-6xl mx-auto content-center ">
          <h2 className="text-2xl font-semibold mb-2 text-right text-white">Latest Articles</h2>
          <hr className="border-gray-400 mb-6 bg-white w-full" />

          <div className="flex gap-x-5 h-[60vh] text-right">
            <div
              key={articles[0].id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-1/4"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">{articles[0].title}</h3>
                <p className="text-gray-600 text-sm">{articles[0].summary}</p>
                <a
                  href={articles[0].url}
                  className="text-blue-600 text-sm font-medium mt-3 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
            <div
              key={articles[1].id}
              className="relative bg-red-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-1/2"
            >
              <img
                src={articles[1].image}
                alt={articles[1].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <h3 className="text-lg font-semibold mb-2 text-black z-10">{articles[1].title}</h3>
              </div>
            </div>
            <div
              key={articles[2].id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-1/4"
            >
              <img
                src={articles[2].image}
                alt={articles[2].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">{articles[2].title}</h3>
                <p className="text-gray-600 text-sm">{articles[2].summary}</p>
                <a
                  href={articles[2].url}
                  className="text-blue-600 text-sm font-medium mt-3 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
        
        <motion.section animate={controls2} className="max-w-6xl mx-auto px-6 py-6 pb-20 overflow-hidden" id="videos">
          <h2 className="text-2xl font-semibold mb-2 text-right text-white">In-Depth Automotive Video Reviews</h2>
          <div className="flex gap-x-5">
            <div className="w-1/2">
              <hr className="border-gray-400 bg-white w-full" />
              <div className="flex gap-x-5 p-4 h-48">
              {/* Text block takes 70% */}
              <div className="flex flex-col justify-between text-right w-[70%]">
                <h3 className="text-white font-bold">{articles[0].title}</h3>
                <p className="text-white line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                  reprehenderit ad earum accusantium, quia similique dolores modi,
                  cumque quas ullam dolore, hic magni?
                </p>
                <p className="text-white">
                  by <span className="font-bold text-white">Author</span>
                </p>
              </div>

              {/* Image container takes 30% */}
              <div className="w-[30%] h-full shadow-md rounded-lg overflow-hidden">
                <img
                  src={articles[2].image}
                  alt={articles[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex gap-x-5 p-4 h-48">
            {/* Text block takes 70% */}
            <div className="flex flex-col justify-between text-right w-[70%]">
              <h3 className="text-white font-bold">{articles[0].title}</h3>
              <p className="text-white line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                reprehenderit ad earum accusantium, quia similique dolores modi,
                cumque quas ullam dolore, hic magni?
              </p>
              <p className="text-white">
                by <span className="font-bold text-white">Author</span>
              </p>
            </div>

            {/* Image container takes 30% */}
            <div className="w-[30%] h-full shadow-md rounded-lg overflow-hidden">
              <img
                src={articles[2].image}
                alt={articles[1].title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-x-5 p-4 h-48">
            {/* Text block takes 70% */}
            <div className="flex flex-col justify-between text-right w-[70%]">
              <h3 className="text-white font-bold">{articles[0].title}</h3>
              <p className="text-white line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                reprehenderit ad earum accusantium, quia similique dolores modi,
                cumque quas ullam dolore, hic magni?
              </p>
              <p className="text-white">
                by <span className="font-bold text-white">Author</span>
              </p>
            </div>

            {/* Image container takes 30% */}
            <div className="w-[30%] h-full shadow-md rounded-lg overflow-hidden">
              <img
                src={articles[2].image}
                alt={articles[1].title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

            </div>
            <div className="w-1/2 text-right">
              <hr className="border-gray-400 mb-4 bg-white w-full" />
              <div className="w-full h-96 shadow-md rounded-lg overflow-hidden mb-4">
                <img 
                  src={articles[2].image}
                  alt={articles[1].title}
                  className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-white font-bold">{articles[0].title}</h3>
              <p className="text-white">
                by <span className="font-bold text-white">Author</span>
              </p>
            </div>
          </div>
      </motion.section>

      <motion.section animate={controls3} className="w-full mx-auto px-6 py-6 pb-20 overflow-hidden" id="exclusive">
        <div className="max-w-6xl mx-auto content-center">
          <h2 className="text-2xl font-semibold mb-2 text-right text-white">Exclusive</h2>
          <hr className="border-gray-400 bg-white w-full mb-6" />
          <div className="grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i)=>(
              <div
                key={articles[0].id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-right">
                  <h3 className="text-lg font-semibold mb-2 text-black">{articles[0].title}</h3>
                  <p className="text-gray-600 text-sm">{articles[0].summary}</p>
                  <a
                    href={articles[0].url}
                    className="text-blue-600 text-sm font-medium mt-3 inline-block"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Formula1Section/>
      <ElectricSection/>
      <IndustrySection/>
    </main>
  );
}
