import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { ThemeProvider } from './src/providers/ThemeProvider';
import { App } from './src/components/App';

const container = document.querySelector('.root');
const root = createRoot(container);

root.render(
    <ThemeProvider>
        <App></App>
    </ThemeProvider>,
);
