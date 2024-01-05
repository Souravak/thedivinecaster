import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import channelImg from '../../assets/channelHomeImg.png';


const Home = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [
        '#87A4DF', '#879FD9', '#878AD3', '#8775CD', '#8760C7', '#874BBF', '#8736B9', '#8721B3', '#870EAD', '#8000A3', '#7A0099', '#74008F', '#6E0085', '#68007B', '#620071',
        '#68007B', '#6E0085', '#74008F', '#7A0099', '#8000A3', '#870EAD', '#8721B3', '#8736B9', '#874BBF', '#8760C7', '#8775CD', '#878AD3', '#879FD9', '#87A4DF', '#87B9E5'
      ];
    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const textBoxStyle = {
        border: `1px solid ${colors[colorIndex]}`
    };

    return (
        <div className="home">
            <div className="container">
                <ul className="allChannelList">
                    <li><a href="https://www.youtube.com/thedivinecaster" className="listItem" style={textBoxStyle}>TheDIVINEcasteR</a></li>
                    <li><a href="https://www.youtube.com/@divinesgaming" className="listItem" style={textBoxStyle}>DIVINES GAMING</a></li>
                    <li><a href="https://www.youtube.com/@divinesmusicheart3317" className="listItem" style={textBoxStyle}>DIVINE MUSIC HEART</a></li>
                    <li><a href="https://www.youtube.com/@divinespcsupport3960" className="listItem" style={textBoxStyle} onClick={(e) => {e.preventDefault();}}>DIVINE SUPPORT</a></li>
                    <li><a href="https://www.youtube.com/@divinescookinghub3323" className="listItem" style={textBoxStyle} onClick={(e) => {e.preventDefault();}}>DIVINE COOKING HUB</a></li>
                </ul>
                <div className="channelHomeImage">
                    <img src={channelImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home


