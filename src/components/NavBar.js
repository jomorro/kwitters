import React, { Component } from "react";
import Logout from "./Logout";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing secondary color="blue">
          <Menu.Item header>Kwitter</Menu.Item>
          <Menu.Item
            as={Link}
            name="feed"
            active={activeItem === "feed"}
            onClick={this.handleItemClick}
            to="/feed"
          />
          <Menu.Item
            name="profile"
            as={Link}
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            to="/profile"
          />
          <Menu.Menu position="right">
            <Logout />
          </Menu.Menu>
        </Menu>
        <div />
      </Container>
    );
  }
}
