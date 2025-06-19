import AboutSection from "@/components/zururaPage/AboutSection";
import ActiviesSection from "@/components/zururaPage/ActiviesSection";
import GetInvolvedSection from "@/components/zururaPage/GetInvolvedSection";
import HeroSection from "@/components/zururaPage/HeroSection";
import MakeItHappenSection from "@/components/zururaPage/MakeItHappenSection";
import ObjectiveSection from "@/components/zururaPage/ObjectiveSection";
import WhoWeServeSection from "@/components/zururaPage/WhoWeServeSection";
import { getCldOgImageUrl } from "next-cloudinary";
import type { Metadata } from "next";

const url = getCldOgImageUrl({ src: "zurura-page-og_aswbcj" });

export const metadata: Metadata = {
  title: "Zurura Initiative - Scout Group Agency",
  description:
    "The Zurura Initiative is dedicated to accessible tourism for special needs children in Kenya. We organize enriching educational and recreational trips.",
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
      <AboutSection />
      <ObjectiveSection />
      <WhoWeServeSection />
      <ActiviesSection />
      <MakeItHappenSection />
      <GetInvolvedSection />
    </>
  );
}
