import React, { useState } from 'react'
import s from './Box.module.css'
import Modal from '../Modal/Modal'

const Box = (props) => {
    const [active, setActive] = useState(false)
    return (
        <>
            <div className={s.container}>
                <div className={s.img}>
                    <img src={props.img} alt="icon"/>
                    <div className={s.title}>
                        <h4>{props.title}</h4>
                        <button onClick={() => setActive(true)}>Посмотреть</button>
                    </div>
                </div>
                <Modal active={active} setActive={setActive} img={props.img} title={props.title} text={props.text}/>
            </div>
        </>
    )
}

export default Box
