'use client'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import SubNavItems from './SubNavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const MobileNavItems = ({ navItem = {} }) => {
    const pathname = usePathname;

    const [expand, setExpand] = useState(false);

    const handleExpand = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpand(!expand);
    };

    const { name, href, subNavItems } = navItem;
    return (
        <li
            className={`${pathname === href ? " current" : ""}`}
        >
            <Link href={href} className={expand ? "expanded" : ""}>
                {name}
                {subNavItems?.length ? (
                    <button
                        onClick={handleExpand}
                        aria-label='dropdown toggler'
                        className={expand ? "expanded" : ""}
                    >
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                ) : (
                    ""
                )}
            </Link>

            <ul
                className={`sub-menu ${expand ? "open " : ""}`}

            // style={{
            //     display: expand ? "block" : "none",
            // }}
            >
                {subNavItems?.map((subItem) => (
                    <SubNavItems subItem={subItem} key={subItem.id} />
                ))}
            </ul>
        </li>
    );
};

export default MobileNavItems;