import React, { Component } from "react";
import MessagesList from "./MessagesList";
import ComposeMessage from "./ComposeMessage";
import picture from "../Images/favicon.ico";
import {Image} from "semantic-ui-react";

class Feed extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Image src={picture} size="medium" centered />
         <ComposeMessage />
        <h1 style={{ textAlign: "center", color: "green" }}>Feed</h1>
        <MessagesList />
      </React.Fragment>
    );
  }
}

export default Feed;
