import './App.css';
import LoginRegister  from './pages/LoginRegister/loginRegister';
import Counter from './features/counter/Counter'
function App() {
  return (
    <div className="App">
      <div className='login-register-container'>
      <LoginRegister />
      </div>
    </div>
  );
}

export default App;
