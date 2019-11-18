import React from 'react';
import Prompt from 'rn-prompt';

const AddTaskPrompt = ({ isVisible, onCancelCallaBack, onSubmitCallBack }) => {
  return (
    <Prompt
      title='ajoutez une nouvelle tâche'
      placeholder='Ex: acheter du lait'
      defaultValue=''
      visible={isVisible}
      onCancel={() => onCancelCallaBack}
      onSubmit={value => onSubmitCallBack(value)}
    />
  );
};

export default AddTaskPrompt;
