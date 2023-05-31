import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'home',
        list: [
            { name: 'home', class: ['app', Theme.HOME], color: '#00b4d8' },
            { name: 'light', class: ['app', Theme.LIGHT], color: '#fdd3d9' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#a0b1de' },
        ],
    },
};
addDecorator(RouterDecorator);
// addDecorator(ThemeDecorator(Theme.HOME));
addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
