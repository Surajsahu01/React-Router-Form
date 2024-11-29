import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className=' flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt='Logo' width={260} height={32} loading="lazy"/>
        </Link>
        <nav >
            <ul className=' flex text-2xl py-2 gap-3 '>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>  
            </ul>
        </nav>

        {/* Login - signin - Logout - signup */}
        <div className='text-2xl py-2 gap-3 mr-3 ml-5 flex'>
            {!isLoggedIn &&
            <Link to={"/login"}>
                <button >
                    Login
                </button>  
            </Link>
        }
         {!isLoggedIn &&
            <Link to={"/signup"}>
                <button>
                Sign Up
                </button>
            </Link>
        }
         {isLoggedIn &&
            <Link to={"/logout"}>
                <button onClick={()=>{
                    setisLoggedIn(false);
                    toast.success("Log Out")
                }}>
                    Logout
                </button>
            </Link>
        }
         {isLoggedIn &&
            <Link to={"/deshboard"}>
                <button>
                Deshboard
                </button>
            </Link>
        }
        </div>
    </div>
  )
}

export default Navbar