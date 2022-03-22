import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { Hero } from "../ui/components/03-organisms/Hero";
import { Movie, MovieGenres } from "../lib/movie";
import { Container } from "../ui/components/04-layouts/Container/Container";
import { GenreCarousel } from "../ui/components/03-organisms/GenreCarousel/GenreCarousel";
import { useEffect, useMemo, useState } from "react";
import { findAllGenres, getItemsFromGenre } from "../lib/bbService";

interface FrontPageProps {
    content: [];
}

const FrontPage: NextPage<FrontPageProps> = ({ content }) => {
    const wrappedChildren = useMemo(
        () =>
            content.map(
                (
                    genre: { items: Models.MovieItem[]; genre: string },
                    key: number
                ) => {
                    return (
                        <div key={key}>
                            <GenreCarousel
                                carouselItems={genre.items}
                                title={genre.genre}
                            />
                        </div>
                    );
                }
            ),
        [content]
    );

    return (
        <Container>
            <Hero movie={Movie} />
            {wrappedChildren}
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const count = 10;

    const crime = await getItemsFromGenre("Crime", count, "en", "movie");
    const thriller = await getItemsFromGenre("Thriller", count, "en", "movie");
    const drama = await getItemsFromGenre("Drama", count, "en", "movie");
    const documentary = await getItemsFromGenre(
        "Documentary",
        count,
        "en",
        "movie"
    );
    const horror = await getItemsFromGenre("Horror", count, "en", "movie");
    const comedy = await getItemsFromGenre("Comedy", count, "en", "movie");
    const action = await getItemsFromGenre("Action", count, "en", "movie");
    const war = await getItemsFromGenre("War", count, "en", "movie");
    const scienceFiction = await getItemsFromGenre(
        "Science Fiction",
        count,
        "en",
        "movie"
    );

    const content = [
        crime,
        thriller,
        drama,
        documentary,
        horror,
        comedy,
        action,
        war,
        scienceFiction,
    ];
    return {
        props: { content },
    };
};

export default FrontPage;
