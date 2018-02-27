import React from 'react';
import {Radio} from 'antd';
import StyledRadioGroup from './styles/StyledRadioGroup';

const RadioButton = Radio.Button;

const RadioButtons = ({handleChange, items}) => {
  const Buttons = items.map((item, i) => {
    return (<RadioButton key={i} value={item}>{item}</RadioButton>);
  });
  return (<StyledRadioGroup onChange={event => handleChange(event.target.value)} defaultValue="Both">
    {Buttons}
  </StyledRadioGroup>)
};
export default RadioButtons;
