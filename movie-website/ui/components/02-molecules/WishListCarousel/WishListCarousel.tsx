import React, { useMemo } from 'react';
import { Carousel } from '../Carousel/Carousel';
import styles from './WishListCarousel.module.css';
import { WishListCarouselItem } from '../../01-atoms/WishListCarouselItem/WishListCarouselItem';
import { Heading } from '../../01-atoms/Heading';

interface WishListCarouselProps {
  carouselItems: Models.MovieItem[];
  removeFromWishList: (wishListItem: any) => void;
}

export const WishListCarousel: React.FC<WishListCarouselProps> = ({ carouselItems, removeFromWishList }) => {
  const wrappedChildren = useMemo(
    () =>
      carouselItems.map((carouselItem: Models.MovieItem, index: number) => {
        return <WishListCarouselItem key={index} carouselItem={carouselItem} removeFromWishList={removeFromWishList}/>;
      }),
    [carouselItems]
  );

  return (
    <div className={styles.WishListCarousel}>
      <div className={styles.WishListHeading}>
        <Heading tag={'h1'} type={'h1'}>
          My Wishlist
        </Heading>
      </div>
      <div className={styles.WishListCarousel}>
        <Carousel>{wrappedChildren}</Carousel>
      </div>
    </div>
  );
};
