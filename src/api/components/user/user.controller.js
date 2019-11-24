/* eslint-disable import/prefer-default-export */
import sendgridMail from '@sendgrid/mail';

export async function sendUserConfirmationEmail(req, res) {
  try {
    const { SENDGRID_API_KEY } = process.env;
    sendgridMail.setApiKey(SENDGRID_API_KEY);

    const email = {
      to: 'marco.bruno.br@gmail.com',
      from: 'gueio@collabcode.tech',
      subject: 'teste do teste',
      html: 'Texto com um link <a href="#">Link</a>'
    };

    await sendgridMail.send(email);

    res.status(200).send({ hello: 'world' });
  } catch (error) {
    res.status(500).send(error);
  }
}
