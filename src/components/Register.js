import Footer from './Footer'
import Header from './Header'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div className='container'>
        <Header btnText='Login' />
        <RegisterForm />
        <Footer />
    </div>
  )
}

export default Register