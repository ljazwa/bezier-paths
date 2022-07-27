declare global {
    type Theme = typeof theme;
}

export const theme = {
    colors: {
        gray: '#CFCFC4',
    },
    sizes: {},
};

export const getFromTheme =
    (namespace: keyof typeof theme) =>
    (key: string) =>
    ({ theme: providedTheme }) =>
        providedTheme[namespace][key];

export const getSize = (key: keyof typeof theme.sizes) =>
    getFromTheme('sizes')(key);

export const getColor = (key: keyof typeof theme.colors) =>
    getFromTheme('colors')(key);
