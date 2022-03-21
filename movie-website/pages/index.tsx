import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { Hero } from "../ui/components/03-organisms/Hero";
import { Movie, MovieGenres } from "../lib/movie";
import { Container } from "../ui/components/04-layouts/Container/Container";
import { GenreCarousel } from "../ui/components/03-organisms/GenreCarousel/GenreCarousel";
import { useEffect, useMemo, useState } from "react";
import {
    findAllGenres,
    getGenreItems,
    getItemsFromGenre,
} from "../lib/bbService";

interface FrontPageProps {
    content: [];
}

const FrontPage: NextPage<FrontPageProps> = ({ content }) => {
    const [genres, setGenres] = useState(MovieGenres);

    const wrappedChildren = useMemo(
        () =>
            content.map(
                (item: { result: Models.MovieItem[]; genre: string }) => {
                    return (
                        <div>
                            <GenreCarousel
                                carouselItems={item.result}
                                title={item.genre}
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
    const count = 25;
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

    const allItems = [
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

    // const items = getGenreItems(MovieGenres, count, "en", "movie")

    return {
        props: { content: allItems },
    };
};

export default FrontPage;
