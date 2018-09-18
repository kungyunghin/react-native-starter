// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Walkthrough from "./screens/Walkthrough/";
import Sidebar from "./screens/Sidebar";
import Profile from "./screens/Profile/";
import Friends from "./screens/Friends";
import Post from "./screens/Post";
import Album from "./screens/Album";

const Drawer = DrawerNavigator(
  {
    Friends: { screen: Friends }
  },
  {
    initialRouteName: "Friends",
    contentComponent: props => <Sidebar {...props} />
  }
);

const App = StackNavigator(
  {
    Walkthrough: { screen: Walkthrough },
    Profile: { screen: Profile },
    Post: { screen: Post },
    Album: { screen: Album },
    Drawer: { screen: Drawer }
  },
  {
    index: 0,
    initialRouteName: "Walkthrough",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
