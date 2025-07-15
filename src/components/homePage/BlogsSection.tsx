// import { blogsEntries } from "@/constData/homePage";
import React from "react";
import { Button } from "../ui/button";
// import CloudinaryImage from "../CloudinaryImage";
import Link from "next/link";
import Listings from "../blogsAndArticlesPage/Listings";

export default function BlogsSection() {
  return (
    <>
      <section className="container mx-auto my-20 px-4">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-thin my-4 text-slate-400">Blogs and Articles</h2>
          <p className="c">
            Discover stories, insights, and updates on how we&apos;re
            transforming the tourism industry to be more inclusive. From
            personal journeys to industry innovations, explore how accessible
            tourism is making travel better for everyone.
          </p>
        </div>
        {/* <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 mt-12">
          {blogsEntries.map((entry) => (
            <div key={entry.id} className=" w-full md:w-[26vw] rounded-lg shadow-lg">
              <div className="h-64  bg-slate-400 rounded-t-lg">
                <CloudinaryImage
                  src={entry.imgSrc}
                  height={400}
                  width={400}
                  alt="scout group agency logo"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-4 px-4 py-6">
                <p className="font-semibold">{entry.heading}</p>
                <p className="c">{entry.excerpt}</p>
              </div>
            </div>
          ))}
        </div> */}
        <Listings />
        <div className="grid place-content-center ">
          <Button asChild size="lg" className="bg-scoutGreen1 text-lg hover:bg-green-700 hover:scale-110 transition duration-300">
            <Link href={`/blogs-and-articles`}>
              View More Blogs & Articles
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
