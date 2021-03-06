import React from "react";
import styles from "./MovieCover.module.css";

interface MovieCoverProps {
    cover: string;
}

export const MovieCover: React.FC<MovieCoverProps> = ({ cover }) => {
    return (
        <div className={styles.MovieCover}>
            <img className={styles.MovieCoverImage}src={cover}></img>
        </div>
    );
};
