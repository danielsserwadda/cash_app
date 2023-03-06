import Header from './Header'
import Footer from './Footer'

const Landing = () => {
    let userName = 'Daniel'
  return (
    <div className='container' style={home}>
        <Header btnText='Logout' />
        <div style={{ background: '#f3f3f3', color: '#000', padding: '5px', textAlign: 'center' }}>
            <h4>Hi {userName}</h4>
        </div>
        <p style={ lStyle }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit, commodi nostrum similique repellat dolore!</p>
        <input type='submit' value='Apply for a loan' className='task btn-block' />
        <input type='submit' value='Check for loan balance' className='task btn-block' />
        <input type='submit' value='Repay my loan' className='task btn-block' />
        <Footer />
    </div>
  )
}

const home = {
    overflow: 'hidden',
}

const lStyle = {
    margin: '25px 0',
    padding: '6px 10px',
}

export default Landing