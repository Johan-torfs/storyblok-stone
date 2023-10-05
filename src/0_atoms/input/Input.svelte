<script>
import { storyblokEditable } from '@storyblok/astro';
import { inputs } from '../../stores.js';

export let blok;

const id = "input-" + Math.random().toString(36).slice(2, 11);

const possibleColorsRadio = {
    primary: "bg-primary-700/10 dark:bg-primary-400/10 hover:bg-primary-700/20 dark:hover:bg-primary-400/20 peer-checked:bg-primary-700/50 dark:peer-checked:bg-primary-400/50",
    secondary: "bg-secondary-700/10 dark:bg-secondary-400/10 hover:bg-secondary-700/20 dark:hover:bg-secondary-400/20 peer-checked:bg-secondary-700/50 dark:peer-checked:bg-secondary-400/50",
    accent_1: "bg-accent-1-700/10 dark:bg-accent-1-400/10 hover:bg-accent-1-700/20 dark:hover:bg-accent-1-400/20 peer-checked:bg-accent-1-700/50 dark:peer-checked:bg-accent-1-400/50",
    accent_2: "bg-accent-2-700/10 dark:bg-accent-2-400/10 hover:bg-accent-2-700/20 dark:hover:bg-accent-2-400/20 peer-checked:bg-accent-2-700/50 dark:peer-checked:bg-accent-2-400/50",
    accent_3: "bg-accent-3-700/10 dark:bg-accent-3-400/10 hover:bg-accent-3-700/20 dark:hover:bg-accent-3-400/20 peer-checked:bg-accent-3-700/50 dark:peer-checked:bg-accent-3-400/50",
    accent_4: "bg-accent-4-700/10 dark:bg-accent-4-400/10 hover:bg-accent-4-700/20 dark:hover:bg-accent-4-400/20 peer-checked:bg-accent-4-700/50 dark:peer-checked:bg-accent-4-400/50",
    accent_5: "bg-accent-5-700/10 dark:bg-accent-5-400/10 hover:bg-accent-5-700/20 dark:hover:bg-accent-5-400/20 peer-checked:bg-accent-5-700/50 dark:peer-checked:bg-accent-5-400/50",
    white: "bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 peer-checked:bg-white/50 dark:peer-checked:bg-black/50",
    black: "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 peer-checked:bg-black/50 dark:peer-checked:bg-white/50",
    default: "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 peer-checked:bg-black/50 dark:peer-checked:bg-white/50"
}

const possibleRounded = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
}

const possiblePaddingX = {
    0: "px-0",
    2: "px-2",
    4: "px-4",
    6: "px-6",
    8: "px-8",
    16: "px-16",
    24: "px-24",
};

const possiblePaddingY = {
    0: "py-0",
    2: "py-2",
    4: "py-4",
    6: "py-6",
    8: "py-8",
    16: "py-16",
    24: "py-24",
};

const classNameRadio = `
    ${possibleColorsRadio[blok.color || "default"]}
    ${possibleRounded[blok.rounded || "none"]}
    ${possiblePaddingX[blok.padding_x || 4]}
    ${possiblePaddingY[blok.padding_y || 2]}
    aspect-square w-12 flex items-center justify-center
`.replace(/\s+/g, " ").trim();

function storeInput(e) {
    inputs.update((s) => {
        s[blok.name] = e.target.value;
        return s;
    });
}
</script>

{#if blok.type == "radio"}
<div class:list={["flex", {"flex-col": (blok.label_position == "top" || blok.label_position == "bottom"), "flex-reverse": (blok.label_position == "bottom" || blok.label_position == "right")}]} {...storyblokEditable(blok)}>
    <input on:change={storeInput} type={blok.type} id={id} name={blok.name} value={blok.value} class={"peer " + (blok.label_position == "inside" ? "hidden" : "")}>
    {#if blok.label_position != "inside"}
        <label for={id} class="cursor-pointer">{blok.label}</label>
    {:else}
        <label for={id} class={"cursor-pointer " + classNameRadio}>{blok.label}</label>
    {/if}
</div>
{/if}