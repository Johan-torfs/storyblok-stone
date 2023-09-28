const possibleBackgroundColorsDefault = {
    primary: "bg-primary-100 dark:bg-primary-800",
    secondary: "bg-secondary-100 dark:bg-secondary-800",
    accent_1: "bg-accent-1-100 dark:bg-accent-1-800",
    accent_2: "bg-accent-2-100 dark:bg-accent-2-800",
    accent_3: "bg-accent-3-100 dark:bg-accent-3-800",
    accent_4: "bg-accent-4-100 dark:bg-accent-4-800",
    accent_5: "bg-accent-5-100 dark:bg-accent-5-800",
    white: "bg-white dark:bg-black",
    black: "bg-black dark:bg-white",
    default: "bg-transparent"
}

const possibleBackgroundColorsIntense = {
    primary: "bg-primary-700 dark:bg-primary-400",
    secondary: "bg-secondary-700 dark:bg-secondary-400",
    accent_1: "bg-accent-1-700 dark:bg-accent-1-400",
    accent_2: "bg-accent-2-700 dark:bg-accent-2-400",
    accent_3: "bg-accent-3-700 dark:bg-accent-3-400",
    accent_4: "bg-accent-4-700 dark:bg-accent-4-400",
    accent_5: "bg-accent-5-700 dark:bg-accent-5-400",
    white: "bg-white dark:bg-black",
    black: "bg-black dark:bg-white",
    default: "bg-transparent"
}

const nameDefault = 'background_color';

export function getBackgroundColorClasses(blok, {possibleBackgroundColors = possibleBackgroundColorsDefault, name = nameDefault, type = 'default'} = {}) {
    switch (type) {
        case 'intense':
            possibleBackgroundColors = possibleBackgroundColorsIntense;
            break;
    } 
    const className = `
        ${possibleBackgroundColors[blok[name] || 'default']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}