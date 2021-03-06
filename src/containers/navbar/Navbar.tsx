import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginContext from '../../contextos/LoginContext'
import './navbar.css'

const Navbar = () => {
    const {logout} = useContext(LoginContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink exact activeClassName="my-active" className="navbar-brand" to="/login">Login</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName="my-active" className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
              </li>
    
              <li className="nav-item">
                <button onClick={e=>logout()}>Logout</button>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>  
    )
}

export default Navbar
