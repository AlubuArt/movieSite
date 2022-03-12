import Head from 'next/head';
import { GetStaticProps, NextPage } from "next";
import {Hero} from '../ui/components/03-organisms/Hero';
import {Movie} from '../lib/movie';
import { Container } from '../ui/components/04-layouts/Container/Container';
import { GenreCarousel } from '../ui/components/03-organisms/GenreCarousel/GenreCarousel';



interface FrontPageProps {

}

const FrontPage: NextPage = () =>  {
  return (
    <Container >
      <Hero movie={Movie} />
      <GenreCarousel carouselItems={[Movie, Movie, Movie, Movie, Movie, Movie, Movie, Movie, Movie]} />
      
    </Container>
  )
}

export default FrontPage;
