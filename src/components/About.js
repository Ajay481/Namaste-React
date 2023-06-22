import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    //API Call
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <div>
          <h1>About</h1>
          <h2>This is Namaste React Webseries</h2>
        </div>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}

export default About;

/**
 - Parent Constructor
 - Parent Render

  - First Constructor
  - First Render
   - Second Constructor
   - Second Render

<DOM UPDATED - IN SINGLE BATCH>
  - First ComponentDidMount
   - Second ComponentDidMount
 - Parent ComponentDidMount
 */
