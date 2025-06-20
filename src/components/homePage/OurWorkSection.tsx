import { ourWorkEntries } from "@/constData/homePage";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CloudinaryImage from "../CloudinaryImage";
import Link from "next/link";

export default function OurWorkSection() {
  return (
    <>
      <section className="container mx-auto my-40 px-4">
        <div className="flex md:flex-nowrap items-center justify-center gap-2 md:gap-8">
          {/* <div className="h-[40vh] w-full bg-green-300 rounded-lg px-8 py-12 space-y-4"> */}
          <div className="h-[40vh] w-full bg-scoutGreen2 rounded-lg px-8 py-12 space-y-4">
            <h2 className="text-slate-400 font-thin">Our Work</h2>
            <p className="text-2xl lg:text-5xl font-medium">
              Redefining Travel <br />
              for All
            </p>
            <Button
              variant="outline"
              size="default"
              className="text-slate-700 bg-transparent font-medium border-slate-700 w-full md:w-48 hover:scale-110 transition duration-300"
            >
              Learn More...
            </Button>
          </div>
          <div className="h-[40vh] w-full bg-slate-400 rounded-lg">
            <CloudinaryImage
              src="our_work_image_bgc05b"
              height={400}
              width={400}
              alt="scout group agency logo"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-wrap md  justify-center gap-x-8 gap-y-8 mt-8 text-zinc-100 ">
          {ourWorkEntries.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                entry.id == 1 && "bg-scoutGreen3",
                entry.id == 2 && "bg-scoutGreen4",
                entry.id == 3 && "bg-scoutGreen3",
                "rounded-lg space-y-4 px-8 lg:px-16 py-12 flex flex-col justify-between w-full md:w-5/12 lg:w-[24rem]"
              )}
            >
              <p className="font-semibold">{entry.heading}</p>
              <p className=" text-balance">{entry.highlight}</p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="default"
                  className="text-zinc-100 bg-transparent font-medium border-zinc-100 w-48 hover:scale-110 transition duration-300"
                >
                  <Link href={entry.link}>Learn More...</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
