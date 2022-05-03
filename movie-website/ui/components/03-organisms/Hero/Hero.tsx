import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { MovieInfoCard } from '../../02-molecules/MovieInfoCard/MovieInfoCard';
import { Modal } from '../Modal/Modal';

interface HeroProps {
  movie: Models.MovieItem;
}

export const Hero: React.FC<HeroProps> = ({ movie }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  //Create a ref to pass the modal div
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setShowModal(false));

  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.Backdrop}
        src={movie.plprogram$thumbnails['orig-720x1280']?.plprogram$url}
      />
      <div className={styles.MovieInfoCardWrapper}>
        <MovieInfoCard movie={movie} handleModal={handleModal} />
      </div>
      {showModal ? (
        <div className={styles.ModalWrapper}>
          <div ref={modalRef}>
            <Modal isOpen={showModal} movie={movie} />
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
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
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
