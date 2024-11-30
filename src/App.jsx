import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './peges/Home'
import Login from './peges/Login'
import Signup from './peges/Signup'
import Deshboard from './peges/Deshboard'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const[isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
      <Routes> 
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}/>} />
        <Route path='/signup' element={<Signup setisLoggedIn={setisLoggedIn}/>} />
        <Route path='/deshboard' element={
          
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Deshboard/>
          </PrivateRoute>
          } />
      </Routes>
    </div>
  )
}
export default App
