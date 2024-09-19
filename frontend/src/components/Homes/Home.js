import React from 'react';
import './home.css';
const Home = () => {
return (<> 
<div className='main-div'>
<div className='home'>
      <div className='div1'>
            <h1>Hello,Welcome here to learn something
            <span> new everyday!!!</span></h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam nam quo dolor reprehenderit sit nobis sint officiis laborum eos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, aut.</h4>
            <span className='email'>
            <i class="fa-solid fa-envelope"></i>
            <input className='email-input' placeholder='Email'/>
            </span>
            <button className='btn'>Get Started</button>
      </div>
      <img className='bookimage' src='../images/bookimage.png' alt='loading'/>
</div>
<div className='div2'>
<h2>Free Offerd Course</h2>
<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, aliquam!</h3>
</div>
</div>
</>);
}

export default Home
