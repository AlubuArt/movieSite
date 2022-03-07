import React from 'react';
import classNames from "classnames";
import styles from './Heading.module.css';

interface HeadingProps {
    children: React.ReactNode;
    type: 'h1' | 'h2' | 'h3';
    tag: 'h1' | 'h2' | 'h3';

}

export const Heading: React.FC<HeadingProps> = ({children, tag, type}) => 
React.createElement(
    tag, 
    {className: classNames(styles.Heading, styles[`Heading___${type}`])},
    children
)
