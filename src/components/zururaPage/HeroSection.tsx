import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1745592185/aboutUsPageHero_Image_wdyrwc.png')] bg-cover bg-center">
      <div className="min-h-screen container mx-auto grid place-content-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-slate-100 text-center space-y-6">
          <h1 className="text-5xl font-bold">
            Accessible Adventure,Meaningful Memories
          </h1>
          <p className="max-w-lg mx-auto  text-lg">
            Creating inclusive educational and recreational experiences for
            special needs children across Kenya.
          </p>
          <Button className="bg-lime-500 rounded-lg text-lg">
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}
