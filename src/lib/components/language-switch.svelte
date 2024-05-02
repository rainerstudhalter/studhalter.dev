<script lang="ts">
    import { page } from "$app/stores";
	import { availableLanguageTags, languageTag } from "$paraglide/runtime.js"
	import { i18n } from '$lib/i18n'

    let lang = languageTag();
    import * as m from "$paraglide/messages";
</script>

<ul id="language-switch">
    {#each availableLanguageTags as targetlang}
        {@const active = targetlang === lang}
        <li class:active class={targetlang}>
            <a
                class:active class={targetlang}
                href={i18n.route($page.url.pathname)}
                hreflang={targetlang}
                title="{m.lang_label({}, { languageTag: targetlang })}"
                aria-current={targetlang === lang ? "page" : undefined}
            >
                {targetlang}
            </a>
        </li>
    {/each}
</ul>