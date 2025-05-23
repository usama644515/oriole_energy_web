/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import styles from "./PortfolioSection.module.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("website");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: "Software Agency Website",
      description:
        "A professional website showcasing software development services, portfolio, and client success stories.",
      category: "website",
      image: "/images/portfolio/website1.png",
      link: "https://drive.google.com/drive/folders/1eNdcczJcz0jWcI0wp0zSB_DTp5labap0?usp=sharing",
    },
    {
      id: 2,
      title: "RAG GPT Implementation",
      description:
        "Implementation of Retrieval-Augmented Generation to enhance AI responses with up-to-date information retrieval capabilities.",
      category: "ai",
      image: "/images/portfolio/ai1.png",
      link: "https://drive.google.com/drive/folders/1uZqfxogBl1wSm0GGb2m7fgj_64lHegAL?usp=sharing",
    },
    {
      id: 3,
      title: "Medical AI Assistant",
      description:
        "AI-powered mobile assistant providing preliminary medical information and symptom analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp1.jpeg",
      link: "https://drive.google.com/drive/folders/1WAuZBoIY06i7eipFDUpZRhSE9eGEXTtp?usp=sharing",
    },
    {
      id: 4,
      title: "Weather Monitoring App",
      description:
        "Mobile application for real-time weather updates, forecasts, and severe weather alerts.",
      category: "mobile",
      image: "/images/portfolio/mobileapp2.jpeg",
      link: "https://drive.google.com/drive/folders/1SJLttStuCnYt9pLGIdvRmwgCKpo1IChu?usp=sharing",
    },
    {
      id: 5,
      title: "Weather Monitoring App 2",
      description:
        "Enhanced version of weather monitoring application with additional visualization features.",
      category: "mobile",
      image: "/images/portfolio/mobileapp3.jpeg",
      link: "https://drive.google.com/drive/folders/1EJthiO_KpkSDAjSFXzfiZBbdgVahq7Ar?usp=sharing",
    },
    {
      id: 6,
      title: "Sales Tracking App",
      description:
        "Mobile solution for field sales representatives to track visits, orders, and customer interactions.",
      category: "mobile",
      image: "/images/portfolio/mobileapp4.jpeg",
      link: "https://drive.google.com/drive/folders/1PbgfjPlIpR1Ioh037xKvhatONjzyb10t?usp=sharing",
    },
    // {
    //   id: 7,
    //   title: "Islamic App",
    //   description:
    //     "Comprehensive Islamic application featuring prayer times, Quran, hadith, and mosque locator.",
    //   category: "mobile",
    //   image: "/images/portfolio/mobileapp6.png",
    //   link: "https://drive.google.com/drive/folders/1X__1cMfbwP96cPK5bE5OX5smofgweQ-Q?usp=sharing",
    // },
    // {
    //   id: 8,
    //   title: "Patient Fitness/Activity App",
    //   description:
    //     "Mobile health application tracking patient activity levels, exercise routines, and wellness metrics.",
    //   category: "mobile",
    //   image: "/images/portfolio/mobileapp8.png",
    //   link: "https://drive.google.com/drive/folders/1Cz5DJ7iyWm5SZO1tF7nAbahW1s0WyB8g?usp=sharing",
    // },
    // {
    //   id: 9,
    //   title: "Artist Portfolios App",
    //   description:
    //     "Platform for artists to display their creative work, manage exhibitions, and connect with clients.",
    //   category: "mobile",
    //   image: "/images/portfolio/mobileapp9.png",
    //   link: "https://drive.google.com/drive/folders/11Tu8T-yO8wFqYH9zpdIOyEcXDT_hA6zj?usp=sharing",
    // },
    // {
    //   id: 10,
    //   title: "Event Management App",
    //   description:
    //     "Comprehensive tool for event organizers to plan, coordinate, and execute successful events.",
    //   category: "mobile",
    //   image: "/images/portfolio/mobileapp10.png",
    //   link: "https://drive.google.com/drive/folders/1BU_0ZQB0XsfsxvG1Ealz_Zbc7yyKKOc-?usp=sharing",
    // },
    // {
    //   id: 11,
    //   title: "Church Guide App",
    //   description:
    //     "Digital guide helping users find churches, view service schedules, and access spiritual content.",
    //   category: "mobile",
    //   image: "/images/portfolio/mobileapp12.png",
    //   link: "https://drive.google.com/drive/folders/1nCkTmvXn4ma32AZaX4fZAkaA1iWB94BE?usp=sharing",
    // },
    {
      id: 12,
      title: "School Management System",
      description:
        "Comprehensive web platform for school administration, student records, and academic management.",
      category: "website",
      image: "/images/portfolio/website2.jpg",
      link: "https://drive.google.com/drive/folders/1eNdcczJcz0jWcI0wp0zSB_DTp5labap0?usp=sharing",
    },
    {
      id: 13,
      title: "Evyol HRMS System",
      description:
        "Human Resource Management System for employee records, payroll, and performance tracking.",
      category: "website",
      image: "/images/portfolio/website3.jpg",
      link: "https://drive.google.com/drive/folders/1eNdcczJcz0jWcI0wp0zSB_DTp5labap0?usp=sharing",
    },
    {
      id: 14,
      title: "Evyol CRM System",
      description:
        "Customer Relationship Management platform for sales tracking, client interactions, and business analytics.",
      category: "website",
      image: "/images/portfolio/website4.jpg",
      link: "https://drive.google.com/drive/folders/1eNdcczJcz0jWcI0wp0zSB_DTp5labap0?usp=sharing",
    },
    {
      id: 15,
      title: "Vehicle Management System",
      description:
        "Web-based system for fleet management, vehicle tracking, and maintenance scheduling.",
      category: "website",
      image: "/images/portfolio/website5.jpg",
      link: "https://drive.google.com/drive/folders/1eNdcczJcz0jWcI0wp0zSB_DTp5labap0?usp=sharing",
    },
  ];

  // Filter items based on active tab
  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  // Tab data
  const tabs = [
    { id: "website", label: "Websites" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "uiux", label: "UI/UX Design" },
    { id: "ai", label: "AI Solutions" },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Portfolio</h2>
          <p className={styles.sectionSubtitle}>
            Selected projects we have worked on
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className={styles.tabIndicator}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          className={`${styles.portfolioGrid} ${
            activeTab === "mobile" ? styles.mobileGrid : ""
          }`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.portfolioItem} ${
                item.category === "mobile"
                  ? styles.mobileItem
                  : styles.websiteItem
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.link}
                className={styles.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.portfolioImageWrapper}>
                  {item.category === "mobile" && (
                    <div className={styles.mobileFrame}>
                      <div className={styles.mobileScreen}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.portfolioImage}
                        />
                      </div>
                    </div>
                  )}
                  {item.category !== "mobile" && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.portfolioImage}
                    />
                  )}
                  <div
                    className={`${styles.portfolioOverlay} ${
                      hoveredItem === item.id ? styles.hovered : ""
                    }`}
                  >
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle}>{item.title}</h3>
                      <p className={styles.portfolioDescription}>
                        {item.description}
                      </p>
                      <span className={styles.viewProject}>
                        View Project{" "}
                        <FiExternalLink className={styles.externalIcon} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
