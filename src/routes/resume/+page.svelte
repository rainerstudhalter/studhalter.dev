<script lang="ts">
    import { languageTag } from "$paraglide/runtime";
    import * as m from "$paraglide/messages";
    let lang = languageTag();

    import operator from '$lib/operator.json';
    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={m.route_resume_title()}>
    <ul class="links" slot="append">
        <li class="download">
            <a class="download icon-before" href="{operator.resumePdfPath[lang]}" data-no-translate><span class="icon icon-material-symbols-download-rounded"></span><span class="text">{m.resume_link_download_text()}</span></a>
        </li>
    </ul>
</Headline>

<div id="content">

    <section id="profile">
        <p>{m.resume_m4i8bhiodufueq5ehsvbg6sh()}</p>
        <p>{m.resume_pvvk1j5hcshjov4wbe49zov7()}</p>
        <!-- <p>Core competencies also include Javascript, Node.js, HTML, SCSS and administration of Webservers, Database servers, Mailservers, Fileservers, Monitoring servers with Apache, Nginx, PostgreSQL, MySQL, Postfix, Dovecot, Samba, Nextcloud, and Nagios/Icinga on Debian GNU/Linux.</p> -->
    </section>

    <section id="highlights">
        <h2 class="section-title">{m.resume_highlights_title()}</h2>
            <ul class="highlights list">
                <li>{m.resume_af257rwsjw8xp8js8oie7ihg()}</li>
                <li>{m.resume_tjrtumtp2euthpl5vwd1jbhn()}</li>
            </ul>
    </section>

    <section id="experience">
        <h2 class="section-title">{m.resume_experience_title()}</h2>

        <div class="item">
            <div class="header">
                <h3 class="name"><a class="no-text-link" href="https://artification.com/">Artification AG</a></h3>
                <div class="duration">
                    <span class="month">10</span>/<span class="year">2009</span> - <span class="month">05</span>/<span class="year">2024</span>
                </div>
            </div>
            <div class="description">
                <span class="location">in Herzogenbuchsee, {m.switzerland()}</span>, {m.resume_artification_description()}
            </div>
            <ul class="highlights list">
                <li>{m.resume_r0et1a7i73qom161lw1rbiir()}</li>
                <!-- <li>Gained skills in SvelteKit by rebuilding a client's prototype webapp, multiplicating their ability for in-store consultations.</li> -->
                <li>{m.resume_u7t9ej9ssc2387jq4jy3sqop()}</li>
                <li>{m.resume_n22dniql53a84nr2u5uvv4ox()}</li>
            </ul>
        </div>

        <div class="item">
            <div class="header">
                <h3 class="name">Lex Marketing GmbH</h3>
                <div class="duration">
                    <span class="month">11</span>/<span class="year">2008</span> - <span class="month">09</span>/<span class="year">2009</span>
                </div>
            </div>
            <div class="description">
                <span class="location">in Wels, {m.austria()}</span>, {m.resume_lex_description()}
            </div>
            <ul class="highlights list">
                <li>{m.resume_gcc65y5mo6os7p6yc6zv8b92()}</li>
                <li>{m.resume_kd7csm4ekjgqpj9xg9q17lhv()}</li>
            </ul>
        </div>

        <div class="item">
            <div class="header">
                <h3 class="name"><a class="no-text-link" href="https://atikon.com">Atikon EDV &amp; Marketing GmbH</a></h3>
                <div class="duration">
                    <span class="month">12</span>/<span class="year">2005</span> - <span class="month">10</span>/<span class="year">2008</span>
                </div>
            </div>
            <div class="description">
                <span class="location">in Linz, {m.austria()}</span>, {m.resume_atikon_description()}
            </div>
            <ul class="highlights list">
                <li>{m.resume_wd87vok7h77pws0so7je1278()}</li>
                <li>{m.resume_lb8k9mjl33lia6ysnbasgyr5()}</li>
                <li>{m.resume_tysi9x38382a312n00luiobv()}</li>
                <li>{m.resume_nylwvhtfox60bcdosd316a40()}</li>
                <li>{m.resume_ogxwpmmoqcjrxqavm98e8f6g()}</li>
            </ul>
        </div>

        <div class="item">
            <div class="header">
                <h3 class="name">{m.self_employed()}</h3>
                <div class="duration">
                    <span class="month">08</span>/<span class="year">1999</span> - <span class="month">05</span>/<span class="year">2005</span>
                </div>
            </div>
            <div class="description">
                <span class="location">in Linz, {m.austria()}</span>, {m.resume_self_employed_description()}
            </div>
            <ul class="highlights list">
                <li>{m.resume_eqf91qm6clj7yd7lxk75v2qw()}</li>
            </ul>
        </div>

    </section>

    <section id="personal">
        <h2 class="section-title">{m.resume_personal_title()}</h2>
        <div class="section-content">
            <ul class="list">
                <li class="born">{m.resume_born()} 1980</li>
                <li class="married">{m.resume_married()}</li>
                <li class="austrian">{m.resume_austrian()}</li>
            </ul>
            <ul class="list">
                <li class="residence">{m.resume_residence()}</li>
                <li class="driving-license">{m.resume_driving_license()}</li>
            </ul>
            <ul class="list">
                <li class="german">{m.resume_german()}/{m.resume_german_niveau()}</li>
                <li class="english">{m.resume_english()}/<a href="https://europa.eu/europass/{lang}/common-european-framework-reference-language-skills">{m.resume_english_niveau()}</a></li>
            </ul>
            <ul class="list">
                <li>{m.resume_gardening()}</li>
                <li>{m.resume_bodyweight_training()}</li>
                <li>{m.resume_bouldering()}</li>
            </ul>
        </div>
    </section>

</div>