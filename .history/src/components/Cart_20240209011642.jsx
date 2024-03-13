import './Cart.css'
import {
  ClearCartIcon,
  CartIcon
} from '../components/Icons'
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
          <li>
            {/*  <img src={thumbnail} /> */}
            <div>
              <strong>titulo</strong> - $122
            </div>
            <footer>
              <small>Qty: 12</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
