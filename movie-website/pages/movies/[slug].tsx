import React from "react";
import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
    NextPage,
} from "next";
import { Container } from "../../ui/components/04-layouts/Container/Container";
import { MovieHero } from "../../ui/components/03-organisms/MovieHero/MovieHero";
import { Collection } from "../../ui/components/03-organisms/Collection/Collection";
import { Movie } from "../../lib/movie";
import { getMovie } from "../../lib/bbService";

interface MoviePageProps {
    movie: Models.MovieItem;
    relatedMovies: Models.MovieItem[];
}

const MoviePage: NextPage<MoviePageProps> = ({ movie, relatedMovies }) => {
    return (
        <Container>
            <MovieHero movie={movie} />
            {/*  <Collection collectionItems={[Movie, Movie]}/> */}
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const movie = await getMovie(params?.slug);
    return { props: { movie } };
};

export default MoviePage;
