import React from 'react'
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.navbar}>
            <div className={s.logo}>
                <a href='#'>ТF</a>
            </div>
            <div className={s.navigation}>
                <a href='#sort'>Ассортимент</a>
                <a href='#delivery'>Доставка</a>
                <a href='#feedback'>Отзывы</a>
                <div className={s.contacts}>
                    <p>+7(999)999-99-99</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation
