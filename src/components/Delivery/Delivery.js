import React from 'react'
import s from './Delivery.module.css'
import { CiDeliveryTruck, CiBadgeDollar, CiCircleInfo } from "react-icons/ci";


const Delivery = () => {
    return (
        <section className={s.container} id='delivery'>
            <div className={s.module}>
                <div className={s.icon}>
                    <p><CiDeliveryTruck/></p>
                </div>
                <div className={s.text}>
                    <h3>Доставка</h3>
                    <p>Лучшие условии доставки РФ</p>
                </div>
            </div>
            <div className={s.module}>
                <div className={s.icon}>
                    <p><CiBadgeDollar/></p>
                </div>
                <div className={s.text}>
                    <h3>Оплата</h3>
                    <p>Удобные варианты оплаты</p>
                </div>
            </div>
            <div className={s.module}>
                <div className={s.icon}>
                    <p><CiCircleInfo/></p>
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
