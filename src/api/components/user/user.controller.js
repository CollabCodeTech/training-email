/* eslint-disable import/prefer-default-export */
import mail from '../../lib/mail.lib';

export async function sendUserConfirmationEmail({ body }, res) {
  try {
    const { email: to, link, sandbox } = body;
    const email = {
      to,
      subject: 'teste do teste',
      html: `
        Olá!<br> 
        Por favor, confirme sua conta da <b>CollabCode Training</b> clicando no link a seguir: <a href="${link}">${link}</a>
      `
    };

    const resMail = await mail.send(email, sandbox);
    const { statusCode: status } = resMail[0];

    if (status === 200 || status === 202) {
      res.status(200).send({ message: `Email enviado com sucesso para ${to}` });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
