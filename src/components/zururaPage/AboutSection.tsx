import CloudinaryImage from "../CloudinaryImage";

export default function AboutSection() {
  return (
    <section className="h-full">
      <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-12 px-4 py-20">
        <div className="w-full md:w-4/12">
          <div className="min-h-96 w-11/12 rounded-lg bg-scoutGreen2"></div>
          <CloudinaryImage
            src="zurura_about-section_image_tejozo"
            height={800}
            width={800}
            alt="scount agency zurura inititive about section image"
            className="object-cover h-full w-full rounded-lg -mt-80 pl-6"
          />
        </div>
        <div className="w-full md:w-4/12 space-y-6">
          <h2 className="text-4xl font thin"> About the Zurura initiative</h2>
          <p className="leading-8">
            The Zurura Initiative, born from the Scout Group Agency, is
            dedicated to accessible tourism for special needs children in Kenya.
            We organize enriching educational and recreational trips that
            promote social integration, learning, and confidence-building.
          </p>
        </div>
      </div>
    </section>
  );
}
