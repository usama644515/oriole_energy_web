import bgShape from '@/assets/images/shapes/about-5-shape-1.png';
import image1 from '@/assets/images/resources/about-5-1.jpg';
import image2 from '@/assets/images/resources/about-5-2.jpg';
import shapeOne from '@/assets/images/shapes/about-5-shape-2.png';
import shapeTwo from '@/assets/images/shapes/about-5-shape-3.png';

const aboutFiveData = {
    bgShape,
    images: {
        image1,
        image2,
    },
    shapes: {
        shapeOne,
        shapeTwo,
    },
    experience: {
        count: 5,
        text: "Years of Excellence",
    },
    content: {
        tagLine: "ABOUT ORIOLE ENERGY",
        title: "Over 5 Years of Expertise in IT Solutions and Innovation!",
        text: "Oriole Energy specializes in mobile app development, web development, and custom software solutions. We are dedicated to delivering cutting-edge technology to businesses worldwide, empowering growth and innovation.",
        listOne: [
            "Custom Mobile Applications",
            "Dynamic Web Development",
            "Custom Software Solutions",
            "Technology Consulting",
        ],
        listTwo: [
            "Network Infrastructure Management",
            "Comprehensive IT Support Services",
        ],
        btnText: "Learn More",
        btnLink: "/about",
    },
    infoText: "Looking to transform your business with innovative IT solutions?",
    infoLink: {
        text: "Explore Our Services",
        href: "/services",
    },
};

export default aboutFiveData;
