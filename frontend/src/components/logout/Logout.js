import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast';
const Logout = () => {
        const [authUser,setAuthUser]=useAuth();
        const handelLogout=()=>{
                try {
                     setAuthUser({
                        ...authUser,
                        user:null
                     })   
                     localStorage.removeItem("Users")
                     toast.success("Logout successfully")
                     setTimeout(()=>{
                             window.location.reload();
                         },2000);
                } catch (error) {
                        toast.error("Error: "+error.message)
                        setTimeout(()=>{},2000);
                }
        }
  return (
    <div>
      <button className='logout'onClick={handelLogout}>
      Logout</button>
    </div>
  )
}

export default Logout
