import type { Breakpoint } from "./Breakpoint";

export interface Color {
    color?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
}

export interface TextColor extends Color {
    inverted?: boolean;
}

export interface BackgroundColor {
    background_color?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
    background_color_type?: "default" | "intense" | "transpicuous";
}

export interface BackgroundGradient extends BackgroundColor {
    background_gradient?: boolean;
}

export interface BackgroundColorDesktop extends Breakpoint {
    background_color_desktop?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
}