import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ propspArr, onLeaveFeedback }) => {
    return (
        <ul className={s.Statlist}>
            {propspArr.map((btn) => (
                <li key={btn} className={s.StatlistItem}>
                    <button onClick={onLeaveFeedback} className={s.button} type="button">{btn}</button>
                </li>

            ))}
        </ul>
    )

}

export default FeedbackOptions;