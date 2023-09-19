<script>
import { store } from '../stores.js';

export let htmlWithClass;

let html = htmlWithClass.replace(new RegExp('{{(' + Object.keys($store.inputs).join('|') + ')}}', 'g'), match => $store.inputs[match.replace(/{{|}}/g, '')]);
</script>

{#if $store.inputs["rating"]}
    {@html html}
{:else}
    <p>Submitting review</p>
{/if}

<!-- new RegExp('{{(' + Object.keys($store.inputs).join('|') + ')}}', 'g'), $store.inputs["$1"] -->