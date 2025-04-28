import { ourStorySectionEntries } from "@/constData/homePage";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export default function OurStorySection() {
  return (
    <>
      <section className="max-w-6xl mx-auto  ">
        <div className="bg-white relative rounded-lg shadow-lg min-h-[80vh] px-4 mx-2  -mt-40">
          <div className=" flex flex-wrap md:flex-nowrap  w-full justify-center gap-12">
            {ourStorySectionEntries.map((entry) => (
              <div key={entry.id} className="">
                <div className="flex min-h-20 gap-2 items-center">
                  <p
                    className={clsx(
                      "font-bold text-4xl",
                      entry.id == 1 && "text-amber-400",
                      entry.id == 2 && "text-pink-400",
                      entry.id == 3 && "text-green-700"
                    )}
                  >
                    {entry.figure}
                    <span className="">{entry.symbol}</span>
                  </p>
                  <p className="text-zinc-600">{entry.details}</p>
                  <Separator
                    orientation="vertical"
                    className={cn(entry.id === 3 && "bg-transparent")}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="min-h-[60vh] bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1738216645/home_our_story_rx1s4r.png')] bg-cover bg-center rounded-lg">
            <div className="flex flex-col justify-start space-y-4 text-white px-4 py-8">
              <h2 className="font-thin text-slate-400">Our story</h2>
              <div className="border rounded-lg w-full md:w-7/12 space-y-4 px-4 py-6">
                <h3 className="font-medium text-lg mb-8">
                  Accessible Tourism: A Path to Inclusion
                </h3>
                <p className="c">
                  Our misiion is promotes inclusive tourism, ensuring travel is
                  accessible to all. With 1.3 billion people (16% of the global
                  population) having disabilities, most tourism facilities
                  remain inaccessible.
                </p>
                <p className="c">
                  We collaborate with policymakers, industry leaders, and
                  communities to create barrier-free travel. Through advocacy,
                  training, and innovation, we champion equity and dignity for
                  all travelers.
                </p>
                <p className="c">
                  {" "}
                  Investing in inclusive tourism enriches experiences, benefits
                  communities, and transforms the industry into a model of
                  inclusivity.
                </p>
                <p className="c">Together, we make travel barrier-free.</p>
              </div>
              <Button
                variant="outline"
                size="default"
                className="text-green-600 bg-transparent font-medium border-green-600 w-48"
              >
                Learn More...
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
