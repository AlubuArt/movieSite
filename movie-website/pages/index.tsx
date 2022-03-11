import Head from 'next/head';
import { GetStaticProps, NextPage } from "next";
import {Header} from '../ui/components/02-molecules/Header/Header';
import {Hero} from '../ui/components/03-organisms/Hero';
import {Movie} from '../lib/movie';
import { Container } from '../ui/components/04-layouts/Container/Container';
import { CarouselItem } from '../ui/components/02-molecules/CarouselItem /CarouselItem';
import { Carousel } from '../ui/components/03-organisms/Carousel/Carousel';


interface FrontPageProps {

}

const FrontPage: NextPage = () =>  {
  return (
    <Container >
      <Hero movie={Movie} />
      <Carousel title={'Action'} count={230} items={[Movie, Movie, Movie]}></Carousel>
      <Carousel title={'Action'} count={230} items={[Movie, Movie, Movie]}></Carousel>
      <Carousel title={'Action'} count={230} items={[Movie, Movie, Movie]}></Carousel>
      
    </Container>
  )
}

export default FrontPage;
