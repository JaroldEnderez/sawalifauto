export default function ArticlePage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
        {/* Layout wrapper */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Related Articles */}
          <aside className="w-full lg:w-1/4 space-y-4">
            <h2 className="text-lg font-bold border-b pb-2">Related Articles</h2>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                >
                  <h3 className="font-semibold text-sm mb-1">
                    Related Article {i + 1}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Short summary for related article {i + 1}.
                  </p>
                </div>
              ))}
            </div>
          </aside>
  
          {/* Main Article */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold mb-4">
              Lorem Ipsum: The Future of Digital Innovation
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Published 3 days ago • Tech News
            </p>
            <img
              src="https://placehold.co/800x400"
              alt="Article Hero"
              className="rounded-lg shadow mb-6"
            />
  
            <article className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fringilla, leo at ultricies pretium, elit sem sollicitudin sapien,
                nec cursus nulla est id eros. Quisque nec magna id est interdum
                commodo vitae a nunc.
              </p>
              <p>
                Proin vitae est non ligula cursus sagittis. Nam sodales urna nec
                ipsum pretium, et feugiat leo consectetur. Vestibulum viverra arcu
                in felis volutpat, eget convallis elit vehicula.
              </p>
              <h2>Details</h2>
              <p>
                Pellentesque eu nisi sed nunc facilisis aliquet. Integer feugiat
                velit vitae mi tempor egestas. Duis maximus bibendum ex at blandit.
              </p>
            </article>
          </main>
        </div>
  
        {/* More Articles Grid */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">More Articles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white shadow hover:shadow-md transition cursor-pointer"
              >
                <img
                  src="https://placehold.co/400x200"
                  alt={`Article ${i + 1}`}
                  className="rounded mb-3"
                />
                <h3 className="font-semibold text-sm mb-1">
                  Grid Article {i + 1}
                </h3>
                <p className="text-xs text-gray-600">
                  Quick summary for grid article {i + 1}.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  