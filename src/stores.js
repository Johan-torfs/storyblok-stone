import { writable } from 'svelte/store';

export const inputs = writable({});
export const navigation = writable({
    open: false,
});