const nameDefault = 'text_uppercase';

export function getTextUppercaseClasses(blok, {name = nameDefault} = {}) {    
    const className = blok[name] ? 'uppercase' : '';
    return className;
}