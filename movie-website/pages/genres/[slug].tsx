import React from 'react';
import { GetStaticProps, NextPage } from "next";

interface GenrePageprops {

}


const GenrePage: NextPage<GenrePageprops> = () => {
    return (
        <div>
            <h1>genrePage</h1>
        </div>
    )
}

export default GenrePage;