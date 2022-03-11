import React from 'react';
import { Heading } from '../../01-atoms/Heading';
import styles from './CarouselTitle.module.css';

interface CarouselTitleProps {

}


export const CarouselTitle: React.FC<CarouselTitleProps> = ({children}) => {
    return (
        <div className={styles.CarouselTitle}>
            <Heading type={'h2'} tag={'h2'}>{'Action '}{' 175'}</Heading>
        </div>
    )
}