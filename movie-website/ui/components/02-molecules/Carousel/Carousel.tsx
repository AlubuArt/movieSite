import React, { useMemo } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";

interface CarouselProps {
    spacing?: "sm" | "md" | "lg";
}

export const Carousel: React.FC<CarouselProps> = ({ children, spacing }) => {
    const wrappedChildren = useMemo(
        () =>
            React.Children.map(children, (child: React.ReactNode) => (
                <div className={styles.CarouselItem}>{child}</div>
            )) || [],

        [children]
    );

    return (
        <div className={styles.Carousel}>
            <div
                className={classNames(
                    styles.CarouselWrapper,
                    styles[`Spacing___${spacing}`]
                )}
            >
                {wrappedChildren}
            </div>
        </div>
    );
};
