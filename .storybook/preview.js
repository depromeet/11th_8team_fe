import { Global, css } from '@emotion/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'emotion-theming';
import { RecoilRoot } from 'recoil';

import { theme, GlobalStyle } from '../src/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Global
          styles={css`
            body {
              padding: 0 !important;
            }
          `}
        />
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
