<script>
import { storyblokEditable } from '@storyblok/astro';
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
import { navigation } from '../../stores.js';
import { getPaddingClasses } from '../../padding.js';

export let blok;

const className = `
    ${getPaddingClasses(blok)}
`.replace(/\s+/g, ' ').trim();
</script>


<nav {...storyblokEditable(blok)} class="pointer-events-none z-10 bg-primary-500 lg:bg-transparent isolate">
    <div class={className + " lg:hidden pointer-events-auto bg-primary-500"}>
        <slot name="mobile-menu"/>
    </div>
    {#if $navigation.open}
        <div id="page-navigation" class="w-full flex justify-center items-center pointer-events-auto fixed bg-primary-500 -z-10 isolate" transition:fly={{ duration: 300, y: '-100%', x: 0, opacity: 1, easing: quadInOut }}>
            <slot name="mobile"/>
        </div>
    {/if}
    <div class={className + " hidden lg:block pointer-events-auto"}>
        <slot name="desktop"/>
    </div>
</nav>