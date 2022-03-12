import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Container } from "../../ui/components/04-layouts/Container/Container";
import { MovieHero } from "../../ui/components/03-organisms/MovieHero/MovieHero";
import { Collection } from "../../ui/components/03-organisms/Collection/Collection";
import {Movie} from '../../lib/movie';

interface MoviePageProps {
    movie: Models.MovieItem;
    relatedMovies: Models.MovieItem[];
}

const MoviePage: NextPage<MoviePageProps> = ({ movie, relatedMovies }) => {
    return (
        <Container>
            <MovieHero movie={Movie} />
            <Collection collectionItems={[Movie, Movie]}/>
        </Container>
    );
};

export default MoviePage;
