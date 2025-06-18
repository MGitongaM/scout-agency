import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";

export default function GetInvolvedSection() {
  return (
    <>
      <section className="container mx-auto my-40 px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12">
          <div className="bg-slate-400 rounded-lg h-96 w-full md:w-[40vw]">
            <CloudinaryImage
                src="get_involved_image_rnyaam"
                height={400}
                width={400}
                alt="diverse hands"
                className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-8 w-full md:w-[40vw]">
            <h2 className="font-thin text-slate-400">Get Involved</h2>
            <p className="font-medium text-3xl">
              Breaking Barriers, Creating Inclusive Travel Experiences
            </p>
            <p className="c">
              Join us in making tourism more inclusive! Whether you&apos;re a
              traveler, business, policymaker, or advocate, you can help create
              accessible experiences for all.
            </p>
            <p className="c">
              Be part of the movement for accessible tourism. Support our
              initiatives, promote inclusivity, and help ensure that everyone
              can explore the world without barriers.
            </p>
            <Button
              variant="outline"
              size="default"
              className="text-green-600 bg-transparent font-medium border-green-600 w-48 hover:scale-110 transition duration-300"
            >
              Learn More...
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
