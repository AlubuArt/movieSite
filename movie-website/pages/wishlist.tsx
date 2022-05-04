import React, { useState } from 'react';
import { WishListCarousel } from '../ui/components/02-molecules/WishListCarousel/WishListCarousel';
import { Container } from '../ui/components/04-layouts/Container/Container';

export interface WishlistProps {}

const WishListPage: React.FC<WishlistProps> = () => {
  const [wishListItems, setWishListItems] = useState<any>([1, 2, 4, 6, 7, 7]);

  return (
    <Container>
      <WishListCarousel carouselItems={wishListItems} />
    </Container>
  );
};

export default WishListPage;
