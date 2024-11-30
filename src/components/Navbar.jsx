import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className=' flex justify-between  w-11/12 max-w-[1160px] py-4 mx-auto items-center'>
        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading="lazy"/>
        </Link>
        <nav >
            <ul className=' flex text-richblack-25 gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>  
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>  
            </ul>
        </nav>

        {/* Login - signin - Logout - signup */}
        <div className='flex items-center gap-x-4'>
            {!isLoggedIn &&
            <Link to="/login">
                <button className='bg-richblack-800 text-richblack-100 border rounded-[8px] border-richblack-700 py-[8px] px-[16px]' >
                    Login
                </button>  
            </Link>
        }
         {!isLoggedIn &&
            <Link to="/signup">
                <button className='bg-richblack-800 text-richblack-100 border rounded-[8px] border-richblack-700 py-[8px] px-[12px]'>
                Sign up
                </button>
            </Link>
        }
         {isLoggedIn &&
            <Link to="/">
                <button 
                className='bg-richblack-800 text-richblack-100 border rounded-[8px] border-richblack-700 py-[8px] px-[12px]'
                onClick={()=>{
                    setisLoggedIn(false);
                    toast.success("Log Out")
                    
                }}>
                    Logout
                </button>
            </Link>
        }
         {isLoggedIn &&
            <Link to="/deshboard">
                <button className='bg-richblack-800 text-richblack-100 border rounded-[8px] border-richblack-700 py-[8px] px-[12px]'>
                Deshboard
                </button>
            </Link>
        }
        </div>
    </div>
  )
}

export default Navbar