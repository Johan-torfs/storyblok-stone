const possibleTextWidthDefault = {
    xs: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "text-4xl",
        full: "max-w-full",
        prose: "max-w-prose",
        fit: "max-w-fit",
    },
    sm: {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
        "3xl": "sm:max-w-3xl",
        "4xl": "sm:text-4xl",
        full: "sm:max-w-full",
        prose: "sm:max-w-prose",
        fit: "sm:max-w-fit",
    },
    md: {
        sm: "md:max-w-sm",
        md: "md:max-w-md",
        lg: "md:max-w-lg",
        xl: "md:max-w-xl",
        "2xl": "md:max-w-2xl",
        "3xl": "md:max-w-3xl",
        "4xl": "md:text-4xl",
        full: "md:max-w-full",
        prose: "md:max-w-prose",
        fit: "md:max-w-fit",
    },
    lg: {
        sm: "lg:max-w-sm",
        md: "lg:max-w-md",
        lg: "lg:max-w-lg",
        xl: "lg:max-w-xl",
        "2xl": "lg:max-w-2xl",
        "3xl": "lg:max-w-3xl",
        "4xl": "lg:text-4xl",
        full: "lg:max-w-full",
        prose: "lg:max-w-prose",
        fit: "lg:max-w-fit",
    },
    xl: {
        sm: "xl:max-w-sm",
        md: "xl:max-w-md",
        lg: "xl:max-w-lg",
        xl: "xl:max-w-xl",
        "2xl": "xl:max-w-2xl",
        "3xl": "xl:max-w-3xl",
        "4xl": "xl:text-4xl",
        full: "xl:max-w-full",
        prose: "xl:max-w-prose",
        fit: "xl:max-w-fit",
    },
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'max_width';

export function getTextWidthClasses(blok, {possibleTextWidth = possibleTextWidthDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) { 
    const className = `
        ${screenSizes.sizes.map((screen) => (
            blok[name] ? possibleTextWidth[screen][blok[name][screen]] : ''
        )).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}