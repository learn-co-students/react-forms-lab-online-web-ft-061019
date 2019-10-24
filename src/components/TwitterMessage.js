import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    // the message w/ text is the object, we wanted to be able to edit it
    this.state = {
      message: ""
    };
  }


//we need a onChange event to do somethig, in this case update the object which is the target value
// which will update the state when typing
onChange = event => {
  this.setState({
    message: event.target.value
  })
}



render() {
  return (
    <div>
      <strong>Your message:</strong>
      <input type="text" name="message" id="message" 
      onChange={event => this.onChange(event)}
      value={this.state.message} />
      <label>
        {this.props.maxChars - this.state.message.length} 
      </label>
    </div>
  );
}
}
// line 32 we are taking the validation from app.js which is the props max chars, and then we are also rendering
// twitter messages objects length in the label and will update as typing
export default TwitterMessage;
