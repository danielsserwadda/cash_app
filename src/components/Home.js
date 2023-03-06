import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='container' style={home}>
        <div style={{ textAlign: 'center', margin: '12px 0' }} >
            <img src={process.env.PUBLIC_URL+"logo512.png"} />
        </div>
        <p style={ pStyle }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit, commodi nostrum similique repellat dolore!</p>
        <Link to='/login' style={{ textDecoration: 'none' }} >
            <input type='submit' value='Sign Up | Sign In' className='btn btn-block' />
        </Link>
        <p style={ pStyle }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit, commodi nostrum similique repellat dolore!</p>
        <Footer />
        <div className='task'>
            <p style={ devStyle }>iFC Inc. | Netpix Media UG | Papa Daniel</p>
        </div>
    </div>
  )
}

const home = {
    overflow: 'hidden'
}

const pStyle = {
    margin: '25px 0',
    padding: '6px 10px',
}

const devStyle = {
    fontFamily: 'Just Another Hand',
    textAlign: 'center',
    fontSize: '25px'
}

export default Home