import Head from "next/head";
import Link from "next/link";
// import { getAllComics } from "../../services/services";

export const getStaticProps = async () => {
    const response = await fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=309dda4dc546766614178925997843a4');
    // const data = await getAllComics();
    const data = await response.json();
    console.log(data);

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
          props: {
            comics: data
          },
        };
}

const Comics = ({comics}) => {
console.log(comics);
    return (
      <>
      <Head>
        <title>Comics</title>
      </Head>
      <ul>
        {/* {comics && comics.map(({id, title}) => (
          <li key={id}>
            <Link href={`/comics/${id}`}>{title}</Link>
          </li>
        ))} */}
        comics
      </ul>
      </>
    );
};

export default Comics;