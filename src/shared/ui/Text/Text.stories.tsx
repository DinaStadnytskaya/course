import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '../../const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.PRIMARY,
    size: TextSize.M,
};
export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.PRIMARY,
    size: TextSize.M,
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.ERROR,
    size: TextSize.L,
};

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.SECONDARY,
    size: TextSize.L,
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ColoredText = Template.bind({});
ColoredText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.SUCCESS,
    size: TextSize.XL,
};

export const ColoredTextDark = Template.bind({});
ColoredTextDark.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.DANGER,
    size: TextSize.XL,
};
ColoredTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WarningText = Template.bind({});
WarningText.args = {
    title: 'hello world',
    text: 'happy new year',
    theme: TextTheme.WARNING,
    size: TextSize.XL,
};
WarningText.decorators = [ThemeDecorator(Theme.DARK)];
export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
};
