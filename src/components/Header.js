import NavBar from './NavBar'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.logoRed}>Pokemon</span> information portal
      </Link>
      <NavBar />
    </header>
  )
}

export default Header
