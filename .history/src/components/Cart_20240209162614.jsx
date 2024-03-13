import './Cart.css'
import { ClearCartIcon, CartIcon } from '../components/Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

function CartItem({ id, thumbnail, title, quantity, price }) {
  return (
    <li key={product.id}>
      <img src={product.thumbnail} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>Qty: {product.quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>
      </footer>
    </li>
  )
}
export function Cart() {
  const { addToCart, clearCart, cart } = useCart()
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
            <CartItem />
          ))}
        </ul>
        // eslint-disable-next-line multiline-ternary
        {cart.length > 0 ? (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        ) : null}
      </aside>
    </>
  )
}
