import { GetStaticProps, NextPage } from 'next';
import { Hero } from '../ui/components/03-organisms/Hero';
import { Container } from '../ui/components/04-layouts/Container/Container';
import { GenreCarousel } from '../ui/components/03-organisms/GenreCarousel/GenreCarousel';
import { useMemo, useState } from 'react';
import { getItemsFromGenre, getMovie } from '../lib/bbService';

interface FrontPageProps {
  carouselContent: Models.GenreItem[];
  heroMovie: Models.MovieItem;
}

const FrontPage: NextPage<FrontPageProps> = ({ carouselContent, heroMovie }) => {
  //TODO: This is the beginning of the new implementation to make pagnation for the movies in the genres.
  //Use useSWR (https://swr.vercel.app/) for the clientside fetching of data
  /* const [crime, setCrime] = useState(carouselContent[0])
    const [testArr] = useState([crime]) */
  const wrappedChildren = useMemo(
    () =>
      carouselContent.map(
        (
          { ...genre },
          key
          /* items: Models.MovieItem[],
                    genre: string,
                    key: number */
        ) => {
          return (
            <div key={key}>
              <GenreCarousel carouselItems={genre.items} title={genre.genre} genrePage={genre.genre} />
            </div>
          );
        }
      ),
    [carouselContent]
  );

  console.log(heroMovie);

  return (
    <Container>
      <Hero movie={heroMovie} />
      {wrappedChildren}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const count = 10;

  const crime = await getItemsFromGenre('Crime', count, 'en', 'movie');
  const thriller = await getItemsFromGenre('Thriller', count, 'en', 'movie');
  const drama = await getItemsFromGenre('Drama', count, 'en', 'movie');
  const documentary = await getItemsFromGenre('Documentary', count, 'en', 'movie');
  const horror = await getItemsFromGenre('Horror', count, 'en', 'movie');
  const comedy = await getItemsFromGenre('Comedy', count, 'en', 'movie');
  const action = await getItemsFromGenre('Action', count, 'en', 'movie');
  const war = await getItemsFromGenre('War', count, 'en', 'movie');
  const scienceFiction = await getItemsFromGenre('Science Fiction', count, 'en', 'movie');

  const heroMovie = await getMovie('106608168011');

  const carouselContent = [crime, thriller, drama, documentary, horror, comedy, action, war, scienceFiction];

  return {
    props: { carouselContent, heroMovie },
  };
};

export default FrontPage;
