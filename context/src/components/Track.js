/* eslint-disable camelcase */
import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const Track = ({ track, navigation }) => {
  const { track_name, album_name, artist_name } = track;
  return (
    <Card title={artist_name} containerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Icon name="audiotrack" color="#37474f" />
        <Text>Track: {track_name}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Icon name="list" color="#37474f" />
        <Text>Album: {album_name}</Text>
      </View>
      <Button title="View lyrics" type="solid" onPress={() => navigation.navigate('Details')} />
    </Card>
  );
};

export default withNavigation(Track);
