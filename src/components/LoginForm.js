import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
      //valid: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target
    
    // if (this.state.username !== "" && this.state.password !== "") {
    //   this.setState({
    //     valid: true
    //   })
    // } else {
    //   this.setState({
    //     valid: false
    //   })
    // }

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state)
    }
  }

  invalidLogin = event => {
    debugger
    event.preventDefault()
    //console.log("Username and Password must both be filled out")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleInputChange} name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handleInputChange} name="password" type="password" value={this.state.password}/>
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
