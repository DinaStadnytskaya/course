import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecr/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const primaryText = Template.bind({});
primaryText.args = {
    title: 'hello world',
    theme: TextTheme.PRIMARY,
};
export const primaryTextDark = Template.bind({});
primaryTextDark.args = {
    title: 'hello world',
    theme: TextTheme.PRIMARY,
};
primaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const coloredTitle = Template.bind({});
coloredTitle.args = {
    title: 'hello world',
    theme: TextTheme.ERROR,
};

export const coloredTitleDark = Template.bind({});
coloredTitleDark.args = {
    title: 'hello world',
    theme: TextTheme.ERROR,
};
coloredTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const coloredText = Template.bind({});
coloredText.args = {
    text: 'happy new year',
    theme: TextTheme.ERROR,
};

export const coloredTextDark = Template.bind({});
coloredTextDark.args = {
    text: 'happy new year',
    theme: TextTheme.ERROR,
};
coloredTextDark.decorators = [ThemeDecorator(Theme.DARK)];
