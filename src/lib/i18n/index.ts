import { createI18n } from "@inlang/paraglide-sveltekit";
import * as runtime from "$paraglide/runtime";
import * as m from "$paraglide/messages";

export const i18n = createI18n(runtime, {
    prefixDefaultLanguage: 'always',
    pathnames: {
        '/about': m.route_about_path,
        '/contact': m.route_contact_path,
        '/privacy': m.route_privacy_path,
        '/projects': m.route_projects_path,
        '/resume': m.route_resume_path,
    },
});