import DemosSection from "@/components/DemoSection/DemoSection";
import FeatureOneDemo from "@/components/FeatureOneDemo/FeatureOneDemo";
import FeatureTwoDemo from "@/components/FeatureTwoDemo/FeatureTwoDemo";
import FooterDemo from "@/components/FooterDemo/FooterDemo";
import HeroSection from "@/components/HeroSection/HeroSection";
import Home from "@/app/(pages)/home/page";

export const metadata = {
  title: "Home | Oriole Energy",
  description:
    "Oriole Energy is a leading technology company specializing in innovative IT solutions. We provide cutting-edge services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to empower businesses by delivering tailored, high-quality technology solutions that drive growth, efficiency, and transformation in today's digital world.",
  icons: {
    icon: "/favicon.png", // Default favicon
    shortcut: "/favicon-16x16.png", // Shortcut icon
    apple: "/apple-touch-icon.png", // Apple-specific touch icon
  },
};

const page = () => {
  return (
    <div className="page-wrapper">
      {/* <HeroSection />
      <FeatureTwoDemo />
      <DemosSection />
      <FeatureOneDemo />
      <FooterDemo /> */}
      {/* <Home />; */}
    </div>
  );
};
export default page;
