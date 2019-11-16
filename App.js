import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myText: 'Un text par défaut'
    };
  }

  render() {
    return (
      <View>
        <Header content='Liste de taches' />
        <Button
          large
          icon={<Icon name='code' />}
          iconRight
          title='Button with right icon'
        />
      </View>
    );
  }
}
