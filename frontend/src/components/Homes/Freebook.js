import React, { useEffect , useState } from 'react';
// import list from "../list.json";
import Card from "./Card";
import axios from 'axios';
const Freebook = () => {
const [book,setBook] = useState([]);
useEffect(()=>{
        const getBook = async()=>{
                try {
                        const res = await axios.get('http://localhost:4000/book');
                        console.log(res.data);
                        setBook(res.data.filter((data)=> data.category === 'Free'));  
                } catch (error) {
                        console.log(error);
                }
        }
        getBook();
},[])
//for using data from frontend 
// const filterdata = list.filter((data)=> data.category === 'Free');

return (<>
<div className="slider-container">
      
        {book.map((item)=>(
                <Card item={item} key={item.id}/>
        ))}
     
    </div>
</>);
}

export default Freebook;
