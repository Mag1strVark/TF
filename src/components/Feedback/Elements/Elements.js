import React from 'react'
import s from './Elements.module.css'

const FeedBackElements = (props) => {
    return (
        <div className={s.container}>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default FeedBackElements
