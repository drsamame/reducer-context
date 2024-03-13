import './Cart.css'
import {
  ClearCartIcon,
  RemoveFromCartIcon,
  CartIcon
} from '../components/Icons'
import { useId } from 'react'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart } = useState()
  return (
    <>
      {' '}
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li>
              <img src={thumbnail} alt={title} />
              <div>
                <strong>{title}</strong> - ${price}
              </div>

              <footer>
                <small>Qty: {quantity}</small>
                <button onClick={addToCart}>+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
