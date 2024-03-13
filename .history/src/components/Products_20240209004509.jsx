import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { CartContext } from '../context/cart'
import { useContext } from 'react'

export function Products({ products }) {
  const { cart, setCart } = useContext(CartContext)
  const addToCart = (product) => {
    const isProductExist = cart.findIndex((cart) => cart.id === product.id)
    const newCart = structuredClone(cart)

    if (isProductExist >= 0) {
      newCart[isProductExist].quantity += 1
      return setCart(newCart)
    }

    newCart.push({ ...product, quantity: 0 })
    setCart(newCart)
  }

  const removeFromCart = () => {}
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
                  onClick={() =>
                    isProductExist ? removeFromCart : addToCart(item)
                  }
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
