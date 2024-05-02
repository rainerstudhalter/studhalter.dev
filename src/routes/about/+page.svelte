<script lang="ts">
	import { i18n } from '$lib/i18n';
    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    const projects_path = i18n.route('/projects');
    const resume_path = i18n.route('/resume');

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={m.route_about_title()}>
    <ul class="links" slot="append">
        <li class="resume">
            <a class="resume icon-before" href={resume_path}><span class="icon icon-pepicons-pencil-cv"></span><span class="text">{m.route_resume_title()}</span></a>
        </li>
    </ul>
</Headline>
<div id="content">
{@html m.about_fmhth3gqjru4480bu65dgl1o({ resume_path: resume_path })}
</div>