<script>
	import { page } from '$app/stores';
    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={`${m.route_error_title()} ${$page.status}`}></Headline>

<div id="content">
    {#if $page.status === 404}
        <p>{m.error_404_message()}</p>
    {:else}
        <p>{$page.error.message}</p>
    {/if}
</div>