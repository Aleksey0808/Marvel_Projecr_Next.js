import NavBar from "./NavBar";
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div><p><span className={styles.logo}>Marvel</span> information portal</p></div>
            <NavBar />
        </header>
    );
};

export default Header;