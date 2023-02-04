import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Thing } from './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Thing,
} as ComponentMeta<typeof Thing>;

export const Primary: ComponentStory<typeof Thing> = () => <Thing></Thing>;
