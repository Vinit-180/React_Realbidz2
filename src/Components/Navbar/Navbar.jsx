import React from 'react'
import img from '../../logo.svg'
import { links } from '../../data'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    // <>
    <nav>
      <img src={img} alt="navbar img" />
      <div className="nav__container">
    <ul className='nav__link'>

      {
        links.map(({name,path},index)=>{
          return (<li key={index}>
                    <NavLink to={path}>
          {name}
                    </NavLink>  
          </li>)
        })
      }


      <li>  
        <button>Signup</button>
      </li>
      <li>
        <button>Login</button>
      </li>

    </ul>
      </div>
    </nav>
    // </>
  )
}

export default Navbar