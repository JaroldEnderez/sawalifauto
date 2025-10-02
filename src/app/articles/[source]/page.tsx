import ArticleCard from "@/components/Cards/ArticleCards";

interface Article {
    title: string;
    summary: string;
    url: string;
  }
  
  const dummyArticles: Record<string, Article[]> = {
    latest: [
      { title: "TopGear Review 1", summary: "This is a summary of review 1.", url: "#" },
      { title: "TopGear Review 2", summary: "This is a summary of review 2.", url: "#" },
    ],
    exclusive: [
      { title: "Car & Driver Review 1", summary: "Summary for C&D review 1.", url: "#" },
      { title: "Car & Driver Review 2", summary: "Summary for C&D review 2.", url: "#" },
    ],
    reviews: [
      { title: "Edmunds Review 1", summary: "Summary of Edmunds review 1.", url: "#" },
    ],
  };


  export default function ReviewPage({ params }: { params: { source: string } }) {
    const { source } = params;
    const articles = dummyArticles[source] || [];
  
    return (
      <main className="">
        <div className="my-10 flex flex-col w-full max-w-5xl mx-auto" dir="rtl">
            <h1 className="text-2xl text-right font-bold mb-6 capitalize">{source} Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* First row: big featured (2 cols) + 1 small */}
                <div className="md:col-span-2">
                    <ArticleCard
                    article={{
                        title: "Featured Latest Article",
                        summary: "This is the newest and most important article.",
                        url: "#",
                        
                    }}
                    
                    />
                </div>

                <div>
                    <ArticleCard
                    article={{
                        title: "Small Article 1",
                        summary: "Next article after featured.",
                        url: "#",
                        
                    }}
                    />
                </div>

                {/* Second row: 3 small articles */}
                {[...Array(3)].map((_, i) => (
                    <div key={i}>
                    <ArticleCard
                        article={{
                        title: `Small Article ${i + 2}`,
                        summary: "Another chronological article.",
                        url: "#",
                        }}
                    />
                    </div>
                ))}
                </div>


        </div>
        
        <div className="bg-gray-800 w-screen h-24 flex justify-center items-center"><h1>Section block</h1></div>
        <div className="my-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column with light background */}
            <div className="bg-blue-900 p-6 rounded-lg flex flex-col gap-y-4">
                {[...Array(5)].map((_, i) => (
                <ArticleCard
                    key={`left-${i}`}
                    article={{
                    title: `Left Column Article ${i + 1}`,
                    summary: "This is a placeholder summary for testing layout.",
                    url: "#",
                    
                    }}
                />
                ))}
            </div>

            {/* Right column with no background */}
            <div className="p-6 flex flex-col gap-y-4">
                {[...Array(5)].map((_, i) => (
                <ArticleCard
                    key={`right-${i}`}
                    article={{
                    title: `Right Column Article ${i + 1}`,
                    summary: "This is a placeholder summary for testing layout.",
                    url: "#",
                    
                    }}
                />
                ))}
            </div>
            </div>

            <div className="my-10 w-full max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-right">More Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(20)].map((_, i) => (
                    <ArticleCard
                        key={`grid-${i}`}
                        article={{
                        title: `Grid Article ${i + 1}`,
                        summary: "This is a placeholder summary for testing layout.",
                        url: "#",
                
                        }}
                    />
                    ))}
                </div>
            </div>


      </main>
    );
  }
  