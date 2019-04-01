import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { expanded } = this.props;
    console.log('nada')
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.library.item.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library.item;
    const { selectLibrary } = this.props;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
            {this.renderDescription()}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = (state.libraryId === ownProps.library.item.id);
  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
