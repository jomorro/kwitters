import React, { Component, Fragment } from "react";
import { Divider, Card } from "semantic-ui-react";

class ProfileMessage extends Component {
  render() {
    return (
      <Fragment>
        <Card
          color="green"
          animation="overlay"
          icon="labeled"
          width="thin"
          fluid
        >
          <Card.Content>
            <Card.Header>{this.props.text}</Card.Header>
            {/* //   place props in styling, from fragment section. */}
            <Card.Description>
              Kweeted by {this.props.username}
            </Card.Description>
            <Divider />
            <Card.Content extra>
              <p>Likes: {this.props.numOfLikes}</p>
            </Card.Content>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}
export default ProfileMessage;
