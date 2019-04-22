import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';

import { Consumer } from '../components/Context';
import Track from '../components/Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value.track_list);
          const { track_list, heading } = value;
          if (Object.keys(track_list).length === 0) {
            return <ActivityIndicator size="large" color="#FF8A80" />;
          }
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>{heading}</Text>
              <ScrollView>
                {track_list.map(item => (
                  <Track key={item.track.track_id} track={item.track} />
                ))}
              </ScrollView>
            </View>
          );
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
