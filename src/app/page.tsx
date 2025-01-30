import BlogsSection from "@/components/homePage/BlogsSection";
import GetInvolvedSection from "@/components/homePage/GetInvolvedSection";
import HeroSection from "@/components/homePage/HeroSection";
import OurStorySection from "@/components/homePage/OurStorySection";
import OurWorkSection from "@/components/homePage/OurWorkSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <OurStorySection/>
      <BlogsSection/>
      <OurWorkSection/>
      <GetInvolvedSection/>
      <TestimonialSection/>
    </>
  );
}
