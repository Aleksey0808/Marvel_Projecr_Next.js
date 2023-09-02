import Link from 'next/link'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.text}>
        © 2023 All rights reserved Developed a project:{' '}
        <Link
          className={styles.developer}
          href="https://github.com/Aleksey0808"
        >
          Aleksey
        </Link>
        and
        <Link
          className={styles.developer}
          href="https://github.com/KonstantinYevchuk"
        >
          Konstantin
        </Link>
      </div>
    </footer>
  )
}

export default Footer
