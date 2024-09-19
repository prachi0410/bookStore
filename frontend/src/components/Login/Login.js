import React from 'react'
import './login.css'
import { useForm } from "react-hook-form"
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () =>{

const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm();
        
const onSubmit = async(data) =>{
  const userInfo={
    email:data.email,
    password:data.password,
  }
  await axios.post("https://bookstore-backend-yb8l.onrender.com/user/login",userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      // alert("Login successful")
      toast.success('Login Successful');
      document.getElementById('my_modal_3').close();
      setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      },2000);
    }
   }).catch((err)=>{
    if(err.response){
      console.log(err)
      // alert("Error: "+err.response.data.message);
      toast.error("Error: "+err.response.data.message);
      setTimeout(() => {},2000);
    }
   })
};
const openDialog = () => {
        document.getElementById('my_modal_3').close();
        reset(); 
        };

return (
<dialog id="my_modal_3" className="modal">
  {/* <div className="modal-box"> */}
    <form className="modal-box" method="dialog" onSubmit={handleSubmit(onSubmit)}>
     <NavLink to="/" className="cross"
     onClick={openDialog}>✕</NavLink>
   
    <h2>Login</h2>
       <label>Email</label>
        <input type="email" 
        autoComplete='off'
        {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <label>Password</label>
        <input type="password"
        autoComplete='off'
        {...register("password", { required: true })}  />
        {errors.password && <span>This field is required</span>}
        <menu>
              <button type="submit">Login</button>
              <p>Not registered? <a href='/signup'>Signup</a></p>
        </menu>
        </form>
  {/* </div> */}
</dialog>

  )
}

export default Login
