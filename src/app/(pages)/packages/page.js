
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import PricingOne from '@/components/PricingOne/PricingOne';
import React from 'react';

export const metadata = {
    title: "Packages || Tolak || NextJS Template For It Solution & Business",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Pricing Page" subTitle="Pricing" />
            <PricingOne />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;