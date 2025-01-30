
import { Button } from "../ui/button";
import clsx from "clsx";

export default function TestimonialSection() {
  return (
    <>
      <section className="container mx-auto my-40 px-4">
        <div className="flex items-center justify-center gap-x-24 gap-y-12">
          <div className="relative">
            <div className="bg-slate-400 rounded-lg size-96 absolute top-10 left-10"></div>
            <div className="bg-slate-800 rounded-lg size-96  "></div>
          </div>
          <div className="flex flex-col space-y-8 w-[30vw]">
            <p className="font-thin text-slate-400"></p>
            <p className="font-medium text-3xl">Dr Jane Dore: Kenya</p>
            <p className="font-semibold text-sm">Founder at XXXX</p>
            <p className="c">
              &quot;Supporting accessible tourism has been incredibly rewarding.
              Knowing that my contribution helps create inclusive travel
              experiences for all makes a real difference&quot;
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((_, index) => (
                <Button
                  key={index}
                  size="icon"
                  className={clsx(
                      " bg-transparent  size-4 rounded-full",
                      index == 1 && "bg-green-800 border-green-600",
                  )}
                ></Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
