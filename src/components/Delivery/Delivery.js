import React from 'react'
import s from './Delivery.module.css'
import { IoIosListBox } from "react-icons/io";


const Delivery = () => {
    return (
        <section className={s.container} id='delivery'>
            <div className={s.module}>
                <div className={s.icon}>
                    <p><IoIosListBox/></p>
                </div>
                <div className={s.text}>
                    <h3>Доставка</h3>
                    <p>Лучшие условии доставки РФ</p>
                </div>
            </div>
            <div className={s.module}>
                <div className={s.icon}>
                    <p><IoIosListBox/></p>
                </div>
                <div className={s.text}>
                    <h3>Оплата</h3>
                    <p>Удобные варианты оплаты</p>
                </div>
            </div>
            <div className={s.module}>
                <div className={s.icon}>
                    <p><IoIosListBox/></p>
                </div>
                <div className={s.text}>
                    <h3>Как заказать</h3>
                    <p>Все длля вашего удобства</p>
                </div>
            </div>
        </section>
    )
}

export default Delivery
