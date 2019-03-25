import React, { Component } from "react";
import { getMessages, toggleLike } from "../Actions/actions";
import { connect } from "react-redux";
import Message from "./Message";
import { Grid } from "semantic-ui-react";

export class MessagesList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <React.Fragment>
        <Grid container stackable>
          <Grid.Row>
            <Grid.Column>
              {this.props.messages.map(message => (
                <Message
                  key={message.id}
                  text={message.text}
                  username={message.username}
                  toggleLike={() => this.props.toggleLike(message.id)}
                  numOfLikes={message.likes.length}
                  isLiked={message.isLiked}
                />
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages.map(message => {
      const username =
        (state.users[message.userId] && state.users[message.userId].username) ||
        "unknown";
      const like = message.likes.find(
        like => like.userId === state.authentication.id
      );
      if (like) {
        return {
          ...message,
          username,
          isLiked: true
        };
      } else {
        return {
          ...message,
          username,
          isLiked: false
        };
      }
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    },
    toggleLike: messageId => dispatch(toggleLike(messageId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);


