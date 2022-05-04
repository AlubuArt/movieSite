import Link from 'next/link';
import React from 'react';
import styles from './WishListCarouselItem.module.css';
import { makeSlugFromId } from '../../../../lib/tools';
import { Button } from '../CTA/Button/Button';

interface WishListCarouselItemProps {
  carouselItem: Models.MovieItem;
}

export const WishListCarouselItem: React.FC<WishListCarouselItemProps> = ({ carouselItem }) => {
  /* const slug = makeSlugFromId(carouselItem); */

  //TODO:  remove item from wish list
  const handleClick = () => {};

  return (
    <Link href={`/movies/`}>
      <div className={styles.WishListCarouselItem}>
        <div className={styles.WishListImage}>
          <img
            src={'https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/959/40/Spider_Man_No_Way_Home_Poster.jpg'}
          ></img>
        </div>

        <div className={styles.RemoveFromWishListButton}>
          <Button onClick={handleClick} type={'secondary'}>
            remove
          </Button>
        </div>

        {/* <img
                    src={
                        carouselItem.plprogram$thumbnails["orig-546x375"]?.plprogram$url
                    }
                ></img> */}
      </div>
    </Link>
  );
};
