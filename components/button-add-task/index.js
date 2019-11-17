import React from 'react';
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { APP_COLORS } from '../../styles/color';

const BttonAddTask = () => {
  const onPress = () => {
    console.log('add');
  };
  return <ActionButton buttonColor='#00BCD4' onPress={() => onPress()} />;
};

export default BttonAddTask;
