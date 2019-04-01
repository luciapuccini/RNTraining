import React, { Component } from 'react';
import { ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
      albums: [],
      ready: false
    };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(resp => this.setState({
        albums: resp.data,
        ready: true
      }, () => console.log('mounted')));
  }
  renderAlbums() {
    return (this.state.albums.map(album =>
      <AlbumDetail key={album.titile} data={album} />

    ));
  }
  render() {
    return (
      <ScrollView>

        { this.state.ready !== false ?
          this.renderAlbums() :
          (
            <View style={[styles.container]}>
              <ActivityIndicator size="large" color="#cd88d0" />
            </View>
          )
        }
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  }
});
export default AlbumList;
