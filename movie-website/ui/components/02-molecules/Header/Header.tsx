import React from "react";
import { NavItem } from "../../01-atoms/NavItem/NavItem";
import styles from "./Header.module.css";

export interface HeaderProps {
    navItems: Models.NavItem[];
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.searchBar}></div>
            <div className={styles.headerItems}>
                <ul className={styles.list}>
                    {navItems.map((item, index) => {
                        return (
                            <NavItem key={index} item={item}/>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
