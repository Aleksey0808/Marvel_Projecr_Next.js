
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=309dda4dc546766614178925997843a4');
    const data = await response.json();
    console.log(data);
    if (!data) {
      return {
        notFound: true
      };
    }

    return {
          props: {
            characters: data
          }
        };
}

const Characters = ({characters}) => {

    return (
      <>
      <Head>
        <title>Characters</title>
      </Head>
      <ul>
        {characters && characters.map(({id, title}) => (
          <li key={id}>
            <Link href={`/characters/${id}`}>{title}</Link>
          </li>
        ))}
        Characters
      </ul>
      </>
    );
};

export default Characters;