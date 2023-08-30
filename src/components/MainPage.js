import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import SearchPokemon from './SearchPokemon'

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Characters</title>
      </Head>
      <SearchPokemon />
    </>
  )
}

export default MainPage
