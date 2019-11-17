import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list';
import BttonAddTask from './components/button-add-task';

const taskList = [
  {
    id: 0,
    content: 'Aller voir Sébastien',
    status: 'En cours'
  },
  {
    id: 0,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 0,
    content: 'Faire du ménage',
    status: 'Terminé'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taskList };
  }

  displayMenu = taskContent => {
    console.log('onPress', taskContent);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content='Liste de taches' />
        <ScrollView>
          <TaskList
            taskList={this.state.taskList}
            onPressCallBack={this.displayMenu}
          />
        </ScrollView>
        <BttonAddTask />
      </View>
    );
  }
}
