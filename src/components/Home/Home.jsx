import React from 'react';
import './Home.css';
import channelImg from '../../assets/channelHomeImg.png';
import '../Designs/Glowing.css';

const Home = () => {
    
    return (
        <div className="home">
            <div className="home-container">
                <ul className="allChannelList">
                    <li><a href="https://www.youtube.com/thedivinecaster" rel="noopener noreferrer" className="listItem box glowing">TheDIVINEcasteR</a></li>
                    <li><a href="https://www.youtube.com/@divinesgaming" rel="noopener noreferrer" className="listItem box glowing">DIVINES GAMING</a></li>
                    <li><a href="https://www.youtube.com/@divinesmusicheart3317" rel="noopener noreferrer" className="listItem box glowing">DIVINES MUSIC HEART</a></li>
                    <li><a href="https://www.youtube.com/@divinespcsupport3960" rel="noopener noreferrer" className="listItem box glowing" onClick={(e) => {e.preventDefault();}}>DIVINES PC SUPPORT</a></li>
                    <li><a href="https://www.youtube.com/@divinescookinghub3323" rel="noopener noreferrer" className="listItem box glowing" onClick={(e) => {e.preventDefault();}}>DIVINES COOKING HUB</a></li>
                </ul>
                <div className="channelHomeImage">
                    <div className="tester"><img src={channelImg} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Home


