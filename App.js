import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list';
import BttonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';

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

    this.state = { taskList, isMenuTaskVisible: false };
  }

  toggleMenuTaskVisibility = () => {
    this.setState({ isMenuTaskVisible: !this.state.isMenuTaskVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content='Liste de taches' />
        <ScrollView>
          <TaskList
            taskList={this.state.taskList}
            onPressCallBack={this.toggleMenuTaskVisibility}
          />
        </ScrollView>
        <MenuTask
          isVisible={this.state.isMenuTaskVisible}
          onDisapearcallback={this.toggleMenuTaskVisibility}
        />
        <BttonAddTask />
      </View>
    );
  }
}
