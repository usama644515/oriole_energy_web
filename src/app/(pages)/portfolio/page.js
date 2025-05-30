
import Layout from '@/components/Layout/Layout';
import React from 'react';
import MainSliderFive from '@/components/MainSliderFive/MainSliderFive';
import FeatureFive from '@/components/FeatureFive/FeatureFive';
import MailTwo from '@/components/MailTwo/MailTwo';
import AboutFive from '@/components/AboutFive/AboutFive';
import FunFactThree from '@/components/FunfactThree/FunFactThree';
import ServiceThree from '@/components/ServiceThree/ServiceThree';
import SkillTwo from '@/components/SkillTwo/SkillTwo';
import ProjectThree from '@/components/ProjectThree/ProjectThree';
import TeamThree from '@/components/TeamThree/TeamThree';
import FaqTwo from '@/components/FaqTwo/FaqTwo';
import VideoThree from '@/components/VideoThree/VideoThree';
import TestimonialsFour from '@/components/TestimonialsFour/TestimonialsFour';
import WhyChooseThree from '@/components/WhyChooseThree/WhyChooseThree';
import CtaSeven from '@/components/CtaSeven/CtaSeven';
import BlogFour from '@/components/BlogFour/BlogFour';
import TopbarFive from '@/components/TopbarFive/TopbarFive';
import HeaderFive from '@/components/HeaderFive/HeaderFive';
import Portfolio from '@/components/Portfolio/PortfolioSection';
import FooterFive from '@/components/FooterFive/FooterFive';
import ClientCarousel from '@/components/ClientCarousel/ClientCarousel';
import HeaderFiveCloned from '@/components/HeaderFive/HeaderFiveCloned';
import WhatsappButton from "../../../components/WhatsappButton";
import Projects from "../../../components/Projects";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";

export const metadata = {
    title: "Portfolio | Oriole Energy",
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
        <Layout pageTitle="portfolio">
            {/* <TopbarFive /> */}
            <HeaderFive />
            <Portfolio />
            {/* <FooterFive /> */}
            
        </Layout>
    );
};

export default page;