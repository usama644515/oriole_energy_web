import styles from "./Projects.module.css";

export default function Projects() {
  const services = [
    {
      title: "Application Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-1.jpg", // Add your image path
    },
    {
      title: "Cloud Migration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-2.jpg", // Add your image path
    },
    {
      title: "Management and Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-3.jpg", // Add your image path
    },
    {
      title: "Serverless Computing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-4.jpg", // Add your image path
    },
    {
      title: "ERP Systems",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-5.jpg", // Add your image path
    },
    {
      title: "CRM Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-6.jpg", // Add your image path
    },
    {
      title: "Business Intelligence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-7.jpg", // Add your image path
    },
    {
      title: "DevOps Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "https://wheat-jellyfish-990458.hostingersite.com/wp-content/uploads/2024/06/Portfolio-8.jpg", // Add your image path
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          <span className={styles.active}>We Have Business Case Studies</span>
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
