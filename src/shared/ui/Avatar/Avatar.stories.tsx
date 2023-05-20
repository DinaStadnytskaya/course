import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileImg from './profile1.png';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Big = Template.bind({});
Big.args = {
    size: 150,
    src: ProfileImg,
};

export const Small = Template.bind({});
Small.args = {
    size: 70,
    src: ProfileImg,
};
