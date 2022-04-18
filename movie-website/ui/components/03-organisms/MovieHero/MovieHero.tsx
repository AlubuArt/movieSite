import React, { useEffect, useRef, useState } from "react";
import { MovieCover } from "../../01-atoms/Cover/MovieCover";
import { MovieInfoCard } from "../../02-molecules/MovieInfoCard/MovieInfoCard";
import { Modal } from "../Modal/Modal";
import styles from "./MovieHero.module.css";

interface MovieHeroProps {
    movie: Models.MovieItem;
}

export const MovieHero: React.FC<MovieHeroProps> = ({ movie }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    //Create a ref to pass the modal div
    const modalRef = useRef();
    useOnClickOutside(modalRef, () => setShowModal(false));

    const handleModal = () => {
        setShowModal(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.MovieHeroWrapper}>
                

                <img
                    className={styles.Backdrop}
                    src={
                        movie.plprogram$thumbnails["orig-720x1280"]
                            ?.plprogram$url
                    }
                />

                <MovieInfoCard movie={movie} handleModal={handleModal} />

                <div className={styles.MovieHeroCover}>
                    <MovieCover
                        cover={
                            movie.plprogram$thumbnails["orig-546x375"]
                                ?.plprogram$url
                        }
                    />
                </div>
            </div>{showModal ? (
                    <div className={styles.ModalWrapper}>
                        <div  ref={modalRef}>
                            <Modal isOpen={showModal} movie={movie}/>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
        </div>
    );
};

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}
