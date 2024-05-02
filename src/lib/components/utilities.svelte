<script lang="ts">
    import NavigationSwitch from '$lib/components/navigation-switch.svelte';
    import LightSwitch from '$lib/components/light-switch.svelte';
    import LanguageSwitch from '$lib/components/language-switch.svelte';
</script>

<div id="utilities">
    <ul>
        <li class="language-switch"><LanguageSwitch /></li>
        <li class="navigation-switch"><NavigationSwitch /></li>
        <!-- <li class="light-switch"><LightSwitch /></li> -->
    </ul>
</div>