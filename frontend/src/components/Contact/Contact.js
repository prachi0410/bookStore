import React from 'react'
import { useForm } from "react-hook-form"
import './contact.css'
const Contact = () => {
        const {
                register,
                handleSubmit,
                formState: { errors },
                } = useForm();
                
        const onSubmit = (data) => console.log(data);
  return (
        <div className='contact-body'>
        <form className="contact-page" onSubmit={handleSubmit(onSubmit)}>
                <h2>Contact Us</h2>
        
                <label>Name</label>
                <input type="name" 
                placeholder='Enter your name'
                autoComplete='off'
                {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
        
                <label>Email</label>
                <input type="email" 
                placeholder='Email address'
                autoComplete='off'
                {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
        
                <label>Message</label>
                <textarea type="message" 
                placeholder='Type your message'
                {...register("cpassword", { required: true })} />
                {errors.cpassword && <span>This field is required</span>}
                
                <button type="submit">Submit</button>
        </form>
        </div>
          )
        }

export default Contact
