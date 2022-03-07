import Head from 'next/head';
import { GetStaticProps, NextPage } from "next";
import {Header} from '../ui/components/02-molecules/Header/Header'

interface FrontPageProps {

}

const FrontPage: NextPage<FrontPageProps> = () =>  {
  return (
    <div>
      <Header navItems={[{text: 'Home', path: 'frontpage'}, {text: 'Genres', path: 'genrepage'}, {text: 'Wishlist', path: 'wishlist'}]} />

      <h1>hello world</h1>
     
        
    </div>
  )
}

export default FrontPage;
