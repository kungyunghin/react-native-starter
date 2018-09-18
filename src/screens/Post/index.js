// @flow
import React, {Component} from "react";
import {connect} from 'react-redux';

import {
  ImageBackground,
  FlatList
} from "react-native";

import {
  Container,
  Content,
  Text,
  View,
  Button,
  Icon,
  Header,
  Body,
  Left,
  Right
} from "native-base";

import CustomHeader from "../../components/CustomHeader";
import styles from "./styles";
import {getCommentsThunk} from '../../actions';

type Props = {
  navigation: () => void
};

class Post extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData(this.props.navigation.getParam('id', 'NO-ID'));
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>
          {item.name}
        </Text>
        <Text style={styles.commentSubtitle}>
          {item.email}
        </Text>
        <Text style={styles.commentBody}>
          {item.body}
        </Text>
      </View>
    );
  };

  render() {
    const navigation = this.props.navigation;
    const title = this.props.navigation.getParam('title', 'NO-TITLE');
    const body = this.props.navigation.getParam('body', 'NO-BODY');
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

          <Content
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: "#fff"}}
          >
            <View style={styles.postContainer}>
              <View style={styles.postWrapper}>
                <Text style={styles.postTitle}>
                  {title}
                </Text>
                <Text style={styles.postBody}>
                  {body}
                </Text>
              </View>
              <View style={styles.commentBorder}>
                <Text style={styles.commentContent}>
                  Comments
                </Text>
              </View>
              <FlatList
                data={this.props.comments}
                renderItem={this._renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: postID => dispatch(getCommentsThunk(postID))
  };
}

const mapStateToProps = state => ({
  comments: state.postReducer.comments
});
export default connect(mapStateToProps, bindAction)(Post);
