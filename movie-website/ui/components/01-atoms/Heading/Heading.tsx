import React from "react";
import classNames from "classnames";
import styles from "./Heading.module.css";

interface HeadingProps {
    children: React.ReactNode;
    type: "h1" | "h2" | "h3" | "CarouselItem";
    tag: "h1" | "h2" | "h3";
    fontWeight?: "thin" | "regular" | "bold";
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    tag,
    type,
    fontWeight,
}) =>
    React.createElement(
        tag,
        {
            className: classNames(styles.Heading, [
                styles[`Heading___${type}`],
                styles[`font___weight___${fontWeight}`],
            ]),
        },
        children
    );
