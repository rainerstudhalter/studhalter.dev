<script lang="ts">
    import { page } from "$app/stores";
    
	import { i18n } from '$lib/i18n'
    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';

    const routes = [
        //{id: 'home', path: '/',},
        {
            id: 'about', path: '/about',
            children: [
                {id: 'resume', path: '/resume', icon: 'icon-pepicons-pencil-cv', linkClasses: 'text-link-spanned icon-before'},
            ]
        },
        
        //{id: 'projects', path: '/projects',},
        {id: 'support', path: '/support',},
        // {id: 'blog', path: '/blog',},

        // {
        //     id: 'contact', path: '/contact',
        //     children: [
        //         {id: 'github', path: 'https://github.com/rainerstudhalter', icon: 'icon-logos-github-icon', linkClasses: 'icon-link xl:hidden', text: 'Github', title: 'Github'},
        //         {id: 'linkedin', path: 'https://www.linkedin.com/in/rainer-studhalter-633a45258/', icon: 'icon-logos-linkedin-icon', linkClasses: 'icon-link xl:hidden', text: 'LinkedIn', title: 'LinkedIn'},
        //     ]
        // },
    ];
</script>

<nav id="navigation">
    <div class="title" on:click={() => $showNav = false}>Navigation</div>
    <ul>
        {#each routes as {id, path, children}}
            {@const pathname = i18n.route(path)}
            {@const active = pathname == $page.url.pathname}
            <li class={id} class:active>
                <a class={id} class:active href={pathname} on:click={() => $showNav = false}>
                    <span>{m['route_' + id + '_title']()}</span>
                </a>
                {#if children}
                    <ul>
                        {#each children as {id, path, icon, linkClasses, text, title}}
                            {@const internal = path.startsWith('/')}
                            {@const pathname = internal ? i18n.route(path) : path}
                            {@const active = pathname == $page.url.pathname}
                            <li class={id} class:active>
                                <a class="{id} {linkClasses}" class:active href={pathname} title={title} on:click={() => $showNav = internal ? false : $showNav}>
                                    {#if icon}<span class="icon {icon}"></span>{/if}
                                    <span class="text">{text ?? m['route_' + id + '_title']()}</span>
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>