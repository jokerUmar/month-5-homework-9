import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route , Routes , useLocation , useNavigate } from "react-router-dom"
import Aside from './components/aside/aside'
import Home from './components/home/home'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'
import Login from './components/login/login'

function App() {

  let navigate = useNavigate()

  let {pathname} = useLocation()

  const [auth, setAuth] = useState(false);

  let user = {
    userName:"joker13",
    password:"123456"
  }

  

  const useAuth = (params) =>{
   if (user.userName===params.userName && user.password===params.password){
     setAuth(true)
    }else(
      setAuth(false)
    )


   return  auth ? 
    navigate("/home") : navigate("/")
  }



  return (
  <>
    <div className="app container">

        {(pathname === "/" ? "" : <Aside setAuth={setAuth} useAuth={useAuth} />)}
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/Main' element={<Main/>} />
          <Route path='/' element={<Login isLogin={auth} login={useAuth}/>} />
        </Routes>
        {(pathname === "/" ? "" : <Sidebar/>  )}  
    </div>
  </>
  )
}

export default App
