import React from "react";
import styles from "./ContentLayout.module.css";

interface ContentLayoutProps {
    children: React.ReactNode;
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
    return <div className={styles.Content}>{children}</div>;
};
