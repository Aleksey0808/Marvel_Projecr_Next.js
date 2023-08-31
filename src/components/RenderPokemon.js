import Head from 'next/head'
import Link from 'next/link'

const RenderPokemon = (pokemon) => {
  const { name, abilities, weight } = pokemon || {};
  const { front_default } = pokemon.sprites || {};
  console.log(pokemon)
  

  return (
    <>
     
      
    </>
  )
}

export default RenderPokemon
