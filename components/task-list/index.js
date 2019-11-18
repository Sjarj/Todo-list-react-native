import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TASK } from '../model';
import { APP_COLORS } from '../../styles/color';

const TaskList = ({ taskList, onPressCallBack, onLongPressCallBack }) => (
  <View>
    {taskList.map((task, i) => (
      <ListItem
        key={i}
        title={task.content}
        onPress={() => onPressCallBack(task)}
        onLongPress={() => onLongPressCallBack(task)}
        bottomDivider
        chevron
        badge={{
          value: task.status,
          textStyle: { color: 'white' },
          badgeStyle:
            task.status === TASK.todoStatus
              ? { backgroundColor: APP_COLORS.accent }
              : { backgroundColor: APP_COLORS.lightPrimaryColor }
        }}
      />
    ))}
  </View>
);

export default TaskList;
