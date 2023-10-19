<script>
import { storeInput } from '../../stores.js';

export let className;
export let storyblokEditableData;
export let blok;
let { name, value, label } = {...blok};

const id = "input-" + Math.random().toString(36).slice(2, 11);
</script>

<div data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    <label for={id} class="cursor-pointer block">{label}</label>
    <input on:change={(e) => storeInput(name, e)} type="text" id={id} name={name} value={value} class={className}>
</div>