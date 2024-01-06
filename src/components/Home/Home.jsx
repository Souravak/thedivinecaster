import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import channelImg from '../../assets/channelHomeImg.png';
import '../Designs/Glowing.css';


const Home = () => {

    return (
        <div className="home">
            <div className="container">
                <ul className="allChannelList">
                    <li><a href="https://www.youtube.com/thedivinecaster" className="listItem box glowing">TheDIVINEcasteR</a></li>
                    <li><a href="https://www.youtube.com/@divinesgaming" className="listItem box glowing">DIVINES GAMING</a></li>
                    <li><a href="https://www.youtube.com/@divinesmusicheart3317" className="listItem box glowing">DIVINES MUSIC HEART</a></li>
                    <li><a href="https://www.youtube.com/@divinespcsupport3960" className="listItem box glowing" onClick={(e) => {e.preventDefault();}}>DIVINES PC SUPPORT</a></li>
                    <li><a href="https://www.youtube.com/@divinescookinghub3323" className="listItem box glowing" onClick={(e) => {e.preventDefault();}}>DIVINES COOKING HUB</a></li>
                </ul>
                <div className="channelHomeImage">
                    <img src={channelImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home


