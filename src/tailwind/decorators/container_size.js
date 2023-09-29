const possibleContainerSizeDefault = {
    small: "sm:max-w-sm",
    medium: "sm:max-w-2xl",
    large: "sm:max-w-2xl lg:max-w-7xl",
    full: "sm:max-w-full",
}

const nameDefault = 'size';

export function getContainerSizeClasses(blok, {possibleContainerSize = possibleContainerSizeDefault, name = nameDefault} = {}) {
    const className = `
        ${possibleContainerSize[blok[name] || 'large']}
    `.replace(/\s+/g, ' ').trim();

    return className;
}