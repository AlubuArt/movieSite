import React from "react";
import classNames from "classnames";
import { Container } from "../../04-layouts/Container/Container";
import { Heading } from "../../01-atoms/Heading";
import { Button } from "../../01-atoms/CTA/Button/Button";
import { Paragraph } from "../../01-atoms/Paragraph/Paragraph";
import styles from "./MovieInfoCard.module.css";

interface MovieInfoCardProps {
    movie: Models.MovieItem;
}

export const MovieInfoCard: React.FC<MovieInfoCardProps> = ({ movie }) => {
    const handleClick = () => {
        console.log("clicked!");
    };
    return (
        <div className={styles.MovieInfoCard}>
            <div className={styles.MovieCardTitle}>
                <Heading type={"h1"} tag={"h1"}>
                    {movie.title}
                </Heading>
            </div>
            <div className={styles.MovieCardDescription}>
                <Paragraph tag={"p"}>{movie.plprogram$descriptionLocalized?.en}</Paragraph>
            </div>
            <div className={styles.MovieCardButtons}>
                <Button onClick={handleClick} type={"primary"}>afspil</Button>
                <Button onClick={handleClick} type={"secondary"}>mere info</Button>
                <Button onClick={handleClick} type={"wishlist"}>+</Button>
            </div>
        </div>
    );
};
