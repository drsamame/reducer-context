import { FiltersContext } from '../context/filters'
// import { CartContext } from '../context/cart'
import './Footer.css'
import { useContext } from 'react'
export function Footer() {
  const { filters } = useContext(FiltersContext)
  // const { cart } = useContext(CartContext)
  return <footer className='footer'>{JSON.stringify(filters)}</footer>
}
