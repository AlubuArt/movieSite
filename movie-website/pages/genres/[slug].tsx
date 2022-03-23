import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { GenreHero } from "../../ui/components/03-organisms/GenreHero/GenreHero";
import { Container } from "../../ui/components/04-layouts/Container/Container";
import { Collection } from "../../ui/components/03-organisms/Collection/Collection";
import { getItemsFromGenre } from "../../lib/bbService";

interface GenrePageProps {
    genreItems:Models.GenreItem;
}

const GenrePage: NextPage<GenrePageProps> = ({ genreItems }) => {
    console.log(genreItems)

    return (
        <Container>
            <GenreHero carouselItems={genreItems.items} />
            <Collection collectionItems={genreItems.items} />
        </Container>
    );
};

//Props is loaded serverside on every page request, as it needs to load dynamic content
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const count = 10;
    const genreItems = await getItemsFromGenre(
        params?.slug,
        count,
        "en",
        "movie"
    );


    return { props: { genreItems } };
};

export default GenrePage;
