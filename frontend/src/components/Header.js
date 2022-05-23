import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import {RiPlayList2Fill} from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { reset as resetMovieInfo } from '../features/movieinfo/movieinfoSlice';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link onClick={()=> dispatch(resetMovieInfo())} to='/'>KinoList</Link>
      </div>
      <ul>
        {user ? (
          <>
          <li>
            <Link to='/watchlist' className='nav-btn'>
              <RiPlayList2Fill  size={30} /> 
            </Link>
          </li>
          <li>
            <button className='nav-btn' onClick={onLogout}>
              <FaSignOutAlt size={25} /> 
            </button>
          </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/signup'>
                <FaUser /> Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header