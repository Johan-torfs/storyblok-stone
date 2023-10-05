export interface Border {
    border_type?: "solid" | "dashed" | "dotted" | "double" | "none";
    border_position?: {
        xs?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        sm?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        md?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        lg?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        xl?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
    }
    border_color?: "primary"| "secondary" | "accent_1" | "accent_2" | "accent_3" | "accent_4" | "accent_5" | "white" | "black" | "transparent";
    border_size?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

export interface BorderRadius {
    border_radius_size?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    border_radius_position?: {
        xs?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        sm?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        md?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        lg?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
        xl?: "0000" | "0001" | "0010" | "0011" | "0100" | "0101" | "0110" | "0111" | "1000" | "1001" | "1010" | "1011" | "1100" | "1101" | "1110" | "1111";
    }
}
