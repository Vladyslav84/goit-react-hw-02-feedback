import React, { Component } from 'react';
// import Button from './components/Button/Button';
import Statistics from './components/Statistics/Statistics '
import Notification from './components/Notification/Notification'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions '

class App extends Component {

    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0
    }
    onLeaveFeedback = (evt) => {

        this.setState(prevState => {
            return {
                [evt.target.innerHTML]: prevState[evt.target.innerHTML] + 1
            }
        })

    }
    handleGoodfeedback = () => {
        this.setState(prevState => {

            return {
                Good: prevState.Good + 1
            }
        })
    }

    handleNeutralfeedback = () => {
        this.setState(prevState => {

            return {
                Neutral: prevState.Neutral + 1
            }
        })
    }
    handleBadfeedback = () => {
        this.setState(prevState => {

            return {
                Bad: prevState.Bad + 1
            }
        })
    };

    countTotalFeedback = () => {
        let total = this.state.Neutral + this.state.Bad + this.state.Good;
        return total;
    };
    countPositiveFeedbackPercentage = () => {

        let TotalFeedBack = this.state.Neutral + this.state.Bad + this.state.Good;
        let PosFeedBack = Math.floor(this.state.Good / TotalFeedBack * 100) + "%";
        return PosFeedBack;
    };

    render() {
        const stateArr = Object.keys(this.state);
        return (
            <>
                <h2>Please leave feedback</h2>
                <>
                    <FeedbackOptions
                        propspArr={stateArr}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </>

                <h2>Statistics</h2>
                {this.countTotalFeedback() === 0 ? <Notification message="No feedback given" /> :
                    <Statistics
                        good={this.state.Good}
                        neutral={this.state.Neutral}
                        bad={this.state.Bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />}
            </>
        );
    }
}

export default App;