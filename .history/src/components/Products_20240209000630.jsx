import './Products.css'
import { AddToCartIcon } from './Icons'
import { CartContext } from '../context/cart'
import { useContext } from 'react'

export function Products({ products }) {
  const { cart, setCart } = useContext(CartContext)
  const addToCart = (product) => {
    const newCart = structuredClone(cart)
    newCart.push(product)
    setCart(newCart)
  }
  return (
    <main className='products'>
      <ul>
        {products?.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <div>
                <button onClick={() => addToCart(item)}>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
