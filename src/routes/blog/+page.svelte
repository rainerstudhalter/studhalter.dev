<script lang="ts">
    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={m.route_blog_title()} />
<div id="content">
    <p>... coming soon</p>
</div>