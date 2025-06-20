import { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.')
      return
    }
    alert('Registered successfully!')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input type="text" name="username" onChange={handleChange} /><br />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" onChange={handleChange} /><br />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" onChange={handleChange} /><br />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Register</button>
      </form>
    </div>
  )
}

export default Register
