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
      title: 'Software Agency Website',
      description: 'An interactive learning management system with course creation, student tracking, and progress analytics.',
      category: 'website',
      image: '/images/portfolio/website1.png',
      link: 'https://drive.google.com/drive/folders/1BW5oJHDd778ssGx5Dk5QGlImMhJXqM3S?usp=sharing'
    },
    // {
    //   id: 2,
    //   title: 'Umrah Taxi Website',
    //   description: 'Booking platform for Umrah transportation services with real-time scheduling and payment processing.',
    //   category: 'website',
    //   image: '/images/portfolio/website2.png',
    //   link: 'https://drive.google.com/drive/folders/1soZ0jvATRVZvN4HJ85MRe2mBHKU2i1oa?usp=sharing'
    // },
    // {
    //   id: 3,
    //   title: 'Healthcare Dashboard',
    //   description: 'Comprehensive medical dashboard for patient management, appointment scheduling, and health analytics.',
    //   category: 'website',
    //   image: '/images/portfolio/website3.png',
    //   link: 'https://drive.google.com/drive/folders/1UmYP7bAF-eWHDuh4yzyeb6EkzvQ-qYvU?usp=sharing'
    // },
    {
      id: 4,
      title: 'RAG GPT Implementation',
      description: 'Custom Retrieval-Augmented Generation system for enhanced AI question answering capabilities.',
      category: 'ai',
      image: '/images/portfolio/ai1.png',
      link: 'https://drive.google.com/drive/folders/1ri_EgHHyuoRRKg0JUxzBmLHstOyEF_Hn?usp=sharing'
    },
    // {
    //   id: 5,
    //   title: 'Medical AI Assistant',
    //   description: 'Mobile application providing AI-powered medical diagnosis support and health recommendations.',
    //   category: 'mobile',
    //   image: '/images/portfolio/mobileapp1.jpeg',
    //   link: 'https://drive.google.com/drive/folders/1FBdZgRyP9VlcVN4-GS-8hbP1WrjrdAxY?usp=sharing'
    // },
    {
      id: 6,
      title: 'Weather Monitoring App',
      description: 'Real-time weather forecasting application with location-based alerts and historical data analysis.',
      category: 'mobile',
      image: '/images/portfolio/mobileapp2.jpeg',
      link: 'https://drive.google.com/drive/folders/1JFqZCGT7M4R5ZKFrTsv8Z2eFUr5LKEYH?usp=sharing'
    },
    // {
    //   id: 7,
    //   title: 'Weather Monitoring App 2',
    //   description: 'Real-time weather forecasting application with location-based alerts and historical data analysis.',
    //   category: 'mobile',
    //   image: '/images/portfolio/mobileapp3.jpeg',
    //   link: 'https://drive.google.com/drive/folders/1XEFMZGQdSaH7-My0HdN7t4RXZEKZ_lU4?usp=sharing'
    // },
    // {
    //   id: 8,
    //   title: 'Umrah Cab Booking',
    //   description: 'Complete booking system for Umrah transportation with driver management and route optimization.',
    //   category: 'website',
    //   image: '/images/portfolio/website5.png',
    //   link: 'https://drive.google.com/drive/folders/1K8LQv3YRiifQhQUEgRfFQTyI8Zyp6CrR?usp=sharing'
    // },
    {
      id: 9,
      title: 'Sales Tracking App',
      description: 'Field sales monitoring application with GPS tracking, visit logging, and performance analytics.',
      category: 'mobile',
      image: '/images/portfolio/mobileapp4.jpeg',
      link: 'https://drive.google.com/drive/folders/1x7_LpqWamglMjaXmdfLGud0EJ1s9KRQY?usp=sharing'
    },
    // {
    //   id: 10,
    //   title: 'Medical Lab Dashboard',
    //   description: 'Comprehensive medical dashboard for patient report management and health analytics.',
    //   category: 'website',
    //   image: '/images/portfolio/website6.png',
    //   link: 'https://drive.google.com/drive/folders/1qoP2MpSos2iMC1lHTtrcc_qnGIvNDGcl?usp=sharing'
    // },
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
        <div className={`${styles.portfolioGrid} ${activeTab === 'website' ? styles.websiteGrid : ''}`}>
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