import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";

export default function WhoWeServeSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-6">
          <div className="w-full md:w-6/12 lg:w-4/12">
            <CloudinaryImage
              src="zurura_serve_section_image_xhvp7l"
              height={800}
              width={800}
              alt="scount agency zurura initiative who we are image"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 space-y-6">
            <h2 className="text-xl font-thin text-stone-400">Who we Serve</h2>
            <h3 className="text-2xl  ">
              Empowering Every Child, Embracing Every Ability
            </h3>
            <p className=" leading-8">
              We serve children aged 6-18 from special needs and inclusive
              schools across Kenya, including those with physical, sensory,
              intellectual, and developmental disabilities.
            </p>
            <p className=" leading-8">
              We believe every child deserves the chance to explore, learn, and
              connect regardless of their physical or cognitive limitations.
              Our inclusive trips ensure that each child is not only
              accommodated, but also celebrated, supported, and empowered to
              thrive.,
            </p>
            <Button
              size="lg"
              variant="outline"
              className="text-lg  text-green-500 hover:scale-110 transition duration-300"
            >
              Take Action...
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
