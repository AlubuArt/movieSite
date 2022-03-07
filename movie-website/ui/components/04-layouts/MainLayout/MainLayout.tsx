import React from 'react';
import {Header} from '../../02-molecules/Header';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
    children: React.ReactNode;
}


export const MainLayout: React.FC<any> = ({children}) => {
    return (
        <div className={styles.LayoutContent}>
            <Header navItems={[{text: 'Home', path: '/'}, {text: 'Genres', path: 'genrepage'}, {text: 'Wishlist', path: 'wishlist'}]} />
            {children}
        </div>
    );
};