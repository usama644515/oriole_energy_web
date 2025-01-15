'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './NavItems.module.css';

const NavItems = ({ item, onePage }) => {
    const pathname = usePathname();
    const { name, href, subNavItems } = item;
    const subHref = subNavItems?.map((item) => item.href);
    const current = pathname === href || subHref?.includes(pathname);

    return (
        <li className={`${styles.navItem} ${current ? styles.current : ''} ${subNavItems ? 'dropdown' : ''}`}>
            <Link href={href} className={styles.navLink}>
                {name}
            </Link>
        </li>
    );
};

export default NavItems;
