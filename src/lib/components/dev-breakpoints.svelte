<script lang="ts">
    import { dev } from '$app/environment';
</script>

{#if dev}
<div id="dev-breakpoints" class="fixed z-50 top-1/2 right-0 text-white">
    <div class="rounded-l-lg bg-black p-1 5xs:hidden">xx</div>
    <div class="rounded-l-lg bg-black p-1 hidden 5xs:max-4xs:block">5xs</div>
    <div class="rounded-l-lg bg-black p-1 hidden 4xs:max-3xs:block">4xs</div>
    <div class="rounded-l-lg bg-black p-1 hidden 3xs:max-2xs:block">3xs</div>
    <div class="rounded-l-lg bg-black p-1 hidden 2xs:max-xs:block">2xs</div>
    <div class="rounded-l-lg bg-slate-300 p-1 hidden xs:max-sm:block">xs</div>
    <div class="rounded-l-lg bg-gray-500 p-1 hidden sm:max-smd:block">sm</div>
    <div class="rounded-l-lg bg-gray-500 p-1 hidden smd:max-md:block">smd</div>
    <div class="rounded-l-lg bg-yellow-500 p-1 hidden md:max-mdl:block">md</div>
    <div class="rounded-l-lg bg-yellow-500 p-1 hidden mdl:max-lg:block">mdl</div>
    <div class="rounded-l-lg bg-red-500 p-1 hidden lg:max-xl:block">lg</div>
    <div class="rounded-l-lg bg-green-500 p-1 hidden xl:max-2xl:block">xl</div>
    <div class="rounded-l-lg bg-blue-500 p-1 hidden 2xl:max-3xl:block">2xl</div>
    <div class="rounded-l-lg bg-blue-900 p-1 hidden 3xl:block">3xl</div>
</div>
{/if}
