import { getVisibilityClasses } from "./visibility";

const remapBreakpoint = {
    xs: '',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
    default: '',
}

const screenSizes = ["sm", "md", "lg", "xl"];

const nameDefault = 'breakpoint';
const displayDefault = 'block';
const typeDefault = 'mobile';

export function getBreakpointClasses(blok, {name = nameDefault, display = displayDefault, type = typeDefault} = {}) {
    if ((!blok[name] || !screenSizes.includes(blok[name])) && type == 'mobile') return getVisibilityClasses({from: 'xs', to: 'xl'}, {display});
    if ((!blok[name] || !screenSizes.includes(blok[name])) && type == 'desktop') return 'hidden';

    if (type == 'mobile') {
        return getVisibilityClasses({from: 'xs', to: remapBreakpoint[blok[name]]}, {display});
    } else {
        return getVisibilityClasses({from: blok[name], to: 'xl'}, {display});
    }
}