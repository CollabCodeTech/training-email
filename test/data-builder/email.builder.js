import faker from 'faker';

const emailValid = () => faker.internet.email();
const subjectValid = () => faker.lorem.paragraph(5);
const contentValid = () => faker.lorem.text();

const emailWithToSubjectBody = () => ({
  to: emailValid(),
  subject: subjectValid(),
  html: contentValid()
});

export default {
  emailValid,
  subjectValid,
  contentValid,
  emailWithToSubjectBody
};
