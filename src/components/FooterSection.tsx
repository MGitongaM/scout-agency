import { footerEntries, socialEntries } from "@/constData/homePage";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import CloudinaryImage from "./CloudinaryImage";

export default function FooterSection() {
  return (
    <>
      <section className="bg-green-800 text-white pb-20">
        <div className="container mx-auto flex flex-wrap gap-x-12 gap-y-8 items-center justify-evenly px-4 pb-10 ">
          <div className="">
            <CloudinaryImage
                src="scout_logo_b1mzxq"
                height={400}
                width={400}
                alt="scout group agency logo"
                className="object-contain size-56"
            />
          </div>
          {footerEntries.map((entry) => (
            <div key={entry.id} className="c">
              <p className="mb-6 font-semibold">{entry.title}</p>
              {entry.entries.map((subEntry) => (
                <div key={subEntry.id} className="py-1">
                  <Link href={subEntry.link} >
                    {subEntry.heading}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 bg-sgaGreen3 rounded-lg px-4 py-6 max-w-5xl mx-auto">
          <p className="font-semibold w-64">Newsletter Sign Up</p>
          <div className="flex flex-wrap items-center gap-2 justify-between px-4 py-6 rounded-lg bg-white w-full">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="outline w-10/12 rounded-lg py-3 px-2 text-black "
            />
            <Button className="bg-red-500 font-semibold">Submit</Button>
          </div>
        </div>
        <Separator className="max-w-5xl mx-auto mt-10" />
        <div className="flex flex-wrap  gap-12 items-center justify-between px-4 py-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            {socialEntries.map((entry) => (
              <div key={entry.id} className="c">
                <Link href={entry.Link}>{entry.icon}</Link>
              </div>
            ))}
          </div>
          <p className="c">
            Copyright © 2025 Scout Group Agency. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
