import { blogsAndArticles } from "@/constData/blogsAndArticlesPage";
import CloudinaryImage from "../CloudinaryImage";
import Link from "next/link";

export default function Listings() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 ">
        {blogsAndArticles.map((reading) => (
            <div
            key={reading.id}
            className="w-full md:w-[20rem] lg:w-[24rem] h-full md:min-h-[32rem] lg:h-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            <Link href={`blogs-and-articles/${reading.slug}`}>
            <div className="h-64  bg-slate-400 rounded-t-lg">
              <CloudinaryImage
                src={reading.thumbnail}
                height={400}
                width={400}
                alt="scout group agency logo"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="leading-7 space-y-4 px-4 py-6">
                <p className="font-semibold ">{reading.title}</p>
              <p className="line-clamp-3">{reading.excerpt}</p>
            </div>
              </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
