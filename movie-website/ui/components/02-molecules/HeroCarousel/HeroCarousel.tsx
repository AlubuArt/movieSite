import React, { useMemo } from "react";
import { Carousel } from "../Carousel/Carousel";
import styles from "./HeroCarousel.module.css";
import { HeroCarouselItem } from "../../01-atoms/HeroCarouselItem/HeroCarouselItem";

interface HeroCarouselProps {
    carouselItems: Models.MovieItem[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
    carouselItems,
}) => {
    const wrappedChildren = useMemo(
        () =>
            carouselItems.map(
                (carouselItem: Models.MovieItem, index: number) => {
                    return (
                        <HeroCarouselItem
                            key={index}
                            carouselItem={carouselItem}
                        />
                    );
                }
            ),
        [carouselItems]
    );

    return (
        <div className={styles.HeroCarousel}>
            <Carousel>{wrappedChildren}</Carousel>
        </div>
    );
};
