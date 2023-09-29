const possibleBackgroundColorsDefault = {
    xs: {
        primary: "bg-primary-100 dark:bg-primary-800",
        secondary: "bg-secondary-100 dark:bg-secondary-800",
        accent_1: "bg-accent-1-100 dark:bg-accent-1-800",
        accent_2: "bg-accent-2-100 dark:bg-accent-2-800",
        accent_3: "bg-accent-3-100 dark:bg-accent-3-800",
        accent_4: "bg-accent-4-100 dark:bg-accent-4-800",
        accent_5: "bg-accent-5-100 dark:bg-accent-5-800",
        white: "bg-white dark:bg-black",
        black: "bg-black dark:bg-white",
        transparent: "bg-transparent",
    },
    sm: {
        primary: "sm:bg-primary-100 dark:sm:bg-primary-800",
        secondary: "sm:bg-secondary-100 dark:sm:bg-secondary-800",
        accent_1: "sm:bg-accent-1-100 dark:sm:bg-accent-1-800",
        accent_2: "sm:bg-accent-2-100 dark:sm:bg-accent-2-800",
        accent_3: "sm:bg-accent-3-100 dark:sm:bg-accent-3-800",
        accent_4: "sm:bg-accent-4-100 dark:sm:bg-accent-4-800",
        accent_5: "sm:bg-accent-5-100 dark:sm:bg-accent-5-800",
        white: "sm:bg-white dark:sm:bg-black",
        black: "sm:bg-black dark:sm:bg-white",
        transparent: "sm:bg-transparent",
    },
    md: {
        primary: "md:bg-primary-100 dark:md:bg-primary-800",
        secondary: "md:bg-secondary-100 dark:md:bg-secondary-800",
        accent_1: "md:bg-accent-1-100 dark:md:bg-accent-1-800",
        accent_2: "md:bg-accent-2-100 dark:md:bg-accent-2-800",
        accent_3: "md:bg-accent-3-100 dark:md:bg-accent-3-800",
        accent_4: "md:bg-accent-4-100 dark:md:bg-accent-4-800",
        accent_5: "md:bg-accent-5-100 dark:md:bg-accent-5-800",
        white: "md:bg-white dark:md:bg-black",
        black: "md:bg-black dark:md:bg-white",
        transparent: "md:bg-transparent",
    },
    lg: {
        primary: "lg:bg-primary-100 dark:lg:bg-primary-800",
        secondary: "lg:bg-secondary-100 dark:lg:bg-secondary-800",
        accent_1: "lg:bg-accent-1-100 dark:lg:bg-accent-1-800",
        accent_2: "lg:bg-accent-2-100 dark:lg:bg-accent-2-800",
        accent_3: "lg:bg-accent-3-100 dark:lg:bg-accent-3-800",
        accent_4: "lg:bg-accent-4-100 dark:lg:bg-accent-4-800",
        accent_5: "lg:bg-accent-5-100 dark:lg:bg-accent-5-800",
        white: "lg:bg-white dark:lg:bg-black",
        black: "lg:bg-black dark:lg:bg-white",
        transparent: "lg:bg-transparent",
    },
    xl: {
        primary: "xl:bg-primary-100 dark:xl:bg-primary-800",
        secondary: "xl:bg-secondary-100 dark:xl:bg-secondary-800",
        accent_1: "xl:bg-accent-1-100 dark:xl:bg-accent-1-800",
        accent_2: "xl:bg-accent-2-100 dark:xl:bg-accent-2-800",
        accent_3: "xl:bg-accent-3-100 dark:xl:bg-accent-3-800",
        accent_4: "xl:bg-accent-4-100 dark:xl:bg-accent-4-800",
        accent_5: "xl:bg-accent-5-100 dark:xl:bg-accent-5-800",
        white: "xl:bg-white dark:xl:bg-black",
        black: "xl:bg-black dark:xl:bg-white",
        transparent: "xl:bg-transparent",
    }
}

const possibleBackgroundColorsIntense = {
    xs: {
        primary: "bg-primary-700 dark:bg-primary-400",
        secondary: "bg-secondary-700 dark:bg-secondary-400",
        accent_1: "bg-accent-1-700 dark:bg-accent-1-400",
        accent_2: "bg-accent-2-700 dark:bg-accent-2-400",
        accent_3: "bg-accent-3-700 dark:bg-accent-3-400",
        accent_4: "bg-accent-4-700 dark:bg-accent-4-400",
        accent_5: "bg-accent-5-700 dark:bg-accent-5-400",
        white: "bg-white dark:bg-black",
        black: "bg-black dark:bg-white",
        transparent: "bg-transparent",
    },
    sm: {
        primary: "sm:bg-primary-700 dark:sm:bg-primary-400",
        secondary: "sm:bg-secondary-700 dark:sm:bg-secondary-400",
        accent_1: "sm:bg-accent-1-700 dark:sm:bg-accent-1-400",
        accent_2: "sm:bg-accent-2-700 dark:sm:bg-accent-2-400",
        accent_3: "sm:bg-accent-3-700 dark:sm:bg-accent-3-400",
        accent_4: "sm:bg-accent-4-700 dark:sm:bg-accent-4-400",
        accent_5: "sm:bg-accent-5-700 dark:sm:bg-accent-5-400",
        white: "sm:bg-white dark:sm:bg-black",
        black: "sm:bg-black dark:sm:bg-white",
        transparent: "sm:bg-transparent",
    },
    md: {
        primary: "md:bg-primary-700 dark:md:bg-primary-400",
        secondary: "md:bg-secondary-700 dark:md:bg-secondary-400",
        accent_1: "md:bg-accent-1-700 dark:md:bg-accent-1-400",
        accent_2: "md:bg-accent-2-700 dark:md:bg-accent-2-400",
        accent_3: "md:bg-accent-3-700 dark:md:bg-accent-3-400",
        accent_4: "md:bg-accent-4-700 dark:md:bg-accent-4-400",
        accent_5: "md:bg-accent-5-700 dark:md:bg-accent-5-400",
        white: "md:bg-white dark:md:bg-black",
        black: "md:bg-black dark:md:bg-white",
        transparent: "md:bg-transparent",
    },
    lg: {
        primary: "lg:bg-primary-700 dark:lg:bg-primary-400",
        secondary: "lg:bg-secondary-700 dark:lg:bg-secondary-400",
        accent_1: "lg:bg-accent-1-700 dark:lg:bg-accent-1-400",
        accent_2: "lg:bg-accent-2-700 dark:lg:bg-accent-2-400",
        accent_3: "lg:bg-accent-3-700 dark:lg:bg-accent-3-400",
        accent_4: "lg:bg-accent-4-700 dark:lg:bg-accent-4-400",
        accent_5: "lg:bg-accent-5-700 dark:lg:bg-accent-5-400",
        white: "lg:bg-white dark:lg:bg-black",
        black: "lg:bg-black dark:lg:bg-white",
        transparent: "lg:bg-transparent",
    },
    xl: {
        primary: "xl:bg-primary-700 dark:xl:bg-primary-400",
        secondary: "xl:bg-secondary-700 dark:xl:bg-secondary-400",
        accent_1: "xl:bg-accent-1-700 dark:xl:bg-accent-1-400",
        accent_2: "xl:bg-accent-2-700 dark:xl:bg-accent-2-400",
        accent_3: "xl:bg-accent-3-700 dark:xl:bg-accent-3-400",
        accent_4: "xl:bg-accent-4-700 dark:xl:bg-accent-4-400",
        accent_5: "xl:bg-accent-5-700 dark:xl:bg-accent-5-400",
        white: "xl:bg-white dark:xl:bg-black",
        black: "xl:bg-black dark:xl:bg-white",
        transparent: "xl:bg-transparent",
    }
}

const screenSizes = ["xs", "sm", "md", "lg", "xl"];

const nameDefault = 'background_color';

export function getBackgroundColorClasses(blok, {possibleBackgroundColors = possibleBackgroundColorsDefault, name = nameDefault, type = 'default', screenSize = 'xs'} = {}) {
    switch (type) {
        case 'intense':
            possibleBackgroundColors = possibleBackgroundColorsIntense;
            break;
    } 

    screenSize = screenSizes.includes(screenSize) ? screenSize : 'xs';
    const className = `
        ${possibleBackgroundColors[screenSize][blok[name] || 'transparent']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}