import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";

export default function GetInvolvedSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-evenly items-center gap-6">
          <div className="w-full md:w-6/12 lg:w-5/12 space-y-6">
            <h2 className="text-xl font-thin text-stone-400">Get Involved</h2>
            <h3 className="text-4xl  ">
              Transforming Lives, One Journey at a Time
            </h3>
            <p className=" leading-8">
              The Zurura Initiative is more than just travel,  it&apos;s a
              gateway to confidence, connection, and inclusion for children with
              special needs in Kenya. With your support, we can unlock a world
              of opportunity, foster a more inclusive society, and create
              lasting memories for children who need them most. Your
              contribution helps us provide meaningful experiences that nurture
              growth, joy, and holistic development.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="text-lg  text-green-500 hover:scale-110 transition duration-300"
            >
              Take Action...
            </Button>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <CloudinaryImage
              src="zurura_get-involved-section_euwvuv"
              height={800}
              width={800}
              alt="scount agency  get involved image"
              className="object-cover h-full w-full rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
