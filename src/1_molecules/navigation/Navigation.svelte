<script>
import { fade, slide } from 'svelte/transition';
import { sineInOut } from 'svelte/easing';
import { navigation } from '../../stores.js';

export let paddingClasses;
export let storyblokEditableData;
export let revealMobileClasses;
export let revealDesktopClasses

let background = $navigation.open ? 'bg-primary-500/10 dark:bg-primary-400/10' : 'bg-primary-50 dark:bg-primary-950';
$: (background = $navigation.open ? 'bg-primary-500/10 dark:bg-primary-400/10' : 'bg-primary-50 dark:bg-primary-950');

function fadeSlide(node, options) {
    const slideTrans = slide(node, options)
    const fadeTrans = fade(node, options)
    return {
        duration: options.duration,
        easing: options.easing,
        css: t => `
            ${slideTrans.css(t)}
            ${fadeTrans.css(t)}
        `
    };
}
</script>


<nav class={["pointer-events-none z-10 isolate bg-primary-50 dark:bg-primary-950"].join(' ')} data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    <div class={[paddingClasses, revealMobileClasses, background, "pointer-events-auto transition duration-300 ease-in-out"].join(' ')}>
        <slot name="mobile-menu"/>
    </div>
    {#if $navigation.open}
        <div id="page-navigation" class={["bg-primary-500/10 dark:bg-primary-400/10 w-full pointer-events-auto -z-10 isolate"].join(' ')} transition:fadeSlide={{duration: 300, easing: sineInOut}}>
            <slot name="mobile"/>
        </div>
    {/if}
    <div class={[paddingClasses, revealDesktopClasses, "pointer-events-auto"].join(' ')}>
        <slot name="desktop"/>
    </div>
</nav>