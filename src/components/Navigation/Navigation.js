import React from 'react'
import s from './Navigation.module.css'
import { SiTelegram, SiWhatsapp } from "react-icons/si";

const Navigation = () => {
    return (
        <div className={s.navbar}>
            <div className={s.logo}>
                <a href='#'>ТF</a>
            </div>
            <div className={s.burger}>
                <button>Меню</button>
            </div>
            <div className={s.navigation}>
                <a href='#sort'>Ассортимент</a>
                <a href='#delivery'>Доставка</a>
                <a href='#feedback'>Отзывы</a>
                <div className={s.contacts}>
                    <a href="https://t.me/vlas01ff"><SiTelegram/></a>
                    <a href="/"><SiWhatsapp/></a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
