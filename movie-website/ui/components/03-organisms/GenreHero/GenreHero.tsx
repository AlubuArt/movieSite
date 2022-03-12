import React from 'react';
import { HeroCarousel } from '../../02-molecules/HeroCarousel/HeroCarousel';
import styles from './GenreHero.module.css';


interface GenreHeroProps {
    carouselItems: Models.MovieItem[];

}

export const GenreHero: React.FC<GenreHeroProps> = ({carouselItems}) => {
    return (
        <div className={styles.GenreHero}>
            <HeroCarousel carouselItems={carouselItems} />
        </div>
    )
}