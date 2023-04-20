import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/Theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LangSwitch } from './LangSwitch';

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
