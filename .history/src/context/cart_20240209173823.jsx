import { createContext, useState, useReducer } from 'react'

export const CartContext = createContext()

const initialState = {[]}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const isProductExistIdx = cart.findIndex((cart) => cart.id === product.id)
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
