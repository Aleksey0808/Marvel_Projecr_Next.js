import Image from 'next/image'
import styles from '../styles/PokemonInfo.module.scss'
import { useRouter } from 'next/navigation'

const PokemonInfo = ({ pokemon }) => {
  const router = useRouter()
  const { name, abilities, weight } = pokemon || {}
  const { front_default } = pokemon.sprites || {}
  const src = front_default

  const newName = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  const pokemonAbilyty = abilities.map((ability) => ability.ability.name)
  const abilitysList = pokemonAbilyty.join('/')

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => router.back()}
        >
          {' '}
          &#8592; Go back
        </button>
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
      </div>
    </>
  )
}

export default PokemonInfo
