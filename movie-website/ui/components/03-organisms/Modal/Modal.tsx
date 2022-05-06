import React, { useEffect } from 'react';
import { Heading } from '../../01-atoms/Heading';
import { Paragraph } from '../../01-atoms/Paragraph/Paragraph';
import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  movie: Models.MovieItem;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, movie }) => {
  // TODO: Probaly check if this is sufficient. Make a default fallback video or meassage, if no video is present.
  const videoPlayer = (movie) => {
    if (movie.plprogramavailability$media.length > 1) {
      console.log(movie.plprogramavailability$media[1].plmedia$publicUrl);
      return movie.plprogramavailability$media[1].plmedia$publicUrl;
    } else {
      return '';
    }
  };

  const wrappedItems = (title) => {
    return movie.plprogram$credits
      .filter((item: any) => item.plprogram$creditType === title)
      .map((item: any) => {
        return <p className={styles.ListItems}>{item.plprogram$personName}</p>;
      });
  };
  return (
    <div className={styles.ModalWrapper}>
      <div className={styles.ModalContainer}>
        <div className={styles.ModalInfo}>
          <div className={styles.ModalInfoLeft}>
            <div className={styles.ModalTitle}>
              <Heading tag={'h2'} type={'h2'}>
                {movie.title}
              </Heading>
              <div className={styles.ReleaseYearAndGenre}>
                <div className={styles.ReleaseYear}>
                  <Heading tag={'h3'} type={'h3'} fontWeight={'thin'}>
                    {movie.plprogram$year}
                  </Heading>
                </div>
                <div className={styles.Genre}>
                  <Heading tag={'h3'} type={'h3'} fontWeight={'thin'}>
                    {movie.plprogram$tags[0].plprogram$title}
                  </Heading>
                </div>
              </div>
            </div>
            <div className={styles.ModalDescription}>
              <Paragraph tag={'p'}>{movie.plprogram$descriptionLocalized.en}</Paragraph>
            </div>
          </div>
          <div className={styles.ModalInfoRight}>
            <div className={styles.Director}>
              <div className={styles.Title}>
                <Heading tag={'h3'} type={'h3'}>
                  Director
                </Heading>
              </div>

              <div>{wrappedItems('director')}</div>
            </div>
            <div className={styles.Actors}>
              <div className={styles.Title}>
                <Heading tag={'h3'} type={'h3'}>
                  Actors
                </Heading>
              </div>
              {wrappedItems('actor')}
            </div>
          </div>
        </div>
        <div className={styles.ModalEmbedVideoPlayer}>
          <iframe
            className={styles.ResponsiveIframe}
            width="560"
            height="315"
            src={videoPlayer(movie)}
            title={movie.title}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
