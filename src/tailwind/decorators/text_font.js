const possibleFontDefault = {
    "sans": "font-sans",
    "montserrat": "font-montserrat",
    "fraunces": "font-fraunces",
};

const nameDefault = 'font';

export function getFontClasses(blok, {possibleFont = possibleFontDefault, name = nameDefault} = {}) {    
    const className = `
        ${possibleFont[blok[name] || 'sans']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}