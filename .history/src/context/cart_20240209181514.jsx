import { createContext, useState, useReducer } from 'react'

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (action.type) {
    case 'ADD_TO_CART': {
      const isProductExistIdx = cart.findIndex((cart) => cart.id === product.id)
    }
  }
  return state
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const newCart = structuredClone(cart)

    if (isProductExistIdx >= 0) {
      newCart[isProductExistIdx].quantity += 1
      return setCart(newCart)
    }

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
