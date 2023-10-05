const possibleBorderTypesDefault = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double',
    none: 'border-none',
}

const possibleBorderColorsDefault = {
    primary: "border-primary-700 dark:border-primary-400",
    secondary: "border-secondary-700 dark:border-secondary-400",
    accent_1: "border-accent-1-700 dark:border-accent-1-400",
    accent_2: "border-accent-2-700 dark:border-accent-2-400",
    accent_3: "border-accent-3-700 dark:border-accent-3-400",
    accent_4: "border-accent-4-700 dark:border-accent-4-400",
    accent_5: "border-accent-5-700 dark:border-accent-5-400",
    white: "border-white dark:border-black",
    black: "border-black dark:border-white",
    transparent: 'border-transparent',
}

const possibleBorderPositionsDefault = {
    sm: {
        xs: {
            t: {active: 'border-t', inactive: 'border-t-0'},
            r: {active: 'border-r', inactive: 'border-r-0'},
            b: {active: 'border-b', inactive: 'border-b-0'},
            l: {active: 'border-l', inactive: 'border-l-0'},
        },
        sm: {
            t: {active: 'sm:border-t', inactive: 'sm:border-t-0'},
            r: {active: 'sm:border-r', inactive: 'sm:border-r-0'},
            b: {active: 'sm:border-b', inactive: 'sm:border-b-0'},
            l: {active: 'sm:border-l', inactive: 'sm:border-l-0'},
        },
        md: {
            t: {active: 'md:border-t', inactive: 'md:border-t-0'},
            r: {active: 'md:border-r', inactive: 'md:border-r-0'},
            b: {active: 'md:border-b', inactive: 'md:border-b-0'},
            l: {active: 'md:border-l', inactive: 'md:border-l-0'},
        },
        lg: {
            t: {active: 'lg:border-t', inactive: 'lg:border-t-0'},
            r: {active: 'lg:border-r', inactive: 'lg:border-r-0'},
            b: {active: 'lg:border-b', inactive: 'lg:border-b-0'},
            l: {active: 'lg:border-l', inactive: 'lg:border-l-0'},
        },
        xl: {
            t: {active: 'xl:border-t', inactive: 'xl:border-t-0'},
            r: {active: 'xl:border-r', inactive: 'xl:border-r-0'},
            b: {active: 'xl:border-b', inactive: 'xl:border-b-0'},
            l: {active: 'xl:border-l', inactive: 'xl:border-l-0'},
        },
    },
    md: {
        xs: {
            t: {active: 'border-t-2', inactive: 'border-t-0'},
            r: {active: 'border-r-2', inactive: 'border-r-0'},
            b: {active: 'border-b-2', inactive: 'border-b-0'},
            l: {active: 'border-l-2', inactive: 'border-l-0'},
        },
        sm: {
            t: {active: 'sm:border-t-2', inactive: 'sm:border-t-0'},
            r: {active: 'sm:border-r-2', inactive: 'sm:border-r-0'},
            b: {active: 'sm:border-b-2', inactive: 'sm:border-b-0'},
            l: {active: 'sm:border-l-2', inactive: 'sm:border-l-0'},
        },
        md: {
            t: {active: 'md:border-t-2', inactive: 'md:border-t-0'},
            r: {active: 'md:border-r-2', inactive: 'md:border-r-0'},
            b: {active: 'md:border-b-2', inactive: 'md:border-b-0'},
            l: {active: 'md:border-l-2', inactive: 'md:border-l-0'},
        },
        lg: {
            t: {active: 'lg:border-t-2', inactive: 'lg:border-t-0'},
            r: {active: 'lg:border-r-2', inactive: 'lg:border-r-0'},
            b: {active: 'lg:border-b-2', inactive: 'lg:border-b-0'},
            l: {active: 'lg:border-l-2', inactive: 'lg:border-l-0'},
        },
        xl: {
            t: {active: 'xl:border-t-2', inactive: 'xl:border-t-0'},
            r: {active: 'xl:border-r-2', inactive: 'xl:border-r-0'},
            b: {active: 'xl:border-b-2', inactive: 'xl:border-b-0'},
            l: {active: 'xl:border-l-2', inactive: 'xl:border-l-0'},
        },
    },
    lg: {
        xs: {
            t: {active: 'border-t-4', inactive: 'border-t-0'},
            r: {active: 'border-r-4', inactive: 'border-r-0'},
            b: {active: 'border-b-4', inactive: 'border-b-0'},
            l: {active: 'border-l-4', inactive: 'border-l-0'},
        },
        sm: {
            t: {active: 'sm:border-t-4', inactive: 'sm:border-t-0'},
            r: {active: 'sm:border-r-4', inactive: 'sm:border-r-0'},
            b: {active: 'sm:border-b-4', inactive: 'sm:border-b-0'},
            l: {active: 'sm:border-l-4', inactive: 'sm:border-l-0'},
        },
        md: {
            t: {active: 'md:border-t-4', inactive: 'md:border-t-0'},
            r: {active: 'md:border-r-4', inactive: 'md:border-r-0'},
            b: {active: 'md:border-b-4', inactive: 'md:border-b-0'},
            l: {active: 'md:border-l-4', inactive: 'md:border-l-0'},
        },
        lg: {
            t: {active: 'lg:border-t-4', inactive: 'lg:border-t-0'},
            r: {active: 'lg:border-r-4', inactive: 'lg:border-r-0'},
            b: {active: 'lg:border-b-4', inactive: 'lg:border-b-0'},
            l: {active: 'lg:border-l-4', inactive: 'lg:border-l-0'},
        },
        xl: {
            t: {active: 'xl:border-t-4', inactive: 'xl:border-t-0'},
            r: {active: 'xl:border-r-4', inactive: 'xl:border-r-0'},
            b: {active: 'xl:border-b-4', inactive: 'xl:border-b-0'},
            l: {active: 'xl:border-l-4', inactive: 'xl:border-l-0'},
        },
    },
    xl: {
        xs: {
            t: {active: 'border-t-8', inactive: 'border-t-0'},
            r: {active: 'border-r-8', inactive: 'border-r-0'},
            b: {active: 'border-b-8', inactive: 'border-b-0'},
            l: {active: 'border-l-8', inactive: 'border-l-0'},
        },
        sm: {
            t: {active: 'sm:border-t-8', inactive: 'sm:border-t-0'},
            r: {active: 'sm:border-r-8', inactive: 'sm:border-r-0'},
            b: {active: 'sm:border-b-8', inactive: 'sm:border-b-0'},
            l: {active: 'sm:border-l-8', inactive: 'sm:border-l-0'},
        },
        md: {
            t: {active: 'md:border-t-8', inactive: 'md:border-t-0'},
            r: {active: 'md:border-r-8', inactive: 'md:border-r-0'},
            b: {active: 'md:border-b-8', inactive: 'md:border-b-0'},
            l: {active: 'md:border-l-8', inactive: 'md:border-l-0'},
        },
        lg: {
            t: {active: 'lg:border-t-8', inactive: 'lg:border-t-0'},
            r: {active: 'lg:border-r-8', inactive: 'lg:border-r-0'},
            b: {active: 'lg:border-b-8', inactive: 'lg:border-b-0'},
            l: {active: 'lg:border-l-8', inactive: 'lg:border-l-0'},
        },
        xl: {
            t: {active: 'xl:border-t-8', inactive: 'xl:border-t-0'},
            r: {active: 'xl:border-r-8', inactive: 'xl:border-r-0'},
            b: {active: 'xl:border-b-8', inactive: 'xl:border-b-0'},
            l: {active: 'xl:border-l-8', inactive: 'xl:border-l-0'},
        },
    },
}

const mapBorderPositions = {
    t: 1 << 0,
    r: 1 << 1,
    b: 1 << 2,
    l: 1 << 3,
}

const screenSizes = ["xs", "sm", "md", "lg", "xl"];
const borderSizes = ["sm", "md", "lg", "xl"]
const positions = ["t", "r", "b", "l"];

const typeNameDefault = 'border_type';
const colorNameDefault = 'border_color';
const positionNameDefault = 'border_position';
const sizeNameDefault = 'border_size';

var positionState = false;
function togglePositionState(screen, key, size) {
    positionState = !positionState;
    return possibleBorderPositionsDefault[size][screen][key][positionState ? 'active' : 'inactive'];
}

export function getBorderClasses(blok, {typeName = typeNameDefault, colorName = colorNameDefault, positionName = positionNameDefault, sizeName = sizeNameDefault} = {}) {
    if (!blok[typeName]) return '';
    if (!blok[positionName]) return '';
    if (!blok[colorName]) return '';
    if (blok[sizeName] == 'none') return '';

    if (!blok[sizeName] || !borderSizes.includes(blok[sizeName])) blok[sizeName] = 'sm';

    let className = `
        ${possibleBorderTypesDefault[blok[typeName]]}
        ${possibleBorderColorsDefault[blok[colorName]]}
        ${
            positions.map(key => {
                positionState = false;
                return screenSizes.map(screen => (
                    (!(blok[positionName][screen] & mapBorderPositions[key]) != !positionState) ? togglePositionState(screen, key, blok[sizeName]) : ''
                )).join(' ')
            }).join(' ')
        }
    `.replace(/\s+/g, ' ').trim();

    return className;
}