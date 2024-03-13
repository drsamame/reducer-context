import './Footer.css'
export function Footer({ filters }) {
  return (
    <footer className='footer'>
      {JSON.stringify(filters)}
    </footer>
  )
}
