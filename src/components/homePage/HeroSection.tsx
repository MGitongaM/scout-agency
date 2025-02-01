import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      
      <section className=" h-[95vh]">
        <div className="grid grid-cols-12 items-end relative h-full px-4">
          <CloudinaryImage
            src="scout_home_hero_pe8hf5"
            height={900}
            width={1200}
            alt="scout group agency home hero img"
            className="object-cover w-full h-full absolute top-0 left-0 -z-30"
          />
          <div className="bg-slate-900/50 h-[95vh] w-screen absolute top-0 left-0 -z-30"></div>
          <div className=" absolute top-72 left-0 -z-20 col-start-2 col-end-11 md:col-start-7 md:col-end-12 lg:col-start-8 lg:col-end-12 pb-96 space-y-4 text-white">
            <h1 className="font-bold text-3xl">
              Opening Doors to Inclusive Journeys
            </h1>
            <p className="c">
              Because everyone should have access to great travel experiences
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
