<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '$lib/styles/app.scss';

	import { dev } from "$app/environment";
	import { page } from "$app/stores";
	
	// i18n
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { languageTag } from "$paraglide/runtime";
	import { i18n } from '$lib/i18n';
	let lang = languageTag();

	// load i18n messages
	import * as m from "$paraglide/messages";

	// get operator data
	import operator from '$lib/operator.json';

	// stores
	import { showNav } from '$lib/stores.ts';
	showNav.set(false);

	// layout components
	import Contact from '$lib/components/contact.svelte';
	import DevBreakpoints from '$lib/components/dev-breakpoints.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import RainerHead from '$lib/components/rainer/head/head.svelte';
	import Utilities from '$lib/components/utilities.svelte';

	let rainerHead;

</script>

<svelte:head>
	<ParaglideJS {i18n}>
		<title>{m['route_' + $page.data.id + '_title'] ? `${m['route_' + $page.data.id + '_title']()} - ${operator.name}` : `${operator.name} - ${operator.services[lang]}`}</title>
		<meta name="description" content="{m['route_' + $page.data.id + '_description'] ? m['route_' + $page.data.id + '_description']() : m.root_description()}" />
		<meta name="keywords" content="{m['route_' + $page.data.id + '_keywords'] ? m['route_' + $page.data.id + '_keywords']() : m.root_keywords()}" />
	</ParaglideJS>
</svelte:head>

<ParaglideJS {i18n}>
	<div
		id="page"
		class:show-nav={$showNav}
		class="page-{$page.data.id ?? ($page.error ? 'error' : 'unknown')} page-type-{$page.data.type ?? 'content'} page-lang-{lang} {$showNav ? 'show-nav' : 'hide-nav'}"
		on:click={(rainerHead.trackMouseClick)}
	>	
		<Utilities />
		<header id="header">
			<div id="logo-container">
				<RainerHead bind:this={rainerHead} id="logo" tellstory={dev ? false : true} draw={dev ? false : true} />
			</div>
			<div id="intro">
				<h1 id="name">Rainer Studhalter</h1>
				<p class="services-intro">{m.header_intro_services_intro()}</p>
				<ul class="services">
					<li class="websites">{m.service_websites()}</li>
					<li class="webapps">{m.service_webapps()}</li>
					<li class="systems">{m.service_systems()}</li>
				</ul>
			</div>
			<Contact />
		</header>
		<main id="main">
			<Navigation />
			<div id="page-content">
				<slot />
			</div>
		</main>
		<footer id="footer">
			<Contact />
		</footer>
	</div>

	<DevBreakpoints />
</ParaglideJS>