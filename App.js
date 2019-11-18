import React from 'react';
import { View, ScrollView } from 'react-native';
import lodash from 'lodash';
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
    id: 1,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 2,
    content: 'Faire du ménage',
    status: 'Terminé'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taskList, isMenuTaskVisible: false, currentTask: {} };
  }

  toggleMenuTaskVisibility = task => {
    let currentTask = task;

    if (this.state.isMenuTaskVisible) {
      currentTask = {};
    }
    this.setState({
      isMenuTaskVisible: !this.state.isMenuTaskVisible,
      currentTask
    });
  };

  deleteCurentTask = () => {
    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.currentTask.id
    });

    let list = this.state.taskList;
    list.splice(index, 1);
    this.setState({ taskList: list, currentTask: {} });
    this.toggleMenuTaskVisibility();
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
          onDeleteCallBack={this.deleteCurentTask}
        />
        <BttonAddTask />
      </View>
    );
  }
}
