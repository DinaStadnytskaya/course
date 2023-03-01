import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/Styledecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/Themedecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/Theme';
import { RouterDecorator } from '../../src/shared/config/storybook/Routerdecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
