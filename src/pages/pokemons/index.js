import Head from "next/head";
import Link from "next/link";
import styles from '../../styles//Pokemons.module.scss'


export const getStaticProps = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30');
    const data = await response.json();

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
          props: {
            pokemons: data
          },
        };
}

const Pokemons = ({pokemons}) => {
  console.log(pokemons);
const { results } = pokemons;
    return (
      <>
      <Head>
        <title>Pokemons</title>
      </Head>
      
      <ul>
        {results && results.map(({name}) => {

          let str = name;
          const newName = str => str.charAt(0).toUpperCase() + str.slice(1);

          return (
            <li key={name} className={styles.list}>
            {newName(str)}  
            <Link className={styles.link} href={`/pokemons/${name}`}><button className={styles.btn}>Info</button></Link>
          </li>
          )
        })}
      </ul>
      </>
    );
};

export default Pokemons;

