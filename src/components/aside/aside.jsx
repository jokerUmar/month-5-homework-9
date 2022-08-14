import {useState} from 'react'
import "./aside.css"
import {NavLink , useNavigate} from "react-router-dom"
import asidelogo from "../../assets/images/twit-logo.png"
import home from "../../assets/images/home.svg"
import profile from "../../assets/images/profile.svg"
import book from "../../assets/images/book.svg"


function Aside({setAuth , useAuth}) {

const out = useNavigate()

return (
<div className='aside'>
    <div className="aside-box">
        <NavLink to="/home" >
        <img src={asidelogo} alt="" />
        </NavLink>

        <ul className='aside-list'>
            <li>
                <img src={home} alt="" />
                <NavLink  className={({isActive}) => isActive ? "active-link" : "not-active-link" } to="/home">home</NavLink>
            </li>
            <li>
                <img src={profile} alt="" />
                <NavLink  className={({isActive}) => isActive ? "active-link" : "not-active-link" } to="/Main">Profile</NavLink>
            </li>
            <li>
                <img src={book} alt="" />
                <h4>Bookmarks</h4>
            </li>

        </ul>

    <button className='aside-btn'>Tweet</button>
    <button className='log-btn aside-btn' onClick={()=>{
        return(
            setAuth(false),
            useAuth(),
            out('/')
        )
    }}>logout</button>

    </div>
</div>
)
}
export default Aside