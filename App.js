import React from 'react';
import { View, ScrollView } from 'react-native';
import lodash from 'lodash';
import { TASK } from './components/model';
import Header from './components/header';
import TaskList from './components/task-list';
import BttonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import TextPrompt from './components/text-prompt';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      isMenuTaskVisible: false,
      currentTask: {},
      isAddPromptVisible: false,
      idGenerator: 0,
      isRenamePromptVisible: false
    };
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

  hideAddPrompt = () => {
    this.setState({ isAddPromptVisible: false });
  };

  onAddTask = value => {
    const newTask = {
      id: this.state.idGenerator,
      content: value,
      status: TASK.todoStatus
    };
    this.setState({
      taskList: [...this.state.taskList, newTask],
      isAddPromptVisible: false,
      idGenerator: this.state.idGenerator + 1
    });
  };

  displayAddPrompt = () => {
    this.setState({ isAddPromptVisible: true });
  };

  dispalyRenameTask = task => {
    this.setState({ currentTask: task, isRenamePromptVisible: true });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content='Liste de taches' />
        <ScrollView>
          <TaskList
            taskList={this.state.taskList}
            onPressCallBack={this.toggleMenuTaskVisibility}
            onLongPressCallBack={this.dispalyRenameTask}
          />
        </ScrollView>
        <MenuTask
          isVisible={this.state.isMenuTaskVisible}
          onChangeStatusCallBack={this.toggleTaskStatus}
          onDeleteCallBack={this.deleteCurentTask}
        />
        <TextPrompt
          isVisible={this.state.isAddPromptVisible}
          onCancelCallaBack={this.hideAddPrompt}
          onSubmitCallBack={this.onAddTask}
          title='ajouter une nouvelle tâche'
          placeholder='Ex: Acheter du lait'
          defaultValue=''
        />
        <TextPrompt
          isVisible={this.state.isRenamePromptVisible}
          onCancelCallaBack={this.hideRenamePrompt}
          onSubmitCallBack={this.renameTask}
          title='Renomer la tâche'
          defaultValue={this.state.currentTask.content}
        />
        <BttonAddTask onPressCallBack={this.displayAddPrompt} />
      </View>
    );
  }
}
