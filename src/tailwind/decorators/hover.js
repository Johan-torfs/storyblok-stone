const possibleColors = {
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

const possibleBackgroundColors = {
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

const possibleLineColors = {
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

export function getHoverClasses(blok, {possibleHover = possibleHoverDefault, typeName = typeNameDefault, colorName = colorNameDefault} = {}) {    
    const className = `
        relative cursor-pointer pointer-events-auto transition-all duration-200 ease-in-out
        ${blok[typeName] === 'underline' ? 'relative cursor-pointer pointer-events-auto after:absolute after:block after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-200 after:delay-200 after:ease-in after:rounded-full after:-bottom-1 ' + possibleLineColors[blok[colorName] || 'default'] : ''}
        ${blok[typeName] === 'background' ? 'rounded-md p-2 ' + possibleBackgroundColors[blok[colorName] || 'default'] : ''}
        ${blok[typeName] === 'text' ? possibleColors[blok[colorName] || 'default'] : ''}
    `.replace(/\s+/g, ' ').trim();

    return className;
}