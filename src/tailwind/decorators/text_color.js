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

const possibleTextColorDefault = {
    default: {
        primary: "text-black dark:text-white",
        secondary: "text-black dark:text-white",
        accent_1: "text-black dark:text-white",
        accent_2: "text-black dark:text-white",
        accent_3: "text-black dark:text-white",
        accent_4: "text-black dark:text-white",
        accent_5: "text-black dark:text-white",
        white: "text-black dark:text-white",
        black: "text-white dark:text-black",
        default: "text-black dark:text-white",
    },
    intense: {
        primary: "text-white dark:text-black",
        secondary: "text-white dark:text-black",
        accent_1: "text-white dark:text-black",
        accent_2: "text-white dark:text-black",
        accent_3: "text-white dark:text-black",
        accent_4: "text-white dark:text-black",
        accent_5: "text-white dark:text-black",
        white: "text-black dark:text-white",
        black: "text-white dark:text-black",
        default: "text-white dark:text-black",
    },
    transpicuous: {
        primary: "text-black dark:text-white",
        secondary: "text-black dark:text-white",
        accent_1: "text-black dark:text-white",
        accent_2: "text-black dark:text-white",
        accent_3: "text-black dark:text-white",
        accent_4: "text-black dark:text-white",
        accent_5: "text-black dark:text-white",
        white: "text-black dark:text-white",
        black: "text-white dark:text-black",
        default: "text-black dark:text-white",
    },
}

const backgroundColorNameDefault = 'background_color';
const backgroundColorTypeDefault = 'background_color_type';

export function getTextColorOnBackground(blok, {possibleTextColor = possibleTextColorDefault, backgroundColorName = backgroundColorNameDefault, backgroundColorType = backgroundColorTypeDefault} = {}) {
    const className = `
        ${possibleTextColor[blok[backgroundColorType] || 'default'][blok[backgroundColorName] || 'default']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}