/* eslint-disable @next/next/no-img-element */
import styles from "./Projects.module.css";

export default function Projects() {
  const services = [
    {
      title: "Application Development",
      description: "Design and develop user-friendly, scalable, and high-performance applications tailored to your business needs.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-1.jpg", // Add your image path
    },
    {
      title: "Website Development",
      description: "Create modern, responsive, and visually appealing websites to enhance your online presence and engage users effectively.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-2.jpg", // Add your image path
    },
    {
      title: "Software Development",
      description: "Build robust, custom software solutions designed to streamline operations and drive efficiency for your organization.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-3.jpg", // Add your image path
    },
    {
      title: "Network Solutions",
      description: "Provide comprehensive network solutions to your organization's services, including setup, management, and optimization, ensuring seamless operations and security.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-4.jpg", // Add your image path
    },
    
    // {
    //   title: "ERP Systems",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //   image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-5.jpg", // Add your image path
    // },
    // {
    //   title: "CRM Solutions",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //   image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-6.jpg", // Add your image path
    // },
    // {
    //   title: "Business Intelligence",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //   image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-7.jpg", // Add your image path
    // },
    // {
    //   title: "DevOps Services",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    //   image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-8.jpg", // Add your image path
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          <span className={styles.active}>We Have Business Solutions For You</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
      <button className={styles.button}>View All Projects</button>
    </div>
  );
}
