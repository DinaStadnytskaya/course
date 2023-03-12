import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecr/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import MainPage from './MainPage';

export default {
    title: 'page/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
