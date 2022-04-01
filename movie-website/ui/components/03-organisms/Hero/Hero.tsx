import React from "react";
import classNames from "classnames";
import styles from "./Hero.module.css";
import { Container } from "../../04-layouts/Container/Container";
import { MovieInfoCard } from "../../02-molecules/MovieInfoCard/MovieInfoCard";

interface HeroProps {
    movie: Models.MovieItem;
}

export const Hero: React.FC<HeroProps> = ({ movie }) => {
    return (
        <div className={styles.wrapper}>
            <img
                src={
                    movie.plprogram$thumbnails["orig-720x1280"]?.plprogram$url
                }
            />
            <div>
                <MovieInfoCard movie={movie} />
            </div>
        </div>
    );
};
