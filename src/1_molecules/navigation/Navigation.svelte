<script>
import { storyblokEditable } from '@storyblok/astro';
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
import { navigation } from '../../stores.js';
import { getPaddingClasses } from '../../padding.js';

export let blok;

const className = `
    ${getPaddingClasses(blok)}
    pointer-events-none z-10
`.replace(/\s+/g, ' ').trim();
</script>


<nav {...storyblokEditable(blok)} class={className}>
    <div class="lg:hidden pointer-events-auto">
        <slot name="mobile-menu"/>
    </div>
    {#if $navigation.open}
        <div id="page-navigation" class="w-full h-full flex justify-center items-center pointer-events-auto" transition:fly={{ duration: 300, y: '-100%', x: 0, opacity: 1, easing: quadInOut }}>
            <slot name="mobile"/>
        </div>
    {/if}
    <div class="hidden lg:block pointer-events-auto">
        <slot name="desktop"/>
    </div>
</nav>