import Image from "next/image";
import styles from "../styles/PokemonInfo.module.scss";
import { useRouter } from 'next/navigation';

const PokemonInfo = ({pokemon}) => {
    console.log(pokemon);
    const router = useRouter();
    const { name, abilities, weight } = pokemon || {};
    const { front_default } = pokemon.sprites || {};
    const src = front_default;

    const newName = str => str.charAt(0).toUpperCase() + str.slice(1);
    const pokemonAbilyty = abilities.map(ability => ability.ability.name)
    return (
        <>
        <button className={styles.btn} type="button" onClick={() => router.back()}> &#8592; Go back</button>   
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