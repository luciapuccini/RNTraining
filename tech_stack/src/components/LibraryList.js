import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return (
      <ListItem library={library} />
      );
  }

  render() {
    const { libraries } = this.props;
    return (

        <FlatList
          data={libraries}
          renderItem={this.renderItem}
          keyExtractor={library => library.title}

        />

      );
  }
}
const mapStateToProps = state => ({
    libraries: state.libraries
  });

export default connect(mapStateToProps)(LibraryList);
