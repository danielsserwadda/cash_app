import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Landing from './components/Landing';
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
