import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import Heading from '@/components/Heading'
import styles from '../styles/404.module.scss'

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className={styles.wrapper}>
        <p className={styles.textError}>There is no such page!</p>
      </div>
    </>
  )
}

export default Error
