import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RatingCard } from './RatingCard';

export default {
    title: 'entity/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;
const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];
