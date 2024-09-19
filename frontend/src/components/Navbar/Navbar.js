import React, { useEffect, useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { useAuth } from '../../context/AuthProvider';
import Logout from '../logout/Logout';

const Navbar = () => {

const [authUser,setAuthUser] = useAuth();

const [nav2,show2] = useState(true);
const showMenu=()=>{
show2(!nav2);
};
const [searchbar,show] = useState(true);
const showSearch=()=>{
show(!searchbar);
};

const[sticky,setsticky] = useState(false);
useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>0)
      setsticky(true);
    else 
      setsticky(false);
  }
  window.addEventListener('scroll',handleScroll);
  return()=>{
    window.removeEventListener('scroll',handleScroll);
  }
},[])

const [theme,settheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light');
useEffect(()=>{
  const element = document.documentElement;
  if(theme === 'dark'){
    element.classList.add('dark');
    localStorage.setItem('theme','dark');
    document.body.classList.add('dark');
  }
  else{
    element.classList.remove('dark');
    localStorage.setItem('theme','light');
    document.body.classList.remove('dark');
  }
},[theme]);
  return(<>
<div className={`main-nav ${sticky ? 'active':''}`}>
<div className='nav'>
      <h1>BookStore</h1>
      <div className='nav1'>
     <div className='hcca-row'>
     <NavLink className='menu' to="/">Home</NavLink>
     <NavLink className='menu' to="/course">Course</NavLink>
     <NavLink className='menu' to="/contact">Contact</NavLink>
     <NavLink className='menu' to="/about">About</NavLink>
        </div>
        <div className='nav2'>
        <span className='searchbar'>
        <input className='search-input' placeholder='Search'/>
        <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className='lens' onClick={showSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
        </span>

        <i  className={`fa-regular ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}  
        onClick={()=>settheme(theme==='dark'?'light':'dark')}></i>
        {authUser ? (
          <Logout/>
        ):(
        <div>
        <button className='login' 
        onClick={()=>
        document.getElementById("my_modal_3").showModal()}>
        Login</button> 
        <Login/>
        </div>
      )}
      <div className='threeLine' onClick={showMenu}>
      <i className="fa-solid fa-bars"></i>
      </div>
      </div>
      </div>
      <div className={`hcca-column ${nav2  ? '' : 'active'}`}>
     <NavLink className='menu' to="/">Home</NavLink>
     <NavLink className='menu' to="/course">Course</NavLink>
     <NavLink className='menu' to="/contact">Contact</NavLink>
     <NavLink className='menu' to="/about">About</NavLink>
        </div>
</div>
<div className={`outside-searchbar ${searchbar ? '' : 'active'}`}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder='Search'/>
</div>
</div>
</>);
}
export default Navbar
