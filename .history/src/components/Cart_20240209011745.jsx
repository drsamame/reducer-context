import './Cart.css'
import { ClearCartIcon, CartIcon } from '../components/Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

export function Cart() {
  const { cart, setCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={() =>
                      setCart(cart.filter((item) => item.id !== product.id))
                    }
                  >
                    <ClearCartIcon />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
