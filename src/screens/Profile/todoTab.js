// @flow
import React, {Component} from "react";
import {connect} from 'react-redux';

import {
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
import {getTodosThunk} from '../../actions';

type Props = {
  navigation: () => void
};

class todoTab extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData(this.props.userId);
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.todoWrapper}>
        <View style={styles.todoContainer}>
          {item.completed === true
          ? <Text numberOfLines={2} style={styles.todoComplete}>
              <Icon name="md-checkbox-outline" style={styles.todoCompleteTrue} />
            </Text>
          : <Text numberOfLines={2} style={styles.todoComplete}>
              <Icon name="ios-alert-outline" style={styles.todoCompleteFalse} />
            </Text>
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
    const userId = this.props.userId;
    return (
      <FlatList
        data={this.props.todos.sort((a, b) => a.completed - b.completed)}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: userId => dispatch(getTodosThunk(userId))
  };
}

const mapStateToProps = state => ({
  todos: state.profileReducer.todos
});
export default connect(mapStateToProps, bindAction)(todoTab);
