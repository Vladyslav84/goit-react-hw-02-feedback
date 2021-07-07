import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
    propspArr: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;