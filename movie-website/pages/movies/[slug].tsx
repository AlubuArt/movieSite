import React from "react";
import {
    GetServerSideProps,
    NextPage,
} from "next";
import { Container } from "../../ui/components/04-layouts/Container/Container";
import { MovieHero } from "../../ui/components/03-organisms/MovieHero/MovieHero";
import { getMovie } from "../../lib/bbService";

interface MoviePageProps {
    movie: Models.MovieItem;
    relatedMovies: Models.MovieItem[];
}

const MoviePage: NextPage<MoviePageProps> = ({ movie, relatedMovies }) => {
    return (
        <Container>
            <MovieHero movie={movie} />
            {/*This is for related movies */}
            {/*  <Collection collectionItems={[Movie, Movie]}/> */}
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const movie = await getMovie(params?.slug);
    return { props: { movie } };
};

export default MoviePage;
