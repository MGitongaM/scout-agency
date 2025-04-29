import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";
import clsx from "clsx";

export default function TestimonialSection() {
  return (
    <>
      {/* <section className="container mx-auto my-40 px-4"> */}
      <section className="bg-scoutGreen3 py-4">
        <div className=" container mx-auto my-40 px-4 flex flex-col md:flex-row items-center justify-center gap-x-24 gap-y-24">
          <div className="relative ">
            <div className=" rounded-lg w-full h-full  absolute top-20 md:left-10">
                <CloudinaryImage
                    src="jane_doe_blzqde"
                    height={400}
                    width={400}
                    alt="Person"
                    className="object-cover w-full h-full rounded-xl  "
                />
            </div>
            <div className="bg-scoutGreen4 rounded-lg size-96"></div>
          </div>
          <div className="flex flex-col space-y-8 w-full md:w-[30vw] text-slate-100">
            <p className="font-thin "></p>
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
                    index == 1 && "bg-white border-green-600"
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
