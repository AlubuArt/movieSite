# Movie Site
A website for selling movies online.

## Project description
The website use a simple API which represents the middleware between the website and the data provider. The data provider is the owner of all the data, this includes movies, products, and media.

## Project requirements

### Functionality

- #### Frontpage showcasing the following genres (both for movies and series if available).
    - Action, Comedy, Thriller, War, Romance, Drama, Crime, Documentary, Horror
    - Each genre should include the genre title and the total count of movies.
    - Only showcase a few movies from the genre.
        - The movies should be presented with title and cover of the movie.
        - The user should be able to click on the movie and be redirected to a page showing all information about it.
        - **Optional**: A load more button which requests the next row of movies from the feed. (pagination)
    - A button next to the title which links the user to a complete list of all the movies.
- #### A page showcasing all movies from a genre.
    - Presenting the title and total count of movies.
    - Presenting all movies with their title and cover.
        - The user should be able to click the movie and be redirected to a page showing all information about it.
    - **Optional**: Pagination based presentation of all the movies. (For faster loading)
- #### A page presenting all information available about a movie.
    - The following data needs to be visible on the page:
        - Title
        - Description
        - Release year
        - Cover
        - Backdrop (Background-image for creating the proper atmosphere)
        - Genre
        - Actors and Directors
        - **Optional**: A embedded video player for playing the Youtube trailer attached to the movie
        - **Add on**: Show related movies
    - The user should be allowed to add and delete movies from his wishlist.
    - **Hint**: Permanent persistence is not required, but would of course be optimal. Saving the list in session is acceptable.
- #### A page presenting all movies on the users wishlist.
    - Presenting all movies with their title and cover.
        - The user should be able to click the movie and be redirected to a page showing all information about it.
    - The user should be allowed to remove movies from his wishlist.
    - **Optional**: Movies disappear from the list without a refresh after deleting the movie.

### Design
The following represents general design guidelines. Furthermore, it is encouraged to be creative and innovative.
- The website is intended for everyone. A colorful and playful design would therefore fit the purpose.
- The website needs to be responsive. Mobile and tablets are a big part of the visitors.

## Product Backlog

- [X] Gather requirements and research project - 1/2/3 = 2

- [X] Project description and estimation - 1/1/2 = 1,3

- [X] Figma mockup of website - 2/3/4 = 3

- [X] Set up dev environment - 1/1/2 = 1,3

- [X] Frontpage showcasing genres - 1/3 /5 = 3

- [X] Genre page showing all movies from a gerne - 1/2/3 = 2

- [X] Movie page - showing all information about a movie - 1/2/4 = 2,3

- [ ] Service layer - API calls - 2/3/5 = 3,3

- [ ] Wishlist page - showing all movies from user wishlist - 2/3/5 = 3,3

- [ ] Design/styling in Tailwind CSS - 5/8/11 = 6

- [ ] Bug fixes, refactoring, adding additional features - 5/10/18 = 11

Total 20/35/57 = 37,3

* Backlog Items are estimated with [three-point estimation](https://en.wikipedia.org/wiki/Three-point_estimation) 

## Product Tech
The project will be build with Create-Next-App ([NextJs framework](https://nextjs.org/)) and TypeScript. 
NextJS is a great way to build an MVP fast, and further more it offers a short page load time because of its static nature, but still offers the hybrid of SSR and SSG.
NextJS is a good choice for this project because: 
- It requires zero config
- comes with out of the box TypeScript support
- has automatic image optimization
- high data security and SEO effeciency. 

The data for the website comes from a middleware service hosted at Postman - it fetch data from feed.entertainment.tv.theplatform and returns a JSON object as response. (Look in the project wiki for response examples)

[Github](https://www.github.com) will be used as code hosting platform, and [Vercel](https://www.vercel.com) will be used for deploying the website. 


## Resources
[NextJs framework](https://nextjs.org/) - React framework

[Github](https://www.github.com) - repo

[Vercel](https://www.vercel.com) - deployin and hosting

[MyHours](https://www.myHours.com) - Time tracking service

[Figme](https://www.figma.com/file/gXmVXnRIUWOJg6STsF318u/movieWebsite?node-id=1%3A2) - Mock ups and design system for the website



## Project Wiki

