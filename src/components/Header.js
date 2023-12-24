import React, { useState } from 'react'
import styles from './styles.module.css'
import { useBasket } from '../context/BasketContext'


const Header = () => {
    const { state,show } = useBasket()
    return (


        <div className={styles.header}>
            <ul className={styles.navbar}>
                <li><h1>E-Commerce</h1></li>
                <li>Home </li>
                <li >Basket
                    {
                        show ? <span className={styles.countNavbar}>{state.basket}</span>:<span></span>
                    }
                </li>
            </ul>
        </div>
    )
}

export default Header