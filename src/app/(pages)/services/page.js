import React from 'react';
import FooterFive from '@/components/FooterFive/FooterFive';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceOne from '@/components/ServiceOne/ServiceOne';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import WhatsappButton from "../../../components/WhatsappButton";


export const metadata = {
    title: "Services | Oriole Energy",
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
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Our Services" subTitle="Services" />
            <ServiceOne titleTwo="two" />
            <MailTwo />
            <FooterFive />
            <WhatsappButton />
        </Layout>
    );
};

export default page;