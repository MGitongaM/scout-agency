import Link from "next/link";
import CloudinaryImage from "../CloudinaryImage";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-12">
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="min-h-96 w-11/12 rounded-lg bg-scoutGreen4"></div>
            <CloudinaryImage
              src="Joanne_Founder_Image_a7sawq"
              height={800}
              width={800}
              alt="scount agency founder image"
              className="object-cover h-full w-full rounded-lg -mt-80 pl-6"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <h2 className="text-2xl font-thin text-stone-400 mt-12 mb-12">The Team</h2>
            <div className="space-y-4">
                <h3 className="text-4xl font-bold 0">Joanne Ndirangu</h3>
                <p className="text2xl font-bold">Founder & Director</p>
                <p className=" leading-8">
                &quot;Supporting accessible tourism has been incredibly rewarding.
                Knowing that my contribution helps create inclusive travel
                experiences for all makes a real difference.&quot;
                </p>
                <div className="w-32 flex  justify-evenly items-center gap-2">
                <Link href={""}>
                    <X  className="border border-black size-7 hover:scale-110 transition duration-300 rounded-lg p-1"/>
                </Link>
                <Link href={""}>
                    <Instagram className=" size-7 hover:scale-110 transition duration-300 rounded-lg"/>
                </Link>
                <Link href={""}>
                    <Facebook className="border border-black size-7 hover:scale-110 transition duration-300 rounded-lg p-1" />
                </Link>
                <Link href={""}>
                    <Linkedin className="border border-black size-7 hover:scale-110 transition duration-300 rounded-lg p-1" />
                </Link>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
