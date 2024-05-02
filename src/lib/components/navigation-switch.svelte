<script lang="ts">
    import { showNav } from '$lib/stores.ts';
</script>

<a href="#navigation" id="navigation-switch" on:click|preventDefault={() => $showNav = !$showNav}>
    <span class="{$showNav ? 'icon icon-material-symbols-close-rounded' : 'icon icon-fa6-solid-bars'}"></span>
</a>