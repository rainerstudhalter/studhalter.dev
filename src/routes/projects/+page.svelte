<script lang="ts">
    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={m.route_projects_title()} />
<div id="content">
    <section id="projects_websites">
        <h2>Websites</h2>
        <div class="project">
            <h3>Finn Sauna Oberwil</h3>
            <p class="description">4-person Sauna in Oberwil BL, with exclusive access and no other guests.</p>
            <p>This was a fun, no-budget, and test project as a special thanks to our landlord for his ongoing support over the years.</p>
            <ul>
                <li>Concept</li>
                <li>Layout</li>
                <li>Videoproduction</li>
                <li>360° Panorama Images of the premises</li>
            </ul>
            <ul class="tags">
                <li class="tag"><a href="https://kit.svelte.dev/">SvelteKit</a></li>
                <li class="tag"><a href="https://unocss.dev/">UnoCSS</a></li>
                <li class="tag"><a href="https://sasslang.com/">SASS</a></li>
                <li class="tag"><a href="https://www.marzipano.net/">Marzipano</a></li>
            </ul>
        </div>
    </section>
    <section id="projects_tools">
        <h2>Tools</h2>
        <div class="project">
            <div class="heaeder">
                <h3>studhalter-sveltekit-basetemplate</h3>
                <ul class="links">
                    <li class="github">
                        <a class="github" href="https://github.com/rainerstudhalter/studhalter-sveltekit-basetemplate">
                            <span class="icon icon-logos-github-icon"></span>
                            <span class="text">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
            <p>Multilingual SvelteKit Template with some opinionated defaults.</p>
            <ul class="tags">
                <li class="tag"><a href="https://kit.svelte.dev/">SvelteKit</a></li>
                <li class="tag"><a href="https://unocss.dev/">UnoCSS</a></li>
                <li class="tag"><a href="https://sasslang.com/">SASS</a></li>
                <li class="tag"><a href="https://inlang.com/">inlang</a></li>
            </ul>
        </div>
        <div class="project">
            <h3>svg-split-paths-cli</h3>
            <p>Node Script to convert an svg to path elements, split combined paths into seperate paths, and save them to a new svg file</p>
            <ul class="links">
                <li class="github">
                    <a class="github" href="https://github.com/rainerstudhalter/svg-split-paths-cli">
                        <span class="icon icon-logos-github-icon"></span>
                        <span class="text">GitHub</span>
                    </a>
                </li>
            </ul>
            <ul class="tags">
                <li class="tag"><a href="https://nodejs.org/">Node.js</a></li>
                <li class="tag"><a href="https://github.com/tj/commander.js">Commander.js</a></li>
                <li class="tag"><a href="https://github.com/elrumordelaluz/svgson">&lt;svg/son}</a></li>
            </ul>
        </div>
        <div class="project">
            <h3>svgpaths2js-cli</h3>
            <p>Node Script to convert an svg to path elements, optionally sorted by ids, and output them to a json, js, or ts file.</p>
            <ul class="links">
                <li class="github">
                    <a class="github" href="https://github.com/rainerstudhalter/svgpaths2js-cli">
                        <span class="icon icon-logos-github-icon"></span>
                        <span class="text">GitHub</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="project">
            <h3>svg-extract-paths-cli</h3>
            <p>Node script to extract svg paths by id and save them to new svg files.</p>
            <ul class="links">
                <li class="github">
                    <a class="github" href="https://github.com/rainerstudhalter/svg-extract-paths-cli">
                        <span class="icon icon-logos-github-icon"></span>
                        <span class="text">GitHub</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</div>