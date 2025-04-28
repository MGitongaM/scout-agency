import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-[90vh] bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1738216646/scout_home_hero_pe8hf5.png')] bg-cover bg-center">
        <div className="min-h-[90vh] bg-black/60 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-10">
            <div className="min-h-[90vh]  flex  justify-end items-center gap-4 ">
              <div className="max-w-xl space-y-6 text-slate-100">
                <h1 className="text-5xl font-bold">
                  Opening Doors to Inclusive Journeys
                </h1>
                <p className="text-2xl leading-8">
                  Because everyone should have access to great travel
                  experiences
                </p>
                <Button className="text-xl bg-lime-500 hover:bg-green-500 hover:scale-110">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
