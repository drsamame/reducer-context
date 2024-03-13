import { createContext, useState, useReducer } from 'react'

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const isProductExistIdx = state.findIndex((cart) => cart.id === id)
      if (isProductExistIdx >= 0) {
        const newCart = structuredClone(state)
        newCart[isProductExistIdx].quantity += 1
        return newCart
      }
      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART' : {
      const { id } = actionPayload
      return state.filter((el) => id !== el.id)
    }
    case 'CLEAR_CART': {
      return initialState
    }
  }
  return state
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {}

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((el) => product.id !== el.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
