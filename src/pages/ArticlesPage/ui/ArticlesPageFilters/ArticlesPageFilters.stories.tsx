import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'page/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;
const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
