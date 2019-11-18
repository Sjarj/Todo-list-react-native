import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import lodash from 'lodash';
import { TASK } from './components/model';
import Header from './components/header';
import TaskList from './components/task-list';
import BttonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import TextPrompt from './components/text-prompt';
import { style } from './style';

const storageKey = 'taskList';

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
  componentWillMount() {
    AsyncStorage.getItem(storageKey).then(storedTaskList => {
      if (storedTaskList) {
        this.setState({ taskList: JSON.parse(storedTaskList) }, () => {
          this.setState({
            idGenerator:
              this.state.taskList[this.state.taskList.length - 1].id + 1
          });
        });
      }
    });
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
    this.setState({ taskList: list, currentTask: {} }, () => {
      this.toggleMenuTaskVisibility();
      this.saveTaskList();
    });
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
    this.setState(
      {
        taskList: updatedTaskList,
        isMenuTaskVisible: false,
        currentTask: {}
      },
      () => {
        this.saveTaskList();
      }
    );
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
    this.setState(
      {
        taskList: [...this.state.taskList, newTask],
        isAddPromptVisible: false,
        idGenerator: this.state.idGenerator + 1
      },
      () => {
        this.saveTaskList();
      }
    );
  };

  displayAddPrompt = () => {
    this.setState({ isAddPromptVisible: true });
  };

  dispalyRenameTask = task => {
    this.setState({ currentTask: task, isRenamePromptVisible: true });
  };

  hideRenamePrompt = () => {
    this.setState({ isRenamePromptVisible: false, currentTask: {} });
  };

  renameTask = value => {
    const updatedTask = this.state.currentTask;
    updatedTask.content = value;

    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.currentTask.id
    });

    let updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;

    this.setState({ taskList: updatedTaskList }, () => {
      this.hideRenamePrompt();
      this.saveTaskList();
    });
  };

  saveTaskList = () => {
    AsyncStorage.setItem(storageKey, JSON.stringify(this.state.taskList));
  };

  renderTaskList = () => {
    if (this.state.taskList.length > 0) {
      return (
        <TaskList
          taskList={this.state.taskList}
          onPressCallBack={this.toggleMenuTaskVisibility}
          onLongPressCallBack={this.dispalyRenameTask}
        />
      );
    }
    return (
      <View style={style.noTask}>
        <Text>Cliquer sur le bouton ajouter por créer une tache</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content='Liste de taches' />
        <ScrollView>{this.renderTaskList()}</ScrollView>
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
