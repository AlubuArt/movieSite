import React, { useEffect, useState } from 'react';
import { WishListCarousel } from '../ui/components/02-molecules/WishListCarousel/WishListCarousel';
import { Container } from '../ui/components/04-layouts/Container/Container';

export interface WishlistProps {}

const WishListPage: React.FC<WishlistProps> = () => {
  const [wishListItems, setWishListItems] = useState(():any[]=>JSON.parse(localStorage.getItem('favorites')||'[]'));

  

  const removeFromWishList = (wishListItem) => {
    let updatedWishList = wishListItems.filter((item) => item.id !== wishListItem.id);
    setWishListItems(updatedWishList)
    localStorage.setItem('wishListItems', JSON.stringify(updatedWishList));
  };

  useEffect(() => {
    setWishListItems(JSON.parse(localStorage.getItem('wishListItems')));
  }, []);

  return (
    <Container>
      <WishListCarousel carouselItems={wishListItems} removeFromWishList={removeFromWishList} />
    </Container>
  );
};

export default WishListPage;
