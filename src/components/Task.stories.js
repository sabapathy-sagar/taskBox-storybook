import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
    id: '1',
    title: "some task",
    state: "TASK_INBOX",
    updatedAt: new Date()
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};

//to initiate Storybook we first call the storiesOf() function top register the component
storiesOf('Task', module)
    .add('default', () => <Task task={task} {...actions}></Task>)
    .add('pinned', () => <Task task={{...task, state:"TASK_PINNED"}} {...actions}></Task>)
    .add('archived', () => <Task task={{...task, state: "TASK_ARCHIVED"}} {...actions}></Task>)
