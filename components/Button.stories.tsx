import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  backgroundColor: 'bg-red-300',
  hoverColor: 'bg-red-600',
  activeColor: 'bg-red-900'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  backgroundColor: 'bg-blue-300',
  hoverColor: 'bg-blue-600',
  activeColor: 'bg-blue-900'
};

export const ButtonMediumWithIcon = Template.bind({});
ButtonMediumWithIcon.args = {
  size: 'medium',
  backgroundColor: 'bg-blue-300',
  hoverColor: 'bg-blue-600',
  activeColor: 'bg-blue-900',
  icon: true
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  size: 'large',
  backgroundColor: 'bg-blue-300',
  hoverColor: 'bg-blue-600',
  activeColor: 'bg-blue-900',
  icon: true,
  outline: true
};
