import React from 'react'
import "./home.css"
import profileCard1 from "../../assets/images/profile-card1.png"
import profileCard11 from "../../assets/images/profile-card1-1.svg"
import profileCard12 from "../../assets/images/profile-card1-2.svg"
import profileCard13 from "../../assets/images/profile-card1-3.svg"
import profileCard14 from "../../assets/images/profile-card1-4.svg"
import profileCard2 from "../../assets/images/profile-card2.png"
import profileCard3 from "../../assets/images/profile-card3.png"
import profileCard4 from "../../assets/images/profile-card4.png"
import comment from "../../assets/images/comment.svg"
import loading from "../../assets/images/loading.svg"
import heart from "../../assets/images/heart.svg"
import download from "../../assets/images/download.svg"
import diagram from "../../assets/images/diagram.svg"
import cook from "../../assets/images/cook.png"

function Home() {

    const styleP = {
        padding:"20px"
    }

    let yourProfile= [
        {
            profileCard1 : profileCard1,
            profileCard11 : profileCard11,
            profileCard12 : profileCard12,
            profileCard13 : profileCard13,
            profileCard14 : profileCard14,
            profileCardText : "What’s happening",
        },
    ]

    let dataProfile = [
        
        {
            profileCard:profileCard2,
            name:"Designsta",
            nicName: "@inner · 25m",
            text:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
            commentImg: comment ,
            loadingImg: loading ,
            heartImg: heart ,
            downloadImg: download ,
            diagramImg: diagram ,
            img : ""
        },
        {
            profileCard:profileCard3,
            name:"cloutexhibition",
            nicName: "@RajLahoti · 22m",
            text:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
            commentImg: comment ,
            loadingImg: loading ,
            heartImg: heart ,
            downloadImg: download ,
            diagramImg: diagram ,
            img:""
        },
        {
            profileCard:profileCard4,
            name:"CreativePhoto",
            nicName: "@cloutexhibition · 1h",
            text:`Обетда..... 
            Кечиринглар`,
            commentImg: comment ,
            loadingImg: loading ,
            heartImg: heart ,
            downloadImg: download ,
            diagramImg: diagram ,
            img:cook
        },
    ]

    return (
        <div className='home'>
            <h1 style={styleP}>Home</h1>
            <div className="line"></div>

            <div className="profile-your">
            {
                <div className="your-box">
                    
                    <div className="your-boxf">
                    <img style={styleP} src={yourProfile[0].profileCard1} className="profile-card1" alt="" />
                    <h2 className='your-text'>{yourProfile[0].profileCardText}</h2>
                    </div>

                    <div className="your-box-img">
                        <div className="your-box-imgf">
                        <img src={yourProfile[0].profileCard11} alt="" />
                        <img src={yourProfile[0].profileCard12} alt="" />
                        <img src={yourProfile[0].profileCard13} alt="" />
                        <img src={yourProfile[0].profileCard14} alt="" />
                        </div>
                        <button>Tweet</button>
                    </div>
                    <br />
                    <br />
                    <div className="line"></div>

                </div>
            }
            </div>
            


            <div className="other-profile">
            {

            dataProfile.map(i => {

                return <div className="other-box">

                    <img src={i.profileCard} alt="" />

                    <article>
                        <span className='other-name'>{i.name}</span>
                        <span className='other-nickname'>{i.nicName}</span>
                        <p className='other-text'>{i.text}</p>
                        <img className='cook' src={i.img}  alt="" />

                        <div className="other-img_box">
                        <img src={i.commentImg} alt="" />
                        <img src={i.loadingImg} alt="" />
                        <img src={i.heartImg} alt="" />
                        <img src={i.downloadImg} alt="" />
                        <img src={i.diagramImg} alt="" />
                        </div>
                        <hr />
                <br />
                    </article>
                </div>
            })                

            }
            </div>

        </div>

    )
}

export default Home
