import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: this.props.maxChars,
      errors: ""
    };
  }

  handleInput = event => {
    const inputLength = event.target.value.length
    const maxLength = this.props.maxChars
    const newCharsLeft = maxLength - inputLength

    if (inputLength <= maxLength) {
      this.setState({
        charsLeft: newCharsLeft,
        message: event.target.value
      })
      
    } else {
      this.setState({
        charsLeft: newCharsLeft,
        message: event.target.value,
        errors: "Your input is more than 280 characters!  Please shorten your input!"
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInput} type="text" name="message" id="message" value={this.state.message}/>
        <p>Characters Left: {this.state.charsLeft}</p>
        <p>{this.state.errors}</p>
      </div>
    );
  }
}

export default TwitterMessage;
