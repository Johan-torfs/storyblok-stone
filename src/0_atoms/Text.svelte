<script>
import { store } from '../stores.js';

export let blok;
export let htmlWithClass;

console.log($store.inputs["rating"]);
</script>

{@html htmlWithClass.replace(new RegExp('{{rating}}', 'g'), $store.inputs["rating"])}

<!-- new RegExp('{{(' + Object.keys($store.inputs).join('|') + ')}}', 'g'), $store.inputs["$1"] -->