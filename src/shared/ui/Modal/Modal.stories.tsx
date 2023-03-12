import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora earum, iure officiadio veritatisuo',
};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora earum, iure officiadio veritatisuo',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
