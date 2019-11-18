import React from 'react';
import Prompt from 'rn-prompt';

const TextPrompt = ({
  isVisible,
  onCancelCallaBack,
  onSubmitCallBack,
  title,
  placeholder,
  defaultValue
}) => {
  return (
    <Prompt
      title={title}
      placeholder={placeholder}
      defaultValue={defaultValue}
      visible={isVisible}
      onCancel={() => onCancelCallaBack()}
      onSubmit={value => onSubmitCallBack(value)}
    />
  );
};

export default TextPrompt;
