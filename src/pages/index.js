import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import MainPage from '@/components/MainPage'

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <MainPage />
  </div>
)

export default Home
