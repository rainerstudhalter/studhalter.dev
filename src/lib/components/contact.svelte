<script lang="ts">
    import { page } from "$app/stores";
    import QRCode from "qrcode";
    import dayjs from "dayjs";

	import { languageTag } from "$paraglide/runtime.js"
	import { i18n } from '$lib/i18n'
    import * as m from "$paraglide/messages";
    let lang = languageTag();

    import operator from '$lib/operator.json';
    import { showNav } from '$lib/stores.ts';

    

    let qrcodeURL;
    $: page_info_url = $page.data.type == 'logo' ? operator.url : operator.url + $page.url.pathname;
    $: if (page_info_url) {
        QRCode.toDataURL(page_info_url, { errorCorrectionLevel: 'H', scale: 3, margin: 0 })
            .then(url => {
                qrcodeURL = url;
            });
    }

    const vCardUrl = operator.url + operator.vCardPath
    let qrcodevCardUrl;
    QRCode.toDataURL(vCardUrl, { errorCorrectionLevel: 'H', scale: 8, margin: 0 })
        .then(url => {
            qrcodevCardUrl = url;
        });
    
    const timestamp = new Date().toISOString();

</script>

<div class="contact">

    <div class="write">
        <a class="write" href="{i18n.route('/contact')}" on:click={() => $showNav = false}>
            <span class="icon icon-material-symbols-edit-square-outline"></span>
            <span class="text">{m.links_contact()}</span>
        </a>
    </div>

    <div class="address">
        <address>
            <div class="name">{operator.name}</div>
            <div class="street">{operator.street}</div>
            <div class="locality">{operator.zip} {operator.city}</div>
            <div class="country">{operator.country[lang]}</div>
        </address>
    </div>

    <div class="links">
        <ul>
            <li class="phone">
                <a class="phone" href="tel:{operator.phone}">
                    <span class="icon icon-material-symbols-call-outline"></span>
                    <span class="text">{operator.phone}</span>
                </a>
            </li>

            <li class="email">
                <a class="email" href="mailto:{operator.email}">
                    <span class="icon icon-material-symbols-alternate-email-rounded"></span>
                    <span class="text">{operator.email}</span>
                </a>
            </li>
            <li class="url">
                <a class="url" href="{operator.url}">
                    <span class="text">{operator.www}</span>
                </a>
            </li>
            
            {#each operator.links as {id, title, text, icon, url}}
                <li class="{id}">
                    <a class="{id}" href="{url}" title="{title}">
                        <span class="icon {icon}"></span>
                        <span class="text">{text}</span>
                    </a>
                </li>
            {/each}

            <!-- <li class="github">
                <a class="github" href="https://github.com/rainerstudhalter" title="GitHub">
                    <span class="icon icon-logos-github-icon"></span>
                    <span class="text">GitHub</span>
                </a>
            </li> -->
            
            <!-- <li><a class="rss" href="#" title="RSS Feed"><span class="icon icon-material-symbols-rss-feed-rounded"></span></a></li> -->
            <!-- <li><a class="mastodon" href="#" title="Mastodon"><span class="icon icon-logos-mastodon-icon"></span></a></li> -->
            
        </ul>
    </div>

    <div class="legal">
        <a class="privacy" href={i18n.route('/privacy')} on:click={() => $showNav = false}>
            <span class="icon icon-material-symbols-privacy-tip-outline-rounded"></span>
            <span class="text">{m.privacy_link()}</span>
        </a>
    </div>

    <div class="url-info">
        <a class="qrcode-url" href="{page_info_url}"><img src="{qrcodeURL}" alt="" /></a>
        <p class="description">{m.url_info_description()}</p>
        <p class="url"><a href="{page_info_url}">{page_info_url}</a></p>
        <time class="timestamp" datetime={timestamp}><span class="label">V:</span><span class="date">{dayjs(timestamp).format('YYYY-MM-DD')}</span><span class="time">{dayjs(timestamp).format('HH:MM')}</span></time>
    </div>

    <div class="business-card-slogan">
        <div class="title">Websites</div>
        <div class="slogan">that make you stand out</div>
        <a class="url" href="{operator.url}">{operator.www}</a>
    </div>

    <div class="vcard">
        <a class="qrcode-vcard-url" href="{vCardUrl}"><img src="{qrcodevCardUrl}" alt="" /></a>
        
    </div>

</div>