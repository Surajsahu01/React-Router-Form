import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setisLoggedIn}) => {
  const navigate = useNavigate();
  const[formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""})
  

  const[showPassword, setshowPassword] = useState(false)
  const[showConfirmPassword, setshowConfirmPassword] =useState(false)
  const[accountType, setAccountType] = useState("student")

  function changeHandlar(event){
    setformData((preData) => ({
            ...preData,
            [event.target.name]:event.target.value
    }))
  }

  function submitHandler(event){
          event.preventDefault();
          if(formData.password != formData.confirmPassword){
            toast.error("Password do not match")
            return;
          }
          setisLoggedIn(true);
          toast.success("Account Created");
          const accountData = {
              ...formData
          };

          const finalData = {
              ...accountData,
              accountType
          }
          console.log("Printing final Accounts data");
          console.log(finalData);
          
          navigate("/deshboard");
          


  }
  return (
    <div>
      <div className=' flex bg-richblack-800 p-1 gap-x-0 my-3 rounded-full max-w-max'>
        <button 
        className={`${accountType === "student" 
          ? "bg-richblack-900 text-richblack-5"
          : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}>
          Student
          </button >

        <button 
        className={`${accountType === "instructor" 
          ? "bg-richblack-900 text-richblack-5"
          : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("instructor")}>
          Instructor
          </button>
      </div>

      <form onSubmit={submitHandler} >

        {/* First Name and Last Name */}
        <div className='flex gap-x-4 mt-1 w-full'>
            <label className='w-full'>
                <p className='text-sm text-richblack-5 mb-1 leading-5'>
                  First Name <sup className='text-pink-200'>*</sup></p>
                  <input 
                  required
                  type="text"
                  name='firstName'
                  placeholder='Enter First Name'
                  onChange={changeHandlar}
                  value={formData.firstName} 
                  className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '/>
              </label>
              
            <label className='w-full'>
                <p className='text-sm text-richblack-5 mb-1 leading-5'>
                  Last Name <sup className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type="text"
                    name='lastName'
                    placeholder='Enter Last Name'
                    onChange={changeHandlar}
                    value={formData.lastName} 
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '/>
            </label>
        </div>
        
        {/* Email Address */}
      
      <label className='w-full'>
            <p className='text-sm text-richblack-5 mb-1 leading-5 mt-1'>
              Email <sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type="email"
                name='email'
                placeholder='Enter Your Email'
                onChange={changeHandlar}
                value={formData.email} 
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '/>

        </label>     
      
        
        {/* Passwords */}
        <div className='flex gap-x-4 mt-1'>
        <label className='w-full relative '>
              <p className='text-sm text-richblack-5 mb-1 leading-5'>
                Password <sup className='text-pink-200'>*</sup></p>
                <input
                required 
                type={showPassword ? ("text") : ("password")}
                name='password'
                placeholder='Enter Your Password'
                onChange={changeHandlar}
                value={formData.password} 
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '/>

                <span 
                 className=' absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setshowPassword((prev) => (!prev))}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) 
                    }
                </span>

          </label>

        <label className='w-full relative' >
              <p className='text-sm text-richblack-5 mb-1 leading-5'> Comfirm Password <sup>*</sup></p>
                <input 
                required
                type={showConfirmPassword ? ("text") : ("password")}
                name='confirmPassword'
                placeholder='Enter confirm Password'
                onChange={changeHandlar}
                value={formData.confirmPassword} 
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[10px] '
                />

                <span 
                 className=' absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setshowConfirmPassword((prev) => (!prev))}>
                    {showConfirmPassword ? 
                    (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) :
                    (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
                </span>

        </label>

        </div>

        <button className='bg-yellow-50 rounded-lg text-richblack-900 px-[12px] py-[8px] mt-6 w-full'>
          Create Account</button>
        
      </form>
    </div>
  )
}

export default SignupForm