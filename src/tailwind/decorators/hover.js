const possibleColorsDefault = {
    primary: "hover:text-primary-700 dark:hover:text-primary-400",
    secondary: "hover:text-secondary-700 dark:hover:text-secondary-400",
    accent_1: "hover:text-accent-1-700 dark:hover:text-accent-1-400",
    accent_2: "hover:text-accent-2-700 dark:hover:text-accent-2-400",
    accent_3: "hover:text-accent-3-700 dark:hover:text-accent-3-400",
    accent_4: "hover:text-accent-4-700 dark:hover:text-accent-4-400",
    accent_5: "hover:text-accent-5-700 dark:hover:text-accent-5-400",
    white: "dark:hover:text-white hover:text-black",
    black: "dark:hover:text-black hover:text-white",
    default: "hover:text-primary-700 dark:hover:text-primary-400",
}

const possibleBackgroundColorsDefault = {
    primary: "hover:bg-primary-200 dark:hover:bg-primary-700",
    secondary: "hover:bg-secondary-200 dark:hover:bg-secondary-700",
    accent_1: "hover:bg-accent-1-200 dark:hover:bg-accent-1-700",
    accent_2: "hover:bg-accent-2-200 dark:hover:bg-accent-2-700",
    accent_3: "hover:bg-accent-3-200 dark:hover:bg-accent-3-700",
    accent_4: "hover:bg-accent-4-200 dark:hover:bg-accent-4-700",
    accent_5: "hover:bg-accent-5-200 dark:hover:bg-accent-5-700",
    white: "hover:bg-white dark:hover:bg-black",
    black: "hover:bg-black dark:hover:bg-white",
    default: "hover:bg-primary-200 dark:hover:bg-primary-700",
}

const possibleBackgroundColorsIntenseDefault = {
    primary: "hover:bg-primary-600 dark:hover:bg-primary-500",
    secondary: "hover:bg-secondary-600 dark:hover:bg-secondary-500",
    accent_1: "hover:bg-accent-1-600 dark:hover:bg-accent-1-500",
    accent_2: "hover:bg-accent-2-600 dark:hover:bg-accent-2-500",
    accent_3: "hover:bg-accent-3-600 dark:hover:bg-accent-3-500",
    accent_4: "hover:bg-accent-4-600 dark:hover:bg-accent-4-500",
    accent_5: "hover:bg-accent-5-600 dark:hover:bg-accent-5-500",
    white: "hover:bg-white dark:hover:bg-black",
    black: "hover:bg-black dark:hover:bg-white",
    default: "hover:bg-primary-600 dark:hover:bg-primary-500",
}

const possibleBackgroundColorsTranspicuousDefault = {
    primary: "hover:bg-primary-700/20 dark:hover:bg-primary-400/20",
    secondary: "hover:bg-secondary-700/20 dark:hover:bg-secondary-400/20",
    accent_1: "hover:bg-accent-1-700/20 dark:hover:bg-accent-1-400/20",
    accent_2: "hover:bg-accent-2-700/20 dark:hover:bg-accent-2-400/20",
    accent_3: "hover:bg-accent-3-700/20 dark:hover:bg-accent-3-400/20",
    accent_4: "hover:bg-accent-4-700/20 dark:hover:bg-accent-4-400/20",
    accent_5: "hover:bg-accent-5-700/20 dark:hover:bg-accent-5-400/20",
    white: "hover:bg-white dark:hover:bg-black",
    black: "hover:bg-black dark:hover:bg-white",
    default: "hover:bg-primary-700/20 dark:hover:bg-primary-400/20",
}

const possibleLineColorsDefault = {
    primary: "after:bg-primary-700 dark:after:bg-primary-400",
    secondary: "after:bg-secondary-700 dark:after:bg-secondary-400",
    accent_1: "after:bg-accent-1-700 dark:after:bg-accent-1-400",
    accent_2: "after:bg-accent-2-700 dark:after:bg-accent-2-400",
    accent_3: "after:bg-accent-3-700 dark:after:bg-accent-3-400",
    accent_4: "after:bg-accent-4-700 dark:after:bg-accent-4-400",
    accent_5: "after:bg-accent-5-700 dark:after:bg-accent-5-400",
    white: "after:bg-white dark:after:bg-black",
    black: "after:bg-black dark:after:bg-white",
    default: "after:bg-primary-700 dark:after:bg-primary-400",
}

const typeNameDefault = 'hover';
const colorNameDefault = 'hover_color';
const colorTypeNameDefault = 'hover_color_type';

export function getHoverClasses(blok, {possibleColors, typeName = typeNameDefault, colorName = colorNameDefault, colorTypeName = colorTypeNameDefault} = {}) { 
    if (!possibleColors) {
        switch (blok[typeName]) {
            case 'underline':
                possibleColors = possibleLineColorsDefault;
                break;
            case 'background':
                switch (blok[colorTypeName]) {
                    case 'intense':
                        possibleColors = possibleBackgroundColorsIntenseDefault;
                        break;
                    case 'transpicuous':
                        possibleColors = possibleBackgroundColorsTranspicuousDefault;
                        break;
                    default:
                        possibleColors = possibleBackgroundColorsDefault;
                        break;
                }
                break;
            case 'text':
                possibleColors = possibleColorsDefault;
                break;
            default:
                possibleColors = possibleColorsDefault;
                break;
        }
    }
    
    const className = `
        relative cursor-pointer pointer-events-auto transition-all duration-200 ease-in-out
        ${blok[typeName] === 'underline' ? 'relative cursor-pointer pointer-events-auto after:absolute after:block after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-200 after:delay-200 after:ease-in after:rounded-full after:-bottom-1 ' + possibleColors[blok[colorName] || 'default'] : ''}
        ${blok[typeName] === 'background' ? 'rounded-md p-2 ' + possibleColors[blok[colorName] || 'default'] : ''}
        ${blok[typeName] === 'text' ? possibleColors[blok[colorName] || 'default'] : ''}
    `.replace(/\s+/g, ' ').trim();

    return className;
}