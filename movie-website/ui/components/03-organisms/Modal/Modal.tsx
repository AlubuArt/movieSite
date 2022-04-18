import React, { useEffect } from "react";
import { Heading } from "../../01-atoms/Heading";
import { Paragraph } from "../../01-atoms/Paragraph/Paragraph";
import styles from "./Modal.module.css";

export interface ModalProps {
    isOpen: boolean;
    movie: Models.MovieItem;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, movie }) => {
   

    const wrappedItems = (title) => {
        return (
        movie.plprogram$credits
            .filter((item: any) => item.plprogram$creditType === title)
            .map((item: any) => {
                return (
                    <p className={styles.ListItems}>
                        {item.plprogram$personName}
                    </p>
                );
            }));
    };
    return (
        <div className={styles.ModalWrapper}>
            <div className={styles.ModalInfo}>
                <div className={styles.ModalInfoLeft}>
                    <div className={styles.ModalTitle}>
                        <Heading tag={"h2"} type={"h2"}>
                            {movie.title}
                        </Heading>
                    </div>
                    <div className={styles.ModalDescription}>
                        <Paragraph tag={"p"}>{movie.plprogram$descriptionLocalized.en}</Paragraph>
                    </div>
                </div>
                <div className={styles.ModalInfoRight}>
                    <div className={styles.Director}>
                        <Heading tag={"h3"} type={"h3"}>
                            Director
                        </Heading>
                        {wrappedItems('director')}
                    </div>
                    <div className={styles.Actors}>
                        <Heading tag={"h3"} type={"h3"}>
                            actors
                        </Heading>
                        {wrappedItems('actor')}
                    </div>
                </div>
            </div>
            <div className={styles.ModalEmbedVideoPlayer}></div>
        </div>
    );
};
