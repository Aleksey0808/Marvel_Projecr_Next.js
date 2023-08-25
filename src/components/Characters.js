
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('#');
    const data = await response.json();

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