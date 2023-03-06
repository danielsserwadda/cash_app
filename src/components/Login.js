import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm'

function App() {
  let login = true
  return (
    <div className="container">
      <Header btnText='Register' login={login} />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
