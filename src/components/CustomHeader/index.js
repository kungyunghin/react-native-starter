// @flow
import React, { Component } from "react";
import { Image } from "react-native";
import { Icon, Button, Left, Right, Body, Header, Text } from "native-base";

import styles from "./styles";

class CustomHeader extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Header hasTabs={this.props.hasTabs}>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon active name="menu" />
          </Button>
        </Left>
        <Body>
          <Text>S</Text>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default CustomHeader;
