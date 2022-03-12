import React from "react";
import { MovieCover } from "../../01-atoms/Cover/MovieCover";
import { MovieInfoCard } from "../../02-molecules/MovieInfoCard/MovieInfoCard";
import { Collection } from "../Collection/Collection";
import styles from "./MovieHero.module.css";

interface MovieHeroProps {
    movie: Models.MovieItem;
}

export const MovieHero: React.FC<MovieHeroProps> = ({ movie }) => {
    return (
        <div className={styles.MovieHero}>
            <div className={styles.MovieHeroWrapper}>
                <img
                    className={styles.Backdrop}
                    src={
                        "https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/973/160/avengers-endgame_appfeatured.jpg"
                    }
                />

                <MovieInfoCard movie={movie} />

                <div className={styles.MovieHeroCover}>
                    <MovieCover cover={movie.cover} />
                </div>
            </div>
        </div>
    );
};
