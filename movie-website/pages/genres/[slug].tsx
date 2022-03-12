import React from 'react';
import { GetStaticProps, NextPage } from "next";
import { GenreHero } from '../../ui/components/03-organisms/GenreHero/GenreHero';
import {Movie} from '../../lib/movie';
import { Container } from '../../ui/components/04-layouts/Container/Container';

interface GenrePageprops {

}


const GenrePage: NextPage<GenrePageprops> = () => {
    return (
        <Container >
            <GenreHero carouselItems={[Movie, Movie, Movie, Movie, Movie, Movie, Movie, Movie]}/>
        </Container>
    )}

export default GenrePage;