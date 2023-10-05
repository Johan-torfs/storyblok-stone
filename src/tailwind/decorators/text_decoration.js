const possibleDecorationDefault = {
    underline: "underline",
    "line-through": "line-through",
    overline: "overline",
    none: "no-underline",
    default: '',
};

const nameDefault = 'text_decoration';

export function getTextDecorationClasses(blok, {possibleDecoration = possibleDecorationDefault, name = nameDefault} = {}) {    
    const className = `
        ${possibleDecoration[blok[name] || 'default']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}