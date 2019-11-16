import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TASK } from '../model';
import { APP_COLORS } from '../../styles/color';

const TaskList = ({ taskList }) => (
  <View>
    {taskList.map((l, i) => (
      <ListItem
        key={i}
        title={l.content}
        bottomDivider
        chevron
        badge={{
          value: l.status,
          textStyle: { color: 'white' },
          badgeStyle:
            l.status === TASK.todoStatus
              ? { backgroundColor: APP_COLORS.accent }
              : { backgroundColor: APP_COLORS.lightPrimaryColor }
        }}
      />
    ))}
  </View>
);

export default TaskList;