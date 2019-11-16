import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list';

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

  render() {
    return (
      <View>
        <Header content='Liste de taches' />
        <TaskList taskList={this.state.taskList} />
      </View>
    );
  }
}
