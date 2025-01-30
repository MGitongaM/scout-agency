import { blogsEntries } from "@/constData/homePage";
import React from "react";
import { Button } from "../ui/button";

export default function BlogsSection() {
  return (
    <>
      <section className="container mx-auto my-40 px-4">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-thin my-4 text-slate-400">Blogs and Articles</h2>
          <p className="c">
            Discover stories, insights, and updates on how we&apos;re
            transforming the tourism industry to be more inclusive. From
            personal journeys to industry innovations, explore how accessible
            tourism is making travel better for everyone.
          </p>
        </div>
        <div className="flex items-center justify-center gap-12 mt-12">
            {blogsEntries.map((entry)=>(
                <div key={entry.id} className="rounded-lg shadow-lg">
                    <div className="h-48 bg-slate-400 rounded-t-lg"></div>
                    <div className="space-y-4 px-4 py-6">
                        <p className="font-semibold">{entry.heading}</p>
                        <p className="c">{entry.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="grid place-content-center mt-8">
             <Button size='sm' className="bg-green-600 hover:bg-green-700">
                    View More Blogs & Articles
                </Button>
        </div>
      </section>
    </>
  );
}
