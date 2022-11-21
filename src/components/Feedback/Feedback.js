import React from 'react'
import s from './Feedback.module.css'
import FeedBackElements from './Elements/Elements'

const Feedback = (props) => {

    const feedback = props.feedbackData.map(item => <FeedBackElements title={item.title} text={item.text}/>)

    return (
        <div className={s.container}>
            <div className={s.title}>
                <h2>Спасибо за обратную связь</h2>
            </div>
            <div className={s.module}>
                {feedback}
            </div>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>Оставить отзыв</h2>
                </div>
                <div className={s.send}>
                    <p>Оставьте отзыв и получите скидку на следующую покупку</p>
                    <button>Написать</button>
                </div>
            </div>
        </div>
    )
}

export default Feedback
