import React from "react";
import classNames from "classnames";
import { Container } from "../../04-layouts/Container/Container";
import { Heading } from "../../01-atoms/Heading";
import { Button } from "../../01-atoms/CTA/Button/Button";
import { Paragraph } from "../../01-atoms/Paragraph/Paragraph";

interface MovieInfoCardProps {
    movie: Models.MovieItem;
}

export const MovieInfoCard: React.FC<MovieInfoCardProps> = ({
    movie = {
        title: "Avengers: Endgame",
        description:
            "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanoss actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
    },
}) => {
    const handleClick = () => {
        console.log("clicked!");
    };
    return (
        <Container>
            <div>
                <Heading type={"h1"} tag={"h1"}>
                    {movie.title}
                </Heading>
            </div>
            <div>
                <Button onClick={handleClick}>afspil</Button>
                <Button onClick={handleClick}>mere info</Button>
            </div>
            <div>
                <Paragraph tag={"p"}>{movie.description}</Paragraph>
            </div>
        </Container>
    );
};
