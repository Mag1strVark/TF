import React from 'react'
import s from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={s.navbar}>
            <div className={s.logo}>
                <p>ТF</p>
            </div>
            <div className={s.navigation}>
                <p>Ассортимент</p>
                <p>Доставка</p>
                <p>Отзывы</p>
                <div className={s.contacts}>
                    <p>+7(999)999-99-99</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation
