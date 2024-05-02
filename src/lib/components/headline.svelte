<script lang="ts">
    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    export let title = undefined;
</script>

<div id="headline">
    <h1 class="title" on:click={() => $showNav = !$showNav}>{title}</h1>
    <slot name="append"></slot>
</div>