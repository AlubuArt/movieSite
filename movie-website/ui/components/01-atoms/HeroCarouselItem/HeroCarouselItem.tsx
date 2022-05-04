import Link from "next/link";
import React from "react";
import styles from "./HeroCarouselItem.module.css";

interface HeroCarouselItemProps {
    carouselItem: Models.MovieItem;
}

export const HeroCarouselItem: React.FC<HeroCarouselItemProps> = ({
    carouselItem,
}) => {
    //TODO: Move this to a tools file. It is used several places
    const slug = carouselItem.id.substring(
        carouselItem.id.lastIndexOf("/") + 1
    );

    
    return (
        <Link href={`/movies/${slug}`}>
            <div className={styles.HeroCarouselItem}>
                <img
                    src={
                        carouselItem.plprogram$thumbnails["orig-546x375"]?.plprogram$url
                    }
                ></img>
            </div>
        </Link>
    );
};
