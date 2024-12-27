import DemosSection from "@/components/DemoSection/DemoSection";
import FeatureOneDemo from "@/components/FeatureOneDemo/FeatureOneDemo";
import FeatureTwoDemo from "@/components/FeatureTwoDemo/FeatureTwoDemo";
import FooterDemo from "@/components/FooterDemo/FooterDemo";
import HeroSection from "@/components/HeroSection/HeroSection";
import Home from "@/app/(pages)/home/page";



export const metadata = {
  title: "Home | Oriole Energy",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};


const page = () => {
  return (

    <div className="page-wrapper">
      {/* <HeroSection />
      <FeatureTwoDemo />
      <DemosSection />
      <FeatureOneDemo />
      <FooterDemo /> */}
      <Home />;
    </div>

  );
}
export default page;
