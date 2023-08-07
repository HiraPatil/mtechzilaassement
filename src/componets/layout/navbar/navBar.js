import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import WithAuth from '../../auth/withAuth';

const Navbar = ()=> {
 const Navigate = useNavigate();
  const handleLogout = ()=>{
    Cookies.remove('userToken');
    Navigate('/login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            Timer Clock
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/git-user' className='nav-link '>Git User</Link>
              </li>
              <li className="nav-item">
                 <span className='nav-link ' style={{"cursor" : "pointer"}} onClick={()=>{
                  handleLogout();
                 }}>LogOut</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default WithAuth(Navbar);
