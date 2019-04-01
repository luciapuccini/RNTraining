import React from 'react';
import { View, Text, Button } from 'react-native';

const Settings = (props) => (
  <View>
    {
      props.navigation.getParam('navigatedFrom') === 'Page 1' ? (
        < Button
          title='from page 1'
        />
      ) : (
          <Button
            title='From page 2'
          />
        )
    }
  </View>
);
export default Settings;
