<script lang="ts">
    import type { ActionData } from './$types';
    import { enhance } from '$app/forms';
    import { page } from "$app/stores";
    import { slide } from 'svelte/transition';

    import * as m from "$paraglide/messages";

    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';

    export let form: ActionData;
</script>


<Headline title={m.route_contact_title()} />

<div id="content">
    {#if form?.success}
        <div class="success" transition:slide>
            <p>{@html m.contact_sent_success()}</p>
        </div>
        <div class="review" transition:slide>
            <div class="field message">
                <p class="title">{m.contact_sent_review_message_title()}</p>
                <div class="content">{form?.data?.message ?? ''}</div>
                <!-- <div class="content">{@html form?.data?.message ? form.data.message.replace(/(?:\r\n|\r|\n)/g, '<br>') : ''}</div> -->
            </div>
            <div class="field contactinfo">
                <p class="title">{m.contact_sent_review_contactinfo_title()}</p>
                <div class="content">{form?.data?.contactinfo ?? ''}</div>
            </div>
        </div>
        <div class="post" transition:slide>
            <p>{m.contact_sent_post()}<br>
                <a href="{$page.url.pathname}">
                    <span class="icon icon-material-symbols-edit-square-outline"></span>
                    <span class="text">{m.contact_sent_post_link_text()}</span>
                </a>
            </p>
        </div>
    {/if}
    {#if ! form?.success}
        <form
            method="POST"
            use:enhance
            transition:slide
        >
            {#if form?.errors}
                <div class="error" transition:slide>
                    {#if form?.errors?.message}
                        <p>{m.contact_error_message()}</p>
                    {/if}
                    {#if form?.errors?.contactinfo}
                        <p>{m.contact_error_contactinfo()}</p>
                    {/if}
                </div>
            {/if}
            <textarea name="message" rows="5" placeholder="{m.contact_field_message_placeholder()}">{form?.data?.message ?? ''}</textarea>
            <input name="contactinfo" type="text" placeholder="{m.contact_field_contactinfo_placeholder()}" value={form?.data?.contactinfo ?? ''} />
            <button type="submit" id="sendcontact">
                <span class="icon icon-material-symbols-send-outline-rounded"></span>
                <span class="text">{m.contact_button_send_text()}</span>
            </button>
        </form>
    {/if}
</div>