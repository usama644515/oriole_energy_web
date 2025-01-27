/* eslint-disable @next/next/no-img-element */
import styles from "./Projects.module.css";
// import mobileapp from '@/assets/images/project/mobielapp.jpg';

export default function Projects() {
  const services = [
    {
      title: "Application Development",
      description: "Design and develop user-friendly, scalable, and high-performance applications tailored to your business needs.",
      image: 'https://firebasestorage.googleapis.com/v0/b/innovative-bit-solutions.appspot.com/o/oriole%20energy%2Fmobile-app.jpg?alt=media&token=629870d8-b0e2-414e-a651-8059edc35545', // Add your image path
    },
    {
      title: "Website Development",
      description: "Create modern, responsive, and visually appealing websites to enhance your online presence and engage users effectively.",
      image: "https://firebasestorage.googleapis.com/v0/b/innovative-bit-solutions.appspot.com/o/oriole%20energy%2Fwebsite.jpg?alt=media&token=772090b5-62c2-4cbb-8319-985d2a2360bf", // Add your image path
    },
    {
      title: "Software Development",
      description: "Build robust, custom software solutions designed to streamline operations and drive efficiency for your organization.",
      image: "https://firebasestorage.googleapis.com/v0/b/innovative-bit-solutions.appspot.com/o/oriole%20energy%2Fsoftware.jpg?alt=media&token=1d99c54d-3e8a-4cbb-ae05-9c1ee420c725", // Add your image path
    },
    {
      title: "Network Solutions",
      description: "Provide comprehensive network solutions to your organization's services, including setup, management, and optimization, ensuring seamless operations and security.",
      image: "https://firebasestorage.googleapis.com/v0/b/innovative-bit-solutions.appspot.com/o/oriole%20energy%2Fnetworking.jpg?alt=media&token=c633f11f-a565-4e3b-87d7-de2e6b5e047d", // Add your image path
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
      {/* <button className={styles.button}>View All Projects</button> */}
    </div>
  );
}
