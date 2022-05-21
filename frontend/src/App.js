import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import {ToastContainer} from 'react-toastify'

function App() {
  return (

    <>
     <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
