import BlogsSection from "@/components/homePage/BlogsSection";
import GetInvolvedSection from "@/components/homePage/GetInvolvedSection";
import HeroSection from "@/components/homePage/HeroSection";
import OurStorySection from "@/components/homePage/OurStorySection";
import OurWorkSection from "@/components/homePage/OurWorkSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import { getCldOgImageUrl } from "next-cloudinary";
import type { Metadata } from "next";

const url = getCldOgImageUrl({ src: "home-page-og_dpe1cb" });

export const metadata: Metadata = {
  title: "Home - Scout Group Agency",
  description:
    "Our organization is dedicated to redefining tourism by promoting accessibility and inclusivity for everyone. ",
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStorySection />
      <BlogsSection />
      <OurWorkSection />
      <GetInvolvedSection />
      <TestimonialSection />
    </>
  );
}
