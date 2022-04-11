import React from "react";
import styles from "./Hero.module.css";
import { MovieInfoCard } from "../../02-molecules/MovieInfoCard/MovieInfoCard";

interface HeroProps {
    movie: Models.MovieItem;
}

export const Hero: React.FC<HeroProps> = ({ movie }) => {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.Backdrop}
                src={
                    movie.plprogram$thumbnails["orig-720x1280"]?.plprogram$url
                }
            />
            <div className={styles.MovieInfoCardWrapper}>
                <MovieInfoCard movie={movie} />
            </div>
        </div>
    );
};
