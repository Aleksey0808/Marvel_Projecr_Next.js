import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles//Types.module.scss'
import icon from '../../../public/iconTypes.json'
import Image from 'next/image'

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/type/')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      types: data,
    },
  }
}

const Types = ({ types }) => {
  // console.log(types);
  const { results } = types
  return (
    <>
      <Head>
        <title>Types</title>
      </Head>

      <ul className={styles.list}>
        {results &&
          results.map(({ name }) => {
            let str = name
            const newName = (str) => str.charAt(0).toUpperCase() + str.slice(1)
            // console.log(str)
            // console.log(newName(str) === icon.src)

            return (
              <li key={name} className={styles.item}>
                {newName(str)}
                {icon.map(({ src, name }) => {
                  // console.log(src)
                  if (name === newName(str)) {
                    return (
                      <Image
                        key={src}
                        src={src}
                        width={150}
                        height={150}
                        alt={name}
                      />
                    )
                  }
                })}
                <Link className={styles.link} href={`/types/${name}`}>
                  <button className={styles.btn}>Info</button>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Types
