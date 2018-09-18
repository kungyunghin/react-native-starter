// @flow
import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  ListView,
  FlatList
} from "react-native";

import {
  Container,
  Content,
  Text,
  Thumbnail,
  View,
  List,
  ListItem,
  Button,
  Icon
} from "native-base";
import CustomHeader from "../../components/CustomHeader";

import styles from "./styles";
import {getFriendsThunk} from '../../actions';

type Props = {
  navigation: () => void
};
class Friends extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchData();
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.friendWrapper}>
        <TouchableOpacity
          style={styles.friendTouchable}
          onPress={() => this.props.navigation.navigate("Profile", item)}
        >
          <View style={styles.friendContainer}>
            <Text numberOfLines={2} style={styles.friendName}>
              {item.name}
            </Text>
            <Text numberOfLines={2} style={styles.friendEmail}>
              {item.email}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <Container style={{backgroundColor: "#fff"}}>
        <ImageBackground
          source={require("../../../assets/bg-transparent.png")}
          style={styles.container}
        >
          <CustomHeader hasTabs navigation={navigation} />

          <View style={styles.friendsHeader}>
            <View style={styles.friendsInfo}>
              <Text style={styles.friendsTitle}>Friends</Text>
            </View>
          </View>

          <Content
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: "#fff"}}
          >
            <FlatList
              data={this.props.friends}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
            />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: () => dispatch(getFriendsThunk())
  };
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends
});
export default connect(mapStateToProps, bindAction)(Friends);
