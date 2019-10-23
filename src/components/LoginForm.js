import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      password: ""

    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  onPChange = event => {
    this.setState({
      password: event.target.value
    })
  }

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
