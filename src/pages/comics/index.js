import Head from "next/head";
import Link from "next/link";

// export const getStaticProps = async () => {
//     const response = await fetch('#');
//     const data = await response.json();

//     if (!data) {
//       return {
//         notFound: true
//       };
//     }

//     return {
//           props: {
//             comics: data
//           }
//         };
// }

const Comics = ({comics}) => {

    return (
      <>
      <Head>
        <title>Comics</title>
      </Head>
      <ul>
        {comics && comics.map(({id, title}) => (
          <li key={id}>
            <Link href={`/comics/${id}`}>{title}</Link>
          </li>
        ))}
        comics
      </ul>
      </>
    );
};

export default Comics;