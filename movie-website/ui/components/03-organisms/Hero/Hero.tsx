import React from "react";
import classNames from "classnames";
import styles from "./Hero.module.css";
import { Container } from "../../04-layouts/Container/Container";
import { MovieInfoCard } from "../../02-molecules/MovieInfoCard/MovieInfoCard";
import Img from "next/image";
import heroImage from "../../../../../images/avengers-endgame_appfeatured.jpeg";

interface HeroProps {
    movie: Models.MovieItem;
}

export const Hero: React.FC<HeroProps> = ({ movie }) => {
    return (
        <div className={styles.wrapper}>
            <img
                src={
                    "https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/973/160/avengers-endgame_appfeatured.jpg"
                }
           />
            <div >
                <MovieInfoCard movie={movie} />
            </div>
        </div>
    );
};
