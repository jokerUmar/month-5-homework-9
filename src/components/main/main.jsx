import React from 'react'
import "./main.css"
import comment from "../../assets/images/comment.svg"
import loading from "../../assets/images/loading.svg"
import heart from "../../assets/images/heart.svg"
import download from "../../assets/images/download.svg"
import diagram from "../../assets/images/diagram.svg"
import mainProfile from "../../assets/images/main-profile.png"
import mainImg from "../../assets/images/main-img.png"
import myImg from "../../assets/images/my-img.png"

function Main() {

    const styleP = {
        padding:"20px"
    }

 
    let dataProfile = [
        
        {
            profileCard:myImg,
            name:"Bobur",
            nicName: "@bobur_mavlonov · Apr 1",
            text:"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
            commentImg: comment ,
            loadingImg: loading ,
            heartImg: heart ,
            downloadImg: download ,
            diagramImg: diagram ,
            img : ""
        },
        {
            profileCard:myImg,
            name:"cloutexhibition",
            nicName: "@bobur_mavlonov · Apr 1",
            text:`Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

            Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
            
            Gap faqat biznes trenerlar haqida emas.`,
            commentImg: comment ,
            loadingImg: loading ,
            heartImg: heart ,
            downloadImg: download ,
            diagramImg: diagram ,
            img:""
        },
        {
            profileCard:myImg,
            name:"CreativePhoto",
            nicName: "@bobur_mavlonov · Apr 1",
            text:`A bo'pti maskamasman`,
            commentImg: comment ,
            loadingImg: loading ,
            heartImg: heart ,
            downloadImg: download ,
            diagramImg: diagram ,
            img:mainImg
        },
    ]

    return (
        <div className='home main'>
            <h1 style={styleP}>Bobur</h1>
            <p style={{opacity:"0.6" , padding:"0 0 15px 20px" }}>1,070 Tweets</p>
            <div className="line"></div>

            <div className="my-profile">
                <img src={mainProfile} width={"80px"} alt="" />
            </div>
            
            <div className='profile-data'>
            <h2>Bobur</h2>
            <p>@bobur_mavlonov</p>
            <article>UX&UI designer at <span>@abutechuz</span></article>

            <ul>
                <li>Mashag’daman</li>
                <li>t.me/boburjon_mavlonov</li>
                <li>Born November 24, 2000</li>
                <li>Joined May 2020</li>
            </ul>

            <span><b>67</b> Following</span>
            <span><b>47</b> Followers</span>

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

export default Main
