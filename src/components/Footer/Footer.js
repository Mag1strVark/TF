import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <a href='#'>ТF</a>
            </div>
            <div className={s.elements}>
                <a href='#sort'>Ассортимент</a>
                <a href='#delivery'>Доставка</a>
                <a href='#feedback'>Отзывы</a>
            </div>
            <div className={s.copyright}>
                <p>© TF, Inc. 2022.</p>
            </div>
        </div>
    )
}

export default Footer
