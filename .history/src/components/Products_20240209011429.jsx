import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products({ products }) {
  

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
                    isProductExist ? { backgroundColor: 'orange' } : { backgroundColor: 'white' }
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
