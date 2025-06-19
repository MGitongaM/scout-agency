// import CloudinaryImage from "../CloudinaryImage";

export default function AboutUsSection() {
  return (
    <section className="min-h-[60vh]">
      <div className=" bg-scoutGreen4 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-12">
        <div className="w-full lg:w-6/12  space-y-6 pl-4 lg:pl-40">
          <h2 className="text-2xl font-thin text-stone-200">About Us</h2>
          <p className=" leading-8 text-slate-100">
            Our organization is dedicated to redefining tourism by promoting
            accessibility and inclusivity for everyone. We work with
            policymakers, industry leaders, and communities to create travel
            experiences that cater to diverse abilities. Through advocacy,
            training, and innovation, we strive to break barriers in the tourism
            and hospitality sectors, ensuring equity and dignity for all
            travelers. With a commitment to sustainability and collaboration, we
            aim to transform the tourism landscape into a model of inclusivity,
            where every journey is enriching and accessible.
          </p>
        </div>
        <div className="min-h-[60vh] w-full lg:w-6/12 bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1750254947/about-us-section_image_r5qyqq.png')] bg-cover bg-center">
          {/* <CloudinaryImage
            src="aboutUsSection_Image_mndaho"
            height={800}
            width={800}
            alt="scout agency about us section image"
            className="object-cover h-full w-full"
          /> */}
        </div>
      </div>
    </section>
  );
}
