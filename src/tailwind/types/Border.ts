import { GuardScreensizes, GuardUnion, type ScreenSize } from "./guards/Guard";

const borderRadiusPosition = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];
const borderRadiusPositionGuardClass: GuardScreensizes = new GuardScreensizes(borderRadiusPosition);
export const borderRadiusPositionGuard = (x: any) => borderRadiusPositionGuardClass.guard(x);

const borderRadiusSize = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const borderRadiusSizeGuardClass: GuardUnion = new GuardUnion(borderRadiusSize);
export const borderRadiusSizeGuard = (x: any) => borderRadiusSizeGuardClass.guard(x);

export interface BorderRadius {
    border_radius_size?: (typeof borderRadiusSize)[number];
    border_radius_position?: ScreenSize<(typeof borderRadiusPosition)[number]>;
}
