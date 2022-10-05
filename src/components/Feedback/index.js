// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackClick: false}

  onClickEmoji = () => {
    this.setState({isFeedbackClick: true})
  }

  renderFeedBackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <div className="emojis-card">
          <h1 className="feedback-heading">
            How satisfied are you with our
            <br /> customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button className="button" type="button">
                  <img
                    className="emoji"
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    onClick={this.onClickEmoji}
                  />
                  <br />
                  <span>{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank">Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackClick} = this.state
    return (
      <div className="app-container">
        {isFeedbackClick
          ? this.renderThankScreen()
          : this.renderFeedBackScreen()}
      </div>
    )
  }
}

export default Feedback
