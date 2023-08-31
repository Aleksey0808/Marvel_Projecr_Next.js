import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import RenderPokemon from '@/components/RenderPokemon'
import React, { useState } from 'react'
import SearchPokemon from '@/components/SearchPokemon'

const Home = () => {
  const [query, setQuery] = useState(null)

  const onSubmit = (data) => {
    setQuery(data)
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <SearchPokemon onSubmit={onSubmit} />
      {!query ? null : <RenderPokemon pokemon={query} />}
    </div>
  )
}

export default Home
