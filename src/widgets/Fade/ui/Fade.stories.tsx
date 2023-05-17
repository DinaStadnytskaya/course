import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import Fade from './Fade';

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
