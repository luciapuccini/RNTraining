import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Box from './components/Box';

class Page3 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Box text='PAGE 3' />
        <Text>
          User:
          {/* {this.props.user.email} */}
        </Text>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps)(Page3);
