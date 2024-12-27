

import Layout from '@/components/Layout/Layout';
import React from 'react';
import BlogFive from "@/components/BlogFive/BlogFive";
import CtaEight from "@/components/CtaEight/CtaEight";
import MainSliderSix from "@/components/MainSliderSix/MainSliderSix";
import SlideText from "@/components/SlideText/SlideText";
import AboutSix from "@/components/AboutSix/AboutSix";
import ServiceFour from "@/components/ServiceFour/ServiceFour";
import WhyChooseFour from "@/components/WhyChooseFour/WhyChooseFour";
import TeamFour from "@/components/TeamFour/TeamFour";
import FaqThree from "@/components/FaqThree/FaqThree";
import WorkProcessTwo from "@/components/WorkProcessTwo/WorkProcessTwo";
import ContactThree from "@/components/ContactThree/ContactThree";
import VideoFour from "@/components/VideoFour/VideoFour";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import TabOne from "@/components/TabOne/TabOne";
import HeaderSix from "@/components/HeaderSix/HeaderSix";
import FooterSix from "@/components/FooterSix/FooterSix";
import HeaderSixCloned from '@/components/HeaderSix/HeaderSixCloned';


export const metadata = {
    title: "Home Six || Tolak || NextJS Template For It Solution & Business",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout pageTitle="homeSix">
            <HeaderSix />
            <HeaderSixCloned />
            <MainSliderSix />
            <SlideText pageTitle="homeSix" />
            <AboutSix />
            <ServiceFour />
            <WhyChooseFour />
            <TeamFour />
            <ClientCarousel pageTitle="homeSix" />
            <TabOne />
            <VideoFour />
            <FaqThree />
            <WorkProcessTwo />
            <CtaEight />
            <ContactThree />
            <GoogleMap />
            <BlogFive />
            <FooterSix />
        </Layout>
    );
};

export default page;