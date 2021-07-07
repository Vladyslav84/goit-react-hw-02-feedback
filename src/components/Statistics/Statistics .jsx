import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={s.Statlist}>
            <li >Good: {good}</li>
            <li >Neutral: {neutral}</li>
            <li >Bad: {bad}</li>
            <li >Total: {total}</li>
            <li >Positive feedback: {positivePercentage}</li>
        </ul>
    )
}

Statistics.propTypes = {
    good : PropTypes.number.isRequired,
    neutral : PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    positivePercentage : PropTypes.string.isRequired
}

export default Statistics;