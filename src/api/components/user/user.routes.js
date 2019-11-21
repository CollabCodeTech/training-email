import { sendUserConfirmationEmail } from './user.controller';

function userRoutes(server) {
  server.post('/user/confirmation', sendUserConfirmationEmail);
}

export default userRoutes;
