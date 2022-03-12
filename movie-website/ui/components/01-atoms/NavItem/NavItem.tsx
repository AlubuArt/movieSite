import Link from "next/link";
import React from "react";
import styles from "./NavItem.module.css";

export interface NavItemProps {
    item: Models.NavItem;
}

export const NavItem: React.FC<NavItemProps> = ({ item }) => {
    return (
        <Link href={item.path} passHref>
            <p>{item.text}</p>
        </Link>
    )
}

