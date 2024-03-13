import './Cart.css'
import {
  ClearCartIcon,
  RemoveFromCartIcon,
  CartIcon
} from '../components/Icons'
import { useId } from 'react'

export function Cart() {
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            /* <img src={thumbnail} /> */
            <div>
              <strong>titulo</strong> - $122
            </div>
            <footer>
              <small>Qty: 12</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
