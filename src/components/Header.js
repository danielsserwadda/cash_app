import Button from './Button'
import { Link } from 'react-router-dom'

const Header = ({ title, btnText, login }) => {
  return (
    <header className='header'>
        {/* <h1>{ title }</h1> */}
        <div>
            <img src={process.env.PUBLIC_URL+"logo512.png"} />
        </div>
        <Link to={ login ? '/register' : '/login' }>
          <Button btnText={btnText} />
        </Link>
    </header>
  )
}

Header.defaultProps = {
    title: 'Cash App',
}

export default Header