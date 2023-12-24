import React from 'react'
import { useBasket } from '../context/BasketContext'
import styles from './styles.module.css'
import img from './images/Alma.jpg'
export default function Basket() {
    const { plus, minus, state, initialVal, addBasket, setShow } = useBasket()
    const priceCommmon = state.count * initialVal.price
    const hideCount = () => {
        setShow(false)
    }
    return (
        <div>
            <div className={styles.allEkran} onClick={hideCount}></div>
            <div className={styles.card}>
                <img src={img} alt="" width={200} />
                <h3>Guba Apples</h3>
                <p>{priceCommmon > 0 ? priceCommmon : initialVal.price}$</p>
                <div className={styles.buttons}>
                    <button className={styles.buttonone} onClick={minus}>-</button>
                    <p>{state.count}</p>
                    <button className={styles.button} onClick={plus}>+</button>
                </div>
                <button className={styles.button} onClick={addBasket} >Add</button>
            </div>
        </div>
    )
}
