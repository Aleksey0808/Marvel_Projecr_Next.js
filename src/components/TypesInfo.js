import Link from 'next/link'
import styles from '../styles/TypesInfo.module.scss'
import { useRouter } from 'next/navigation'

const TypesInfo = ({ type }) => {
  // console.log(type);
  const router = useRouter()

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
      {type ? <h1 className={styles.error}>No Pokemons in this list</h1> : <ul className={styles.list}>
        {type &&
          type.map(({ pokemon }) => {
            const { name } = pokemon;
            let str = name;
            const newName = str => str.charAt(0).toUpperCase() + str.slice(1);

            return (
              <li key={name} className={styles.item}>{newName(str)}
              <Link
                key={name}
                className={styles.link}
                href={`/pokemons/${name}`}
              >
                
                <button className={styles.btn}>Info</button>
              </Link>
              </li>
            )
          })}
      </ul>}
      </div>
      
    </>
  )
}

export default TypesInfo
