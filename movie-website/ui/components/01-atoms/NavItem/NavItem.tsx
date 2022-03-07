import React from "react";
import styles from "./NavItem.module.css";

export interface NavItemProps {
    children: React.ReactNode;
    tag: "p";
}

export const NavItem: React.FC<NavItemProps> = ({ children, tag }) =>
    React.createElement(tag, { className: styles.navItem }, children);
