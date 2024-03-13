import { CartContext } from '../context/cart'
import { useContext } from 'react'
export function useCart() {
  const context = useContext(CartContext)
  return { context }
}
