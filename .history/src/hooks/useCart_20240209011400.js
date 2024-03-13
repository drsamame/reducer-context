import { CartContext } from '../context/cart'
export function useCart(options) {
  const addToCart = (product) => {
    const isProductExistIdx = cart.findIndex((cart) => cart.id === product.id)
    const newCart = structuredClone(cart)

    if (isProductExistIdx >= 0) {
      newCart[isProductExistIdx].quantity += 1
      return setCart(newCart)
    }

    newCart.push({ ...product, quantity: 0 })
    setCart(newCart)
  }
  const removeFromCart = (product) => {
    const productIdx = cart.findIndex((cart) => cart.id === product.id)
    const newCart = structuredClone(cart)
    newCart.splice(productIdx, 1)
    setCart(newCart)
  }
  return { addToCart, removeFromCart }
}