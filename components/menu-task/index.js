import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { style } from './style';
import Modal from 'react-native-modal';

const MenuTask = () => {
  return (
    <View>
      <Modal
        isVisible
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
      >
        <View>
          <Text>Que souhaitez vous faire sur la tâche</Text>
        </View>
        <View>
          <Button
            title='Supprimer'
            onPress={() => console.log('onPress supprimer')}
          />
          <Button
            title='Changer status'
            onPress={() => console.log('onPress changer status')}
          />
        </View>
      </Modal>
    </View>
  );
};

export default MenuTask;
