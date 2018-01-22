import { appendFile } from 'fs';

const SMS_LOGS = './logs/sms_log';
const EMAIL_LOGS = './logs/email_log';

export function notifyBySMS(mobile, message) {
    return new Promise(function (resolve, reject) {
        appendFile(SMS_LOGS, "SMS Sent to " + mobile + ". Message : " + message + "\n", function (err) {
            if (err) reject(err);
            else resolve();
        });
    });
}

export function notifyByEmail(email, message) {
    return new Promise(function (resolve, reject) {
        appendFile(EMAIL_LOGS, "Email Sent to " + email + ". Message : " + message + "\n", function (err) {
            if (err) reject(err);
            else resolve();
        });
    });
}