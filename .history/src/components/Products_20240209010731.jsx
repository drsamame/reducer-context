import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { CartContext } from '../context/cart'
import { useContext } from 'react'

export function Products({ products }) {
  const { cart, setCart } = useContext(CartContext)
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

  return (
    <main className='products'>
      <ul>
        {products?.map((item) => {
          const isProductExist = cart.some((cart) => cart.id === item.id)
          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <div>
                <button
                  style={
                    isProductExist ? { backgroundColor: 'orange' } : { backgroundColor: 'blue' }
                  }
                  onClick={() =>
                    isProductExist ? removeFromCart(item) : addToCart(item)}
                >
                  {isProductExist ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
