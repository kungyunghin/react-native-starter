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
  View
} from "native-base";

import styles from "./styles";
import {getAlbumsThunk} from '../../actions';

type Props = {
  navigation: () => void
};

class albumTab extends Component {
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
        style={styles.albumWrapper}
        onPress={() => this.props.navigation.navigate("Album", item)}
      >
        <View style={styles.albumContainer}>
          <Text numberOfLines={2} style={styles.albumTitle}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const navigation = this.props.navigation;
    const userId = this.props.userId;
    return (
      <FlatList
        data={this.props.albums}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: userId => dispatch(getAlbumsThunk(userId))
  };
}

const mapStateToProps = state => ({
  albums: state.profileReducer.albums
});
export default connect(mapStateToProps, bindAction)(albumTab);
