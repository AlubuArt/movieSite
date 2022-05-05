import React, { useEffect, useState } from 'react';
import { Heading } from '../../01-atoms/Heading';
import { Button } from '../../01-atoms/CTA/Button/Button';
import { Paragraph } from '../../01-atoms/Paragraph/Paragraph';
import styles from './MovieInfoCard.module.css';

interface MovieInfoCardProps {
  movie: Models.MovieItem;
  handleModal: () => void;
}

export const MovieInfoCard: React.FC<MovieInfoCardProps> = ({ movie, handleModal }) => {
  const [wishListItems, setWishListItems] = useState([]);

  const handleClick = () => {
    console.log('clicked!');
  };

  //Check if the movie is already in the wishlist.
  const checkIfItemExists = (arr, movie) => {
    if (arr.find((item) => item.id === movie.id)) {
      return true;
    }
  };

  const addToWishList = () => {
    if (checkIfItemExists(wishListItems, movie)) {
      console.log('item already in list');
      
    } else {
      wishListItems.push(movie);
      console.log('added movie to wishlist');
      localStorage.setItem('wishListItems', JSON.stringify(wishListItems))
    }

  };

  //check if there is a wishlist in the localstorage
  //if no list, make an empty list
  useEffect(() => {
    if (!localStorage.getItem('wishListItems')) {
      localStorage.setItem('wishListItems', JSON.stringify([]));
    }
  }, []);

  //when the list is accesible, get the item from the wishlist
  useEffect(() => {
    setWishListItems(JSON.parse(localStorage.getItem('wishListItems')));
  }, []);

  return (
    <div className={styles.MovieInfoCard}>
      <div className={styles.MovieCardTitle}>
        <Heading type={'h1'} tag={'h1'}>
          {movie.title}
        </Heading>
      </div>
      <div className={styles.dateGenre}>
        <div className={styles.releaseDate}>
          <Heading type={'h3'} tag={'h3'} fontWeight={'thin'}>
            {movie.plprogram$year}
          </Heading>
        </div>
        <div className={styles.releaseDate}>
          <Heading type={'h3'} tag={'h3'} fontWeight={'thin'}>
            -
          </Heading>
        </div>

        <div className={styles.genre}>
          <Heading type={'h3'} tag={'h3'} fontWeight={'thin'}>
            {movie.plprogram$tags[0].plprogram$title}
          </Heading>
        </div>
      </div>
      <div className={styles.MovieCardDescription}>
        <Paragraph tag={'p'}>{movie.plprogram$descriptionLocalized?.en}</Paragraph>
      </div>
      <div className={styles.MovieCardButtons}>
        <Button onClick={handleClick} type={'primary'}>
          afspil
        </Button>
        <Button onClick={handleModal} type={'secondary'}>
          mere info
        </Button>
        <Button onClick={addToWishList} type={'wishlist'}>
          +
        </Button>
      </div>
    </div>
  );
};
