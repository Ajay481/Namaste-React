import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");
    this.state = {
      userInfo: { name: "Dummy", location: "Default", avatar_url: "Dummy" },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + "Child ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child ComponentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <img alt="img" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @akshaymarch07</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 * ----MOUNTING----
 *
 * Constructor (dummy)
 * Render (dummy)
 *     <HTML Dummy>
 * Component Did Mount
 *     <API Call>
 *     <this.setState> -> State variable is updated
 *
 *
 * ----UPDATE----
 *
 *  Render(API Data)
 *      <HTML (new API Data)>
 *  Component Did Update
 *
 * ----UNMOUNTING----
 *
 *  Component Will UnMount -> When the page route to another page
 */
