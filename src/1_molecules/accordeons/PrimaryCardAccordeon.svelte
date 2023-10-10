<script>
import { slide } from 'svelte/transition';

export let className;
export let storyblokEditableData;

let open = false;
function toggle() {
    open = !open;
}

</script>

<div class={className + ' transition px-4' + (open ? ' bg-primary-500/10 dark:bg-primary-400/10 rounded-2xl' : ' border-b border-primary-900/10 dark:border-primary-300/10')} data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']} >
    <button class="block w-full mb-4" on:click={toggle}>
        <div class="flex justify-between items-center">
            <slot name="title"/>
            <svg class={"h-6 w-6 fill-current transition-transform" + ( open ? ' rotate-180' : '')} viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
        </div>
    </button>
    {#if open}
    <div transition:slide>
        <slot name="content"/>
    </div>
    {/if}
</div>