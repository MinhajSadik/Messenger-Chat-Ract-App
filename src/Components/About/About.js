import React from 'react';
import './About.css';


const About = () => {
    const countdown = () => {
        const countDate = new Date('July 1, 2021 6:34:10').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
    
        //how to fuck does time work 
        const seconds =  1000;
        const minute = seconds * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        // calculate the shit 
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor(( gap % day) / hour);
        const textMinute = Math.floor(( gap % hour) / minute);
        const textSeconds = Math.floor(( gap % minute) / seconds);
    
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSeconds;
    };
    countdown();
    return (
        <section className="coming-soon">
            <div>
            <div className="countdown">
                <div className="container-day">
                    <h3 className="day">Time</h3>
                    <h3>Day</h3>
                </div>
                <div className="container-hour">
                    <h3 className="hour">Time</h3>
                    <h3>Hour</h3>
                </div>
                <div className="container-minute">
                    <h3 className="minute">Time</h3>
                    <h3>Minute</h3>
                </div>
                <div className="container-second">
                    <h3 className="second">Time</h3>
                    <h3>Second</h3>
                </div>
            </div>
        </div>
        <img src="" alt="" />
    </section>

    );
};

export default About;