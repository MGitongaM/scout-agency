import { TvIcon } from "lucide-react";
import CloudinaryImage from "../CloudinaryImage";

export default function ObjectiveSection() {
  return (
    <section className="h-full bg-green-300">
      <div className="flex justify-center items-center gap-12 px-4 py-20">
        <div className="w-4/12">
          <h2 className="text-3xl font-thin">Our Objectives</h2>
          <p className="leading-8">
            Explore the core goals that drive the Zurura Initiative to create
            inclusive, impactful experiences for every child. These objectives
            are designed to foster learning, connection, joy, and personal
            growth—ensuring that every child, regardless of ability, feels seen,
            supported, and inspired throughout their journey.
          </p>
        </div>
        <div className="w-4/12">
          <div className="bg-green-500  h-full w-56 rounded-lg">
            <CloudinaryImage
              src="Joanne_Founder_Image_a7sawq"
              height={800}
              width={800}
              alt="scout agency objective image"
              className="object-cover h-32 w- rounded-lg"
            />
            <div className="px-4 space-y-4 py-2">
              <div className="flex justify-evenly items-center gap-">
                <TvIcon size-6 />
                <p className="text-sm font-bold">Educational Enrichment</p>
              </div>
              <p className="text-sm">
                Experiential learning beyond the classroom
              </p>
            </div>
          </div>
          <div className="bg-green-500  h-full w-56 rounded-lg">
            <CloudinaryImage
              src="Joanne_Founder_Image_a7sawq"
              height={800}
              width={800}
              alt="scout agency objective image"
              className="object-cover h-32 w- rounded-lg"
            />
            <div className="px-4 space-y-4 py-2">
              <div className="flex justify-evenly items-center gap-">
                <TvIcon size-6 />
                <p className="text-sm font-bold">ecreational Enjoyment</p>
              </div>
              <p className="text-sm">
                Experiential learning beyond the classroom
              </p>
            </div>
          </div>
          <div className="bg-green-500  h-full w-56 rounded-lg">
            <CloudinaryImage
              src="Joanne_Founder_Image_a7sawq"
              height={800}
              width={800}
              alt="scout agency objective image"
              className="object-cover h-32 w- rounded-lg"
            />
            <div className="px-4 space-y-4 py-2">
              <div className="flex justify-evenly items-center gap-">
                <TvIcon size-6 />
                <p className="text-sm font-bold">Educational Enrichment</p>
              </div>
              <p className="text-sm">
                Experiential learning beyond the classroom
              </p>
            </div>
          </div>
          <div className="bg-green-500  h-full w-56 rounded-lg">
            <CloudinaryImage
              src="Joanne_Founder_Image_a7sawq"
              height={800}
              width={800}
              alt="scout agency objective image"
              className="object-cover h-32 w- rounded-lg"
            />
            <div className="px-4 space-y-4 py-2">
              <div className="flex justify-evenly items-center gap-">
                <TvIcon size-6 />
                <p className="text-sm font-bold">Educational Enrichment</p>
              </div>
              <p className="text-sm">
                Experiential learning beyond the classroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
