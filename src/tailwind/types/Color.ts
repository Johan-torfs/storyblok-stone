import type { Breakpoint } from "./Breakpoint";

export interface Color {
    color?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
}

export interface BackgroundColor {
    background_color?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
}

export interface BackgroundColorDesktop extends Breakpoint {
    background_color_desktop?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
}
