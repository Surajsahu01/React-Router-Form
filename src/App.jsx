import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './peges/Home'
import Login from './peges/Login'
import Signup from './peges/Signup'
import Deshboard from './peges/Deshboard'
import Navbar from './components/Navbar'

function App() {
  const[isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>


      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/deshboard' element={<Deshboard/>} />
        

      </Routes>


    </div>
  )
}

export default App
