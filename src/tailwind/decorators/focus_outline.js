const possibleColorsDefault = {
    primary: "focus-visible:outline-primary-950 dark:focus-visible:outline-primary-700",
    secondary: "focus-visible:outline-secondary-950 dark:focus-visible:outline-secondary-700",
    accent_1: "focus-visible:outline-accent-1-950 dark:focus-visible:outline-accent-1-700",
    accent_2: "focus-visible:outline-accent-2-950 dark:focus-visible:outline-accent-2-700",
    accent_3: "focus-visible:outline-accent-3-950 dark:focus-visible:outline-accent-3-700",
    accent_4: "focus-visible:outline-accent-4-950 dark:focus-visible:outline-accent-4-700",
    accent_5: "focus-visible:outline-accent-5-500 dark:focus-visible:outline-accent-5-700",
    white: "focus-visible:outline-white dark:focus-visible:outline-black",
    black: "focus-visible:outline-black dark:focus-visible:outline-white",
}

const nameDefault = 'color';

export function getFocusOutlineClasses(blok, {possibleColors = possibleColorsDefault, colorName = nameDefault} = {}) { 
    const className = `
        ${possibleColors[blok[colorName] || 'default']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}