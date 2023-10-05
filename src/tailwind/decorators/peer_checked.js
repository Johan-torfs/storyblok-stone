const possibleColorsDefault = {
    primary: "peer-checked:bg-primary-700/50 dark:peer-checked:bg-primary-400/50",
    secondary: "peer-checked:bg-secondary-700/50 dark:peer-checked:bg-secondary-400/50",
    accent_1: "peer-checked:bg-accent-1-700/50 dark:peer-checked:bg-accent-1-400/50",
    accent_2: "peer-checked:bg-accent-2-700/50 dark:peer-checked:bg-accent-2-400/50",
    accent_3: "peer-checked:bg-accent-3-700/50 dark:peer-checked:bg-accent-3-400/50",
    accent_4: "peer-checked:bg-accent-4-700/50 dark:peer-checked:bg-accent-4-400/50",
    accent_5: "peer-checked:bg-accent-5-700/50 dark:peer-checked:bg-accent-5-400/50",
    white: "peer-checked:bg-white/50 dark:peer-checked:bg-black/50",
    black: "peer-checked:bg-black/50 dark:peer-checked:bg-white/50",
    default: "peer-checked:bg-black/50 dark:peer-checked:bg-white/50"
}

const nameDefault = 'color';

export function getPeerCheckedClasses(blok, {possibleColors = possibleColorsDefault, colorName = nameDefault} = {}) { 
    const className = `
        ${possibleColors[blok[colorName] || 'default']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}