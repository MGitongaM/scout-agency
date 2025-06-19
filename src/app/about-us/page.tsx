import AboutUsSection from "@/components/aboutUsPage/AboutUsSection";
import HeroSection from "@/components/aboutUsPage/HeroSection";
import InvolvedSection from "@/components/aboutUsPage/InvolvedSection";
import MissionVisionSection from "@/components/aboutUsPage/MissionVisionSection";
import TeamSection from "@/components/aboutUsPage/TeamSection";
import { getCldOgImageUrl } from "next-cloudinary";
import type { Metadata } from "next";

const url = getCldOgImageUrl({ src: "about-page-og_vjgwe8" });

export const metadata: Metadata = {
  title: "About - Scout Group Agency",
  description:
    "Our misiion is promotes inclusive tourism, ensuring travel is accessible to all. ",
  openGraph: {
    images: [
      {
        width: 1200,
        height: 627,
        url,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <AboutUsSection />
      <TeamSection />
      <InvolvedSection />
    </>
  );
}
