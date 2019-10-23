import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charactersLeft: this.props.maxChars,
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      charactersLeft: this.props.maxChars - event.target.value.length
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.value} type="text" name="message" id="message" />
        <span>Characters Remaining: {this.state.charactersLeft}</span>
      </div>
    );
  }
}

export default TwitterMessage;
