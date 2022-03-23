import React from 'react';
import styles from './MovieCover.module.css';

interface MovieCoverProps {
    cover:string; 

}

export const MovieCover: React.FC<MovieCoverProps> = ({cover}) => {

    console.log(cover)
    return (
        <div className={styles.MovieCover}>
            <img src={cover}></img>
        </div>
    )
}