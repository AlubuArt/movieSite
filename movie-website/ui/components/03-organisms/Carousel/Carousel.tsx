import React, { useMemo } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";
import { CarouselItem } from "../../02-molecules/CarouselItem /CarouselItem";
import { Heading } from "../../01-atoms/Heading";
import { CarouselTitle } from "../../02-molecules/CarouselTitle/CarouselTitle";

interface CarouselProps {
    title: string;
    count: number;
    items: Models.MovieItem[];
}

export const Carousel: React.FC<CarouselProps> = ({
    children,
    title,
    items,
}) => {
    const wrappedChildren = useMemo(
        () =>
            items.map((item) => (
                <CarouselItem title={item.title} image={""} />
            )) || [],
        [children]
    );
    return (
        <div className={styles.CarouselContainer}>
            <CarouselTitle />
            <div className={styles.Carousel}>
                <div className={styles.CarouselWrapper}>{wrappedChildren}</div>
            </div>
        </div>
    );
};
