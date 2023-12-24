import React from 'react'
import styles from './styles.module.css'
// import { useApple } from '../context/Applecontext';

const Header = () => {
    // const { basket } = useApple();
    return (


        <div className={styles.header}>
            <ul className={styles.navbar}>
                <li><h1>E-Commerce</h1></li>
                <li>Home </li>
                <li>Basket <span></span></li>
            </ul>
        </div>
    )
}

export default Header