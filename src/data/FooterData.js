import logo from "@/assets/images/logo-light.png";
import footerLogo from "@/assets/images/footer-logo.png";
import logo4 from "@/assets/images/logo-light.png";
import logo6 from "@/assets/images/logo-6.png";
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import footerBgTwo from "@/assets/images/backgrounds/footer-bg-2-1.jpg";
import footerBgThree from "@/assets/images/backgrounds/footer-bg-3-1.jpg";
import footerBgFour from "@/assets/images/backgrounds/footer-bg-4-1.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import shapeTwo from "@/assets/images/shapes/footer-2-shape.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";
import post1 from "@/assets/images/blog/lp-1-1.jpg";
import post2 from "@/assets/images/blog/lp-1-2.jpg";
import post6 from "@/assets/images/blog/lp-1-6.jpg";
import post7 from "@/assets/images/blog/lp-1-7.jpg";

import { faFacebookF, faInstagram, faLinkedinIn, faTwitter }  from "@fortawesome/free-brands-svg-icons";

const widgetSocial = [
  { id: 1, icon: faFacebookF, href: "https://www.facebook.com/OrioleEnergy", title: "Follow us on Facebook" },
  { id: 2, icon: faInstagram, href: "https://instagram.com", title: "Follow us on Instagram" },
  { id: 3, icon: faLinkedinIn, href: "https://www.linkedin.com/company/orioleenergy/", title: "Follow us on LinkedIn" },
  { id: 4, icon: faTwitter, href: "https://twitter.com", title: "Follow us on Twitter" },
];


const posts = {
  title: "Latest Updates",
  posts: [
    {
      id: 1,
      image: post1,
      meta: "23 Jun 2023",
      title: "Discover the Best Business Solutions",
      href: "blog-details",
      icon: "icofont-calendar",
    },
    {
      id: 2,
      image: post2,
      meta: "23 Jun 2023",
      title: "Insights on Future Tech Trends",
      href: "blog-details",
      icon: "icofont-calendar",
    },
  ],
};
const postsSix = {
  title: "Featured Posts",
  posts: [
    {
      id: 1,
      image: post6,
      meta: "20 Nov 2023",
      title: "Securing Your Network Effectively",
      href: "blog-details",
      icon: "icofont-calendar",
    },
    {
      id: 2,
      image: post7,
      meta: "23 Jun 2023",
      title: "Looking for Reliable IT Solutions?",
      href: "blog-details",
      icon: "icofont-calendar",
    },
  ],
};

const footerData = {
  footerLogo,
  logo,
  logo4,
  logo6,
  footerBg,
  footerBgTwo,
  footerBgThree,
  footerBgFour,
  shape,
  shapeTwo,
  footerAbout,
  posts,
  postsSix,
  aboutTwoText: "Oriole Energy delivers innovative IT and energy solutions tailored for business success. Empowering growth through sustainable and efficient technology.",
  widgetText:
    "Our dedicated team ensures top-notch services across all sectors. Let's transform your ideas into reality.",
  widgetInfo: {
    time: "Office Hours:\n Mon - Fri: 9.00 am - 5.00 pm",
    timeIcon: "icofont-clock-time",
    location: "Suite 13/A, Business Bay, City Center",
    locationIcon: "icofont-location-pin",
    tel: "+1 800 555 1234",
    telIcon: "icofont-phone",
    subHref: "tel",
  },
  widgetSocial,
  services: [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/services", title: "Our Services" },
    { id: 3, href: "/portfolio", title: "Our Projects" },
    { id: 4, href: "/about", title: "About Us" },
    { id: 5, href: "/contact", title: "Contact Us" },
  ],
  quickLinks: [
    { id: 1, href: "/app-development", title: "Mobile App Development" },
    { id: 2, href: "/web-development", title: "Website Development" },
    { id: 3, href: "/software-development", title: "Software Development" },
    { id: 4, href: "/network-infrastructure", title: "Network Solutions" },
    { id: 5, href: "/data-science", title: "Data Science" },
  ],
  bottomLinks: [
    { id: 1, href: "/about", title: "About Us" },
    { id: 2, href: "/services", title: "Services" },
    // { id: 3, href: "/blog-list-right", title: "News & Updates" },
    { id: 4, href: "/portfolio", title: "Our Portfolio" },
  ],
};

export default footerData;
