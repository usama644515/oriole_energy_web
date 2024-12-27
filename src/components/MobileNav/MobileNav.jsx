import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
import React from 'react';
import { Image } from 'react-bootstrap';
import MobileNavItems from './MobileNavItems';
import MegaMenu from '../MegaMenu/MegaMenu';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { social, logo_light, navItems } = headerData;
const MobileNav = () => {
    const { isExpanded, handleToggle } = useRootContext();
    return (
        <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
            <div onClick={handleToggle} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content">
                <span onClick={handleToggle} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" >
                        <Image src={logo_light.src} width={155} alt="tolak" />
                    </Link>
                </div>

                <div className="mobile-nav__container">
                    <ul className='main-menu__list'>
                        <MegaMenu />
                        {navItems.map((navItem) => (
                            <MobileNavItems key={navItem.id} navItem={navItem} />
                        ))}
                    </ul>
                </div>


                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@tolak.com">needhelp@tolak.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>
                <div className="mobile-nav__social">
                    {social.map(({ icon, link }, index) => (

                        <Link key={index} href={link}>
                            < FontAwesomeIcon icon={icon} />
                            <span className="sr-only">Facebook</span>
                        </Link>

                    ))}

                </div>
            </div >

        </div >
    );
};

export default MobileNav;