import React, {Component} from "react";
import {connect} from 'react-redux';
import {
  View,
  Modal,
  TouchableNativeFeedback,
  Text,
  Container,
  Content
} from 'react-native';
import Gallery from 'react-native-photo-gallery';

import {getPhotosThunk} from '../../actions';
import styles from "./styles";

type Props = {
  navigation: () => void
};

class Album extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData(this.props.navigation.getParam('id', 'NO-ID'));
  }

  render() {
    const albumData = this.props.photos;
    for (var i = 0; i<albumData.length; i++) {
        albumData[i].image = {uri: albumData[i].url};
        albumData[i].thumb = {uri: albumData[i].thumbnailUrl};
        delete albumData[i].url;
        delete albumData[i].thumbnailUrl;
    }
    return (
      <Gallery
        data={albumData}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: albumId => dispatch(getPhotosThunk(albumId))
  };
}

const mapStateToProps = state => ({
  photos: state.albumReducer.photos
});
export default connect(mapStateToProps, bindAction)(Album);
