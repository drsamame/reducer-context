import { createContext, useReducer } from 'react'

export const CartContext = createContext()



export function CartProvider({ children }) {
  const { addToCart, removeFromCart, clearCart, state } = useCartReducer()
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
