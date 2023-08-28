import Image from "next/image";
import styles from "../styles/TypesInfo.module.scss";
import { useRouter } from 'next/navigation';

const TypesInfo = ({type}) => {
    // console.log(type);
    const router = useRouter();
    console.log(type);
  
    // const { front_default } = type.sprites || {};
    // const src = front_default;

    // const newName = str => str.charAt(0).toUpperCase() + str.slice(1);
    // const typeAbilyty = abilities.map(ability => ability.ability.name)
    return (
        <>
        <button className={styles.btn} type="button" onClick={() => router.push('/types')}> === Go back</button>   
        {/* <div className={styles.container}> */}
            <ul className={styles.list}>
            {type && type.map(({pokemon}) => {
                <li key={pokemon.name}>{pokemon.name}</li>
            })}
            </ul>
        {/* <h1 className={styles.name}>Name: {newName(name)}</h1> */}
        {/* <p>Abilitys: {typeAbilyty}</p> */}
        {/* <p>Weight: {weight}</p> */}
        {/* <Image
        loader={() => src} src={src} width={300} height={300} alt={type.name}
        ></Image> */}
       {/* </div> */}
        </>
    )
};

export default TypesInfo;