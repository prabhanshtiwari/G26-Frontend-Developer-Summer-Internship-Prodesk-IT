import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#0A2E75', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '10px', color: '#fff' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '10px', color: '#fff' }}>Login</Link>
      <Link to="/register" style={{ color: '#fff' }}>Register</Link>
    </nav>
  )
}

export default Navbar
