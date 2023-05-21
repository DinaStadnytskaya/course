import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '../../../const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;
const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    border: '0%',
    width: 600,
    height: 100,
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    border: '50%',
    width: 200,
    height: 200,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
Circle.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
