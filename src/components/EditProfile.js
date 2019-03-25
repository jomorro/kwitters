import React, { Component } from "react";
import {
  Card,
  Image,
  Modal,
  Form,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser, uploadUserImage } from "../Actions/actions.js";
import DeleteUser from "./DeleteUser";

class EditProfile extends Component {
  state = { displayName: "", password: "", about: "" };

  handleChange = (e, { value }) => this.setState({ [e.target.name]: value });
  handleSubmit = e => {
    e.preventDefault()
    this.props.updateUser({ ...this.state })
    
    const formData = new FormData(e.target)
    this.props.uploadUserImage(formData)
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" color="blue" icon>
            Edit your profile!
            <Header.Subheader>
              Here you can change your display name, password, or update your about info.
            </Header.Subheader>
          </Header>
          
          <Card>
              <Modal.Content image>
                  <Image wrapped size="medium" src={this.props.userImageSrc} />
              </Modal.Content>

              
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked color="grey">
              <Form.Input
                name="picture"
                type="file"
                title="picture"
              ></Form.Input>
              <Form.Input
                onChange={this.handleChange}
                name="displayName"
                fluid
                label="Display Name"
                placeholder="Display Name"
              />
              <Form.Input
                onChange={this.handleChange}
                name="password"
                fluid
                label="Password"
                placeholder="Password"
              />
              <Form.TextArea
                onChange={this.handleChange}
                name="about"
                label="About"
                placeholder="Tell us more about you..."
              />

              <Form.Button color="green" type="submit">
                <Icon name="checkmark" /> Confirm Changes
              </Form.Button>
              <DeleteUser />
            </Segment>
          </Form>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => dispatch(updateUser(userData)),
    uploadUserImage: formData => dispatch(uploadUserImage(formData))
  };
};

const mapStateToProps = state => {
  
  return {
    token: state.authentication.token,
    userImageSrc: state.loggedInUser.userImage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
