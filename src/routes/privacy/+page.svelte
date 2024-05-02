<script lang="ts">
    import { languageTag } from "$paraglide/runtime";
    import { i18n } from "$lib/i18n";
    import * as m from "$paraglide/messages";
    let lang = languageTag();

    import operator from '$lib/operator.json';
    import { showNav } from '$lib/stores.ts';
    $showNav = false;

    import Headline from '$lib/components/headline.svelte';
</script>

<Headline title={m.route_privacy_title()} />
<div id="content">
    {#if lang == 'de' }
        <section id="privacy-intro">
            <p><strong>Datenschutzerklärung von Rainer Studhalter</strong></p>
            <p>Version vom 2024-04-18</p>
            <p>In dieser Datenschutzerklärung erläutere ich, wie ich Personendaten erhebe und bearbeite. Unter Personendaten werden alle Angaben verstanden, die sich auf eine bestimmte oder bestimmtbare Person beziehen.</p>
            <p>Wenn Sie mir Personendaten anderer Personen (zB Familienmitglieder, Arbeitskollegen, etc.) übermitteln, stellen Sie bitte sicher, dass diese Kenntnis von dieser Datenschutzerklärung haben und teilen Sie mir deren Personendaten nur mit, wenn Sie dazu berechtigt und diese Daten korrekt sind.</p>
            <p>Diese Datenschutzerklärung ist auf die Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO), das Schweizer Datenschutzgesetz (DSG) und das revidierte Schweizer Datenschutzgesetz (revDSG) ausgelegt. Ob und inwieweit diese Gesetze anwendbar sind, hängt jedoch vom Einzelfall ab.</p>
        </section>
        <section id="privacy-officer">
            <h2>1. Verantwortung</h2>
            <p>Verantwortlich für die Datenbearbeitungen, die ich hier beschreibe, bin ich selbst. Für datenschutzrechtliche Anliegen, können Sie mir diese mittels folgender Kontaktdaten mitteilen:</p>
            <table>
                <tr class="name">
                    <td class="label">Name</td>
                    <td class="value">{operator.name}</td>
                </tr>
                <tr class="address">
                    <td class="label">Adresse</td>
                    <td class="value">
                        {operator.street}<br>
                        {operator.zip} {operator.city}<br>
                        {operator.country[lang]}
                    </td>
                </tr>
                <tr class="email">
                    <td class="label">E-Mail</td>
                    <td class="value"><a href="mailto:{operator.privacy_email}">{operator.privacy_email}</a></td>
                </tr>
                <tr class="contact">
                    <td class="label">Kontaktformular</td>
                    <td class="value"><a href="{i18n.route('/contact')}">{operator.url}{i18n.route('/contact')}</a></td>
                </tr>
            </table>
        </section>
        <section id="privacy-source">
            <h2>2. Erhebung und Bearbeitung von Personendaten</h2>
            <p>Ich bearbeite hauptsächlich Personendaten, welche ich im Rahmen meiner Geschäftsbeziehungen mit Kunden und Geschäftspartnern erhalte, sowohl von diesen als auch weiteren daran beteiligten Personen, oder die ich beim Betrieb meiner Webseite, Apps und weiteren Anwendungen von deren Nutzern erhebe.</p>
            <p>Soweit dies erlaubt ist, entnehme ich auch öffentlich zugänglichen Quellen (z.B. Betreibungsregister, Grundbücher, Handelsregister, Presse, Internet) gewisse Daten, oder erhalte solche Daten von Behörden und sonstigen Dritten.</p>
            <p>Nebst den Daten von Ihnen, die Sie mir direkt geben, umfassen die Kategorien von Personendaten, die ich von Dritten über Sie erhalte, insbesondere Angaben aus öffentlichen Registern, Angaben, die ich im Zusammenhang mit behördlichen und gerichtlichen Verfahren erfahre, Angaben im Zusammenhang mit ihren beruflichen Funktionen und Aktivitäten (damit ich z.B. mit Ihrer Hilfe Geschäfte mit Ihrem Arbeitgeber abschliessen und abwickeln kann), Angaben über Sie in Korrespondenz und Besprechungen mit Dritten, Bonitätsauskünfte (soweit ich mit Ihnen persönlich Geschäfte abwickle), Angaben über Sie, die mir Personen aus Ihrem Umfeld (Familie, Berater, Rechtsvertreter, etc.) geben, damit ich Verträge mit Ihnen oder unter Einbezug von Ihnen abschliessen oder abwickeln kann (z.B. Referenzen, Ihre Adresse für Lieferungen, Vollmachten, Angaben zur Einhaltung gesetzlicher Vorgaben wie etwa der Geldwäschereibekämpfung und Exportrestriktionen, Angaben von Banken, Versicherungen, Vertriebs- und anderen Vertragspartnern von mir zur Inanspruchnahme oder Erbringung von Leistungen durch Sie (z.B. erfolgte Zahlungen, erfolgte Käufe)), Angaben aus Medien und Internet zu Ihrer Person (soweit dies im konkreten Fall angezeigt ist, z.B. im Rahmen einer Bewerbung, Presseschau, Marketing/Verkauf, etc.), Ihre Adressen und ggf. Interessen und weitere soziodemographische Daten (für Marketing), sowie Daten im Zusammenhang mit der Benutzung der Website, siehe Punkt 4.</p>
        </section>
        <section id="privacy-purpose">
            <h2>3. Zwecke der Datenbearbeitung und Rechtsgrundlagen</h2>
            <p>Ich verwende die von mir erhobenen Personendaten in erster Linie, um Verträge mit Kunden und Geschäftspartnern abzuschliessen und abzuwickeln, insbesondere zur Erbringung von Dienstleistungen gegenüber meinen Kunden, gegebenfalls aber auch zum Einkauf von Produkten und Dienstleistungen von Geschäftspartnern. Wenn Sie für einen solchen Kunden oder Geschäftspartner tätig sind, können Sie in dieser Funktion mit Ihren Personendaten ebenfalls betroffen sein.</p>
            <p>Darüber hinaus bearbeite ich Personendaten von Ihnen und weiteren Personen, soweit erlaubt und es mir als angezeigt erscheint, auch für folgende Zwecke, an denen ich (und zuweilen auch Dritte) ein dem Zweck entsprechendes berechtigtes Interesse haben:</p>
            <ul class="list">
                <li>Angebot und Weiterentwicklung meiner Angebote, Dienstleistungen und Websites, Apps und weiteren Plattformen, auf welchen ich präsent bin</li>
                <li>Kommunikation mit Dritten und Bearbeitung derer Anfragen</li>
                <li>Prüfung und Optimierung von Verfahren zur Bedarfsanalyse zwecks direkter Kundenansprache sowie Erhebung von Personendaten aus öffentlich zugänglichen Quellen zwecks Kundenakquisition</li>
                <li>Werbung und Marketing (einschliesslich Durchführung von Anlässen), soweit Sie der Nutzung Ihrer Daten nicht widersprochen haben. Wenn ich Ihnen als bestehender Kunde von mir Werbung zukommen lasse, können Sie dem jederzeit widersprechen.</li>
                <li>Markt- und Meinungsforschung, Medienbeobachtung</li>
                <li>Geltendmachung rechtlicher Ansprüche und Verteidigung in Zusammenhang mit rechtlichen Streitigkeiten und behördlichen Verfahren</li>
                <li>Verhinderung und Aufklärung von Straftaten und sonstigem Fehlverhalten (z.B. Durchführung interner Untersuchungen, Datenanalysen zur Betrugsbekämpfung)</li>
                <li>Gewährleistung meines Betriebs, insbesondere der IT, meiner Websites, Apps und weiteren Plattformen</li>
            </ul>
            <p>Soweit Sie mir eine Einwilligung zur Bearbeitung Ihrer Personendaten für bestimmte Zwecke erteilt haben (z.B. bei Ihrer Anmeldung zum Erhalt von Newslettern), bearbeite ich diese im Rahmen und gestützt auf diese Einwilligung, soweit ich keine andere Rechtsgrundlage habe und ich eine solche benötige. Eine erteilte Bewilligung kann jederzeit widerrufen werden, was jedoch keine Auswirkung auf bereits erfolgte Datenbearbeitungen hat.</p>
        </section>
        <section>
            <h2>4. Daten im Zusammenhang mit der Nutzung meiner Webseite</h2>
            <p>Wenn Sie auf meine Website zugreifen, d.h., selbst wenn Sie nicht aktiv Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, Ihre IP-Adresse, Referrer-URL, Datum und Uhrzeit des Zugriffs und ähnliches.</p>
            <p>Sie werden insbesondere zu folgenden Zwecken bearbeitet:</p>
            <ul class="list">
                <li>Sicherstellung einer reibungslosen Nutzung meiner Website</li>
                <li>Sicherstellung und Auswertung der Systemsicherheit und -stabilität, insbesondere zur Missbrauchserkennung</li>
                <li>Zur optimalen Darstellung und Optimierung meiner Website</li>
                <li>Zur statistischen Auswertung der Zugriffszahlen</li>
            </ul>
            <p>Diese Daten werden ebenfalls in den Logfiles meines Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen Personendaten des Nutzers findet nicht statt. Ich verwende Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Allerdings behalte ich mir vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>
            <section>
                <h3>4.1. Cookies</h3>
                <p>Ich verwende keine Cookies auf meiner Webseite.</p>
            </section>
            <section>
                <h3>4.2. Trackingtechniken</h3>
                <p>Ich verwende keine Trackingtechniken auf meiner Webseite.</p>
            </section>
        </section>
        <section>
            <h2>5. Datenweitergabe und Datenübermittlung ins Ausland</h2>
            <p>Ich gebe Personendaten im Rahmen meiner geschäftlichen Aktivitäten, soweit erlaubt und es mir als angezeigt erscheint, auch Dritten bekannt. Dabei geht es insbesondere um folgende Stellen:</p>
            <ul class="list">
                <li>Dienstleister, Händler, Lieferanten und sonstige Geschäftspartner</li>
                <li>Kunden</li>
                <li>in- und ausländische Behörden, Amtsstellen oder Gerichten</li>
                <li>Medien</li>
                <li>Öffentlichkeit, einschliesslich Besuchern meiner Webseiten und Präsenzen in sozialen Medien</li>
                <li>Mitbewerber, Branchenorganisationen, Verbände, Organisationen und weitere Gremien</li>
                <li>anderen Parteien in möglichen oder tatsächlichen Rechtsverfahren</li>
            </ul>
            <p>alle gemeinsam <strong>Empfänger</strong>.</p>
            <p>Diese Empfänger befinden sich hauptsächlich in der Schweiz, können aber auch im Europäischen Wirtschaftsraum (EWR) sein, im Ausnahmefall aber potentiell in jedem Land der Welt.</p>
            <p>Befindet sich ein Empfänger in einem Land ohne angemessenen gesetzlichen Datenschutz, verpflichte ich den Empfänger vertraglich zur Einhaltung des anwendbaren Datenschutzes, soweit er nicht bereits einem gesetzlich anerkannten Regelwerk zur Sicherstellung des Datenschutzes unterliegt und ich mich nicht auf eine Ausnahmebestimmung stützen kann. Dazu verwende ich die revidierten Standardvertragsklauseln der Europäischen Kommission, die hier: <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?</a> abrufbar sind. Eine Ausnahme kann namentlich bei Rechtsverfahren im Ausland gelten, aber auch in Fällen überwiegender öffentlicher Interessen oder wenn eine Vertragsabwicklung eine solche Bekanntgabe erfordert, wenn Sie eingewilligt haben oder wenn es sich um von Ihnen allgemein zugänglich gemachte Daten handelt, deren Bearbeitung Sie nicht widersprochen haben.</p>
        </section>
        <section>
            <h2>6. Dauer der Aufbewahrung von Personendaten</h2>
            <p>Ich verarbeite und speichere Ihre Personendaten, solange es für die Erfüllung meiner vertraglichen und gesetzlichen Pflichten oder sonst die mit der Bearbeitung verfolgten Zwecke erforderlich ist, d.h. also zum Beispiel für die Dauer der gesamten Geschäftsbeziehung (von der Anbahnung, Abwicklung bis zur Beendigung eines Vertrags) sowie darüber hinaus gemäss den gesetzlichen Aufbewahrungs- und Dokumentationspflichten. Dabei ist es möglich, dass Personendaten für die Zeit aufbewahrt werden, in der Ansprüche gegen mich geltend gemacht werden können und soweit ich anderweitig gesetzlich dazu verpflichtet bin oder berechtigte Geschäftsinteressen dies erfordern (z.B. für Beweis- und Dokumentationszwecke). Sobald Ihre Personendaten für die oben genannten Zwecke nicht mehr erforderlich sind, werden sie grundsätzlich und soweit möglich gelöscht oder anonymisiert.</p>
        </section>
        <section>
            <h2>7. Datensicherheit</h2>
            <p>Ich treffe angemessene technische und organisatorische Sicherheitsvorkehrungen zum Schutz Ihrer Personendaten vor unberechtigtem Zugriff und Missbrauch, wie etwa IT- und Netzwerksicherheitslösungen, Zugangskontrollen und -beschränkungen, Verschlüsselung von Datenträgern und Übermittlungen.</p>
        </section>
        <section>
            <h2>8. Bereitstellung von Personendaten</h2>
            <p>Im Rahmen unserer Geschäftsbeziehung ist es unerlässlich, diejenigen Personendaten bereitzustellen, welche für die Aufnahme und Durchführung einer Geschäftsbeziehung und der Erfüllung der damit verbundenen vertraglichen Pflichten erforderlich sind. Eine gesetzliche Pflicht, mir Daten bereitzustellen, haben Sie in der Regel nicht. Ohne diese Daten werde ich jedoch meist nicht in der Lage sein, einen Vertrag mit Ihnen (oder der Stelle oder Person, die Sie vertreten) zu schliessen oder diesen abzuwickeln.</p>
        </section>
        <section>
            <h2>9. Ihre Rechte im Bezug auf Ihre Personendaten</h2>
            <p>Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts und soweit darin vorgesehen das Recht auf Auskunft, Berichtigung und Löschung Ihrer Personendaten, das Recht auf Einschränkung der Datenbearbeitung und sonst dem Widerspruch gegen meine Datenbearbeitungen, sowie auf Herausgabe gewisser Personendaten zwecks Übertragung an eine andere Stelle (sog. Datenportabilität). Ich behalte mir vor, meinerseits die gesetzlich vorgesehenen Einschränkungen geltend zu machen, etwa wenn ich zur Aufbewahrung oder Bearbeitung gewisser Daten verpflichtet bin, daran ein überwiegendes Interesse habe (soweit ich mich darauf berufen darf) oder sie für die Geltendmachung von Ansprüchen benötige. Falls für Sie Kosten anfallen, werde ich Sie vorab informieren. Eine von Ihnen erteilte Einwilligung zur Datenbearbeitung können Sie jederzeit widerrufen. Beachten Sie, dass die Ausübung dieser Rechte im Konflikt zu vertraglichen Abmachungen stehen kann und dies Folgen wie z.B. die vorzeitige Vertragsauflösung oder weitere Kosten haben kann. Ich werdee Sie diesfalls vorgängig informieren, wo dies nicht bereits vertraglich geregelt ist.</p>
            <p>Die Ausübung solcher Rechte setzt in der Regel voraus, dass Sie Ihre Identität eindeutig nachweisen (z.B. durch eine Ausweiskopie, wo Ihre Identität sonst nicht klar ist bzw. verifiziert werden kann). Zur Geltendmachung Ihrer Rechte können Sie mich unter oben genannter Adresse kontaktieren.</p>
            <p>Jede betroffene Person hat überdies das Recht, ihre Ansprüche gerichtlich durchzusetzen oder bei der zuständigen Datenschutzbehörde eine Beschwerde einzureichen. Die zuständige Datenschutzbehörde der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (<a href="https://www.edoeb.admin.ch">https://www.edoeb.admin.ch</a>).</p>
        </section>
        <section>
            <h2>10. Änderungen dieser Datenschutzerklärung</h2>
            <p>Ich kann diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf meiner Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werde ich Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.</p>
        </section>
    {:else if lang == 'en' }
        <section id="privacy-intro">
            <p><strong>Data Protection Statement of Rainer Studhalter</strong></p>
            <p>Version effective as of 2024-04-18</p>
            <p>With this Data Protection Statement I describe how I collect and process personal data. The term "personal data" in this Data Protection Statement to shall mean any information that identifies, or could reasonably be used to identify any person.</p>
            <p>If you provide me with personal data of other people (e.g. family members, work colleagues, etc.), please ensure that they are aware of this Data Protection Statement and only provide me with their data if you are authorized to do so and this data is correct.</p>
            <p>This Privacy Notice is aligned with the EU General Data Protection Regulation («GDPR»), the Swiss Data Protection Act («DPA») and the revised Swiss Data Protection («revDPA»). However, the application of these laws depends on each individual case.</p>
        </section>
        <section id="privacy-officer">
            <h2>1. Responsibility</h2>
            <p>I am responsible for the data processing that I describe here. You can notify me of any data protection related concerns, using the following contact details:</p>
            <table>
                <tr class="name">
                    <td class="label">Name</td>
                    <td class="value">{operator.name}</td>
                </tr>
                <tr class="address">
                    <td class="label">Address</td>
                    <td class="value">
                        {operator.street}<br>
                        {operator.zip} {operator.city}<br>
                        {operator.country[lang]}
                    </td>
                </tr>
                <tr class="email">
                    <td class="label">E-Mail</td>
                    <td class="value"><a href="mailto:{operator.privacy_email}">{operator.privacy_email}</a></td>
                </tr>
                <tr class="contact">
                    <td class="label">Contact Form</td>
                    <td class="value"><a href="{i18n.route('/contact')}">{operator.url}{i18n.route('/contact')}</a></td>
                </tr>
            </table>
        </section>
        <section id="privacy-source">
            <h2>2. Collection and Processing of Personal Data</h2>
            <p>I primarily process personal data that I receive as part of my business relationships with customers and business partners, both from these and other people involved, or that I collect from users when operating my website, apps and other applications.</p>
            <p>Where permitted, I also obtain certain data from publicly accessible sources (e.g. debt collection registers, land registers, commercial registers, press, internet) or receive such data from authorities and other third parties.</p>
            <p>Apart from data you provided to me directly, the categories of data i receive about you from third parties include, but are not limited to, information from public registers, data received in connection with administrative or court proceedings, information in connection with your professional role and activities (e.g., in order to conclude and carry out contracts with your employer), information about you in correspondence and discussions with third parties, credit rating information (if i conduct business activities with you personally), information about you given to me by individuals associated with you (family, consultants, legal representatives, etc.) in order to conclude or process contracts with you or with your involvement (e.g. references, your delivery-address, powers of attorney), information regarding legal regulations such as anti-money laundering and export restrictions, bank details, information regarding insurances, my distributors and other business partners for the purpose of ordering or delivering services to you or by you (e.g., payments made, previous purchases), information about you found in the media or internet (as far as this is indicated in the specific case, e.g. in connection with job applications, media reviews, marketing/sales, etc.), your addresses and, if applicable, interests and other socio-demographic Data (for marketing), as well as data related to your use of my website, see point 4.</p>
        </section>
        <section id="privacy-purpose">
            <h2>3. Purpose of Data Processing and Legal Grounds</h2>
            <p>I primarily use collected personal data to conclude and process contracts with my clients and business partners, in particular to provide services to my clients, but also, if necessary, to purchase products and services from business partners. If you work for such a client or business partner, your personal data may also be affected in this capacity.</p>
            <p>In addition, I process personal data from you and other persons, to the extent permitted and deemed appropriate to me, also for the following purposes in which I (and sometimes third parties) have a legitimate interest corresponding to the purpose:</p>
            <ul class="list">
                <li>providing and developing my products, services and website, apps and other platforms, on which i am active</li>
                <li>communication with third parties and processing of their requests</li>
                <li>review and optimization of procedures regarding needs assessment for the purpose of direct client approach as well as obtaining personal data from publicly accessible sources for client acquisition</li>
                <li>Advertising and marketing (including the organization of events), unless you have objected to the use of your data. If I send you advertising as an existing client, you can object to this at any time.</li>
                <li>market and opinion research, media surveillance</li>
                <li>asserting legal claims and defense in legal disputes and official proceedings</li>
                <li>prevention and investigation of criminal offences and other misconduct (e.g. conducting internal investigations, data analysis to combat fraud)</li>
                <li>Ensuring my operations, especially IT, my website, apps and other platforms</li>
            </ul>
            <p>If you have given me your consent to process your personal data for specific purposes (e.g. when you register to receive newsletters), I will process it within the scope of and based on this consent, unless I have another legal basis, provided that i require one. Consent given can be withdrawn at any time, but this does not affect data processed prior to withdrawal.</p>
        </section>
        <section>
            <h2>4. Data related to the use of my website</h2>
            <p>When you access my website, even if you do not actively submit information, information of a general nature is automatically collected. These include the type of web browser, the operating system used, your IP address, referrer URL, date and time of access and similar.</p>
            <p>They are processed in particular for the following purposes:</p>
            <ul class="list">
                <li>Ensuring smooth usage of my website</li>
                <li>Ensuring and evaluating system security and stability, especially to detect misuse</li>
                <li>For the optimal display and optimization of my website</li>
                <li>For statistical analysis of access numbers</li>
            </ul>
            <p>This data is also stored in the log files of my system. Storage of this data together with other personal data of the user does not take place. I do not use your data to draw conclusions about your person. However, I reserve the right to subsequently check the server log files if there are concrete indications of illegal use.</p>
            <section>
                <h3>4.1. Cookies</h3>
                <p>I do not use cookies on my website.</p>
            </section>
            <section>
                <h3>4.2. Tracking techniques</h3>
                <p>I do not use tracking techniques on my website.</p>
            </section>
        </section>
        <section>
            <h2>5. Datatransfer and Transfer of Data Abroad</h2>
            <p>I also disclose personal data to third parties as part of my business activities, where permitted and deemed appropriate. This particularly concerns the following type of recipients:</p>
            <ul class="list">
                <li>service providers, dealers, suppliers and other business partners</li>
                <li>clients</li>
                <li>domestic and foreign authorities or courts</li>
                <li>the media</li>
                <li>the public, including users of my websites and social media</li>
                <li>competitors, industry organizations, associations, organizations and other bodies</li>
                <li>other parties in possible or pending legal proceedings</li>
            </ul>
            <p>together <strong>Recipients</strong>.</p>
            <p>These recipients are mainly located in Switzerland, but can also be in the European Economic Area (EEA), but in exceptional cases potentially in any country in the world.</p>
            <p>If a recipient is located in a country without adequate legal data protection, I contractually oblige the recipient to comply with the applicable data protection regulations, unless they are already subject to a legally recognized set of rules to ensure data protection and I cannot rely on an exception provision. To do this, I use the European Commission's revised standard contractual clauses, which are available here: <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?</a>. An exception may apply in particular in legal proceedings abroad, but also in cases of overriding public interests or if the execution of a contract requires such disclosure, if you have given your consent or if it concerns data that you have made generally accessible and the processing of which you have not objected to.</p>
        </section>
        <section>
            <h2>6. Retention Periods for your Personal Data</h2>
            <p>I process and retain your personal data as long as required for the performance of my contractual obligation and compliance with legal obligations or other purposes pursued with the processing, i.e. for the duration of the entire business relationship (from the initiation, during the performance of the contract until it is terminated) as well as beyond this duration in accordance  with legal retention and documentation obligations. Personal data may be retained for the period during which claims can be asserted against me or insofar as i am otherwise legally obliged to do so or if legitimate business interests require further retention (e.g., for evidence and documentation purposes). As soon as your personal data are no longer required for the above-mentioned purposes, they will be deleted or anonymized, to the extent possible.</p>
        </section>
        <section>
            <h2>7. Data Security</h2>
            <p>I have taken appropriate technical and organizational security measures to protect your personal data from unauthorized access and misuse such as IT and network security solutions, access controls and restrictions, encryption of data carriers and transmissions.</p>
        </section>
        <section>
            <h2>8. Provision of personal data</h2>
            <p>As part of our business relationship, it is essential to provide the personal data that is necessary for the establishment and implementation of a business relationship and the fulfillment of the associated contractual obligations. As a rule, you do not have a legal obligation to provide me with data. However, without this data, I will usually not be able to conclude or process a contract with you (or the entity or person you represent).</p>
        </section>
        <section>
            <h2>9. Your Rights</h2>
            <p>In accordance with and as far as provided by applicable law, you have the right to access, rectification and erasure of your personal data, the right to restriction of processing or to object to our data processing, as well as to receive certain personal data for transfer to another controller (data portability). Hower, i reserve the right to enforce statutory restrictions on my part, for example if i am obliged to retain or process certain data, have an overriding interest (insofar as i may invoke such interests) or need the data for asserting claims. If exercising certain rights will incur costs on you, i will notify you thereof in advance. You can revoke your consent to data processing at any time. Please further note that the exercise of these rights may be in conflict with contractual agreements and this may result in consequences such as premature contract termination or involve further costs. If this is the case, i will inform you in advance unless it has already been contractually agreed upon.</p>
            <p>The exercise of such rights generally requires that you provide clear proof of your identity (e.g. by providing a copy of your ID, where your identity is not evident otherwise or cannot be verified in another way). To assert your rights, you can use the contact information, provided in Section 1 above</p>
            <p>Every data subject also has the right to enforce their claims in court or to file a complaint with the responsible data protection authority. The responsible data protection authority in Switzerland is the Federal Data Protection and Information Commissioner (<a href="https://www.edoeb.admin.ch">https://www.edoeb.admin.ch</a>).</p>
        </section>
        <section>
            <h2>10. Amendments of this Data Protection Statement</h2>
            <p>I may amend this Data Protection Statement at any time without prior notice. The current version published on my website shall apply. If the Data Protection Statement is part of an agreement with you, i will notify you by e-mail or other appropriate means in case of an amendment.</p>
        </section>
    {/if}
</div>