<script>
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
import { navigation } from '../../stores.js';

export let paddingClasses;
export let backgroundColorClasses;
export let storyblokEditableData;
export let revealMobileClasses;
export let revealDesktopClasses
</script>


<nav class={[backgroundColorClasses, "pointer-events-none z-10 isolate"].join(' ')} data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    <div class={[paddingClasses, backgroundColorClasses, revealMobileClasses, "pointer-events-auto"].join(' ')}>
        <slot name="mobile-menu"/>
    </div>
    {#if $navigation.open}
        <div id="page-navigation" class={[backgroundColorClasses, "w-full flex justify-center items-center pointer-events-auto fixed -z-10 isolate"].join(' ')} transition:fly={{ duration: 300, y: '-100%', x: 0, opacity: 1, easing: quadInOut }}>
            <slot name="mobile"/>
        </div>
    {/if}
    <div class={[paddingClasses, revealDesktopClasses, "pointer-events-auto"].join(' ')}>
        <slot name="desktop"/>
    </div>
</nav>