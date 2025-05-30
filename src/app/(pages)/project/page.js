import FooterFive from '@/components/FooterFive/FooterFive';
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import React from "react";
import WhatsappButton from "../../../components/WhatsappButton";
import Projects from "../../../components/Projects";

export const metadata = {
  title: "Projects | Oriole Energy",
  description:
    "Oriole Energy is a leading technology company specializing in innovative IT solutions. We provide cutting-edge services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to empower businesses by delivering tailored, high-quality technology solutions that drive growth, efficiency, and transformation in today's digital world.",
  icons: {
    icon: "/favicon.png", // Default favicon
    shortcut: "/favicon-16x16.png", // Shortcut icon
    apple: "/apple-touch-icon.png", // Apple-specific touch icon
  },
};

const projectPage = () => {
  return (
    <Layout >
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Our Projects' subTitle='Project' />
      <ProjectTwo />
      {/* <MailTwo /> */}
      <Projects />
      <FooterFive />
      <WhatsappButton />
    </Layout>
  );
};

export default projectPage;
