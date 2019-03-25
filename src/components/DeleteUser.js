import React, { Component } from "react";
import { deleteUser } from "../Actions/actions";
import { connect } from "react-redux";
import { Button, Divider, Header, Icon, Modal } from "semantic-ui-react";

class DeleteUser extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  handleDeleteUser = event => {
    this.props.deleteUser(this.props.token);
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen} color="red">
            <Icon name="hand peace" />
            
            Delete Account
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header
          textAlign="center"
          verticalAlign="middle"
          icon="hand peace"
          as="h1"
        >
          Are you want to delete your account?
          <Divider />
          <Modal.Actions>
            <Button.Group>
              <Button color="green" onClick={this.handleDeleteUser}>
                <Icon name="trash" /> Trash It!
              </Button>
              <Button.Or />
              <Button color="red" onClick={this.handleClose}>
                <Icon name="smile" /> No thanks!
              </Button>
            </Button.Group>
          </Modal.Actions>
        </Header>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authentication.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: token => dispatch(deleteUser(token))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUser);
