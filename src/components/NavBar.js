
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.scss'
import Link from 'next/link';


const navigation = [
    { id: 1, title: 'Pokemons', path: '/pokemons' },
    { id: 2, title: 'Types', path: '/types' },
  ];

const NavBar = () => {
    const { pathname } = useRouter();
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link className={pathname === path ? styles.active : null} key={id} href={path}>
                        {title} <p className={styles.delimiter}> /</p>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;