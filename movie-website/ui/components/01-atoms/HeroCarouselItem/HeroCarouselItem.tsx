import React from "react";
import styles from "./HeroCarouselItem.module.css";

interface HeroCarouselItemProps {
    carouselItem: Models.MovieItem;
}

export const HeroCarouselItem: React.FC<HeroCarouselItemProps> = ({
    carouselItem,
}) => {
    return (
        <div className={styles.HeroCarouselItem}>
            <img src={carouselItem.cover}></img>
        </div>
    );
};
