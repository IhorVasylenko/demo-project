import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import { I18nDecorator } from '../../src/shared/config/storybook/i18nDecorator/i18nDecorator';

addDecorator(StyleDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: Theme.LIGHT,
    list: [
      { name: Theme.LIGHT, class: ['app', 'light'], color: 'rgb(236 225 225 / 100%)' },
      { name: Theme.DARK, class: ['app', 'dark'], color: 'rgb(1 1 90 / 100%)' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
// addDecorator(I18nDecorator);
