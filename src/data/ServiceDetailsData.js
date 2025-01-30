import businessGrowth1 from '@/assets/images/resources/service-d-1.jpg';
import content from '@/assets/images/resources/service-d-content.jpg';
import businessSolution1 from '@/assets/images/resources/service-d-2.jpg';
import marketingSolution1 from '@/assets/images/resources/service-d-3.jpg';

import technologyServices1 from '@/assets/images/resources/service-d-4.jpg';
import servicesdetails from '@/assets/images/resources/service-details.webp';
import servicesdetails2 from '@/assets/images/resources/service-details2.webp';
import mobileapp1 from '@/assets/images/resources/service-3-6.jpg';
import webdevelopment1 from '@/assets/images/resources/service-3-5.png';
import softwaredevelopment1 from '@/assets/images/resources/service-3-7.jpg';
import network1 from '@/assets/images/resources/network-solution.webp';
import datascience1 from '@/assets/images/resources/service2.jpg';
import graphicsdesigning1 from '@/assets/images/resources/graphics-designing.jpg';
import mobileapp2 from '@/assets/images/resources/mobile-app2.jpg';

import businessMarketing1 from '@/assets/images/resources/service-d-5.jpg';

import businessSupport1 from '@/assets/images/resources/service-d-6.jpg';
const serviceDetailsData =
    [
        {
            id: "/app-development",
            thumbnailImage: mobileapp1, // Replace `mobileAppThumbnail` with your actual image
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Mobile App Development", href: "/app-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Software Development", href: "/software-development" },
                    { id: 4, name: "Network Solutions", href: "/network-infrastructure" },
                    { id: 5, name: "Data Science Services", href: "/data-science" },
                    { id: 6, name: "Graphics Designing", href: "/graphics-designing" },
                ],
            },
            content: [
                "We specialize in crafting dynamic, user-friendly mobile applications for Android and iOS. Whether you're looking to bring your business online, enhance customer engagement, or create a unique app to solve specific problems, our team of expert developers can turn your vision into reality.",
                "Our mobile apps are tailored to your unique business needs, offering seamless performance, engaging interfaces, and scalable solutions that grow with your business. From e-commerce apps to service-oriented platforms, we deliver high-quality, end-to-end mobile solutions."
            ],
            skills: [
                {
                    id: 1,
                    title: "Custom App Development",
                    text: "Delivering tailored solutions to meet unique needs",
                    percentage: 85,
                },
                {
                    id: 2,
                    title: "Cross-Platform Development",
                    text: "Ensuring seamless performance on both Android and iOS",
                    percentage: 90,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "End-to-end mobile app development for Android and iOS.",
                        "Focus on user experience, performance, and scalability.",
                        "Integration with the latest technologies and APIs."
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Custom app design to reflect your brand identity.",
                        "Expert testing to ensure seamless functionality.",
                        "Ongoing support and updates for your app."
                    ],
                },
            ],
            solutionText:
                "Our mobile app development services offer innovative, tailor-made solutions for businesses and individuals. With a focus on performance, design, and functionality, we create apps that empower users and drive growth.",
            contentImage: servicesdetails2, // Replace `mobileAppContentImage` with your actual image
            lastText:
                "Whether you’re launching a startup or scaling an existing business, our mobile app development services provide you with cutting-edge solutions that meet your needs. Let us help you bring your ideas to life and create apps that leave a lasting impression.",
        },
        
        {
            id: "/web-development",
            thumbnailImage: webdevelopment1, // Replace with your actual image variable or path
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Mobile App Development", href: "/app-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Software Development", href: "/software-development" },
                    { id: 4, name: "Network Solutions", href: "/network-infrastructure" },
                    { id: 5, name: "Data Science Services", href: "/data-science" },
                    { id: 6, name: "Graphics Designing", href: "/graphics-designing" },
                ],
            },
            content: [
                "Transform your online presence with our cutting-edge web development services. We specialize in creating responsive, user-friendly, and visually appealing websites tailored to your business goals. Whether it’s a personal portfolio, an e-commerce platform, or a corporate website, we have the expertise to deliver exceptional results.",
                "Our team ensures seamless performance, optimized speed, and a modern design that captures your brand identity. From custom coding to integration with the latest technologies, we create websites that stand out and drive results."
            ],
            skills: [
                {
                    id: 1,
                    title: "Frontend Development",
                    text: "Creating stunning user interfaces with cutting-edge technologies.",
                    percentage: 90,
                },
                {
                    id: 2,
                    title: "Backend Development",
                    text: "Building robust, scalable, and secure web applications.",
                    percentage: 85,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Custom website design and development.",
                        "Mobile-first and responsive designs.",
                        "Integration with third-party APIs and tools.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "SEO-friendly architecture for better visibility.",
                        "Ongoing support and maintenance services.",
                        "Focus on security, speed, and performance optimization.",
                    ],
                },
            ],
            solutionText:
                "Our web development solutions are tailored to meet your unique business needs, combining creativity with technical expertise to deliver impactful online experiences.",
            contentImage: servicesdetails2, // Replace with your actual image variable or path
            lastText:
                "With our web development services, your business can establish a powerful online presence that drives engagement, boosts conversions, and supports long-term growth. Let us help you design a website that aligns perfectly with your vision and goals.",
        },
        
        {
            id: "/software-development",
            thumbnailImage: softwaredevelopment1, // Replace with your actual image variable or path
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Mobile App Development", href: "/app-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Software Development", href: "/software-development" },
                    { id: 4, name: "Network Solutions", href: "/network-infrastructure" },
                    { id: 5, name: "Data Science Services", href: "/data-science" },
                    { id: 6, name: "Graphics Designing", href: "/graphics-designing" },
                ],
            },
            content: [
                "Empower your business with custom software development solutions. We specialize in building scalable, efficient, and user-friendly software tailored to meet your unique requirements. Whether you need enterprise-level applications, SaaS platforms, or mobile apps, our team has the expertise to deliver outstanding results.",
                "With a focus on innovation and quality, we provide end-to-end software development services, including design, development, testing, deployment, and ongoing support. Partner with us to transform your ideas into cutting-edge software solutions."
            ],
            skills: [
                {
                    id: 1,
                    title: "Custom Software Development",
                    text: "Tailored solutions for unique business needs.",
                    percentage: 95,
                },
                {
                    id: 2,
                    title: "Agile Development Process",
                    text: "Efficient and adaptive project management.",
                    percentage: 90,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "End-to-end software development services.",
                        "Integration with existing systems and APIs.",
                        "Focus on user experience and interface design.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Robust quality assurance and testing.",
                        "Ongoing maintenance and support.",
                        "Security-focused development practices.",
                    ],
                },
            ],
            solutionText:
                "Our software development services are designed to enhance your operational efficiency and deliver exceptional value to your business, leveraging the latest technologies and methodologies.",
            contentImage: servicesdetails2, // Replace with your actual image variable or path
            lastText:
                "From startups to enterprises, our software development services ensure your business stays ahead of the competition. We combine technical expertise with a deep understanding of your goals to create software solutions that drive success and innovation.",
        },
        
        {
            id: "/network-infrastructure",
            thumbnailImage: network1, // Replace with your actual image variable or path
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Mobile App Development", href: "/app-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Software Development", href: "/software-development" },
                    { id: 4, name: "Network Solutions", href: "/network-infrastructure" },
                    { id: 5, name: "Data Science Services", href: "/data-science" },
                    { id: 6, name: "Graphics Designing", href: "/graphics-designing" },
                ],
            },
            content: [
                "Our network infrastructure services are designed to create robust, secure, and scalable networks tailored to meet the needs of modern businesses. Whether you're setting up a new network or optimizing an existing one, our expert team ensures seamless connectivity and peak performance.",
                "From structured cabling and wireless solutions to advanced firewall configurations and cloud networking, we provide end-to-end network solutions. Trust us to build an infrastructure that powers your business operations efficiently and securely."
            ],
            skills: [
                {
                    id: 1,
                    title: "Network Design & Implementation",
                    text: "Tailored networks for seamless connectivity.",
                    percentage: 90,
                },
                {
                    id: 2,
                    title: "Network Security Solutions",
                    text: "Protecting your business against threats.",
                    percentage: 85,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Comprehensive network setup and upgrades.",
                        "Advanced firewall and threat management solutions.",
                        "Reliable structured cabling and wireless systems.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Cloud-based networking for scalability.",
                        "Continuous monitoring and support services.",
                        "Optimized network performance for business efficiency.",
                    ],
                },
            ],
            solutionText:
                "We design and manage state-of-the-art network infrastructures that align with your business objectives, ensuring high availability, security, and scalability.",
            contentImage: servicesdetails2, // Replace with your actual image variable or path
            lastText:
                "With our expertise in network infrastructure, your business can achieve reliable and efficient connectivity. From initial consultation to ongoing support, we ensure your network is always optimized for success. Let us help you build a solid foundation for your IT environment.",
        },
        
        {
            id: "/data-science",
            thumbnailImage: datascience1, // Replace with your actual image variable or path
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Mobile App Development", href: "/app-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Software Development", href: "/software-development" },
                    { id: 4, name: "Network Solutions", href: "/network-infrastructure" },
                    { id: 5, name: "Data Science Services", href: "/data-science" },
                    { id: 6, name: "Graphics Designing", href: "/graphics-designing" },
                ],
            },
            content: [
                "Our data science services leverage cutting-edge techniques to transform raw data into actionable insights. We specialize in analyzing complex datasets, building predictive models, and enabling data-driven decision-making to help businesses achieve their goals.",
                "With expertise in machine learning, artificial intelligence, and statistical analysis, our team crafts custom solutions tailored to your specific challenges. Let us unlock the power of data for your business."
            ],
            skills: [
                {
                    id: 1,
                    title: "Machine Learning Models",
                    text: "Building predictive and robust models.",
                    percentage: 90,
                },
                {
                    id: 2,
                    title: "Data Visualization",
                    text: "Transforming data into intuitive visuals.",
                    percentage: 85,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Comprehensive data analysis and reporting.",
                        "Custom machine learning and AI solutions.",
                        "Real-time data processing and insights.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Expertise in Python, R, and big data tools.",
                        "Seamless integration with existing systems.",
                        "Predictive analytics for informed decisions.",
                    ],
                },
            ],
            solutionText:
                "Empowering businesses through advanced data science solutions that drive innovation, optimize operations, and improve outcomes.",
            contentImage: servicesdetails2, // Replace with your actual image variable or path
            lastText:
                "Our data science expertise ensures your business stays ahead in the digital age. From predictive analytics to AI-driven solutions, we provide the tools and strategies to turn data into your competitive advantage. Let us help you harness the power of data to achieve success.",
        },
        
        {
            id: "/graphics-designing",
            thumbnailImage: graphicsdesigning1, // Replace with your actual image variable or path
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Mobile App Development", href: "/app-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Software Development", href: "/software-development" },
                    { id: 4, name: "Network Solutions", href: "/network-infrastructure" },
                    { id: 5, name: "Data Science Services", href: "/data-science" },
                    { id: 6, name: "Graphics Designing", href: "/graphics-designing" },
                ],
            },
            content: [
                "Our graphics designing services bring your ideas to life with visually stunning and creative designs. From branding and logo creation to marketing materials, we craft designs that leave a lasting impression.",
                "With expertise in tools like Adobe Creative Suite and Canva, our team ensures your brand stands out. We focus on creativity, detail, and functionality to provide designs tailored to your business needs."
            ],
            skills: [
                {
                    id: 1,
                    title: "Creative Logo Design",
                    text: "Crafting unique brand identities.",
                    percentage: 95,
                },
                {
                    id: 2,
                    title: "Branding Materials",
                    text: "From business cards to brochures.",
                    percentage: 88,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Custom logo creation and brand identity.",
                        "High-quality marketing materials and visuals.",
                        "Social media graphics that captivate audiences.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Expertise in Adobe Photoshop, Illustrator, and InDesign.",
                        "Creative design tailored to your vision.",
                        "Fast delivery without compromising quality.",
                    ],
                },
            ],
            solutionText:
                "Transform your brand with innovative graphic designs that communicate your message and captivate your audience.",
            contentImage: servicesdetails2, // Replace with your actual image variable or path
            lastText:
                "Our graphics designing team delivers high-quality, visually appealing solutions that align with your brand identity. From concept to execution, we focus on creating designs that resonate with your audience and amplify your message. Let us help you make a bold statement with your brand.",
        },
        
    ]


export default serviceDetailsData;
