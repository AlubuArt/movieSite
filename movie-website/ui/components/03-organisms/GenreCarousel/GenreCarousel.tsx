import React, { useMemo } from "react";
import { Carousel } from "../../02-molecules/Carousel/Carousel";
import styles from "./GenreCarousel.module.css";
import { Heading } from "../../01-atoms/Heading";
import { GenreCarouselItem } from "../../02-molecules/GenreCarouselItem";
import { CarouselTitle } from "../../02-molecules/CarouselTitle/CarouselTitle";

interface GenreCarouselProps {
    carouselItems: Models.MovieItem[] | [] ;
    title: string;
}

export const GenreCarousel: React.FC<GenreCarouselProps> = ({
    carouselItems,
    title,
}) => {
    const wrappedChildren = useMemo(
        () =>
             carouselItems.map(
                (carouselItem: Models.MovieItem, index: number) => {
                    return (
                        <GenreCarouselItem
                            key={index}
                            carouselItem={carouselItem}
                        />
                    );
                }
            ),
        [carouselItems]
    );
    return (
        <div className={styles.GenreCarousel}>
            <CarouselTitle>{title}</CarouselTitle>
            <Carousel>{wrappedChildren}</Carousel>
        </div>
    );
};
