import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setisLoggedIn}) => {
    
    const navigate = useNavigate();

    const[formData, setformData] = useState({
        email:"", password:""
    })
    
    const[showPassword, setshowPassword] = useState(false);
    
    function changeHandeler (event) {
        setformData ((preData) => (
            {
                ...preData,
                [event.target.name]:event.target.value
            }
        ))

    }

    function submitHandler(event){
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the Form data");
        console.log(formData); 
        navigate("/deshboard");
    }

    

  return (
    <form onSubmit={submitHandler}
    className=' flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full' >
            <p className='text-sm text-richblack-5 mb-1 leading-5'>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type="text"
            name='email'
            value={formData.email}
            onChange={changeHandeler}
            placeholder='Enter Your Email.'
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '
             />
             
             </label>

            <label className='w-full relative'>
            <p className='text-sm text-richblack-5 mb-1 leading-5'>
                Password <sup className='text-pink-200'>*</sup>
            </p>

            <input 
                required
                type={showPassword? ("text") : ("password") }
                name='password'
                value={formData.password}
                onChange={changeHandeler}
                placeholder='Enter Password.'
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '
                />

                <span 
                className=' absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setshowPassword((prev) => (!prev))}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>): 
                    (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
                </span>

                <Link to ="#">
                <p className='text-xs text-blue-400 ml-auto max-w-max'>
                    Forgot Password
                    </p>
                </Link>   
        </label>
        <button className='bg-yellow-50 rounded-lg text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm