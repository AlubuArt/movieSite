import React from "react";
import { Header } from "../../02-molecules/Header";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={styles.Layout}>
            <Header
                navItems={[
                    { text: "Home", path: "/" },
                    { text: "Genres", path: "/genrepage" },
                    { text: "Wishlist", path: "/wishlist" },
                ]}
            />
            {children}
        </div>
    );
};
