import React from 'react'
import s from './Subpage.module.css'
import Box from './Box/Box'

const SubPage = (props) => {

    const List = props.listData.map(item => <Box title={item.title} text={item.text}/>)

    return (
        <section className={s.container} id='sort'>
            <div className={s.title}>
                <h3>Ассортимент</h3>
            </div>
            <div className={s.list}>
                {List}
            </div>
        </section>
    )
}

export default SubPage
