import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full ">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full h-[20vh] md:min-h-screen bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1750256218/get-involved_Hero_image_n0sxgf.png')] bg-cover bg-center">
        {/* <div className="min-h-screen bg-black/0 backdrop-blur-lg"></div> */}
        </div>
        <div className="w-full grid place-content-center bg-scoutGreen4 text-slate-100">
          {/* <div className="max-w-xl mx-auto px-4 py-16 space-y-6"> */}
          <div className="max-w-xl mx-auto px-4 pb-16 space-y-6">
            <h1 className="text-4xl font-bold">
              It&apos;s Time to Take Action
            </h1>
            <p className="leading-8">
              Thousands of children with special needs in Kenya miss out on
              life enriching experiences due to inaccessibility and lack of
              resources. These children are often left behind, excluded from
              opportunities that build confidence, spark curiosity, and create
              joy.
            </p>
            <p className="leading-8">
              But together, we can change that. With your support, we can open
              doors to Kenya&apos;s wildlife, culture, and education for every
              child regardless of ability or background. There are many ways to
              get involved.
            </p>
            <p className="leading-8">
              What matters most is that we choose to act. Join us today and help
              create a world where every child gets to explore, learn, and
              belong.
            </p>

            <Button className="bg-scoutGreen1 w-48 h-12 hover:bg-green-700 hover:scale-110 transition duration-300 text-xl">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
