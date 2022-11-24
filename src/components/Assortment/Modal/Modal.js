import React from 'react'
import s from './Modal.module.css'

const Modal = ({active, setActive, img, title, text}) => {
    return (
        <div className={active? s.container_active : s.container} onClick={() => setActive(false)}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.img}>
                    <img src={img} alt="icon"/>
                </div>
                <div className={s.decoration}>
                        <div className={s.title}>
                            <h3>{title}</h3>
                        </div>
                        <div className={s.text}>
                            <p>Описание:</p>
                            <p>{text}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
