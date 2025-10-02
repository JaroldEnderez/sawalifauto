import Image from "next/image";
import BlackCar from "../../images/black-car.jpg"
import Link from "next/link";

const placeholder = "https://placehold.co/600x400";

type Article = {
    title: string;
    summary: string;
    url: string;
    image?: string;
  };

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href='/articles'>
        <div 
        className="border p-2 rounded shadow hover:shadow-lg transition text-right cursor-pointer"
        
        >
        <Image
            src={article.image || BlackCar}
            alt={article.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-white/90 mb-2">{article.summary}</p>
        <a href={article.url} target="_blank" className="text-blue-500 hover:underline">
            اقرأ المزيد →
        </a>
        </div>
    </Link>
  );
}
