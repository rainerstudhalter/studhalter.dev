<!-- <script lang="ts">
    import { onMount } from 'svelte';

    import * as m from "$paraglide/messages";

    import { modeCurrent, setInitialClassState, setModeUserPrefers, setModeCurrent, getModeOsPrefers } from '@skeletonlabs/skeleton';

    const toggle = () => {
        $modeCurrent = !$modeCurrent;
        setModeUserPrefers($modeCurrent);
        setModeCurrent($modeCurrent);
    }

    const keydown = (event) => {
        if (["Enter", "Space"].includes(event.code)) {
            event.preventDefault();
            event.currentTarget.click();
        }
    }

    onMount(() => {
        if (!("modeCurrent" in localStorage)) {
            setModeCurrent(getModeOsPrefers());
        }
    });
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>-->

<button id="light-switch">
    <span class="light-mode icon icon-material-symbols-sunny-outline-rounded" />
    <span class="dark-mode icon icon-material-symbols-dark-mode-outline-rounded"></span>
</button>