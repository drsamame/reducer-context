import './Products.css'
import { AddToCartIcon } from './Icons'
import { CartContext } from '../context/cart'
import { useContext } from 'react'

export function Products({ products }) {
  const { setCart } = useContext(CartContext)

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
                <button>
                  <AddToCartIcon onClick={setCart(item)} />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
