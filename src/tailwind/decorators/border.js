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
}

const mapBorderPositions = {
    t: 1 << 0,
    r: 1 << 1,
    b: 1 << 2,
    l: 1 << 3,
}

const screenSizes = ["xs", "sm", "md", "lg", "xl"];
const positions = ["t", "r", "b", "l"];

const typeNameDefault = 'border_type';
const colorNameDefault = 'border_color';
const positionNameDefault = 'border_position';

var positionState = false;
function togglePositionState(screen, key) {
    positionState = !positionState;
    return possibleBorderPositionsDefault[screen][key][positionState ? 'active' : 'inactive'];
}

export function getBorderClasses(blok, {typeName = typeNameDefault, colorName = colorNameDefault, positionName = positionNameDefault} = {}) {
    if (!blok[typeName]) return '';
    if (!blok[positionName]) return '';
    if (!blok[colorName]) return '';

    let className = `
        ${possibleBorderTypesDefault[blok[typeName]]}
        ${possibleBorderColorsDefault[blok[colorName]]}
        ${
            positions.map(key => {
                positionState = false;
                return screenSizes.map(screen => (
                    (!(blok[positionName][screen] & mapBorderPositions[key]) != !positionState) ? togglePositionState(screen, key) : ''
                )).join(' ')
            }).join(' ')
        }
    `.replace(/\s+/g, ' ').trim();

    return className;
}