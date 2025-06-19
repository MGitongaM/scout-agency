import BlogsSection from "@/components/getInvolvedPage/BlogsSection";
import ChannelsOfGivingSection from "@/components/getInvolvedPage/ChannelsOfGivingSection";
import HeroSection from "@/components/getInvolvedPage/HeroSection";
import OurWordSection from "@/components/getInvolvedPage/OurWordSection";
import { getCldOgImageUrl } from "next-cloudinary";
import type { Metadata } from "next";

const url = getCldOgImageUrl({ src: "get-involved-page-og_oiehye" });

export const metadata: Metadata = {
  title: "Get Involved - Scout Group Agency",
  description:
    "Thousands of children with special needs in Kenya miss out on life enriching experiences due to inaccessibility and lack of resources. ",
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
      <OurWordSection />
      <ChannelsOfGivingSection />
      <BlogsSection />
    </>
  );
}
