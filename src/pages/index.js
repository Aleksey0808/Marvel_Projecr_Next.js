import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import RenderPokemon from '@/components/RenderPokemon'
import { useState } from 'react'
import SearchPokemon from '@/components/SearchPokemon'

const Home = () => {
  const [query, setQuery] = useState();

  const onSubmit = (data) => {
    setQuery(data);
  };
  console.log(query)

  return (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <SearchPokemon onSubmit={onSubmit} />
    <RenderPokemon pokemon={query} />
  </div>
)
}


export default Home
