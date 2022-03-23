import React, { useMemo } from "react";
import { Heading } from "../../01-atoms/Heading";
import { GenreCarouselItem } from "../../02-molecules/GenreCarouselItem";
import styles from "./Collection.module.css";

interface CollectionProps {
    collectionItems: Models.MovieItem[];
}

export const Collection: React.FC<CollectionProps> = ({ collectionItems }) => {
    const wrappedChildren = useMemo(
        () =>
            collectionItems.map(
                (collectionItem: Models.MovieItem, index: number) => {
                    return (
                        <div key={index} className={styles.CollectionItem}>
                            <GenreCarouselItem carouselItem={collectionItem} />
                        </div>
                    );
                }
            ),
        [collectionItems]
    );

    return (
        <div className={styles.Collection}>
            <div className={styles.CollectionHeader}>
                <Heading type={"h2"} tag={"h2"}>
                    Action 341
                </Heading>
            </div>
            <div className={styles.CollectionLayout}>{wrappedChildren}</div>
        </div>
    );
};
