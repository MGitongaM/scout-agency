// import { blogsEntries } from "@/constData/homePage";
// import CloudinaryImage from "../CloudinaryImage";
import Listings from "../blogsAndArticlesPage/Listings";

export default function BlogsSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-xl font-thin text-stone-400">
            Blogs and Articles
          </h2>
          <p className="text-center leading-8">
            Discover stories, insights, and updates on how we&apos;re
            transforming the tourism industry to be more inclusive. From
            personal journeys to industry innovations, explore how accessible
            tourism is making travel better for everyone.
          </p>
        </div>
        <Listings/>
        {/* <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 mt-12">
          {blogsEntries.map((entry) => (
            <div
              key={entry.id}
              className=" w-full md:w-[26vw] rounded-lg shadow-lg"
            >
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
      </div>
    </section>
  );
}
