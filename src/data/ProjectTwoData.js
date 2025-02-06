import image1 from "@/assets/images/project/project-2-1.png";
import image2 from "@/assets/images/project/project-2-2.jpg";
import image3 from "@/assets/images/project/project-2-1.png";
import image4 from "@/assets/images/project/project-2-6.png";
import image5 from "@/assets/images/project/project-2-5.jpg";
import image6 from "@/assets/images/project/project-2-6.jpg";
import image7 from "@/assets/images/project/Slide5.JPG";
import image8 from "@/assets/images/project/Slide6.JPG";
import image9 from "@/assets/images/project/Slide7.JPG";
import image10 from "@/assets/images/project/Slide8.JPG";
import image11 from "@/assets/images/project/Slide9.JPG";
import image12 from "@/assets/images/project/Slide10.JPG";
const projectsData = {
  title: "We Have Business Case Studies",
  subtitle: "Our Projects Now",
  filterCategories: [
    { name: "All", filterClass: "filter-item" },
    // { name: "Business", filterClass: "business" },
    { name: "Solution", filterClass: "solution" },
    { name: "Marketing", filterClass: "marketing" },
    { name: "Software", filterClass: "software" },
  ],
  projects: [
    {
      image: image7,
      category: "Marketing",
      title: "Vehicle Management",
      link: "/project-details",
      filterClasses: ["solution", "software"],
      xl: 3,
      md: 6,
    },
    {
      image: image8,
      category: "Marketing",
      title: "Evyol CRM",
      link: "/project-details",
      filterClasses: ["solution"],
      xl: 3,
      md: 6,
    },
    {
      image: image3,
      category: "Marketing",
      title: "CRM Solutions",
      link: "/project-details",
      filterClasses: ["software", "business"],
      xl: 6,
      md: 12,
    },
    {
      image: image11,
      category: "Marketing",
      title: "Mobile App Solutions",
      link: "/project-details",
      filterClasses: ["software", "business"],
      xl: 6,
      md: 12,
    },
    {
      image: image4,
      category: "Marketing",
      title: "Dashborad Solutions",
      link: "/project-details",
      filterClasses: ["soluion"],
      xl: 6,
      md: 12,
    },
    {
      image: image12,
      category: "Marketing",
      title: "Android & iOS App",
      link: "/project-details",
      filterClasses: ["soluion"],
      xl: 6,
      md: 12,
    },
    {
      image: image9,
      category: "Marketing",
      title: "Evyol HRMS",
      link: "/project-details",
      filterClasses: ["marketing", "software"],
      xl: 3,
      md: 6,
    },
    {
      image: image10,
      category: "Marketing",
      title: "School Management",
      link: "/project-details",
      filterClasses: ["business", "solution"],
      xl: 3,
      md: 6,
    },
  ],
};

export default projectsData;
