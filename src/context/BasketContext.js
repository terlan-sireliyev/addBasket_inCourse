import React, { createContext, useContext, useReducer } from 'react'
const basketProvider = createContext();
const initialVal = {
    count: 1,
    price: 5,
    basket: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { count: action.payload }
        case 'extract':
            return { count: action.payload }
        case 'addBasket':
            return {...state, basket: state.count}
        default:
            return state
    }
}
const BasketContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialVal)

    const addBasket = (e) => {
        e.preventDefault()
        dispatch({ type: 'addBasket', payload:state.basket})
    }



    const plus = (e) => {
        e.preventDefault()
        dispatch({ type: 'add', payload: state.count + 1 })
    }
    const minus = (e) => {
        e.preventDefault()
        dispatch({ type: 'extract', payload: state.count === 1 ? state.count : state.count - 1 })

    }
    




    return (
        <basketProvider.Provider value={{ plus, minus, state, initialVal, addBasket }}>
            {children}
        </basketProvider.Provider>
    )
}

export default BasketContext

export const useBasket = () => {
    return useContext(basketProvider)
}