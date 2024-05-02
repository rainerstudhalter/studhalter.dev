<script lang="ts">
    import { getAnimations } from './context';

    export let show = false;
    export let id = undefined;
    export let svg = undefined;
    export let paths = undefined;
    export let draw = false;
    const animations = getAnimations();
</script>

<svelte:options accessors={true} />

{#if show}
    <svg {id} bind:this={svg} xmlns="http://www.w3.org/2000/svg" width="900" height="840" version="1.1" viewBox="0 0 900 840">
        {#if draw}
            <defs>
                {#each Object.entries(paths) as [path_id, path], index}
                    <linearGradient id="{id}Gradient_{path_id}">
                        {#if index % 2 == 0}
                            <stop offset="0" class="gradient-color">
                                <animate attributeName="offset" fill="freeze" from="0" to="1" begin="{path.begin}ms" dur="{path.dur}ms"></animate>
                            </stop>
                            <stop offset="0" stop-color="transparent">
                                <animate attributeName="offset" fill="freeze" from="0" to="1" begin="{path.begin}ms" dur="{path.dur}ms"></animate>
                            </stop>
                        {:else}
                            <stop offset="1" stop-color="transparent">
                                <animate attributeName="offset" fill="freeze" from="1" to="0" begin="{path.begin}ms" dur="{path.dur}ms"></animate>
                            </stop>
                            <stop offset="1" class="gradient-color">
                                <animate attributeName="offset" fill="freeze" from="1" to="0" begin="{path.begin}ms" dur="{path.dur}ms"></animate>
                            </stop>
                        {/if}
                    </linearGradient>
                {/each}
            </defs>
        {/if}
        <g id="{id}-paths">
            {#each Object.entries(paths) as [path_id, path], index}
                <path id="{path_id}" d={path.d} class="{draw ? '' : 'fill-color'}" style="{draw ? 'fill:url(#' + id +  'Gradient_' + path_id + '); stroke:none' : ''}" />
            {/each}
        </g>
        {#each $animations as animation}
            {#each Object.entries(animation.to) as [path_id, path], index}
                <animate href="#{path_id}" attributeName="d" from="{animation.from[path_id] ? animation.from[path_id].d : ''}" to="{animation.to[path_id].d}" begin="{animation.begin}ms" dur="{animation.duration}ms" fill="freeze" />
            {/each}
        {/each}
    </svg>
{/if}