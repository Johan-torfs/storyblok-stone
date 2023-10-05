export interface TextFont {
    font?: "sans" | "montserrat" | "fraunces";
}

export interface TextSize {
    font_size?: {
        xs: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
        sm: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
        md: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
        lg: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
        xl: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    };
}

export interface TextCenter {
    text_center?: boolean;
}

export interface TextWidth {
    max_width?: {
        xs?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "prose" | "fit";
        sm?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "prose" | "fit";
        md?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "prose" | "fit";
        lg?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "prose" | "fit";
        xl?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "prose" | "fit";
    }
}

export interface TextDecoration {
    text_decoration?: "underline" | "line-through" | "overline" | "none";
}

export interface TextUpperCase {
    text_uppercase?: boolean;
}