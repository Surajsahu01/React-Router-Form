import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const LoginForm = () => {
    const[formData, setformData] = useState({email:"", password:""})
    
    const[showPassword, setshowPassword] = useState(false)
    
    function changeHandeler (event) {
        setformData ((preData) => (
            {
                ...preData,
                [event.target.name]:event.target.value
            }
        ))

    }

    

  return (
    <form >
        <label >
            <p>
                Email Address <sup>*</sup>
            </p>
            <input 
            required
            type="text"
            name='email'
            value={formData.email}
            onChange={changeHandeler}
            placeholder='Enter Your Email.'
             />

            <p>
                Password <sup>*</sup>
            </p>

            <input 
                required
                type={showPassword? ("text") : ("password") }
                name='password'
                value={formData.password}
                onChange={changeHandeler}
                placeholder='Enter Password.'
                />

                <span onClick={() => setshowPassword((prev) => (!prev))}>
                    {showPassword? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                </span>

                <Link to ="#">
                
                <p>Forgot Password</p>
                </Link>

                <button>Sign In</button>
        </label>
    </form>
  )
}

export default LoginForm