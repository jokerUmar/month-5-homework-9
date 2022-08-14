import React from 'react'
import "./sidebar.css"
import settings from "../../assets/images/settings.svg"
import dot from "../../assets/images/dot.svg"
import like1 from "../../assets/images/like1.png"
import like2 from "../../assets/images/like2.png"


function Sidebar() {
return (
<div className="sidebar">
    <input type="text" placeholder='Search Twitter' />

    <ul>
        <li className='sidebar-title'>
            <h2>Trends for you</h2> <img src={settings} alt="" />
        </li>
        <li className='sidebar-item'>
            <article>
                <p>Trending in Germany</p>
                <h4>Revolution</h4>
                <span>50.4K Tweets</span>
            </article>
            <img src={dot} alt="" />
        </li>
        <li className='sidebar-item'>
            <article>
                <p>Trending in Germany</p>
                <h4>Revolution</h4>
                <span>50.4K Tweets</span>
            </article>
            <img src={dot} alt="" />
        </li>
        <li className='sidebar-item'>
            <article>
                <p>Trending in Germany</p>
                <h4>Revolution</h4>
                <span>50.4K Tweets</span>
            </article>
            <img src={dot} alt="" />
        </li>

        <li className='show'>Show more</li>

    </ul>

    <div className="like">
        <h2>You might like</h2>

        <article>
            <span>
                <img src={like1} alt="" />
                <div>
                    <p className='like_name'>Mushtariy</p>
                    <p className='like_nickname'>@Mushtar565266</p>

                </div>
            </span>
            <button>Follow</button>
        </article>

        <article>
            <span>
                <img src={like2} alt="" />
                <div>
                    <p className='like_name'>Shuhratbek</p>
                    <p className='like_nickname'>@mrshukhrat</p>
                </div>
            </span>
            <button>Follow</button>
        </article>
    </div>

</div>
)
}

export default Sidebar