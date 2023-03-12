import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/Routerdecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/Styledecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/Themedecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/Theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(StyleDecorator);
