import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

type Animations = Writable<Array>;

const createStoreArray = () => {
    const { subscribe, set, update } = writable<Array>([]);

    return {
        subscribe, set, update,
        push: (value) => update(list => [...list, value]),
        remove: (value) => update(list => {
            let idx = list.indexOf(value);
            list.splice(idx, 1);
            return list;
        }),
        reset: () => set([])
    }
}

export const setAnimations = () => {
    const animations = createStoreArray<Animations>();
    setContext('animations', animations);
}

export const getAnimations = () => {
    return getContext<Animations>('animations');
}