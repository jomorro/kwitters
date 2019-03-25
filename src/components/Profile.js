import React, { Component } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import UserMessages from "./UserMessages";
import picture from "../Images/favicon.ico";
import ProfileMessageList from "./ProfileMessageList";


class Profile extends Component {

  componentDidMount() {
    // this.props.getUsers();
    // this.props.getLoggedInUser();
  }
  handleUploadImage = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadUserImage(formData);
  };


  render() {
    return (
      <Grid container stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Card
              color="black"
              as={Menu}
              animation="overlay"
              icon="labeled"
              width="thin"
              fluid
            >
              <Card.Content>
              <Image wrapped size="medium" src={this.props.userImageSrc} />
                <Segment style={{ padding: "1em 0em" }} inverted color="blue">
                  <Card.Header as="h2" textAlign="center">
                    {this.props.username}
                  </Card.Header>
                </Segment>
                <Card.Description>
                  <Card.Meta as="h2">Display Name:</Card.Meta>
                  {this.props.displayName}
                </Card.Description>
                <Divider />
                <Card.Description>
                  <Card.Meta as="h2">About Me:</Card.Meta>
                  {this.props.about}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to="/editprofile">
                  <Button size="large" color="yellow" fluid>
                    Edit Profile
                  </Button>
                </Link>
                {/* <Image wrapped size="medium" src={this.props.userImageSrc} /> */}
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column floated="right" width={10}>
            <Segment basic>
              <Header as="h1" textAlign="center" color="blue">
                My Messages
              </Header>
              <Divider/>
              <ProfileMessageList />
              <br></br>
              <Image src={picture} size="medium" centered />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const profilePicture = () => (
  <div>
    <Image size="tiny" verticalAlign="top" /> <span>Top Aligned</span>
    <Divider />
  </div>
);

const mapStateToProps = state => {
  return {
    displayName: state.loggedInUser.displayName,
    about: state.loggedInUser.about,
    username: state.loggedInUser.username,
    userImageSrc: state.loggedInUser.userImage
  };
};
export default connect(
  mapStateToProps,
  profilePicture,
)(Profile);