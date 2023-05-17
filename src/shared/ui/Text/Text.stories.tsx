import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import { Text, TextSize, TextTheme } from './Text';

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
    text: 'happy new year',
    theme: TextTheme.PRIMARY,
    size: TextSize.M,
};
export const primaryTextDark = Template.bind({});
primaryTextDark.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.PRIMARY,
    size: TextSize.M,
};
primaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const errorText = Template.bind({});
errorText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.ERROR,
    size: TextSize.L,
};

export const errorTextDark = Template.bind({});
errorTextDark.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.SECONDARY,
    size: TextSize.L,
};
errorTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const coloredText = Template.bind({});
coloredText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.SUCCESS,
    size: TextSize.XL,
};

export const coloredTextDark = Template.bind({});
coloredTextDark.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.DANGER,
    size: TextSize.XL,
};
coloredTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const warningText = Template.bind({});
warningText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.WARNING,
    size: TextSize.XL,
};
warningText.decorators = [ThemeDecorator(Theme.DARK)];
export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
};
