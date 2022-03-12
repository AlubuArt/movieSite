import React, { useMemo } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";

interface CarouselProps {}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const wrappedChildren = useMemo(
        () =>
            React.Children.map(children, (child: React.ReactNode) => (
                <div className={styles.CarouselItem}>{child}</div>
            )) || [],

        [children]
    );

    return (
        <div className={styles.Carousel}>
            <div className={styles.CarouselWrapper}>{wrappedChildren}</div>
        </div>
    );
};
