import CloudinaryImage from "../CloudinaryImage";

export default function ObjectiveSection() {
  return (
    <section className="h-full bg-green-300">
      <div className="container mx-auto flex justify-evenly items-center gap-12 px-4 py-20">
        <div className="w-4/12 space-y-6">
          <h2 className="text-4xl font-thin">Our Objectives</h2>
          <p className="leading-8">
            Explore the core goals that drive the Zurura Initiative to create
            inclusive, impactful experiences for every child. These objectives
            are designed to foster learning, connection, joy, and personal
            growth—ensuring that every child, regardless of ability, feels seen,
            supported, and inspired throughout their journey.
          </p>
        </div>
        <div className="w-4/12 flex justify-center items-center text-slate-100">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-green-800  h-full w-72 rounded-lg ml-40 z-20">
              <CloudinaryImage
                src="zurura-initiative_Object_Image_vdzwxc"
                height={800}
                width={800}
                alt="scout agency objective image"
                className="object-cover h-56 w-72 "
              />
              <div className="px-4 space-y-4 py-2">
                <div className="flex justify-start items-center gap-">
                  <p className="text-sm font-bold">🎓 Educational Enrichment</p>
                </div>
                <p className="text-sm pl-4">
                  Experiential learning beyond the classroom
                </p>
              </div>
            </div>
            <div className="bg-green-800  h-full w-72 rounded-lg -mt-10 z-10">
              <CloudinaryImage
                src="zurura-initiative_Object_Image_vdzwxc"
                height={800}
                width={800}
                alt="scout agency objective image"
                className="object-cover h-56 w-72 "
              />
              <div className="px-4 space-y-4 py-2">
                <div className="flex justify-start items-center gap-">
                  <p className="text-sm font-bold">🧩 Social Integration</p>
                </div>
                <p className="text-sm pl-4">
                  Inclusion and friendship across diverse abilities
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-green-800  h-full w-72 rounded-lg ml-40 z-20">
              <CloudinaryImage
                src="zurura-initiative_Object_Image_vdzwxc"
                height={800}
                width={800}
                alt="scout agency objective image"
                className="object-cover h-56 w-72 "
              />
              <div className="px-4 space-y-4 py-2">
                <div className="flex justify-start items-center gap-">
                  <p className="text-sm font-bold">🌴 Recreational Enjoyment</p>
                </div>
                <p className="text-sm pl-4">
                  Joyful breaks from routine in nature & fun spots
                </p>
              </div>
            </div>
            <div className="bg-green-800  h-full w-72 rounded-lg -mt-10 z-10">
              <CloudinaryImage
                src="zurura-initiative_Object_Image_vdzwxc"
                height={800}
                width={800}
                alt="scout agency objective image"
                className="object-cover h-56 w-72 "
              />
              <div className="px-4 space-y-4 py-2">
                <div className="flex justify-start items-center gap-">
                  <p className="text-sm font-bold">🚀 Skill Development</p>
                </div>
                <p className="text-sm pl-4">
                  Building confidence, independence, and social skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
