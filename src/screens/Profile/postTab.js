// @flow
import React, {Component} from "react";
import {connect} from 'react-redux';

import {
  TouchableOpacity,
  FlatList
} from "react-native";

import {
  Container,
  Content,
  Text,
  View,
  Button,
  Icon
} from "native-base";

import styles from "./styles";
import {getPostsThunk} from '../../actions';

type Props = {
  navigation: () => void
};

class postTab extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData(this.props.userId);
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.todoWrapper}
        onPress={() => this.props.navigation.navigate("Post", item)}
      >
        <View style={styles.postContainer}>
          <Text numberOfLines={2} style={styles.postTitle}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={styles.postBody}>
            {item.body}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <FlatList
        data={this.props.posts}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: userId => dispatch(getPostsThunk(userId))
  };
}

const mapStateToProps = state => ({
  posts: state.profileReducer.posts
});
export default connect(mapStateToProps, bindAction)(postTab);
