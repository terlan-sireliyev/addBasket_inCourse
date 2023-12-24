import React from 'react'
import styles from './styles.module.css'
import { useBasket } from '../context/BasketContext'


const Header = () => {
    const {  state } = useBasket()

    return (


        <div className={styles.header}>
            <ul className={styles.navbar}>
                <li><h1>E-Commerce</h1></li>
                <li>Home </li>
                <li>Basket <span>{state.basket}</span></li>
            </ul>
        </div>
    )
}

export default Header