import React from 'react';
import ActionButton from 'react-native-action-button';

const BttonAddTask = ({ onPressCallBack }) => {
  return (
    <ActionButton buttonColor='#00BCD4' onPress={() => onPressCallBack()} />
  );
};

export default BttonAddTask;
