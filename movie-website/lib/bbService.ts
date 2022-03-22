/* const bbURL = "https://feed.entertainment.tv.theplatform.eu/";
 */

export const allMovies =
    "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=movie";

var axios = require("axios");

//find all genres of movies - only run this when looking for new genres. All current genres are hardcoded in movie.js
export const findAllGenres = async () => {
    const config = {
        method: "get",
        url: "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-1000&lang=en&byProgramType=movie",
        headers: {},
    };

    let filteredGenres = [];
    await axios(config)
        .then(function (response) {
            let entries = response.data.entries;
            let genres = [];
            entries.forEach((entry) => {
                try {
                    genres.push(entry.plprogram$tags[0].plprogram$title);
                } catch {}
            });
            filteredGenres = genres.filter(
                (item, index) => genres.indexOf(item) === index
            );
        })
        .catch(function (error) {
            console.log(error);
        });

    console.log(filteredGenres);

    return filteredGenres;
};
//TODO: filter the returned response, ih the call
export const getItemsFromGenre = async (
    genre: string,
    range: number,
    lang: string,
    type: string
) => {

    
    const config = {
        method: "get",
        url: `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-${range}&byTags=genre:${genre}&lang=${lang}&byProgramType=${type}&fields=title,description,guid,plprogram$tags,plprogram$credits,plprogram$runtime,plprogram$thumbnails,plprogramavailability$media,tdc$urlSlug,id `,
        headers: {},
    };

    let items: []

    await axios(config)
    .then(function(response) {
        items = response.data.entries;
    })
    return {items, genre}; 
};
