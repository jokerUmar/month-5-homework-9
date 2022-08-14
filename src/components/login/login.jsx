import {useState} from 'react'
import logo from "../../assets/images/twit-logo.png"
import './login.css'

function Login({login , isLogin}) {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    userName : userName , 
    password:password
  }

    return (
     <div className='login'>
      <div className="container-login">
        <img src={logo} alt="" />
        <h1>Log in to Twitter</h1>
        <div className='login-form'>
        <input className='login-link' value={userName} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Phone number, email address' />
        <input className='login-link' value={password} onChange={(e)=> setPassword(e.target.value)} type="text" name="" id="" placeholder='Password' />
        </div>
        <button onClick={()=>login(params)}>submit</button>
        <article>
            <a href="">Forgot password?</a>
            <a href="">Sign up to Twitter</a>
        </article>
      </div>  
     </div>   
    )
}

export default Login
