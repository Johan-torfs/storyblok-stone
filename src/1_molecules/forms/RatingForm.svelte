<script>
import { storyblokEditable } from '@storyblok/astro';
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

export let blok;

const possiblePadding = {
    0: "py-0 px-0",
    2: "py-2 px-2",
    4: "py-4 px-4",
    6: "py-6 px-6",
    8: "py-8 px-8",
    16: "py-16 px-16",
    24: "py-24 px-24",
};

const className = `
    ${blok.padding ? possiblePadding[blok.padding] : ''}
    overflow-hidden
`.replace(/\s+/g, ' ').trim();


let formState = 0;
let finalState = 0;
let postSubmitState = 0;

blok.states.forEach((state, index) => {
    if (state.type == "final") {
        finalState = index;
    }
    if (state.type == "post-submit") {
        postSubmitState = index;
    }
});

function updateForm(e) {
    if (formState == finalState) {
        submitForm(e);
        if (postSubmitState == 0) {
            e.target.reset();
            formState = 0;
        } else {
            formState = postSubmitState;
        }
    } else {
        formState++;
    }
}

function submitForm(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}
</script>

<form on:submit|preventDefault={updateForm} class:list={["flex flex-nowrap", className]} {...storyblokEditable(blok)}>
    {#if formState == 0}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-0"/>
        </div>
    {:else if formState == 1}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-1"/>
        </div>
    {:else if formState == 2}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-2"/>
        </div>
    {:else if formState == 3}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-3"/>
        </div>
    {:else if formState == 4}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-4"/>
        </div>
    {:else if formState == 5}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-5"/>
        </div>
    {:else if formState == 6}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-6"/>
        </div>
    {:else if formState == 7}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-7"/>
        </div>
    {:else if formState == 8}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-8"/>
        </div>
    {:else if formState == 9}
        <div  in:fly={{ duration: 300, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{ duration: 300, x: '-100%', y: 0, opacity: 1, easing: quadInOut }}>
            <slot name="name-9"/>
        </div>
    {/if}
</form>