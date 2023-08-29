import Link from "next/link";
import styles from "../styles/TypesInfo.module.scss";
import { useRouter } from 'next/navigation';

const TypesInfo = ({type}) => {
    // console.log(type);
    const router = useRouter();

    return (
        <>
        <button className={styles.btn} type="button" onClick={() => router.back()}> &#8592; Go back</button>   
        {/* <div className={styles.container}> */}
            <ul className={styles.list}>
            {type && type.map(({pokemon}) => {
                console.log(pokemon)
                return(
                    <Link className={styles.link} href={`/pokemons/${pokemon.name}`}><li key={pokemon.name}>{pokemon.name}</li></Link>
                    )
            })}
            </ul>
        </>
    )
};

export default TypesInfo;