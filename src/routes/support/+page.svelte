<script lang="ts">
    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={m.route_support_title()} />
<div id="content">
    <p>I'm looking forward to help you out in a remote support session.</p>
    <p>You can download my preconfigured client software here:</p>
    <ul class="list">
        <li>
            <a href="https://support.studhalter.systems/download/studhaltersupport.exe">Windows</a>
        </li>
        <li>
            <a href="https://support.studhalter.systems/download/studhaltersupport-arm64.dmg">MacOS - arm64</a>
        </li>
        <li>
            <a href="https://support.studhalter.systems/download/studhaltersupport-x64.dmg">MacOS - x64</a>
        </li>
        <li>
            <a href="https://support.studhalter.systems/download/studhaltersupport.apk">Android</a>
        </li>
        <li>
            <a href="https://support.studhalter.systems/download/studhaltersupport-x86_64.deb">Linux Debian/Ubuntu - x64</a>
        </li>
    </ul>
    <p>Those are <a href="https://rustdesk.com/">RustDesk</a> clients, for which i am running a self-hosting installation.<br>RustDesk is an open source alternative to TeamViewer or AnyDesk, written primarly in <a href="https://www.rust-lang.org/">Rust</a>.</p>
</div>