import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <form className='add-form'>
        <div style={{ background: '#f3f3f3', color: '#000', padding: '5px', textAlign: 'center' }}>
            <h4>Sign in to your Account</h4>
        </div>
        <div className='form-control'>
            <label>Email: </label>
            <input type='text' placeholder='Enter your email here' />
        </div>
        <div className='form-control'>
            <label>Password: </label>
            <input type='password' placeholder='Enter password...' />
        </div>
        <div className='form-control form-control-check'>
            <label>Remember Me: </label>
            <input type='checkbox' />
        </div>
        <Link to='/landing' style={{ textDecoration: 'none' }} >
            <input type='submit' value='Login' className='btn btn-block' />
        </Link>
        
    </form>
  )
}

export default LoginForm