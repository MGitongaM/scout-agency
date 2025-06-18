import CloudinaryImage from "../CloudinaryImage";

export default function MakeItHappenSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-12">
          <div className="w-full md:w-4/12">
            <div className="min-h-96 w-11/12 rounded-lg bg-scoutGreen2"></div>
            <CloudinaryImage
              src="zurura_happen_section_xk7len"
              height={800}
              width={800}
              alt="scount agency founder image"
              className="object-cover h-full w-full rounded-lg -mt-80 pl-6"
            />
          </div>
          <div className="w-full md:w-6/12 space-y-6">
            <div className="space-y-6">
              <h2 className="text-xl font-thin text-stone-400">
                How We Make It Happen
              </h2>
              <h3 className="text-2xl font-semrribold ">
                Thoughtful Planning, Meaningful Partnerships, Lasting Impact
              </h3>
              <p className=" leading-8">
                Behind every successful trip is a team effort grounded in
                collaboration, care, and customization. From partnering with
                schools and tour operators to training volunteers and involving
                parents, our implementation plan ensures every journey is safe,
                inclusive, and tailored to the unique needs of every child.
              </p>
            </div>
            <div className="flex flex-wrap justify-evenly items-center gap-6 text-slate-100">
              <div className="w-full lg:w-5/12 rounded-lg bg-scoutGreen3 px-8 py-16">
                <p className="font-bold">Partnerships</p>
                <p className="c">
                  Collaborate with special needs schools, local tour operators,
                  and volunteers.{" "}
                </p>
              </div>
              <div className="w-full lg:w-5/12 rounded-lg bg-scoutGreen4 px-8 py-16">
                <p className="font-bold">Volunteer Training</p>
                <p className="c">
                  Train volunteers and staff on how to assist and support
                  children with special needs during trips.
                </p>
              </div>
              <div className="w-full lg:w-5/12 rounded-lg bg-scoutGreen4 px-8 py-16">
                <p className="font-bold">Customized Planning:</p>
                <p className="c">
                  Tailor each trip to meet the specific needs of the children,
                  ensuring accessibility and safety.
                </p>
              </div>
              <div className="w-full lg:w-5/12 rounded-lg bg-scoutGreen3 px-8 py-16">
                <p className="font-bold">Parental Involvement</p>
                <p className="c">
                  Engage parents and caregivers in planning and execution to
                  ensure comfort and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
