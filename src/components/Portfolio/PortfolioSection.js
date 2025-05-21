/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import styles from './PortfolioSection.module.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('website');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Portfolio items data
  const portfolioItems = [
     {
      id: 1,
      title: "Software Agency Website",
      description:
        "An interactive learning management system with course creation, student tracking, and progress analytics.",
      category: "website",
      image: "/images/portfolio/website1.png",
      link: "https://drive.google.com/drive/folders/1eNdcczJcz0jWcI0wp0zSB_DTp5labap0?usp=sharing",
    },
    {
      id: 2,
      title: "RAG GPT Implementation",
      description:
        "Custom Retrieval-Augmented Generation system for enhanced AI question answering capabilities.",
      category: "ai",
      image: "/images/portfolio/ai1.png",
      link: "https://drive.google.com/drive/folders/1uZqfxogBl1wSm0GGb2m7fgj_64lHegAL?usp=sharing",
    },
    {
      id: 3,
      title: "Medical AI Assistant",
      description:
        "Mobile application providing AI-powered medical diagnosis support and health recommendations.",
      category: "mobile",
      image: "/images/portfolio/mobileapp1.jpeg",
      link: "https://drive.google.com/drive/folders/1WAuZBoIY06i7eipFDUpZRhSE9eGEXTtp?usp=sharing",
    },
    {
      id: 4,
      title: "Weather Monitoring App",
      description:
        "Real-time weather forecasting application with location-based alerts and historical data analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp2.jpeg",
      link: "https://drive.google.com/drive/folders/1SJLttStuCnYt9pLGIdvRmwgCKpo1IChu?usp=sharing",
    },
    {
      id: 5,
      title: "Weather Monitoring App 2",
      description:
        "Real-time weather forecasting application with location-based alerts and historical data analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp3.jpeg",
      link: "https://drive.google.com/drive/folders/1EJthiO_KpkSDAjSFXzfiZBbdgVahq7Ar?usp=sharing",
    },
    {
      id: 6,
      title: "Sales Tracking App",
      description:
        "Field sales monitoring application with GPS tracking, visit logging, and performance analytics.",
      category: "mobile",
      image: "/images/portfolio/mobileapp4.jpeg",
      link: "https://drive.google.com/drive/folders/1PbgfjPlIpR1Ioh037xKvhatONjzyb10t?usp=sharing",
    },
    
    {
      id: 7,
      title: "Islamic App",
      description:
        "An Islamic lifestyle app offering prayer times, Quran, and religious content.",
      category: "mobile",
      image: "/images/portfolio/mobileapp6.png",
      link: "https://drive.google.com/drive/folders/1X__1cMfbwP96cPK5bE5OX5smofgweQ-Q?usp=sharing",
    },
    
    {
      id: 8,
      title: "Patient Fitness/Activity App",
      description:
        "A health tracking app focused on patient fitness, daily activity, and wellness insights.",
      category: "mobile",
      image: "/images/portfolio/mobileapp8.png",
      link: "https://drive.google.com/drive/folders/1Cz5DJ7iyWm5SZO1tF7nAbahW1s0WyB8g?usp=sharing",
    },
    {
      id: 9,
      title: "Artisit Portfolios App",
      description:
        "A platform for artists to showcase their portfolios, galleries, and creative projects.",
      category: "mobile",
      image: "/images/portfolio/mobileapp9.png",
      link: "https://drive.google.com/drive/folders/11Tu8T-yO8wFqYH9zpdIOyEcXDT_hA6zj?usp=sharing",
    },
    {
      id: 10,
      title: "Event Managment App",
      description:
        "An event management tool for planning, organizing, and tracking event logistics.",
      category: "mobile",
      image: "/images/portfolio/mobileapp10.png",
      link: "https://drive.google.com/drive/folders/1BU_0ZQB0XsfsxvG1Ealz_Zbc7yyKKOc-?usp=sharing",
    },
   
    {
      id: 11,
      title: "Chruch Guide App",
      description:
        "An app to help users find church locations, events, sermons, and spiritual resources.",
      category: "mobile",
      image: "/images/portfolio/mobileapp12.png",
      link: "https://drive.google.com/drive/folders/1nCkTmvXn4ma32AZaX4fZAkaA1iWB94BE?usp=sharing",
    }
  ];

  // Filter items based on active tab
  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  // Tab data
  const tabs = [
    { id: 'website', label: 'Websites' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'ai', label: 'AI Solutions' },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Portfolio</h2>
          <p className={styles.sectionSubtitle}>Selected projects we have worked on</p>
        </div>

        {/* Portfolio Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className={styles.tabIndicator}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className={`${styles.portfolioGrid} ${activeTab === 'mobile' ? styles.mobileGrid : ''}`}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`${styles.portfolioItem} ${item.category === 'mobile' ? styles.mobileItem : styles.websiteItem}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.link} className={styles.portfolioLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.portfolioImageWrapper}>
                  {item.category === 'mobile' && (
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
                  {item.category !== 'mobile' && (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={styles.portfolioImage}
                    />
                  )}
                  <div className={`${styles.portfolioOverlay} ${hoveredItem === item.id ? styles.hovered : ''}`}>
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle}>{item.title}</h3>
                      <p className={styles.portfolioDescription}>{item.description}</p>
                      <span className={styles.viewProject}>
                        View Project <FiExternalLink className={styles.externalIcon} />
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