const possibleColorDefault = {
    default: {
        primary: "text-primary-700 dark:text-primary-400",
        secondary: "text-secondary-700 dark:text-secondary-400",
        accent_1: "text-accent-1-700 dark:text-accent-1-400",
        accent_2: "text-accent-2-700 dark:text-accent-2-400",
        accent_3: "text-accent-3-700 dark:text-accent-3-400",
        accent_4: "text-accent-4-700 dark:text-accent-4-400",
        accent_5: "text-accent-5-700 dark:text-accent-5-400",
        white: "text-white dark:text-black",
        black: "text-black dark:text-white",
    },
    inverted: {
        primary: "dark:text-primary-700 text-primary-400",
        secondary: "dark:text-secondary-700 text-secondary-400",
        accent_1: "dark:text-accent-1-700 text-accent-1-400",
        accent_2: "dark:text-accent-2-700 text-accent-2-400",
        accent_3: "dark:text-accent-3-700 text-accent-3-400",
        accent_4: "dark:text-accent-4-700 text-accent-4-400",
        accent_5: "dark:text-accent-5-700 text-accent-5-400",
        white: "dark:text-white text-black",
        black: "dark:text-black text-white",
    },
}

const nameDefault = 'color';
const nameInvertedDefault = 'inverted';

export function getTextColorClasses(blok, {possibleColor = possibleColorDefault, name = nameDefault, nameInverted = nameInvertedDefault} = {}) {
    const className = `
        ${possibleColor[!!blok[nameInverted] ? 'inverted' : 'default'][blok[name] || 'black']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}