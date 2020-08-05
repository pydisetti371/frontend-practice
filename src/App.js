import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      rememberMe: false,
    };
    // handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    console.log(rememberMe,"rememberme")
    const user = rememberMe ? localStorage.getItem('user') : '';
     console.log(user,"user")
    this.setState({ user, rememberMe });
  }

  handleChange = (e) => {
    console.log(this, "------");
    const name = e.target.name;

    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({ [name]: value });
  };

  handleFormSubmit = () => {
    const { user,rememberMe } = this.state;
    localStorage.setItem('rememberMe',rememberMe)
    localStorage.setItem('user',rememberMe ? user : '')
  }

  handleClick = () => {
    const data = localStorage.getItem('rememberMe')
    const x = data ? "true" : "false"
    console.log(x)
    // console.log(data,"data")
  }

  render() {
    return (
      <div>
        {/* <label>
        User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
      </label>
      <label>
      <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
      </label>
      <button type="submit">Sign In</button> */}
        <form onSubmit={this.handleFormSubmit}>
          <h1>User:</h1>
          <input
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <h1>Remember me:</h1>
          <input
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />
          <button type="submit">Sign In</button>
        </form>
        <button onClick={this.handleClick}>Get item</button>
      </div>
    );
  }
}

export default App;
