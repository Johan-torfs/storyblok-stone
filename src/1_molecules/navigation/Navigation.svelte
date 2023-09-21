<script>
    import { storyblokEditable } from '@storyblok/astro';
    import { fly } from 'svelte/transition';
    import { quadInOut } from 'svelte/easing';

    export let blok;
    let navOpen = false;

    function toggle() {
        navOpen = !navOpen;
    }
</script>


<nav {...storyblokEditable(blok)} class="pointer-events-none z-10">
    <div class="md:hidden pointer-events-auto">
        <slot name="mobile-menu"/>
    </div>
    {#if navOpen}
        <div id="page-navigation" class="w-full h-full flex justify-center items-center pointer-events-auto" transition:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="mobile"/>
        </div>
    {/if}
    <div class="hidden md:block pointer-events-auto">
        <slot name="desktop"/>
    </div>
</nav>

<!-- <button class="hamburger pointer-events-auto md:hidden" aria-controls="page-navigation" aria-expanded={navOpen} aria-label="open navigation" on:click={toggle}>
    <svg aria-hidden="true">
        <line x1="5%" y1="10%" x2="80%" y2="10%" stroke-width="3" stroke="#cccccc" stroke-linecap="round" />
        <line x1="5%" y1="50%" x2="95%" y2="50%" stroke-width="3" stroke="#cccccc" stroke-linecap="round" />
        <line x1="5%" y1="90%" x2="80%" y2="90%" stroke-width="3" stroke="#cccccc" stroke-linecap="round" />
    </svg>
</button> -->

<style>    
    /* .hamburger {
        position: fixed;
        top: 0;
        right: 0;
    
        padding: 0;
        margin: var(--nav-padding);
        width: 2rem;
        height: 1.5rem;
    
        z-index: 20;
    
        background: none;
        border: none;
    
        cursor: pointer;
        pointer-events: auto;
    }
    
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
    
    .hamburger.active > svg line {
        transition: 
            translate 0.2s ease-in-out,
            rotate 0.2s 0.2s ease-in-out;
    }
    
    .hamburger > svg line:first-child {
        transform-origin: center 35%;
    }
    
    .hamburger > svg line:last-child {
        transform-origin: center 65%;
    }
    
    .hamburger.active > svg line:first-child {
        translate: -10% 40%;
        rotate: 45deg;
    }
    
    .hamburger.active > svg line:last-child {
        translate: -10% -40%;
        rotate: -45deg;
    }
    
    .hamburger.active > svg line:nth-child(2) {
        opacity: 0;
    } */
</style>