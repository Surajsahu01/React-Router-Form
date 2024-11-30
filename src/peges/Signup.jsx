import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setisLoggedIn}) => {
  return (
    <div>
    <Template
    title="Join the milloions learning to code with studNation for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    imgae={signupImg}
    formtype="signup"
    setisLoggedIn={setisLoggedIn}
    />
    </div>
  )
}

export default Signup