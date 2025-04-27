import AboutSection from "@/components/zururaPage/AboutSection";
import ActiviesSection from "@/components/zururaPage/ActiviesSection";
import GetInvolvedSection from "@/components/zururaPage/GetInvolvedSection";
import HeroSection from "@/components/zururaPage/HeroSection";
import MakeItHappenSection from "@/components/zururaPage/MakeItHappenSection";
import ObjectiveSection from "@/components/zururaPage/ObjectiveSection";
import WhoWeServeSection from "@/components/zururaPage/WhoWeServeSection";

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ObjectiveSection />
      <WhoWeServeSection />
      <ActiviesSection/>
      <MakeItHappenSection/>
      <GetInvolvedSection/>
    </>
  );
}
