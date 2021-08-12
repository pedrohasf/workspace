import React from 'react';
import SimpleLineChart from './SimpleLineChart';

export default {
  component: SimpleLineChart,
  title: 'SimpleLineChart',
};

const Template = (args) => <SimpleLineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  chart: {
    id: '1',
    title: 'Test SimpleLineChart',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  chart: {
    ...Default.args.chart,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  chart: {
    ...Default.args.chart,
    state: 'TASK_ARCHIVED',
  },
};
