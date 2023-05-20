import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите день недели!',
    options: [
        { value: '120', content: 'Первый пункт!' },
        { value: '121', content: 'Второй пункт!' },
        { value: '122', content: 'Третий пункт!' },
        { value: '123', content: 'Четвертый пункт!' },
    ],
};
