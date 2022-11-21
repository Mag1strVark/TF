import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <p>TF</p>
            </div>
            <div className={s.elements}>
                <p>Ассортимент</p>
                <p>Доставка</p>
                <p>Отзывы</p>
            </div>
            <div className={s.copyright}>
                <p>© TF, Inc. 2022.</p>
            </div>
        </div>
    )
}

export default Footer
