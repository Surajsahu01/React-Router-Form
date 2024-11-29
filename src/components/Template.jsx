import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title,desc1,desc2,imgae,formtype, setisLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ? (<SignupForm/>):(<LoginForm/>) }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div>
            <img src={frameImage} alt="patter" 
            width={538}
            height={504}
            loading='lazy'/>

            <img src={imgae} alt="patter" 
            width={538}
            height={490}
            loading='lazy'/>
        </div>
    </div>
  )
}

export default Template