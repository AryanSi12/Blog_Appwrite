import React from 'react'
import authservice from '../Appwrite/Auth'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
function LogoutBtn() {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const logoutHandler = () =>{
        
        authservice.logout('current').then(()=>{
            console.log("Here");
        
            dispatch(logout());
            navigate('/')
        })
       
    }
  return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
  )
}

export default LogoutBtn