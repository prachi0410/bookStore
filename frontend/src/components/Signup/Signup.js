import React from 'react'
import './signup.css'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast, { LoaderIcon } from 'react-hot-toast'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
const Signup = () => {
//navigate to home page when signup successfully
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";

const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
        
const onSubmit = async(data) => {
  const userInfo={
    name:data.name,
    email:data.email,
    password:data.password,
    cpassword:data.cpassword
  }
  await axios.post("https://bookstore-backend-yb8l.onrender.com/user/signup",userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      // alert("Signup successfully")
      toast.success('Signin Successfully');
      navigate(from,{replace:true});
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user));
   }).catch((err)=>{
    if(err.response){
      console.log(err)
      // alert("Error: "+err.response.data.message);
      toast.error("Error: "+err.response.data.message);

    }
   })
};

  return (
<div className='signup-body'>
<form className="signup-page" onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>

        <label>Name</label>
        <input type="name" 
        autoComplete='off'
        {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}

        <label>Email</label>
        <input type="email" 
        autoComplete='off'
        {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <label>Create Password</label>
        <input type="password" 
        autoComplete='off'
        {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}

        <label>Confirm Password</label>
        <input type="cpassword" 
        autoComplete='off'
        {...register("cpassword", { required: true })} />
        {errors.cpassword && <span>This field is required</span>}
        
        <button type="signup">Signup</button>
</form>
</div>
  )
}

export default Signup
