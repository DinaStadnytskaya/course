import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LangSwitch } from './LangSwitch';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/LangSwitch',
    component: LangSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitch>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LangSwitch> = (args) => <LangSwitch {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
