import './Cart.css'
import { ClearCartIcon, CartIcon } from '../components/Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

function CartItem({ id, thumbnail, title, quantity, price, addToCart }) {
  return (
    <li key={id}>
      <img src={thumbnail} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
export function Cart() {
  const { clearCart, cart, addToCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
          ))}
        </ul>
        {cart.length > 0 && (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  )
}
