import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecr/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecr/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecr/ThemeDecorator';
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
