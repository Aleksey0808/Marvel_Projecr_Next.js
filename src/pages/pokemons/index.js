import Head from "next/head";
import Link from "next/link";
import styles from '../../styles//Pokemons.module.scss'
import { useState } from "react";

export const getStaticProps = async () => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=35&offset=5`);

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
  const [morePokemon, setMorePokemon] = useState(pokemons.results);
  const [limit, setLimit] = useState(15);
 
  console.log(morePokemon)

const loadMore = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=5`);
    const data = await response.json();
    setLimit(prevState => prevState + 5);
    
    setMorePokemon(data.results)
}
    return (
      <>
      <Head>
        <title>Pokemons</title>
      </Head>
      
      <ul className={styles.list}>

        {morePokemon && morePokemon.map(({name}) => {

          let str = name;
          const newName = str => str.charAt(0).toUpperCase() + str.slice(1);

          return (
            <li key={name} className={styles.item}>
            {newName(str)}  
            <Link className={styles.link} href={`/pokemons/${name}`}><button className={styles.btn}>Info</button></Link>
          </li>
          )
        })}
      </ul>
      <button className={styles.bthLoadMore} type="button" onClick={() => loadMore()}>Load More</button>
      </>
    );
};


export default Pokemons;

