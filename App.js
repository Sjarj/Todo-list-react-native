import React from 'react';
import { View, ScrollView } from 'react-native';
import lodash from 'lodash';
import { TASK } from './components/model';
import Header from './components/header';
import TaskList from './components/task-list';
import BttonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import AddTaskPrompt from './components/add-task-prompt';

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

  toggleTaskStatus = () => {
    const updatedTask = this.state.currentTask;
    updatedTask.status =
      this.state.currentTask.status === TASK.doneStatus
        ? TASK.todoStatus
        : TASK.doneStatus;

    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.currentTask.id
    });

    let updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;
    this.setState({
      taskList: updatedTaskList,
      isMenuTaskVisible: false,
      currentTask: {}
    });
  };

  hideAddPrompt = () => {};

  onAddTask = value => {};

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
          onChangeStatusCallBack={this.toggleTaskStatus}
          onDeleteCallBack={this.deleteCurentTask}
        />
        <AddTaskPrompt
          isVisible={true}
          onCancelCallaBack={this.hideAddPrompt}
          onSubmitCallBack={this.onAddTask}
        />
        <BttonAddTask />
      </View>
    );
  }
}
