import nodemailer from 'nodemailer';
import { SMTP_SERVER, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SENDER } from '$env/static/private';

export const mailer = nodemailer.createTransport({
    host: SMTP_SERVER,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
    logger: true,
}, {
    from: SMTP_SENDER,
});