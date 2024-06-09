import type { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import baseTheme from '@shared/styles/theme';

const AllProviders = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
