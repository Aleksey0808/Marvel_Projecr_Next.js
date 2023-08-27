import Image from "next/image";
import styles from "../styles/PokemonInfo.module.scss";

const PokemonInfo = ({pokemon}) => {
    console.log(pokemon);
    const { name, abilities, weight } = pokemon || {};
    const { front_default } = pokemon.sprites || {};
    const src = front_default;

    const newName = str => str.charAt(0).toUpperCase() + str.slice(1);
    const pokemonAbilyty = abilities.map(ability => ability.ability.name)
    return (
        <>
        <div className={styles.container}>
        <h1 className={styles.name}>Name: {newName(name)}</h1>
        <p>Abilitys: {pokemonAbilyty}</p>
        <p>Weight: {weight}</p>
        <Image
        loader={() => src} src={src} width={300} height={300} alt={pokemon.name}
        ></Image>
       </div>
        </>
    )
};

export default PokemonInfo;