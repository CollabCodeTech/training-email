/* eslint-disable import/prefer-default-export */
import mail from '../../lib/mail.lib';

export async function sendUserConfirmationEmail(
  { body: { email: to, sandbox } },
  res
) {
  try {
    const email = {
      to,
      subject: 'teste do teste',
      html: 'Texto com um link <a href="#">Link</a>'
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
