import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { style } from './style';
import Modal from 'react-native-modal';

const MenuTask = ({
  isVisible,
  onDisapearcallBack,
  onDeleteCallBack,
  onChangeStatusCallBack
}) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
      >
        <View style={style.modal}>
          <View style={style.textView}>
            <Text>Que souhaitez vous faire sur la tâche</Text>
          </View>
          <View style={style.buttonView}>
            <Button
              buttonStyle={style.buttonDelete}
              title='Supprimer'
              onPress={() => onDeleteCallBack()}
            />
            <Button
              buttonStyle={style.buttonChangeStatus}
              title='Changer status'
              onPress={() => onDisapearcallbBack()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MenuTask;
