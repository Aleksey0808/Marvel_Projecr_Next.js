import Head from "next/head";
import Link from "next/link";
import styles from '../../styles//Types.module.scss'


export const getStaticProps = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const data = await response.json();

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
          props: {
            types: data
          },
        };
}

const Types = ({types}) => {
  console.log(types);
const { results } = types;
    return (
      <>
      <Head>
        <title>Types</title>
      </Head>
      
      <ul>
        {results && results.map(({name}) => {

          let str = name;
          const newName = str => str.charAt(0).toUpperCase() + str.slice(1);

          return (
            <li key={name} className={styles.list}>
            {newName(str)}  
            <Link className={styles.link} href={`/types/${name}`}><button className={styles.btn}>Info</button></Link>
          </li>
          )
        })}
      </ul>
      </>
    );
};

export default Types;

