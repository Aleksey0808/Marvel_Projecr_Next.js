import Head from "next/head";
import PokemonInfo from "@/components/PokemonInfo";


export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
    
  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {pokemon: data},
  }
}

const Pokemon = ({pokemon}) => {
    console.log(pokemon)
    return (
        <>
        <Head>
          <title>Pokemon</title>
        </Head>
     <PokemonInfo pokemon={pokemon} />
      </>
    )
   
}

export default Pokemon