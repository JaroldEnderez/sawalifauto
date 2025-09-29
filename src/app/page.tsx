export default function Home() {
  // dummy articles
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
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Auto Reviews</h1>
          <p className="text-gray-600 text-lg">
            Latest car reviews scraped and translated for you.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold mb-2 text-right text-gray-800">Latest Articles</h2>
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
        </section>
        
        <section className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-semibold mb-2 text-right text-gray-800">In-Depth Automotive Video Reviews</h2>
          <div className="flex gap-x-5">
            <div className="w-1/2">
              <hr className="border-gray-400 bg-white w-full" />
              <div className="flex gap-x-5 p-4 h-48">
              {/* Text block takes 70% */}
              <div className="flex flex-col justify-between text-right w-[70%]">
                <h3 className="text-gray-800 font-bold">{articles[0].title}</h3>
                <p className="text-gray-800 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                  reprehenderit ad earum accusantium, quia similique dolores modi,
                  cumque quas ullam dolore, hic magni?
                </p>
                <p className="text-gray-800">
                  by <span className="font-bold text-gray-800">Author</span>
                </p>
              </div>

              {/* Image container takes 30% */}
              <div className="w-[30%] h-full">
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
              <h3 className="text-gray-800 font-bold">{articles[0].title}</h3>
              <p className="text-gray-800 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                reprehenderit ad earum accusantium, quia similique dolores modi,
                cumque quas ullam dolore, hic magni?
              </p>
              <p className="text-gray-800">
                by <span className="font-bold text-gray-800">Author</span>
              </p>
            </div>

            {/* Image container takes 30% */}
            <div className="w-[30%] h-full">
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
              <h3 className="text-gray-800 font-bold">{articles[0].title}</h3>
              <p className="text-gray-800 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                reprehenderit ad earum accusantium, quia similique dolores modi,
                cumque quas ullam dolore, hic magni?
              </p>
              <p className="text-gray-800">
                by <span className="font-bold text-gray-800">Author</span>
              </p>
            </div>

            {/* Image container takes 30% */}
            <div className="w-[30%] h-full">
              <img
                src={articles[2].image}
                alt={articles[1].title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

            </div>
            <div className="w-1/2 text-right">
              <hr className="border-gray-400 mb-6 bg-white w-full" />
              <div className="w-full h-96 object-cover rounded-md">
                <img 
                  src={articles[2].image}
                  alt={articles[1].title}/>
              </div>
              <h3 className="text-gray-800 font-bold">{articles[0].title}</h3>
              <p className="text-gray-800">
                by <span className="font-bold text-gray-800">Author</span>
              </p>
            </div>
          </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-6">
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
          ))}
        </div>
      </section>
    </main>
  );
}
