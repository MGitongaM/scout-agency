import { ourWorkEntries } from "@/constData/homePage";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CloudinaryImage from "../CloudinaryImage";

export default function OurWorkSection() {
  return (
    <>
      <section className="container mx-auto my-40 px-4">
        <div className="flex md:flex-nowrap items-center justify-center gap-8">
          <div className="h-[40vh] w-full bg-green-300 rounded-lg px-8 py-12 space-y-4">
            <h2 className="text-slate-400 font-thin">Our Work</h2>
            <p className="text-2xl lg:text-5xl font-medium">
              Redefining Travel <br />
              for All
            </p>
            <Button
              variant="outline"
              size="default"
              className="text-slate-700 bg-transparent font-medium border-slate-700 w-full md:w-48"
            >
              Learn More...
            </Button>
          </div>
          <div className="h-[40vh] w-full bg-slate-400 rounded-lg">
            <CloudinaryImage
              src="our_work_wheelchair_tosotd"
              height={400}
              width={400}
              alt="scout group agency logo"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-wrap md  justify-center gap-8 mt-8 ">
          {ourWorkEntries.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                entry.id == 1 && "bg-green-800/50",
                entry.id == 2 && "bg-green-950/50",
                entry.id == 3 && "bg-green-800/50",
                "rounded-lg space-y-4 px-8 lg:px-16 py-12  w-full md:w-[28vw]"
              )}
            >
              <p className="font-semibold">{entry.heading}</p>
              <p className=" text-balance">{entry.highlight}</p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="default"
                  className="text-slate-700 bg-transparent font-medium border-slate-700 w-48"
                >
                  Learn More...
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
