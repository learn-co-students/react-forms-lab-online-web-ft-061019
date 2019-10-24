import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    // setting up the object from input and password with blank values so they can be updated
    this.state = {
      input: "",
      password: ""

    };
  }
// setting up a  onchange event to update the input  with arrow functions
// onchange event will litteraly set this (login forms) state (input object) to target value in the html
  onChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  // setting up a onchange for password with arrow function, on a onchange event we will litteraly set
  // this ( login forms) state (password objects state) to the target value in the html
  onPChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  // now we need a onsubmit event, on a submitevent we will prevent the defatul so we don't get re-routed
  // then if login forms (this) input object and password object are present - 
  // for login form we will grab handle login in app js that was defined for login form, with props and it will 
  //take in a argument of this object 
  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.input && this.state.password) {
      this.props.handleLogin(this.state)
    } 
    
    
  }

  

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username}
            onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} 
            onChange={this.onPChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;