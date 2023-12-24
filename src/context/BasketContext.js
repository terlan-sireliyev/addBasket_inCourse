import React, { createContext, useContext, useReducer,useState } from 'react'
const basketProvider = createContext();
const initialVal = {
    count: 1,
    price: 5,
    basket: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, count: action.payload }
        case 'extract':
            return {...state, count: action.payload }
        case 'addBasket':
            return {...state, basket: state.count}
        default:
            return state
    }
}
const BasketContext = ({ children }) => {
    const [show,setShow] = useState(false)

    const [state, dispatch] = useReducer(reducer, initialVal)
    const plus = (e) => {
        e.preventDefault()
        dispatch({ type: 'add', payload: state.count + 1 })
    }
    const minus = (e) => {
        e.preventDefault()
        dispatch({ type: 'extract', payload: state.count === 1 ? state.count : state.count - 1 })
    }
      const addBasket = (e) => {
        e.preventDefault()
        dispatch({ type: 'addBasket', payload:state.basket})
        setShow(true)
    }
    return (
        <basketProvider.Provider value={{ plus, minus, state, initialVal, addBasket,show,setShow }}>
            {children}
        </basketProvider.Provider>
    )
}

export default BasketContext

export const useBasket = () => {
    return useContext(basketProvider)
}