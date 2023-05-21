import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import Fade from './Fade';
import { Theme } from '../../../shared/const/theme';

export default {
    title: 'widgets/Fade',
    component: Fade,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Fade>;
const Template: ComponentStory<typeof Fade> = (args) => <Fade {...args} />;
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
