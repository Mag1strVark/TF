import React from 'react'
import s from './Box.module.css'

const Box = (props) => {
    return (
        <div className={s.container}>
            <div className={s.img}>
                <img src={props.text} alt="icon"/>
                <div className={s.title}>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Box
