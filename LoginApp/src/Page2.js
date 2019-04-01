import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Box from './components/Box';

const Page2 = (props) =>
  (
    <Box text='PAGE 2'>

      <View style={styles.sectionStyle}>
        <Text>
          Next Page:
      </Text>
        <Button
          title='Change!'
          onPress={() => props.navigation.navigate('Settings')}
        />
      </View>
    </Box>
  );


export default Page2;

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
