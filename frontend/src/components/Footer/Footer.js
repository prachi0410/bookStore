import React from 'react'
import './footer.css';
const Footer = () => {
return (<>
<div className='footer'>
        <div className='first-line'>
                <h3>About us</h3>
                <h3>Contact</h3>
                <h3>Jobs</h3>
                <h3>Press kit</h3>
        </div>
        <div className='second-line'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-facebook"></i>
        </div>
        <div className='third-line'>
                Copyright 2024 All right reserved by ACME industries Ltd
        </div>
</div>
</>);
}

export default Footer
