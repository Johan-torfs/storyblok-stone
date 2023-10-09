const possibleShadowDefault = {
    xs: {
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        "2xl": "shadow-2xl",
        inner: "shadow-inner",
        outline: "shadow-outline",
        none: "shadow-none",
    },
    sm: {
        sm: "sm:shadow-sm",
        md: "sm:shadow-md",
        lg: "sm:shadow-lg",
        xl: "sm:shadow-xl",
        "2xl": "sm:shadow-2xl",
        inner: "sm:shadow-inner",
        outline: "sm:shadow-outline",
        none: "sm:shadow-none",
    },
    md: {
        sm: "md:shadow-sm",
        md: "md:shadow-md",
        lg: "md:shadow-lg",
        xl: "md:shadow-xl",
        "2xl": "md:shadow-2xl",
        inner: "md:shadow-inner",
        outline: "md:shadow-outline",
        none: "md:shadow-none",
    },
    lg: {
        sm: "lg:shadow-sm",
        md: "lg:shadow-md",
        lg: "lg:shadow-lg",
        xl: "lg:shadow-xl",
        "2xl": "lg:shadow-2xl",
        inner: "lg:shadow-inner",
        outline: "lg:shadow-outline",
        none: "lg:shadow-none",
    },
    xl: {
        sm: "xl:shadow-sm",
        md: "xl:shadow-md",
        lg: "xl:shadow-lg",
        xl: "xl:shadow-xl",
        "2xl": "xl:shadow-2xl",
        inner: "xl:shadow-inner",
        outline: "xl:shadow-outline",
        none: "xl:shadow-none",
    },    
};

const screenSizesDefault = {
    sizes: ["xs", "sm", "md", "lg", "xl"],
};

const nameDefault = 'shadow';

export function getShadowClasses(blok, {possibleShadow = possibleShadowDefault, screenSizes = screenSizesDefault, name = nameDefault} = {}) {    
    const className = `dark:shadow-white/5
        ${screenSizes.sizes.map((screen) => (blok[name] ? possibleShadow[screen][blok[name][screen]] : '')).join(' ')}
    `.replace(/\s+/g, ' ').trim();

    return className;
}