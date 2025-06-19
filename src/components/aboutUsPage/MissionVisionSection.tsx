import CloudinaryImage from "../CloudinaryImage";

export default function MissionVisionSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto bg-scoutGreen2 px-4 py-20 mb-10 rounded-b-lg space-y-40">
        <div className="flex flex-wrap-reverse  md:flex-nowrap justify-evenly items-start gap-6">
          <div className="w-full md:w-6/12 lg:w-4/12">
            <CloudinaryImage
              src="mission_image_xmcpvr"
              height={800}
              width={800}
              alt="scout group agency mission image"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 text-balance space-y-6 pt-12">
            <h2 className="text-2xl font-thin text-stone-400">Our Mission</h2>
            <p className=" leading-8">
              To champion accessible tourism by creating inclusive travel
              opportunities, advocating for policy reforms, and empowering
              stakeholders through education, innovation, and collaboration,
              ensuring that everyone, regardless of ability, can experience the
              joy of travel.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center lg:items-start gap-6">
          <div className="w-full md:w-6/12 lg:w-4/12 text-balance space-y-6 pt-12">
            <h2 className="text-2xl font-thin text-stone-400">Our Vision</h2>
            <p className=" leading-8">
              A world where tourism and hospitality are fully inclusive,
              accessible, and enriching for all, fostering equity, diversity,
              and shared experiences that break barriers and celebrate human
              connection.
            </p>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <CloudinaryImage
              src="vision_image_iffkeu"
              height={800}
              width={800}
              alt="scout group agency mission image"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
