import React from 'react'
import s from './Hero.module.css'
import Video from '../../Assets/Ink in Water  - Inkprint Solutions.mp4'

const Hero = () => {
    return (
        <section className={s.box}>
            <div className={s.background}>
                <video src={Video} autoPlay muted loop id="myVideo"></video>
                <div className={s.text}>
                    <h1>Добро Пожаловать в Мир Турецких Тканей!</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero
