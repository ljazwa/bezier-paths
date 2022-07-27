import * as React from 'react';
import {
    ThemeProvider as BaseThemeProvider,
    createGlobalStyle,
} from 'styled-components';

import { ChildrenProps } from '../components/commonTypes';
import { theme } from '../styles/theme';

const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;
    }

    div#root {
        height: 100%;
    }
`;

export const ThemeProvider = ({ children }: ChildrenProps) => (
    <BaseThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </BaseThemeProvider>
);
