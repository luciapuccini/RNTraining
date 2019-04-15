import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';

import { Consumer } from '../components/Context';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <Text />;
        }}
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
// <View style={styles.containerStyle}>
//   <Text h4 style={{ color: '#43484d', alignSelf: 'center' }}>
//     Search Results
//   </Text>
//   <View style={{ flex: 1 }}>
//     {/* TODO: each track */}
//     <Card>
//       <Text>Title</Text>
//       <Text>Track name</Text>
//       <Button title="Button" />
//     </Card>
//   </View>
// </View>
export default Tracks;
