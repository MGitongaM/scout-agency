import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full ">
      <div className="flex ">
        <div className="w-full min-h-screen bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1745753776/zurura-initiative_ActiviesBackground_Image_p0larw.png')] bg-cover bg-center">
        <div className="min-h-screen bg-black/70 backdrop-blur-lg"></div>
        </div>
        <div className="w-full grid place-content-center bg-lime-800 text-slate-100">
          <div className="max-w-xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold">
              It&apos;s Time to Take Action
            </h1>
            <p className="leading-8">
              Thousands of children with special needs in Kenya miss out on
              life-enriching experiences due to inaccessibility and lack of
              resources. These children are often left behind—excluded from
              opportunities that build confidence, spark curiosity, and create
              joy.
            </p>
            <p className="leading-8">
              But together, we can change that. With your support, we can open
              doors to Kenya&apos;s wildlife, culture, and education for every
              child—regardless of ability or background. There are many ways to
              get involved.
            </p>
            <p className="leading-8">
              What matters most is that we choose to act. Join us today—and help
              create a world where every child gets to explore, learn, and
              belong.
            </p>

            <Button className="bg-lime-600 w-48 h-12 hover:bg-lime-700 hover:scale-110 text-xl">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
