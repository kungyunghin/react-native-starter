// @flow
import React, {Component} from "react";
import {connect} from 'react-redux';

import {
  Image,
  ImageBackground,
  Alert
} from "react-native";

import {
  Container,
  Content,
  Text,
  View,
  Button,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Tabs,
  Tab,
  TabHeading,
  Badge
} from "native-base";
import {Grid, Col} from "react-native-easy-grid";

import TodoTab from "./todoTab";
import PostTab from "./postTab";
import AlbumTab from "./albumTab";

import styles from "./styles";
import {getTodosThunk} from '../../actions';

type Props = {
  navigation: () => void
};

class Profile extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.todoWrapper}>
        <View style={styles.todoContainer}>
          {item.completed === true
          ? <Text numberOfLines={2} style={styles.todoComplete}>tick</Text>
          : <Text numberOfLines={2} style={styles.todoComplete}>error</Text>
          }
          <Text numberOfLines={2} style={styles.todoTitle}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    const navigation = this.props.navigation;
    const name = navigation.getParam('name', 'NO-NAME');
    const id = navigation.getParam('id', 'NO-ID');
    const email = navigation.getParam('email', 'NO-email');
    const address = navigation.getParam('address', 'NO-phone');
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/bg-transparent.png")}
          style={styles.container}
        >
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Text>S</Text>
            </Body>
            <Right />
          </Header>

          <View style={styles.profileInfoHeader}>
            <View style={styles.profileInfo}>
              <View style={styles.profileInfoLeft}>
                <Text style={styles.profileInfoTitle}>{name}</Text>
                <Text style={styles.profileInfoEmail}>{email}</Text>
              </View>
              <View style={styles.profileInfoRight}>
                <Icon
                  name="ios-pin"
                  style={styles.profileInfoAddress}
                  onPress={() => Alert.alert(address.street + ", " + address.suite + ", " + address.city)}
                />
              </View>
            </View>
          </View>

          <Tabs style={{ backgroundColor: "#fff" }}>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="md-clipboard" style={styles.tabIcons} />
                </TabHeading>
              }
            >
              <TodoTab navigation={this.props.navigation} userId={id} />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="ios-paper" style={styles.tabIcons} />
                </TabHeading>
              }
            >
              <PostTab navigation={this.props.navigation} userId={id} />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="md-photos" style={styles.tabIcons} />
                </TabHeading>
              }
            >
              <AlbumTab navigation={this.props.navigation} userId={id} />
            </Tab>
          </Tabs>
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;
