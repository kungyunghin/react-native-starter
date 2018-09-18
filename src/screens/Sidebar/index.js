// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity} from "react-native";

import {NavigationActions} from "react-navigation";
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import {Grid, Col} from "react-native-easy-grid";

import styles from "./style";
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: "Login"})]
});
class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/sidebar-transparent.png")}
          style={styles.background}
        >
          <Content style={styles.drawerContent}>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Friends");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-people-outline" />
              <Text style={styles.linkText}>FRIENDS</Text>
            </ListItem>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default SideBar;
