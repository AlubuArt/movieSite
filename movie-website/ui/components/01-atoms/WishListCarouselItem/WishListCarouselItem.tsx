import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './WishListCarouselItem.module.css';
import { makeSlugFromId } from '../../../../lib/tools';
import { Button } from '../CTA/Button/Button';

interface WishListCarouselItemProps {
  carouselItem: Models.MovieItem;
  removeFromWishList: (wishListItem: any) => void;
}

export const WishListCarouselItem: React.FC<WishListCarouselItemProps> = ({ carouselItem, removeFromWishList }) => {
  const slug = makeSlugFromId(carouselItem);

  return (
    <div className={styles.WishListCarouselItem}>
      <div className={styles.WishListImage}>
        <Link href={`/movies/${slug}`}>
          <img src={carouselItem.plprogram$thumbnails['orig-546x375']?.plprogram$url}></img>
        </Link>
      </div>

      <div className={styles.RemoveFromWishListButton}>
        <Button onClick={() => removeFromWishList(carouselItem)} type={'secondary'}>
          remove
        </Button>
      </div>
    </div>
  );
};
