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
    }
  }
  return state
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

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
