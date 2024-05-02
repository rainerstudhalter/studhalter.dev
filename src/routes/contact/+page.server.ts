export const prerender = false;

import { writeFileSync } from 'fs';
import { ulid } from "ulidx";
import { zfd } from 'zod-form-data';
import { fail, type Actions } from '@sveltejs/kit';
import { mailer } from '$lib/server/mailer';
import { SMTP_RECEIVER, MESSAGESFOLDER } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
        const formData = await request.formData();
        const formSchema = zfd.formData({
            message: zfd.text(),
            contactinfo: zfd.text(),
        });
        const result = formSchema.safeParse(formData);
        
        if (!result.success) {
            const data = {
                data: Object.fromEntries(formData),
                errors: result.error.flatten().fieldErrors
            }
            return fail(400, data);
        }

        const message_id = ulid();
        const message_date = new Date().toISOString();
        const message_path = `${MESSAGESFOLDER}/${message_id}.txt`;
        const message_text = `### Message\n${result.data.message}\n\n### Contactinfo\n${result.data.contactinfo}\n\n### Timestamp\n${message_date}\n\n### IP\n${getClientAddress()}\n\n### Message ID\n${message_id}`;
        writeFileSync(message_path, message_text);
        
        mailer.sendMail({
            to: SMTP_RECEIVER,
            subject: `Message from studhalter.dev`,
            text: message_text,
        });
        
        return result;
    }
};