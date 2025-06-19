import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";

export default function InvolvedSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-evenly items-start gap-12">
          <div className="w-full lg:w-4/12 space-y-6">
            <h2 className="text-2xl font-thin text-stone-400">Get Involved</h2>
            <h3 className="text-4xl font-semibold ">
              Breaking Barriers, Creating Inclusive Travel Experiences
            </h3>
            <p className=" leading-8">
              Join us in making tourism more inclusive! Whether you&apos;re a
              traveler, business, policymaker, or advocate, you can help create
              accessible experiences for all.
            </p>
            <p className=" leading-8">
              Be part of the movement for accessible tourism. Support our
              initiatives, promote inclusivity, and help ensure that everyone
              can explore the world without barriers.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="text-lg text-green-500 hover:scale-110 transition duration-300"
            >
              Take Action...
            </Button>
          </div>
          <div className="w-full lg:w-5/12">
            <CloudinaryImage
              src="get-involved-section_image_nslkjt"
              height={800}
              width={800}
              alt="scount agency  get involved image"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
