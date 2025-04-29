import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full overflow-hidden bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1745753768/zurura-initiative_Hero_Image_cw3ev2.png')] bg-cover bg-center">
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <div className="min-h-screen max-w-7xl mx-auto flex justify-center items-center px-4">
          <div className=" text-slate-100 text-center mt-48 lg:mt-96 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Accessible Adventure,Meaningful Memories
            </h1>
            <p className="  text-lg">
              Creating inclusive educational and recreational experiences for
              special needs children across Kenya.
            </p>
            <Button className="bg-scoutGreen1 hover:bg-scoutGreen4 hover:scale-110 rounded-lg text-lg">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
