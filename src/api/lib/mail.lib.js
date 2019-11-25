import sendgridMail from '@sendgrid/mail';

const { SENDGRID_API_KEY } = process.env;
sendgridMail.setApiKey(SENDGRID_API_KEY);

function send(email) {
  return sendgridMail.send({ from: 'gueio@collabcode.tech', ...email });
}

export default { send };
