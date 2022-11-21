import React from 'react'
import s from './Hero.module.css'
import Video from '../../Assets/Watchtower of Turkey.mp4'

const Hero = () => {
    return (
        <div className={s.box}>
            <div className={s.background}>
                <video src={Video} autoPlay muted loop id="myVideo"></video>
                <div className={s.text}>
                    <h1>Добро Пожаловать в Мир Турецких Тканей!</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
