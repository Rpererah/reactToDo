import styles from './Header.module.css';
import Logo from './../assets/rocket.svg';
export function Header(){
    
    return(
        <header className={styles.header__main}>
            <img src={Logo} className={styles.logotipo} alt="logotipo com formato de foguete" />
            <span className={styles.textColorOne}>to</span>
            <span className={styles.textColorTwo}>do</span>
        </header>
    )
}