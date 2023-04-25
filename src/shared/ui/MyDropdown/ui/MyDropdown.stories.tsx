import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { MyDropdown } from './MyDropdown';

export default {
    title: 'shared/MyDropdown',
    component: MyDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyDropdown>;

const Template: ComponentStory<typeof MyDropdown> = (args) => <MyDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <div>Open</div>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <p>Close</p>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
