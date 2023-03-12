import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({ loginForm: { username: '123', password: 'asd' } }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    }),
    ThemeDecorator(Theme.DARK),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({ loginForm: { isLoading: true } })];
