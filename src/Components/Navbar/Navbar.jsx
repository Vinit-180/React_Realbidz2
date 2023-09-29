import React, { useEffect, useState } from 'react'
import img from '../../logo.svg'
import { links } from '../../data'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAccountCircleFill } from 'react-icons/ri'
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  let navigate=useNavigate();
  const [isUser,setIsUser]=useState("");
  const checkUser=()=>{
    const user=localStorage.getItem('user');
    console.log(user)
    if(user!=null)
    {
      setIsUser(true);
      console.log(1);
    }
    else
    {
      setIsUser(false);
    }
  }
  const signup=()=>{
    navigate("/signup");
  }
  const login=()=>{
    navigate("/login");
  }
  const logout=()=>{
    localStorage.removeItem('isuser')
    localStorage.removeItem('user');
    setIsUser(false);
    window.location.reload();
  }
  const [isNavShowing,setIsNavShowing]=useState(false);

  useEffect(()=>{
    checkUser();
  },[localStorage.getItem("user")]);

  return (
    // <>
    <nav>
      <div>
      </div>
      <div className="nav__container">
      {/* <img src={img} alt="navbar img" /> */}
    <ul className={`nav__link ${isNavShowing ? 'show__nav' : 'hide__nav'}`} >
    {/* onClick={()=>{setIsNavShowing((prev)=>!prev)}} */}
      {
        links.map(({name,path},index)=>{
          return (<li key={index}>
                    <NavLink
                     to={path}
                     className='item'
                     onClick={()=>{setIsNavShowing((prev)=>!prev)}} 
                    >{name}</NavLink>  

          </li>)
        })
        
      }
      {
        // isUser && (
          <li className="sellwithus">
              <NavLink
                     to='/sellwithus'
                     className='item'
                     onClick={()=>{setIsNavShowing((prev)=>!prev)}} 
                    >
          SellWithUs
                    </NavLink>  
          </li>
        // )
      }
      </ul>
        
      {
          isUser ? (
          <>
            <button onClick={logout}  className='signup mt-1 ms-1 me-3 btn btn-danger'>Logout</button> 
            <p className='icon me-3'>
      <RiAccountCircleFill onClick={()=>{navigate('/userdashboard')}} />
      </p>
          </>):(<>
          <li style={{float:'right'}}>
          <button onClick={signup} className='signup mt-1 ms-1 me-3  btn btn-danger'>
          Signup
        </button>
          </li>
          <li style={{float:'right'}}>
        <button className='login mt-1 ms-1 me-3 btn btn-danger' onClick={login}>
          Login</button>
          </li>

          </>
          )
        }
      {/* <li className='responsive'>
      </li> */}

        

    <button
       className='nav__toggle-button'
       onClick={()=>{setIsNavShowing(prev=>!prev)}}
      >
        {
          isNavShowing ? <AiOutlineClose/> : <FaBars/> 
        }
      </button>
      
      </div>
    </nav>
    // </>
  )
}

export default Navbar