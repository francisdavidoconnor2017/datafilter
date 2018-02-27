import React from 'react';
import {Radio} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const RadioButtons = ({handleChange, items}) => {
  const Buttons = items.map((item, i) => {
    return (<RadioButton key={i} value={item}>{item}</RadioButton>);
  });
  return (<RadioGroup onChange={event => handleChange(event.target.value)} defaultValue="Both">
    {Buttons}
  </RadioGroup>)
};
export default RadioButtons;
