import CloudinaryImage from "../CloudinaryImage";

export default function OurWordSection() {
  return (
    <section className=" ">
      <div className="min0-h-[40vh] relative max-w-xl lg:max-w-7xl mx-auto px-4 py-20 bg-slate-100 text-black rounded-lg -mt-6 lg:-mt-36 ">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl">You Have Our Word and So Much More</h2>
          <p className="leading-8">
            How do you know your support is changing lives? Simple. We show you.
            Because at Zurura, we believe in transparency, trust, and lasting
            impact.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-center pt-20 gap-16">
          <div className="">
            <CloudinaryImage
              src="1_nbkrpw"
              height={800}
              width={800}
              alt="scout agency get inlvolved icon"
              className="object-cover size-20 mx-auto rounded-full"
            />
            <p className="text-xl text-center font-semibold pt-4 pb-8">We Give 100% to the Mission</p>
            <p className="leading-8">
              Every contribution goes directly toward creating inclusive,
              educational, and recreational trips for children with special
              needs in Kenya. We ensure your generosity reaches the children who
              need it most no detours.
            </p>
          </div>
          <div className="">
            <CloudinaryImage
              src="2_bxmsij"
              height={800}
              width={800}
              alt="scout agency get inlvolved icon"
              className="object-cover size-20 mx-auto rounded-full"
            />
            <p className="text-xl text-center font-semibold pt-4 pb-8">We Prove It</p>
            <p className="leading-8">
              We&apos;re all about accountability. You&apos;ll receive real updates,
              powerful stories, and photos from the exact trips you&apos;ve helped
              fund. When a child smiles on safari or learns something new at a
              museum you&apos;ll know you played a part.
            </p>
          </div>
          <div className="">
            <CloudinaryImage
              src="3_yt9oxv"
              height={800}
              width={800}
              alt="scout agency get inlvolved icon"
              className="object-cover size-20 mx-auto rounded-full"
            />
            <p className="text-xl text-center font-semibold pt-4 pb-8">
              We Think Local and Long Term
            </p>
            <p className="leading-8">
              We don&apos;t just organize a trip and walk away. We build
              relationships with local schools, caregivers, and communities to
              ensure every experience is safe, accessible, and sustainable—now
              and into the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
