import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitch } from './ThemeSwitch';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/ThemeSwitch',
    component: ThemeSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitch>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
