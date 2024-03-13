import './Footer.css'
export function Footer({ filters }) {
  return (
    <footer className='footer'>
      {JSON.stringify(filters)}
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
