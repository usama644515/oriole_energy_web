import bg from "@/assets/images/shapes/contact-2-shape-1.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";9

const contactTwoData = {
  infoIcon: "icon-customer-service",
  infoText:
    "Oriole Energy is committed to delivering innovative, sustainable energy solutions to power your future responsibly.",
  infoTitle: "Contact Information ",

  bg,
  infoBoxs: [
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Call Us Now",
      text: "+92 3166668282",
      href: "+923166668282",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Email Us",
      text: "enquiry@oriolenergy.com",
      href: "enquiry@oriolenergy.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "icon-pin",
      title: "Our Location",
      text: "Multan, Pakistan",
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://facebook.com/orioleenergy",
      name: "Facebook",
    },
    {
      id: 2,
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/company/orioleenergy",
      name: "LinkedIn",
    },
    {
      id: 3,
      icon: faTwitter,
      link: "https://twitter.com/orioleenergy",
      name: "Twitter",
    },
    {
      id: 4,
      icon: faInstagram,
      link: "https://instagram.com/orioleenergy",
      name: "Instagram",
    },
  ],

  tagLine: "Your Trusted Energy Partner",
  title: "Stay Connected with Oriole Energy",
  text: "Experience sustainable energy solutions designed for efficiency and reliability. Reach out to us for inquiries and support.",
};

export default contactTwoData;
