import image1 from '@/assets/images/team/team-1-1.jpg'
import image2 from '@/assets/images/team/team-1-2.jpg'
import image3 from '@/assets/images/team/team-1-3.jpg'
import image4 from '@/assets/images/team/team-1-4.jpg'
import image5 from '@/assets/images/team/team-1-5.jpg'
import image6 from '@/assets/images/team/team-1-6.jpg'
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
const teamOneData = {
    tagLine: "Our Team Member",
    title: "Meet Great Customer Service",
    title2: "Meet The Team Metting Solution",
    carouselData: [
        {
            id: 1,
            image: image1,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Lorata Barsa",
            href: "team-details",
            designation: "Founder"


        },
        {
            id: 2,
            image: image2,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Moras Batas",
            href: "team-details",
            designation: "Manager"


        },
        {
            id: 3,
            image: image3,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Korata Mana",
            href: "team-details",
            designation: "Founder"


        },
        {
            id: 4,
            image: image4,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Christine Eve",
            href: "team-details",
            designation: "Founder"


        },
        {
            id: 5,
            image: image5,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "David Copers",
            href: "team-details",
            designation: "Manager"


        },
        {
            id: 6,
            image: image6,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Kevin Martin",
            href: "team-details",
            designation: "Founder"


        }
    ]


}
export default teamOneData;