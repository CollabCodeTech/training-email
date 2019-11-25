import emailBuilder from '../data-builder/email.builder';
import mail from '../../src/api/lib/mail.lib';

describe('#mail.lib', () => {
  describe('send()', () => {
    it('return should status 200 when send email with have the params: to, subject and body', async () => {
      const email = emailBuilder.emailWithToSubjectBody();
      const msg = {
        ...email,
        mail_settings: {
          sandbox_mode: {
            enable: true
          }
        }
      };
      const res = await mail.send(msg);
      const { statusCode: status } = res[0];

      expect(status).toEqual(200);
    });
  });
});
