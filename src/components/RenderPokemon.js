import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/PokemonInfo.module.scss'

const RenderPokemon = ({ pokemon }) => {
  const { name, abilities, weight } = pokemon || {}
  const { front_default } = pokemon.sprites || {}
  const src = front_default

  const newName = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  const pokemonAbilyty = abilities.map((ability) => ability.ability.name)
  const abilitysList = pokemonAbilyty.join('/')

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.name}>
          Name: <br /> {newName(name)}
        </h1>
        <p className={styles.abilities}>
          Abilitys: <br /> {abilitysList}
        </p>
        <p className={styles.weight}>Weight: {weight + 'Kg'}</p>
        <Image
          loader={() => src}
          src={src}
          width={300}
          height={300}
          alt={pokemon.name}
        ></Image>
      </div>
    </>
  )
}

export default RenderPokemon
