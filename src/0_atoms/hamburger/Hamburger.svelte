<script>
import { storyblokEditable } from '@storyblok/astro';
import { navigation } from '../../stores.js';

export let blok;

function toggle() {
    navigation.update((s) => {
        s['open'] = !s['open'];
        return s;
    });
}
</script>



<button {...storyblokEditable(blok)} class="hamburger pointer-events-auto lg:hidden w-8 h-6" aria-controls={blok.controls || "page navigation"} aria-expanded={$navigation.open} aria-label="open navigation" on:click={toggle}>
    <svg aria-hidden="true">
        <line x1="15%" y1="10%" x2="95%" y2="10%" stroke-width="3" stroke="#000000" stroke-linecap="round" />
        <line x1="5%" y1="50%" x2="95%" y2="50%" stroke-width="3" stroke="#000000" stroke-linecap="round" />
        <line x1="15%" y1="90%" x2="95%" y2="90%" stroke-width="3" stroke="#000000" stroke-linecap="round" />
    </svg>
</button>

<style>
.hamburger > svg {
    display: block;
    width: 100%;
    height: 100%;
    transition: translate 0.2s ease-in-out;
}

.hamburger > svg line {
    transition: 
        rotate 0.2s ease-in-out,
        translate 0.2s 0.2s ease-in-out,
        opacity 0.2s 0.2s ease-in-out;
}

.hamburger[aria-expanded="true"] > svg line {
    transition: 
        translate 0.2s ease-in-out,
        rotate 0.2s 0.2s ease-in-out;
}

.hamburger > svg line:first-child {
    transform-origin: center 0%;
}

.hamburger > svg line:last-child {
    transform-origin: center 100%;
}

.hamburger[aria-expanded="true"] > svg line:first-child {
    translate: -10% 40%;
    rotate: 45deg;
}

.hamburger[aria-expanded="true"] > svg line:last-child {
    translate: -10% -40%;
    rotate: -45deg;
}

.hamburger[aria-expanded="true"] > svg line:nth-child(2) {
    opacity: 0;
}
</style>