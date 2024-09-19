import React, { useEffect, useState } from 'react'
import './course.css'
// import list from '../list.json'
import Card from '../Homes/Card'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
const Course = () => {
const [book,setBook] = useState([]);
useEffect(()=>{
        const getBook = async()=>{
                try {
                  const res = await axios.get('http://localhost:4000/book');
                  console.log(res.data);
                  setBook(res.data);  
                } catch (error) {
                        console.log(error);
                }
        }
        getBook();
},[])
return (<>
<div className='course'>
<div className='course-1'>
        <h1>We're delighted to have you <span>Here! :)</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est explicabo exercitationem non dolore illum autem cumque aut. Maiores, eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto!</p>
        <div className='course-btn'>
        <NavLink to="/"> <button>Back</button></NavLink>
        </div>
</div>
<div className='course-2'>
        {book.map((item)=>(
                <Card key={item.id} item={item}/>
        ))}
</div>
</div>
</>);
}

export default Course;
