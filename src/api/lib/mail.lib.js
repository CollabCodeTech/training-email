import { config } from 'dotenv';
import sendgridMail from '@sendgrid/mail';

config();

const { SENDGRID_API_KEY } = process.env;
sendgridMail.setApiKey(SENDGRID_API_KEY);

function send(email, sandbox = false) {
  let msg = { from: 'gueio@collabcode.tech', ...email };

  if (sandbox) {
    msg = {
      ...msg,
      mail_settings: {
        sandbox_mode: {
          enable: true
        }
      }
    };
  }

  return sendgridMail.send(msg);
}

export default { send };
