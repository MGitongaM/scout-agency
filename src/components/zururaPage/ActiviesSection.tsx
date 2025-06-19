import CloudinaryImage from "../CloudinaryImage";

export default function ActiviesSection() {
  return (
    <section className="min-h-screen bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1750327740/zurura_activities_bg_darken_image_nxznf8.png')] bg-cover bg-center">
      <div className="min-h-screen w-full bg-black/25 backdrop-blur-md">
        <div className="h-full text-slate-100 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-xl font-thin text-stone-400">Activities</h2>
              <h3 className="text-4xl  pt-2">
                Adventures Designed for Learning, Connection, and Joy
              </h3>
              <p className="max-w-3xl mx-auto leading-8 text-xl pt-6">
                Each Zurura trip blends education, exploration, and fun designed
                to spark curiosity, foster inclusion, and let every child
                experience Kenya&apos;s wonders in a safe, accessible, and
                engaging way.
              </p>
            </div>
            <div className="flex flex-wrap justify-evenly items-center gap-6">
              <div className="w-ful lg:w-5/12 text-center bg-scoutGreen4/85 rounded-lg px-8 py-6">
                <CloudinaryImage
                  src="park_hb0gdq"
                  height={800}
                  width={800}
                  alt="Scount Agency zurura-initiative Icon Image"
                  className="object-cover size-20 mx-auto rounded-full mb-4"
                />
                <p className="font-bold">🦒 National Parks & Reserves</p>
                <p>
                  Guided wildlife tours in Nairobi Park, Giraffe Centre, and
                  more
                </p>
              </div>
              <div className="w-ful lg:w-5/12 text-center bg-scoutGreen4/85 rounded-lg px-8 py-6">
                <CloudinaryImage
                  src="globe_ppdrc9"
                  height={800}
                  width={800}
                  alt="Scount Agency zurura-initiative Icon Image"
                  className="object-cover size-20 mx-auto rounded-full mb-4"
                />
                <p className="font-bold">🏛️ Cultural Excursions</p>
                <p>
                  Visits to the National Museum, Bomas of Kenya, and heritage
                  sites{" "}
                </p>
              </div>
              <div className="w-ful lg:w-5/12 text-center bg-scoutGreen4/85 rounded-lg px-8 py-6">
                <CloudinaryImage
                  src="tour-guide_f5oyev"
                  height={800}
                  width={800}
                  alt="Scount Agency zurura-initiative Icon Image"
                  className="object-cover size-20 mx-auto rounded-full mb-4"
                />
                <p className="font-bold">🔬 Educational Tours</p>
                <p>Science centers, botanical gardens, and more </p>
              </div>
              <div className="w-ful lg:w-5/12 text-center bg-scoutGreen4/85 rounded-lg px-8 py-6">
                <CloudinaryImage
                  src="natural-park_u7yad1"
                  height={800}
                  width={800}
                  alt="Scount Agency zurura-initiative Icon Image"
                  className="object-cover size-20 mx-auto rounded-full mb-4"
                />
                <p className="font-bold">🎡 Recreational Outings</p>
                <p>Amusement parks, beaches, and adaptive play areas </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
